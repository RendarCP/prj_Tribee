const express = require('express');
const router = express.Router();
const User = require("../models/user");

router.get('/login/:userId/:userPw', function(req, res){
    var sess = req.session;

    var userId = req.params.userId;
    var userPw = req.params.userPw;

    User.findOne({$and:[{userId: userId},{userPw: userPw}]}, function(err, user){
        if(err) res.send({errCode: -1, errMsg: 'database failure', err: err});
        if(!user){
            res.json({errCode: -1, errMsg: '아이디와 패스워드가 일치하지 않습니다.'});
        } else {
            sess.userId = user.userId;
            sess.userNm = user.userNm;
            //sess.userPw = user.userPw;
            //res.json({errCode: 1, errMsg: 'GET 로그인되었습니다.'});
            res.redirect('/');
        }
        console.log('user', user);
        console.log('session', sess);
    })
});

router.post('/api/login', function(req, res){
    var sess = req.session;

    var userId = req.body['userId'];
    var userPw = req.body['userPw'];
    
    User.findOne({$and:[{userId: userId},{userPw:userPw}]}, function(err, user){
        if(err) return res.send({errCode: -1, errMsg: 'database failure', err: err});
        if(!user){
            return res.json({errCode: -1, errMsg: '아이디와 패스워드가 일치하지 않습니다.'});
        } else {
            sess.userId = user.userId;
            sess.userNm = user.userNm;
            //sess.userPw = user.userPw;
            return res.json({errCode: 1, errMsg: '로그인되었습니다.'});
        }      
        console.log('user', user);
        console.log('session', sess);
    })
});

router.get('/api/logout', function(req, res){
    sess = req.session;
    if(sess.username){
        req.session.destroy(function(err){
            if(err){
                //console.log(err);
                return res.send({errCode: -1, errMsg: '로그아웃에 실파해였습니다.', err: err});
            }else{
                return res.json({errCode: 1, errMsg: '로그아웃되었습니다.'});
            }
        })
    }else{
        return res.json({errCode: -1, errMsg: '로그인된 사용자가 없습니다.'});
    }
});

module.exports = router;
