var express = require('express');
var async = require('async');
var router = express.Router();
var itemCtl = require('../controllers/item-controller');

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
  res.render('item/new_item', {
    title: 'Create New Item',
    alias: 'new_item'
  });
});

// Crete new furniture
router.post('/create-item', function(req, res) {
  // if (!req.user) {
  //   res.redirect(307, '/');
  // }
  itemCtl.createNewItem(req.body.name, function(err, item) {
    if (err) {
      res.send(err);
      return;
    }

    res.location('items');
    res.redirect('items');
  });
});

module.exports = router;