var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var roomSchema = new Schema({
    fromUserId: String,     // 작성자
    toUserId: String,       // 내용
    lastMessage: String,    // 마지막 메세지
    createUser: String,
    createDate: { type: Date, default: Date.now  },
    updateUser: String,
    updateDate: { type: Date, default: Date.now  }
});

module.exports = mongoose.model('room', roomSchema);
