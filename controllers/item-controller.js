var Item = require('../models/itemMdl');
var List = require('../models/listMdl');
var Vote = require('../models/voteMdl');

var HBError = require('../hb_modules/hb-error');

require('../hb_modules/connection').db();

exports.upvote = upvote;
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

function createNewItem(params, callback) {
  console.log('params: ', params)
  var item = new Item({
    title: params.title,
    author: params.author,
    detailPageUrl: params.detailPageUrl,
    isbn: params.isbn,
    largeImage: params.largeImage,
    smallImage: params.smallImage,
    itemType: params.itemType
  });

  var list;

  List.findOne({_id: params.listId}, function(err, res) {
    if (err) {
      return callback(HBError.process(err));
    }

    list = res;
    item.save(function(err, item) {
      if (err) {
        var error = HBError.process(err);
        return callback(error);
      }

      list.items.push(item);
      list.save(function(err, res) {
        callback(null, {message: 'Item Added to the list'});
      });
    });
  });
}

function upvote(params, callback) {
  Item.findOne({_id: params.itemId}, function(err, item) {
    if (err) {
      var error = HBError.process(err);
      return callback(err);
    }

    var type = item.itemType ? item.itemType : 'item';
    var vote = new Vote({userId: params.userId, itemId: item._id, listId: params.listId});
    vote.save(function(err, vote) {
      if (err) {
        var error = HBError.process(err);
        if (err.status == 409) {
          err.msg = 'You can upvote same ' + type + ' only once.';
        }

        return callback(error);
      }

      item.votes.push(vote);
      item.save(function(err, res) {
        if (err) {
          return callback(err);
        }

        callback(null, {message: 'Vote added to the ' + type});
      });
    });
  });
}