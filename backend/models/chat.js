var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var chatSchema = new Schema({
    roomId: String,        // chats id 값
    content: String,        // 마지막 메세지
    createUser: String,
    createDate: { type: Date, default: Date.now  }
});

module.exports = mongoose.model('chat', chatSchema);
