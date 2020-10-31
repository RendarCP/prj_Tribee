module.exports = function(app, User)
{
    // var userjsonDir = __dirname + '/../data/user.json';
    
    //회원ID 중복체크
    app.get('/api/user/checkUserId/:userId', function(req, res){

        var userId = req.params.userId;

        User.findOne({$and:[{userId: userId}]}, function(err, user){
            if(err) return res.send({errCode: -1, errMsg: 'database failure', err: err});
            if(user) return res.json({errCode: -1, errMsg: '해당 아이디가 존재합니다. 재입력해주세요.'});
            res.json({errCode:1, msg:'사용가능한 아이디입니다.', userId: req.params.userId});
        })
    });

    //회원정보리스트
    app.get('/api/user/getUsers', function (req, res) {
        
        User.find(function(err, users){
            if(err) return res.send({errCode: -1, errMsg: 'database failure', err: err});
            if(0 == users.length) return res.json({errCode: 1, errMsg: '사용자가 존재하지 않습니다.'});
            res.json(users);
        })
    });

    //회원정보
    app.post('/api/user/getUser', function(req, res){
        var userId = req.body.userId;
        var userPw = req.body.userPw;
        
        User.findOne({$and:[{userId: userId},{userPw:userPw}]}, function(err, user){
            if(err) return res.send({errCode: -1, errMsg: 'database failure', err: err});
            if(!user) return res.json({errCode: -1, errMsg: '사용자를 찾을 수 없습니다.'});

            var returnUser = new User();
            returnUser.userId = user.userId;
            returnUser.userNm = user.userNm;
            returnUser.birth = user.birth;
            returnUser.addr = user.addr;
            returnUser.phone = user.phone;
            returnUser.email = user.email;
            returnUser.image = user.image;
            res.json(returnUser);
        })

    });

    //회원가입
    app.post('/api/user/addUser', function(req, res){

        if(!req.body['userId']){
            return res.json({errCode: -1, errMsg: '아이디를 입력해주세요.'});
        } else if(!req.body['userPw']){
            return res.json({errCode: -1, errMsg: '비밀번호를 입력해주세요.'});
        } else if(!req.body['userNm']){
            return res.json({errCode: -1, errMsg: '이름을 입력해주세요.'});
        }

        var user = new User();
        user.userId = req.body.userId;
        user.userPw = req.body.userPw;
        user.userNm = req.body.userNm;
        user.birth = req.body.birth||'';
        user.addr = req.body.addr||'';
        user.phone = req.body.phone||'';
        user.email = req.body.email||'';
        user.image = req.body.image||'';
        
        user.save(function(err) {
            if(err) return res.send({errCode: -1, errMsg: '저장에 실패하였습니다.', err: err});
            res.json({errCode: 1, msg: '저장되었습니다.'});
        })
    });

    //회원수정
    app.post('/api/user/updateUser', function(req, res){
        
        if(!req.body.userId){
            return res.json({errCode: -1, errMsg: 'userId를 입력해주세요.'});
        } else if(!req.body.userPw){
            return res.json({errCode: -1, errMsg: 'userPw를 입력해주세요.'});
        } 

        User.findOne({$and:[{userId: req.body.userId}]}, function(err, user){
            if(err) return res.send({errCode: -1, errMsg: 'database failure', err: err});
            if(!user) return res.json({errCode: -1, errMsg: '사용자를 찾을 수 없습니다.'});

            if(req.body.userNm) user.userNm = req.body.userNm;
            if(req.body.birth) user.birth = req.body.birth;
            if(req.body.addr) user.addr = req.body.addr;
            if(req.body.phone) user.phone = req.body.phone;
            if(req.body.email) user.email = req.body.email;
            if(req.body.image) user.image = req.body.image;
            if(req.body.updateUser) user.updateUser = req.body.updateUser;
            if(req.body.updateDate) user.updateDate = req.body.updateDate;

            user.save(function(err){
                if(err) return res.send({errCode: -1, errMsg: '수정에 실패하였습니다.', err: err});
                res.json({errCode: 1, errMsg: '수정되었습니다.'});
            })
        });
    });
    
    app.post('/api/user/updateUserPw', function(req, res){
        
        if(!req.body.userId){
            return res.json({errCode: -1, errMsg: 'userId를 입력해주세요.'});
        } else if(!req.body.userPw){
            return res.json({errCode: -1, errMsg: 'userPw를 입력해주세요.'});
        } 

        User.findOne({$and:[{userId: req.body.userId}]}, function(err, user){
            if(err) return res.send({errCode: -1, errMsg: 'database failure', err: err});
            if(!user) return res.json({errCode: -1, errMsg: '사용자를 찾을 수 없습니다.'});
            
            user.userPw = req.body.userPw;
            
            user.save(function(err){
                if(err) return res.send({errCode: -1, errMsg: '변경에 실패하였습니다.', err: err});
                res.json({errCode: 1, errMsg: '변경되었습니다.'});
            })
        });
    });

    //회원삭제
    app.get('/api/user/delete/:userId', function(req, res){
        
        User.deleteOne({userId: req.params.userId }, function(err, output){
            if(err) return res.send({errCode: -1, errMsg: 'database failure', err: err});
            if(!output.n) return res.json({errCode: -1, errMsg: '사용자가 존재하지 않습니다.'});
            res.json({errCode: 1, errMsg: '삭제되었습니다.'});
        });
    });

}
