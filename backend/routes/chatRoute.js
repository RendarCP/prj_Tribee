const express = require('express');
const router = express.Router();
const Room = require("../models/room");
const Chat = require("../models/chat");

// GET ALL Room
router.get('/rooms', function(req, res){
    Room.find(function(err, Room){
        if(err) return res.send({errCode: -1, errMsg: 'database failure', err: err});
        if(0 == Rooms.length) return res.json({errCode: 1, errMsg: '채팅방이 존재하지 않습니다.'});
        res.json(Rooms);
    })
});

// GET SINGLE Room
router.get('/room/in/:_id', function(req, res){

    Room.findOne({_id: req.params._id}, function(err, Room){
        if(err) return res.json({errCode: -1, errMsg: err});
        if(!Room) return res.json({errCode: -1, errMsg: '게시글을 찾을 수 없습니다.'});
        
        res.json(Room);
    })
});

// GET SINGLE Room
// router.Room('/insert', upload.array('file'), function(req, res){
//     console.log('req.files ', req.files);
//     console.log('req.body ', req.body);

//     //var obj = req.files;
//     //var file = new File(obj);   
//     if(!req.body['contents']){
//         return res.json({errCode: -1, errMsg: '내용을 입력해주세요.'});
//     } 
    
//     var Room = new Room();
//     Room.userId = req.body.userId;
//     Room.contents = req.body.contents;
//     Room.images = req.files;
//     Room.tags = req.body.tags||'';
//     Room.like = req.body.like||'';
//     Room.comments = req.body.comments||'';
//     Room.positionId = req.body.positionId||'';
    
//     Room.save(function(err) {
//         if(err) return res.send({errCode: -1, errMsg: '저장에 실패하였습니다.', err: err});
//         res.json({errCode: 1, msg: '저장되었습니다.'});
//     })
// });

// // UPDATE THE Room
// router.put('/update/:_id', function(req, res){
    
//     Room.update({ _id: req.params._id }, { $set: req.body }, function(err, output){
//         if(err) return res.send({errCode: -1, errMsg: 'database failure', err: err});
//         if(!output.n) return res.json({errCode: -1, errMsg: '게시글을 찾을 수 없습니다.'});

//         res.json({errCode: 1, msg: '저장되었습니다.'});
//     })

// });

// // DELETE Room
// router.delete('/delete/:_id', function(req, res){

//     Room.remove({ _id: req.params._id }, function(err, output){
//         if(err) return res.send({errCode: -1, errMsg: 'database failure', err: err});
//         res.json({errCode: 1, msg: '삭제되었습니다.'});
//     })
// });

module.exports = router;