module.exports = function(app, User)
{
    // var userjsonDir = __dirname + "/../data/user.json";

    app.get('/api/users', function (req, res) {
        
        User.find(function(err, users){
            if(err) return res.status(500).send({error: 'database failure'});
            res.json(users);
        })
    //     User.readFile( userjsonDir, 'utf8', function (err, data) {
    //        res.end( data );
    //    });
    });

    app.get('/getUser/:userNm', function(req, res){
    //    User.readFile(userjsonDir, 'utf8', function (err, data) {
    //         var users = JSON.parse(data);
    //         res.json(users[req.params.username]);
    //    });
        User.findOne({userId: req.params.userNm}, function(err, user){
            if(err) return res.status(500).json({error: err});
            if(!user) return res.status(404).json({error: 'user not found'});
            res.json(user);
        })
    });

    app.post('/addUser/:userNm', function(req, res){
        var result = {};
        var userNm = req.params.userNm;

        // CHECK REQ VALIDITY
        if(!req.body["userId"] || !req.body["userPw"]){
            result["success"] = 0;
            result["error"] = "invalid request";
            res.json(result);
            return;
        }

        var user = new User();
        user.userNm = userNm;
        user.userId = req.body.userId;
        user.userPw = req.body.userPw;
        
        user.save(function(err) {
            if(err){
                result["success"] = 0;
                result["error"] = "save error";
                res.json(result);
                return;
            }
            res.json({result: 1});
        })

        // LOAD DATA & CHECK DUPLICATION   
        // User.readFile(userjsonDir, 'utf8',  function(err, data){
        //     var users = JSON.parse(data);
        //     if(users[username]){
        //         // DUPLICATION FOUND
        //         result["success"] = 0;
        //         result["error"] = "duplicate";
        //         res.json(result);
        //         return;
        //     }

        //     // ADD TO DATA
        //     users[username] = req.body;

        //     // SAVE DATA
        //     User.writeFile(userjsonDir, 
        //                  JSON.stringify(users, null, '\t'), "utf8", function(err, data){
        //         result = {"success": 1};
        //         res.json(result);
        //     })
        // })
    });

    
    app.put('/updateUser/:userNm', function(req, res){
        
        var result = {};
        var userNm = req.params.userNm;

        // CHECK REQ VALIDITY
        if(!req.body["userId"] || !req.body["userPw"]){
            result["success"] = 0;
            result["error"] = "invalid request";
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
        //         result = {"success": 1};
        //         res.json(result);
        //     })
        // })
    });


    app.delete('/deleteUser/:username', function(req, res){
        var result = { };
        //LOAD DATA
        // User.readFile(userjsonDir, "utf8", function(err, data){
        //     var users = JSON.parse(data);
            
        //     // IF NOT FOUND
        //     if(!users[req.params.username]){
        //         result["success"] = 0;
        //         result["error"] = "not found";
        //         res.json(result);
        //         return;
        //     }

        //     // DELETE FROM DATA
        //     delete users[req.params.username];
            
        //     // SAVE FILE
        //     User.writeFile(userjsonDir,
        //                  JSON.stringify(users, null, '\t'), "utf8", function(err, data){
        //         result["success"] = 1;
        //         res.json(result);
        //         return;
        //     })
        // })

    });

    app.get('/login/:userId/:userPw', function(req, res){
        var sess;
        sess = req.session;

        var userId = req.params.userId;
        var userPw = req.params.userPw;
        var result = {};
        
        User.findOne({$and:[{userId: req.params.userId},{userPw:req.params.userPw}]}, function(err, user){
            if(err) return res.status(500).json({error: err});
            if(!user){
                result["success"] = 0;
                result["error"] = "userId or userPw is incorrect";
                res.json(result);
            } else {
                result["success"] = 1;
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
        //         result["success"] = 0;
        //         result["error"] = "not found";
        //         res.json(result);
        //         return;
        //     }     

        //     if(users[username]["password"] == password){
        //         result["success"] = 1;
        //         sess.username = username;
        //         sess.name = users[username]["name"];
        //         res.json(result);
            
        //     }else{
        //         result["success"] = 0;
        //         result["error"] = "incorrect";
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
