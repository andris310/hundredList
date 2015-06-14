var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var voteSchema = new Schema({
  userId: {
    type: String
  }
});

module.exports = mongoose.model('Vote', voteSchema);