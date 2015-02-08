var Item = require('../models/itemMdl');
require('../hb_modules/connection').db();

exports.getAllItems = getAllItems;
exports.createNewItem = createNewItem;

function getAllItems(callback) {
  Item.find(function(err, items) {
    if (err) {
      return callback(err);
    }

    callback(null, items);
  });
}

function createNewItem(name, callback) {
  var item = new Item();

  item.name = name;

  item.save(function(err) {
    if (err) {
      res.send('There was a problem adding information to the database.');
      return;
    }

    callback(null);
  });
}