var express = require('express');
var router = express.Router();
var Item = require('../models/itemMdl');
require('../hb_modules/connection').db();

router.get('/items', function(req, res) {
  Item.find(function(err, items) {
    if (err) {
      res.send(err);
      return;
    }

    res.render('/items', {
      title: 'Items',
      alias: 'items',
      items: items
    });
  });
});

router.get('/new-item', function(req, res) {
  res.render('new_item', {
    title: 'Create New Item',
    alias: 'new_item'
  });
});

module.exports = router;