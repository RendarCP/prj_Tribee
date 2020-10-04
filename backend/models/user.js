var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    userId: String,     // 아이디
    userPw: String,     // 비밀번호
    userNm: String,     // 이름
    birth: String,      // 생년월일
    phone: Number,      // 전화번호
    addr: String,       // 주소
    email:String,       // 이메일
    createDate: { type: Date, default: Date.now  }
});

module.exports = mongoose.model('user', userSchema);
