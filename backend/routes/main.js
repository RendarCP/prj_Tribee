const express = require('express');
const router = express.Router();

router.get('/',function(req,res){
    var sess = req.session;
    res.render('index', {
        title: 'Tribee',
        content: '환영합니다.',
        userId: sess.userId,
        userNm: sess.userNm
    });
});

module.exports = router;
    