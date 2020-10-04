module.exports = function(app, User)
{
    // var userjsonDir = __dirname + "/../data/user.json";
    
    //회원ID 중복체크
    app.get('/checkUserId/:userId', function(req, res){

        User.findOne({userId : req.params.userId}, function(err, user){
            if(err) res.send({errCode: -1, errMsg: 'database failure'});
            if(user) res.json({errCode: -1, errMsg: '해당 아이디가 존재합니다. 재입력해주세요.'});
            res.json({errCode:1, msg:'사용가능한 아이디입니다.', userId: req.params.userId});
        })
    });

    //회원정보리스트
    app.post('/getUsers', function (req, res) {
        
        User.find(function(err, users){
            if(err) return res.status(500).send({errMsg: 'database failure'});
            res.json(users);
        })
    //     User.readFile( userjsonDir, 'utf8', function (err, data) {
    //        res.end( data );
    //    });
    });

    //회원정보
    app.get('/getUser', function(req, res){
    //    User.readFile(userjsonDir, 'utf8', function (err, data) {
    //         var users = JSON.parse(data);
    //         res.json(users[req.params.username]);
    //    });
        User.findOne({userId: req.params.userId, userPw: req.params.userPw }, function(err, user){
            if(err) return res.status(500).json({errCode: -1, errMsg: err});
            if(!user) return res.status(404).json({errCode: -1, errMsg: '사용자를 찾을 수 없습니다.'});

            var returnUser = new User();
            returnUser.userId = user.userId;
            returnUser.userNm = user.userNm;
            returnUser.birth = user.birth;
            returnUser.addr = user.addr;
            returnUser.phone = user.phone;
            returnUser.email = user.email;
            res.json(returnUser);
        })

    });

    //회원가입
    app.post('/addUser', function(req, res){
        var result = {};

        // CHECK REQ VALIDITY
        if(!req.body["userId"]){
            result["errCode"] = -1;
            result["errMsg"] = "userId를 입력해주세요.";
            res.json(result);
            return;
        } else if(!req.body["userPw"]){
            result["errCode"] = -1;
            result["errMsg"] = "userPw를 입력해주세요.";
            res.json(result);
            return;
        } else if(!req.body["userNm"]){
            result["errCode"] = -1;
            result["errMsg"] = "userNm을 입력해주세요.";
            res.json(result);
            return;
        }

        var user = new User();
        user.userId = req.body.userId;
        user.userPw = req.body.userPw;
        user.userNm = req.body.userNm;
        user.birth = req.body.birth||'';
        user.addr = req.body.addr||'';
        user.phone = req.body.phone||'';
        user.email = req.body.email||'';
        
        user.save(function(err) {
            if(err){
                result["errCode"] = -1;
                result["errMsg"] = "저장에 실패하였습니다.";
                res.json(result);
                return;
            }
            res.json({errCode: 1, msg: '저장되었습니다.'});
        })

        // LOAD DATA & CHECK DUPLICATION   
        // User.readFile(userjsonDir, 'utf8',  function(err, data){
        //     var users = JSON.parse(data);
        //     if(users[username]){
        //         // DUPLICATION FOUND
        //         result["errCode"] = -1;
        //         result["errMsg"] = "duplicate";
        //         res.json(result);
        //         return;
        //     }

        //     // ADD TO DATA
        //     users[username] = req.body;

        //     // SAVE DATA
        //     User.writeFile(userjsonDir, 
        //                  JSON.stringify(users, null, '\t'), "utf8", function(err, data){
        //         result = {"errCode": 1};
        //         res.json(result);
        //     })
        // })
    });

    //회원수정
    app.put('/updateUser', function(req, res){
        
        var result = {};

        // CHECK REQ VALIDITY
        if(!req.body["userId"] || !req.body["userPw"] || !req.body["userNm"]){
            result["errCode"] = -1;
            result["errMsg"] = "invalid request";
            res.json(result);
            return;
        }

        // LOAD DATA   
        // User.readFile(userjsonDir, 'utf8',  function(err, data){
        //     var users = JSON.parse(data);
        //     // ADD/MODIFY DATA
        //     users[username] = req.body;

        //     // SAVE DATA
        //     User.writeFile(userjsonDir, 
        //                  JSON.stringify(users, null, '\t'), "utf8", function(err, data){
        //         result = {"errCode": 1};
        //         res.json(result);
        //     })
        // })
    });

    //회원삭제
    app.delete('/deleteUser/:userId', function(req, res){
        var result = { };
        //LOAD DATA
        // User.readFile(userjsonDir, "utf8", function(err, data){
        //     var users = JSON.parse(data);
            
        // IF NOT FOUND
        //if(!users[req.params.username]){
        //    result["errCode"] = -1;
        //    result["errMsg"] = "not found";
        //    res.json(result);
        //    return;
        //}

        //     // DELETE FROM DATA 
        //delete users[req.params.username];
            
        //     // SAVE FILE
        //     User.writeFile(userjsonDir,
        //                  JSON.stringify(users, null, '\t'), "utf8", function(err, data){
        //         result["errCode"] = 1;
        //         res.json(result);
        //         return;
        //     })
        // })

    });

}
