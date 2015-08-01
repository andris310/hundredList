var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var voteSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  listId: {
    type: String,
    required: true
  },
  itemId: {
    type: String,
    required: true
  }
});

voteSchema.index({userId: 1, itemId: 1}, {unique: true});

voteSchema.on('index', function(err) {
  if (err) {
    console.log('err', err);
  }
});

module.exports = mongoose.model('Vote', voteSchema);