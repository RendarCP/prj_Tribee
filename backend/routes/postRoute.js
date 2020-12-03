const express = require('express');
const router = express.Router();
const Post = require("../models/post");

const multer = require('multer');
// 입력한 파일이 uploads/ 폴더 내에 저장된다.
// dest : 파일 위치
// limits: [fileSize]
// var upload = multer({ dest: 'uploads/' })
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads') // cb 콜백함수를 통해 전송된 파일 저장 디렉토리 설정
    },
    filename: function (req, file, cb) {
      //cb(null, file.originalname) // cb 콜백함수를 통해 전송된 파일 이름 설정
      cb(null, new Date().valueOf() + path.extname(file.originalname));
    }
});
const upload = multer({storage: storage});

//var fs = require("fs"); // 파일시스템 접근을 위한 모듈 호출 

// GET ALL POSTS
router.get('/getPosts', function(req, res){
    Post.find(function(err, posts){
        if(err) return res.send({errCode: -1, errMsg: 'database failure', err: err});
        if(0 == posts.length) return res.json({errCode: 1, errMsg: '게시물이 존재하지 않습니다.'});
        res.json(posts);
    })
});

// GET SINGLE post
router.get('/getPost/:_id', function(req, res){

    Post.findOne({_id: req.params._id}, function(err, post){
        if(err) return res.json({errCode: -1, errMsg: err});
        if(!post) return res.json({errCode: -1, errMsg: '게시글을 찾을 수 없습니다.'});
        
        res.json(post);
    })
});

// GET SINGLE post
router.post('/insert', upload.array('file'), function(req, res){
    console.log(req.files);
    console.log(req.body);

    //var obj = req.files;
    //var file = new File(obj);   
    if(!req.body['contents']){
        return res.json({errCode: -1, errMsg: '내용을 입력해주세요.'});
    } 
    
    var post = new Post();
    post.userId = req.body.userId;
    post.contents = req.body.contents;
    post.images = req.files;
    post.tags = req.body.tags||'';
    post.like = req.body.like||'';
    post.comments = req.body.comments||'';
    post.positionId = req.body.positionId||'';
    
    post.save(function(err) {
        if(err) return res.send({errCode: -1, errMsg: '저장에 실패하였습니다.', err: err});
        res.json({errCode: 1, msg: '저장되었습니다.'});
    })
});

// UPDATE THE post
router.put('/update/:_id', function(req, res){
    
    Post.update({ _id: req.params._id }, { $set: req.body }, function(err, output){
        if(err) return res.send({errCode: -1, errMsg: 'database failure', err: err});
        if(!output.n) return res.json({errCode: -1, errMsg: '게시글을 찾을 수 없습니다.'});

        res.json({errCode: 1, msg: '저장되었습니다.'});
    })

});

// DELETE post
router.delete('/delete/:_id', function(req, res){

    Post.remove({ _id: req.params._id }, function(err, output){
        if(err) return res.send({errCode: -1, errMsg: 'database failure', err: err});
        res.json({errCode: 1, msg: '삭제되었습니다.'});
    })
});

module.exports = router;