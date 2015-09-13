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

router.get('/new-list', isAdmin, function(req, res) {

  res.render('list/new_list', {
    title: 'Create New List',
    alias: 'new_list'
  });
});

router.get('/list/:list_url', function(req, res) {
  List.findOne({url: req.params.list_url}).populate('items').exec(function(err, result) {
    res.render('list/list_page', {
      alias: 'list_page',
      ctl: 'listCtl',
      list: result
    });
  });
});

function isAdmin(req, res, next) {
  console.log('USR: ', req.user.local);
  if (req.user.local && req.user.local.email)
    return next();

  res.redirect('/');
}

module.exports = router;