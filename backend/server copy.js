// server.js

// [ENV] process
require('dotenv').config();

// [LOAD PACKAGES]
const express     = require('express');
const ejs         = require("ejs");
const bodyParser  = require('body-parser');
const session     = require('express-session');
const mongoose    = require('mongoose');
const cors        = require('cors'); // 크로스 도메인
const multer      = require('multer'); // express에 multer모듈 적용 (for 파일업로드)
const path        = require('path');
const app         = express();

// [ CONFIGURE mongoose ]
var db_uri = process.env.MONGO_URI || 'mongodb://localhost:27017';
// CONNECT TO MONGODB SERVER
var connection = mongoose.connection;
connection.on('error', console.error);
connection.once('open', function(){
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
});
mongoose.connect(db_uri)
    .then(() => console.log('Successfully connected to ' + db_uri))
    .catch(e => console.error(e));

// [CONFIGURE SERVER PORT]
var port = process.env.PORT || 8080;
// [RUN SERVER]
var server = app.listen(port, function(){
 console.log("Express server has started on port " + port)
});

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// [CONFIGURE APP TO USE bodyParser]
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(session({
    secret: '@#@$MYSIGN#@$#$',
    resave: false,
    saveUninitialized: true
}));

// public : **정적인 파일이 위치할 디렉토리의 이름**
app.use(express.static('sources'));
// CORS 미들웨어 추가
app.use(cors()); 

// 저장한 파일 조회
app.use(express.static('uploads'));
// 입력한 파일이 uploads/ 폴더 내에 저장된다.
// dest : 파일 위치
// limits: [fileSize]
// var upload = multer({ dest: 'uploads/' })
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads') // cb 콜백함수를 통해 전송된 파일 저장 디렉토리 설정
    },
    filename: function (req, file, cb) {
      //cb(null, file.originalname) // cb 콜백함수를 통해 전송된 파일 이름 설정
      cb(null, new Date().valueOf() + path.extname(file.originalname));
    }
});
var upload = multer({storage: storage});

// [DEFINE MODEL]
var Post = require('./models/post');
var User = require('./models/user');
var File = require('./models/file');

// [CONFIGURE ROUTER]
var router = require('./routes/main')(app);
var router = require('./routes/userRoute')(app, User);
var router = require('./routes/loginRoute')(app, User);
var router = require('./routes/postRoute')(app, Post);
var router = require('./routes/fileRoute')(app, File ,upload);