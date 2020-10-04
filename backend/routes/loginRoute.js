module.exports = function(app, User)
{

    app.get('/login/:userId/:userPw', function(req, res){
        var sess;
        sess = req.session;

        var userId = req.params.userId;
        var userPw = req.params.userPw;
        var result = {};
        
        User.findOne({$and:[{userId: req.params.userId},{userPw:req.params.userPw}]}, function(err, user){
            if(err) return res.stauserRouteus(500).json({errMsg: err});
            if(!user){
                result["errCode"] = 0;
                result["errMsg"] = "userId or userPw is incorrect";
                res.json(result);
            } else {
                result["errCode"] = 1;
                sess.userNm = user.userNm;
                sess.userId = user.userId;
                sess.userPw = user.userPw;
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
                    console.log(err);
                }else{
                    res.redirect('/');
                }
            })
        }else{
            res.redirect('/');
        }
    })

}
