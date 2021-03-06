var express = require('express');
var async = require('async');
var router = express.Router();
var List = require('../models/listMdl');
require('../hb_modules/connection').db();

var itemCtl = require('../controllers/item-controller');
var listCtl = require('../controllers/list-controller');
var voteCtl = require('../controllers/vote-controller');
var searchCtl = require('../controllers/search-controller');
var adminAuth = require('../hb_modules/adminAuth');

// Crete new List
router.post('/create-list', adminAuth.isAdmin, function(req, res) {
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

router.post('/checkListForItem', function(req, res) {
  console.log('req.body: ', req.body)
  listCtl.checkListForItem(req.body.listId, req.body.itemTitle, function(err, result) {
    if (err) {
      console.log('api ERR: ', err.status);
      err.status ? res.status(err.status) : res.status(500);
      res.send(err);
      return;
    }

    res.json(result);
  });
});

// Crete new item
router.post('/add-item', function(req, res) {
  if (!req.isAuthenticated()) {
    res.status(401);
    res.send({msg: 'You have to be logged in.'});
    return;
  }

  itemCtl.addItemToList(req.body, function(err, result) {
    if (err) {
      console.log('api ERR: ', err.status);
      err.status ? res.status(err.status) : res.status(500);
      res.send(err);
      return;
    }

    res.json(result);
  });
});

router.post('/getHomePageList', function(req, res) {
  listCtl.getHomePageList(function(err, result) {
    if (err) {
      res.status(500);
      res.send(err);
      return;
    }
    res.json(result);
  });
});

router.post('/getListInfo', function(req, res) {
  listCtl.getListInfo(req.body.listId, function(err, result) {
    if (err) {
      res.status(500);
      res.send(err);
      return;
    }

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

    res.json(result);
  });
});

router.get('/searchAmBooks', function(req, res) {
  searchCtl.searchAmBooks(req.query.searchParam, function(err, result) {
    if (err) {
      res.status(500);
      res.json(err);
      return;
    }

    res.json(result);
  });
});

router.post('/upvote', function(req, res) {
  if (!req.isAuthenticated()) {
    res.status(401);
    res.send({msg: 'You have to log-in to upvote'});
    return;
  }

  req.body.userId = req.user._id;
  itemCtl.upvote(req.body, function(err, result) {
    if (err) {
      if (err.status == 409) {
        err.status ? res.status(err.status) : res.status(500);
      }
      res.send(err);
      return;
    }

    res.json(result);
  });
});

router.get('/getInfo', function(req, res) {
  if (!req.isAuthenticated()) {
    return;
  }

  var payload = {
    userId: req.user._id,
    listId: req.query.listId
  };

  voteCtl.getUserVotesForList(payload, function(err, votes) {
    if (err) {
      res.send(err);
      return;
    }
    res.json({userId: req.user._id, votes: votes});
  });
});

module.exports = router;
