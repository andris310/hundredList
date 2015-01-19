var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var collectionSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model('Collection', collectionSchema);