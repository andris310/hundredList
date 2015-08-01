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
    type: String,
    unique: true
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
  }],
  itemType: {
    type: String,
    required: true
  }
});

mongoose.set('debug', true);

module.exports = mongoose.model('Item', itemSchema);