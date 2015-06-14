var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  author: {
    type: String
  },
  detailPageUrl: {
    type: String
  },
  isbn: {
    type: String
  },
  largeImage: {
    type: String
  },
  smallImage: {
    type: String
  },
  votes: [{
    type: Schema.Types.ObjectId,
    ref: 'Vote'
  }]
});

module.exports = mongoose.model('Item', itemSchema);