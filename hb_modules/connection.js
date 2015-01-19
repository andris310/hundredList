var mongoose = require('mongoose');
var dbConfig = require('../config/db');

console.log('process.env', process.env);
console.log('mongo_url', process.env.MONGO_URL);

mongoose.connect(process.env.MONGO_URL || process.env.MONGO_URL);
var db;
exports.db = function() {
  if (db === null) {
    db = mongoose.connection;
  }
  return db;
};