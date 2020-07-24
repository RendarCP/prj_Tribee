module.exports = function(app)
{
     app.get('/',function(req,res){
        var sess = req.session;
        res.render('index', {
            title: "MY HOMEPAGE",
            length: 5,
            userId: sess.userId,
            userNm: sess.userNm
        })
    });
}