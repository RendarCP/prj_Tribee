var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    userId: String,     // 아이디
    userPw: String,     // 비밀번호
    userNm: String,     // 이름
    birth: Date,        // 생년월일
    phone: Number,      // 전화번호
    addr: String,       // 주소
    createDate: { type: Date, default: Date.now  }
});

module.exports = mongoose.model('user', userSchema);
