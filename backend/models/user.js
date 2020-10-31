var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    userId: String,     // 아이디
    userPw: String,     // 비밀번호
    userNm: String,     // 이름
    birth: String,      // 생년월일
    addr: String,       // 주소
    phone: Number,      // 전화번호
    email:String,       // 이메일
    image:String,       // 사진
    createUser: String,
    createDate: { type: Date, default: Date.now  },
    updateUser: String,
    updateDate: { type: Date, default: Date.now  }
});

userSchema.findById = function findById (id, fields, options, callback) {
    return this.findOne({ _id: id }, fields, options, callback);
};

module.exports = mongoose.model('user', userSchema);
