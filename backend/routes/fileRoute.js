const express = require('express');
const router = express.Router();
const File = require("../models/file");
const path = require('path');

const multer = require('multer'); // express에 multer모듈 적용 (for 파일업로드)
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

var fs = require("fs"); // 파일시스템 접근을 위한 모듈 호출 

// 업로드 - 파일 업로드 폼 // file: 속성 name값
router.post('/upload', upload.single('file'), function(req, res){
    console.log(req.file); // 콘솔(터미널)을 통해서 req.file Object 내용 확인 가능.
    //console.log(req.body);
    //console.log(req);
    var obj = req.file;
    var file = new File(obj);    
    file.save(function(err){ // DB에 저장한다.​
        if(err) return res.send({errCode: -1, errMsg: '저장에 실패하였습니다.', err: err});
    });  
    res.json({errCode: 1, errMsg: '업로드되었습니다.', file:req.file});
});

// 파일 여러개
router.post('/uploads', upload.array('file'),  function(req, res){
    console.log(req.files);
    //console.log(req.body);
    //console.log(req);
    res.json({errCode: 1, errMsg: '업로드되었습니다.', files:req.files});
});

module.exports = router;

// const storage = multer.diskStorage({ 
//     destination(req, file, callback) { 
//         callback(null, 'uploads'); }, 
//         filename(req, file, callback) { 
//             let array = file.originalname.split('.'); 
//             array[0] = array[0] + '_'; array[1] = '.' + array[1]; 
//             array.splice(1, 0, Date.now().toString()); 
//             const result = array.join(''); 
//             console.log(result); 
//             callback(null, result); 
//         } 
//     }); 
//     const upload = multer({ 
//         storage, 
//         limits: { 
//             files: 10, 
//             fileSize: 1024 * 1024 * 1024
//         } 
//     }); 
//     router.post('/upload', upload.array('photo', 1), function (req, res, next) { 
//         try { 
//             const files = req.files; 
//             let originalName = ''; 
//             let fileName = ''; 
//             let mimeType = ''; let size = 0; 
//             if (Array.isArray(files)) { 
//                 console.log(`files is array~`); 
//                 originalName = files[0].originalname; 
//                 fileName = files[0].filename; 
//                 mimeType = files[0].mimetype; 
//                 size = files[0].size; 
//             } else { 
//                 console.log(`files is not array~`); 
//                 originalName = files[0].originalname; 
//                 fileName = files[0].filename; 
//                 mimeType = files[0].mimetype; 
//                 size = files[0].size; 
//             } 
//             console.log(`file inform : ${originalName}, ${fileName}, ${mimeType}, ${size}`); 
//             res.writeHead('200', { 'Content-type': 'text/html;charset=utf8' }); 
//             res.write('<h3>upload success</h3>'); 
//             res.write(`<p>original name = ${originalName}, saved name = ${fileName}<p>`); 
//             res.write(`<p>mime type : ${mimeType}<p>`); 
//             res.write(`<p>file size : ${size}<p>`); 
//             res.end(); 
//         } catch (err) { 
//                 console.dir(err.stack); 
//             } 
//     }); 

