var async = require('async');
var Item = require('../models/itemMdl');
var List = require('../models/listMdl');
var Vote = require('../models/voteMdl');

var HBError = require('../hb_modules/hb-error');

require('../hb_modules/connection').db();

exports.upvote = upvote;
exports.getAllItems = getAllItems;
exports.addItemToList = addItemToList;

function getAllItems(callback) {
  Item.find(function(err, items) {
    if (err) {
      return callback(err);
    }

    callback(null, items);
  });
}

function addItemToList(params, callback) {
  var item;
  console.log('&&&& params: ', params);

  var list;
  async.series({
    findList: function(seriesCb) {
      console.log('findList...')
      List.findOne({_id: params.listId}, function(err, res) {
        if (err) {
          return seriesCb(HBError.process(err));
        }
        console.log('******** LIST *******', res)
        list = res;
        seriesCb();
      });
    },

    checkExistingItems: function(seriesCb) {
      Item.findOne({title: params.title}, function(err, result) {
        if (err) {
          return seriesCb(err);
        }

        console.log('item found: ', result);
        item = result;
        seriesCb();
      });
    },

    createItemIfNeeded: function(seriesCb) {
      console.log('addItemToList...');
      console.log('item: ', item)
      if (!item) {
        item = new Item({
          title: params.title,
          author: params.author,
          detailPageUrl: params.detailPageUrl,
          isbn: params.isbn,
          largeImage: params.largeImage,
          smallImage: params.smallImage,
          itemType: params.itemType
        });

        item.save(function(err, item) {
          console.log('item.save')
          if (err) {
            console.log('+++++', err);
            var error = HBError.process(err);
            return seriesCb(error);
          }

          return seriesCb();
        });
      } else {
        seriesCb();
      }
    },

    addItemToList: function(seriesCb) {
      list.items.push(item);
      list.save(function(err, res) {
        if (err) {
          return seriesCb(err);
        }

        seriesCb();
      });
    }
  }, function(err) {
    callback(null, {message: 'Item Added to the list'});
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
      item.voteCount = item.votes.length;
      item.save(function(err, itemObj) {
        if (err) {
          return callback(err);
        }
        console.log('upvote: ', itemObj);
        var data = {
          message: 'Vote added to the ' + itemObj.title,
          item: itemObj
        };

        callback(null, data);
      });
    });
  });
}