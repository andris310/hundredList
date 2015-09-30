var mongodb = require('mongodb');

exports.up = function(db, next) {

  var lists = mongodb.getCollection('votes');
  lists.find({}, function(err, lists) {
    if (err) {
      return next(err);
    }

    next();
  });
};

exports.down = function(db, next){
    next();
};
