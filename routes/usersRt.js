var express = require('express');
var router = express.Router();
var User = require('../models/userMdl');
var passport = require('passport');

require('../hb_modules/connection').db();

// router.get('/signup', function(req, res) {
//   res.render('register', {
//     title: 'Sign Up'
//   });
// });

// router.post('/signup', passport.authenticate('local-signup', {
//   successRedirect : '/', // redirect to the secure profile section
//   failureRedirect : '/signup' // redirect back to the signup page if there is an error
// }));

// router.post('/register', function(req, res) {
//   User.register(new User({username : req.body.username }), req.body.password, function(err, user) {
//     if (err) {
//       return res.render('register', {
//         info: 'Sorry. That username already exists. Try again.'
//       });
//     }

//     passport.authenticate('local')(req, res, function() {
//       res.redirect('/');
//     });
//   });
// });

router.get('/login', function(req, res) {
  res.render('login', {
    title: 'login',
    user : req.user,
    alias: 'login'
  });
});

router.post('/login', passport.authenticate('local-login', {
  successRedirect : '/', // redirect to the secure profile section
  failureRedirect : '/login' // redirect back to the signup page if there is an error
}));

// =====================================
// FACEBOOK ROUTES =====================
// =====================================
// route for facebook authentication and login
router.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

// handle the callback after facebook has authenticated the user
router.get('/auth/facebook/callback', passport.authenticate('facebook', {
  successRedirect : '/',
  failureRedirect : '/'
}));

router.get('/logout', function(req, res) {
  req.logout();
  req.session = null;
  res.redirect('/');
});


module.exports = router;
