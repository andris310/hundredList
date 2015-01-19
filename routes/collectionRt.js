var express = require('express');
var router = express.Router();
var Collection = require('../models/collectionMdl');
require('../hb_modules/connection').db();

router.get('/collections', function(req, res) {
  Collection.find(function(err, collections) {
    if (err) {
      res.send(err);
      return;
    }

    res.render('collection/collections', {
      title: 'Collections',
      alias: 'collections',
      collections: collections
    });
  });
});

router.get('/new-collection', function(req, res) {
  res.render('collection/new_collection', {
    title: 'Create New Collection',
    alias: 'new_collection'
  });
});

// Crete new furniture
router.post('/create-collection', function(req, res) {
  // if (!req.user) {
  //   res.redirect(307, '/');
  // }

  var collection = new Collection();

  collection.name = req.body.name;

  collection.save(function(err) {
    if (err) {
      res.send('There was a problem adding information to the database.');
      return;
    }

    res.location('collections');
    res.redirect('collections');
  });
});

module.exports = router;