// server.js

// [ENV]
require('dotenv').config();

// [LOAD PACKAGES]
const express     = require('express');
const ejs         = require("ejs");
const bodyParser  = require('body-parser');
const session     = require('express-session');
const mongoose    = require('mongoose');
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

// [DEFINE MODEL]
var Book = require('./models/book');
var User = require('./models/user');

// [CONFIGURE ROUTER]
var router = require('./routes/main')(app);
var router = require('./routes/userRoute')(app, User);
var router = require('./routes/bookRoute')(app, Book);
