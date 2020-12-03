var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
    userId: String,     // 작성자
    contents: String,   // 내용
    images: Array,       // 사진
    tags: Array,       // 태그
    like: String,       // 좋아요
    comments: Array,   // 댓글
    positionId: String, // 위치
    createUser: String,
    createDate: { type: Date, default: Date.now  },
    updateUser: String,
    updateDate: { type: Date, default: Date.now  }
});

module.exports = mongoose.model('post', postSchema);
