var Vote = require('../models/voteMdl');

require('../hb_modules/connection').db();

exports.getUserVotesForList = getUserVotesForList;

function getUserVotesForList(params, callback) {
  Vote.find({listId: params.listId, userId: params.userId}, function(err, votes) {
    if (err) {
      return callback(err);
    }
    var upvotedItems = [];
    for(var i = 0; votes.length > i; i++) {
      upvotedItems.push(votes[i].itemId);
    }

    callback(null, upvotedItems);
  });
}