var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('home', {
    title: 'Best Hundred',
    alias: 'home'
  });
});

router.get('/about', function(req, res) {
  res.render('about', {
    title: 'About',
    alias: 'about'
  });
});

module.exports = router;
