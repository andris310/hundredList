var express = require('express');
var async = require('async');
var router = express.Router();
var itemCtl = require('../controllers/item-controller');
var listCtl = require('../controllers/list-controller');

router.get('/items', function(req, res) {
  itemCtl.getAllItems(function(err, items) {
    if (err) {
      res.send(err);
      return;
    }

    res.render('item/items', {
      title: 'Items',
      alias: 'items',
      items: items
    });
  });
});

router.get('/new-item', function(req, res) {
  listCtl.getAllLists(function(err, lists) {
    if (err) {
      res.send(err);
      return;
    }
    res.render('item/new_item', {
      title: 'Create New Item',
      alias: 'new_item',
      lists: lists
    });
  });
});

module.exports = router;