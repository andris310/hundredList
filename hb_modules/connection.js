var mongoose = require('mongoose');
var dbConfig = require('../config/db');

mongoose.connect(process.env.MONGO_URL || process.env.MONGO_URL);
var db;
exports.db = function() {
  if (db === null) {
    db = mongoose.connection;
  }
  return db;
};