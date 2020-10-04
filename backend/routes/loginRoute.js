module.exports = function(app, User)
{
    app.get('/login/:userId/:userPw', function(req, res){
        var sess;
        sess = req.session;

        var userId = req.params.userId;
        var userPw = req.params.userPw;
        var result = {};
        
        User.findOne({$and:[{userId: userId},{userPw: userPw}]}, function(err, user){
            if(err) return res.stauserRouteus(500).json({errMsg: err});
            if(!user){
                result["errCode"] = -1;
                result["errMsg"] = "아이디와 패스워드가 일치하지 않습니다.";
                res.json(result);
            } else {
                result["errCode"] = 1;
                result["errMsg"] = "GET 로그인되었습니다.";
                sess.userNm = user.userNm;
                sess.userId = user.userId;
                //sess.userPw = user.userPw;
                //res.json(result);
                res.redirect('/');
            }
            console.log("user", user);
            console.log("session", sess);
        })
    });

    app.post('/login', function(req, res){
        var sess;
        sess = req.session;

        var result = {};
        var userId = req.body["userId"];
        var userPw = req.body["userPw"];
        
        User.findOne({$and:[{userId: userId},{userPw:userPw}]}, function(err, user){
            if(err) return res.stauserRouteus(500).json({errCode: -1, errMsg: err});
            if(!user){
                result["errCode"] = -1;
                result["errMsg"] = "아이디와 패스워드가 일치하지 않습니다.";
                res.json(result);
            } else {
                result["errCode"] = 1;
                result["errMsg"] = "로그인되었습니다.";
                sess.userNm = user.userNm;
                sess.userId = user.userId;
                //sess.userPw = user.userPw;
                res.json(result);
            }
            
            console.log("user", user);
            console.log("session", sess);
        })
        // User.readFile(userjsonDir, "utf8", function(err, data){
        //     var users = JSON.parse(data);
        //     var username = req.params.username;
        //     var password = req.params.password;
        //     var result = {};
        //     if(!users[username]){
        //         // USERNAME NOT FOUND
        //         result["errCode"] = 0;
        //         result["errMsg"] = "not found";
        //         res.json(result);
        //         return;
        //     }     

        //     if(users[username]["password"] == password){
        //         result["errCode"] = 1;
        //         sess.username = username;
        //         sess.name = users[username]["name"];
        //         res.json(result);
            
        //     }else{
        //         result["errCode"] = 0;
        //         result["errMsg"] = "incorrect";
        //         res.json(result);
        //     }
        // })
    });

    app.get('/logout', function(req, res){
        sess = req.session;
        if(sess.username){
            req.session.destroy(function(err){
                if(err){
                    //console.log(err);
                    res.json({errCode: -1, errMsg: err});
                }else{
                    res.json({errCode: 1, errMsg: '로그아웃되었습니다.'});
                    //res.redirect('/');
                }
            })
        }else{
            res.json({errCode: 1, errMsg: '로그인된 사용자가 없습니다..'});
            //res.redirect('/');
        }
    })

}
