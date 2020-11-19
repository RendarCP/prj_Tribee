var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var fileSchema = new Schema({
    postId: String,         //
    fieldname: String,      // 
    originalname: String,   // 
    encoding: String,       // 
    mimetype: String,       // 
    filename: String,       // 
    path: String,           // 
    size: String,           // 
    createUser: String,
    createDate: { type: Date, default: Date.now  },
    updateUser: String,
    updateDate: { type: Date, default: Date.now  }
});

module.exports = mongoose.model('file', fileSchema);
