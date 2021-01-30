var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var chatSchema = new Schema({
    roomId: String,      // 채팅방 id 값
    chat: String,        // 내용
    createUser: String,
    createDate: { type: Date, default: Date.now  }
});

module.exports = mongoose.model('chat', chatSchema);
