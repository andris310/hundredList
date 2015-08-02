var mongodb = require('mongodb');

exports.up = function(db, next) {
  console.log('inside up...');
  console.log(mongodb.Collection.toString());

  var lists = mongodb.getCollection('votes');
  console.log('LISTS: ', lists)
  lists.find({}, function(err, lists) {
    console.log('**ERR', err);
    if (err) {
      return next(err);
    }

    console.log(lists);
    next();
  });
};

exports.down = function(db, next){
    next();
};
