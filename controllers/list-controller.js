var List = require('../models/listMdl');

require('../hb_modules/connection').db();

exports.getAllLists = getAllLists;
exports.getListInfo = getListInfo;

function getAllLists(callback) {
  List.find(function(err, lists) {
    if (err) {
      return callback(err);
    }

    callback(null, lists);
  });
}

function getListInfo(listId, callback) {
  console.log('getListInfo: body: ', listId);
  List.findOne({_id: listId}).populate('items').exec(function(err, result) {
    if (err) {
      return callback(err);
    }
    console.log('listInfo: ', result);
    callback(null, result);
  });
}