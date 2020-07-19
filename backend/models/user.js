var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    userId: String,
    userNm: String,
    userPw: String,
    createDate: { type: Date, default: Date.now  }
});

module.exports = mongoose.model('user', userSchema);
