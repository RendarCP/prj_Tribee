// index.js

// [ENV] process
require('dotenv').config();

// [LOAD PACKAGES]
const express     = require('express');
const app         = express();
const ejs         = require("ejs");
const bodyParser  = require('body-parser');
//const cookieParser = require("cookie-parser");
const session     = require('express-session');
const mongoose    = require('mongoose');
const cors        = require('cors'); // 크로스 도메인
const multer      = require('multer'); // express에 multer모듈 적용 (for 파일업로드)
const path        = require('path');

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
//app.use(cookieParser());

// CORS 미들웨어 추가
app.use(cors()); 

// public : **정적인 파일이 위치할 디렉토리의 이름**
app.use(express.static('sources'));

// 저장한 파일 조회
app.use(express.static('uploads'));
// [CONFIGURE ROUTER]
app.use('/', require('./routes/main'));
app.use('/', require('./routes/loginRoute'));
app.use('/api/users', require('./routes/userRoute'));
app.use('/api/post', require('./routes/postRoute'));
// app.use('/api/file', require('./routes/fileRoute'));
// app.use('/', require('./routes/userRoute'));
// app.use('/', require('./routes/postRoute'));
// app.use('/', require('./routes/fileRoute'));

// [CONFIGURE SERVER PORT]
var port = process.env.PORT || 8080;

// [RUN SERVER]
var server = app.listen(port, function(){
 console.log("Server Running at " + port)
});