var express = require('express');
var router = express.Router();
var List = require('../models/listMdl');
require('../hb_modules/connection').db();

/* GET home page. */
router.get('/', function(req, res) {
  List.findOne({url: 'hundr'}).populate('items').exec(function(err, result) {
    if (err) {
      res.status(500);
      res.send(err);
    }

    res.render('home', {
      title: 'Best Hundred',
      ctl: 'listCtl',
      alias: 'home',
      list: result
    });
  });
});

router.get('/about', function(req, res) {
  res.render('about', {
    title: 'About',
    alias: 'about'
  });
});

router.get('/directives/:name', function(req, res) {
  res.render('directives/' + req.params.name);
});

module.exports = router;
