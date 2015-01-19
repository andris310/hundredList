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

    res.render('items', {
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

// Crete new furniture
router.post('/create-item', function(req, res) {
  // if (!req.user) {
  //   res.redirect(307, '/');
  // }

  var item = new Item();

  item.name = req.body.name;

  item.save(function(err) {
    if (err) {
      res.send('There was a problem adding information to the database.');
      return;
    }

    res.location('items');
    res.redirect('items');
  });
});

module.exports = router;