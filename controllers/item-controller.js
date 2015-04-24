var Item = require('../models/itemMdl');
var List = require('../models/listMdl');

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

function createNewItem(name, listId, callback) {
  var item = new Item({
    name: name,
    list: listId
  });
  var list;
  List.findOne({_id: listId}, function(err, res) {
    if (err) {
      return callback(err);
    }

    list = res;
    item.save(function(err, item) {
      if (err) {
        return callback(err);
      }

      list.items.push(item);
      list.save(function(err, res) {
        console.log('RES inside createItem: ', res)
        callback(null, {message: 'Item Added to the list'});
      });
    });
  });
}