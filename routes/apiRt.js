var express = require('express');
var async = require('async');
var router = express.Router();
var List = require('../models/listMdl');
require('../hb_modules/connection').db();

var itemCtl = require('../controllers/item-controller');
var listCtl = require('../controllers/list-controller');
var searchCtl = require('../controllers/search-controller');

router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });
});

// Crete new List
router.post('/create-list', function(req, res) {
  // if (!req.user) {
  //   res.redirect(307, '/');
  // }
  var list = new List();

  list.name = req.body.name;
  list.url = req.body.url;

  list.save(function(err) {
    if (err) {
      res.status(500);
      res.send('There was a problem adding information to the database.');
      return;
    }

    res.json({ message: 'List created!' });
  });
});

// Crete new item
router.post('/add-item', function(req, res) {
  console.log('inside api!!!!')
  // if (!req.user) {
  //   res.redirect(307, '/');
  // }
  var payload = {
    name: req.body.name,
    listId: req.body.listId
  };
  console.log(payload);

  itemCtl.createNewItem(req.body.name, req.body.listId, function(err, result) {
    if (err) {
      res.send(err);
      return;
    }

    res.json(result);
  });
});

router.post('/getListInfo', function(req, res) {
  console.log('/getListInfo: req.body: ', req.body);
  listCtl.getListInfo(req.body.listId, function(err, result) {
    if (err) {
      res.send(err);
      return;
    }
    console.log('REsult in router', result);
    res.json(result);
  });
});

router.post('/getAllLists', function(req, res) {
  listCtl.getAllLists(function(err, result) {
    if (err) {
      res.status(500);
      res.json(err.Error[0]);
      return;
    }
    console.log(result);
    res.json(result);
  });
});

router.get('/searchAmBooks', function(req, res) {
  searchCtl.searchAmBooks(req.query.searchParam, function(err, result) {
    if (err) {
      console.log('inside ERR on api:')
      res.status(500);
      res.json(err);
      return;
    }

    console.log('AM results: ', result);
    var books = processAmBooks(result);
    res.json(books);
  });
});

function processAmBooks(books) {
  var processed = [];
  for(var i = 0; i < books.length; i++) {
    console.log(books[i]);
    var book = {};

    book.title = books[i].ItemAttributes[0].Title[0];
    book.author = books[i].ItemAttributes[0].Author[0];
    book.isbn = books[i].ItemAttributes[0].ISBN[0];
    book.smallImage = books[i].SmallImage[0].URL[0];
    book.largeImage = books[i].LargeImage[0].URL[0];
    book.detailPageUrl = books[i].DetailPageURL[0];

    processed.push(book);
  }

  return processed;
}


module.exports = router;