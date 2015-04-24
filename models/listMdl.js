var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var listSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  url: {
    type: String,
    required: true,
    unique: true
  },
  items: [{
    type: Schema.Types.ObjectId,
    ref: 'Item'
  }]
});

module.exports = mongoose.model('List', listSchema);