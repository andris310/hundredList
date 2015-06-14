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
  var item = new Item({
    title: params.title,
    author: params.author,
    detailPageUrl: params.detailPageUrl,
    isbn: params.isbn,
    largeImage: params.largeImage,
    smallImage: params.smallImage
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
        console.log('itemCtl ERRir: ', error);
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

function upvote(params, callback) {
  var vote = new Vote();
  console.log('upvote', params.itemId);
  Item.findOne({_id: params.itemId}, function(err, item) {
    if (err) {
      var error = HBError.process(err);
      console.log('itemCtl ERR: ', err);
      return callback(err);
    }

    vote.save(function(err, vote) {
      if (err) {
        return callback(HBError.process(err));
      }

      item.votes.push(vote);
      item.save(function(err, res) {
        console.log('RES inside item.save with vote: ', res)
        callback(null, {message: 'Vote added to the item'})
      });
    });
  });
}