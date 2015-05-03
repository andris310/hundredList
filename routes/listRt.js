var express = require('express');
var router = express.Router();
var List = require('../models/listMdl');
require('../hb_modules/connection').db();

router.get('/all-lists', function(req, res) {
  res.render('list/lists', {
    title: 'All lists',
    alias: 'lists'
  });
});

router.get('/new-list', function(req, res) {
  res.render('list/new_list', {
    title: 'Create New List',
    alias: 'new_list'
  });
});

router.get('/list/:list_url', function(req, res) {
  List.findOne({url: req.params.list_url}).populate('items').exec(function(err, result) {
    console.log('result', result);
    res.render('list/list_page', {
      alias: 'list_page',
      ctl: 'listCtl',
      list: result
    });
  });
});

module.exports = router;