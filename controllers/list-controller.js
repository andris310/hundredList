var async = require('async');
var List = require('../models/listMdl');
var Item = require('../models/itemMdl');

require('../hb_modules/connection').db();

exports.getAllLists = getAllLists;
exports.getListInfo = getListInfo;
exports.getHomePageList = getHomePageList;
exports.checkListForItem = checkListForItem;

function getAllLists(callback) {
  List.find(function(err, lists) {
    if (err) {
      return callback(err);
    }

    callback(null, lists);
  });
}

function getListInfo(listId, callback) {
  List.findOne({_id: listId}).populate({path: 'items', options: { sort: { 'voteCount': -1 } } }).exec(function(err, result) {
    if (err) {
      return callback(err);
    }

    callback(null, result);
  });
}

function getHomePageList(callback) {
  List.findOne({url: process.env.HOME_PAGE_LIST}).populate({path: 'items', options: { sort: { 'voteCount': -1 } } }).exec(function(err, result) {
    if (err) {
      return callback(err);
    }

    callback(null, result);
  });
}

function checkListForItem(listId, itemTitle, callback) {
  var item;
  var list;
  var listHasItem = false;

  if (itemTitle && !itemTitle.length) {
    return callback();
  }

  async.series({
    findList: function(seriesCb) {
      List.findOne({_id: listId}, function(err, res) {
        if (err) {
          return seriesCb(HBError.process(err));
        }
        list = res;
        seriesCb();
      });
    },

    checkExistingItems: function(seriesCb) {
      Item.findOne({title: itemTitle}, function(err, result) {
        if (err) {
          return seriesCb(err);
        }

        item = result;
        seriesCb();
      });
    },

    checkIfListHasItem: function(seriesCb) {
      if (!item) {
        return seriesCb();
      }

      for(var i = 0; i < list.items.length; i++) {
        if (item._id.toString() === list.items[i].toString()) {
          listHasItem = true;
          return seriesCb();
        }
      }
      seriesCb();
    }

  }, function(err) {
    if (err) {
      return callback(err);
    }

    var data = {
      listHasItem: listHasItem,
      item: null
    };

    if (listHasItem) {
      data.item = item;
    }
    callback(null, data);
  });
}