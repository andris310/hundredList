var express = require('express');
var app = express();

var jade = require('jade');
var stylus = require('stylus');
var passport = require('passport');

var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

var itemRt = require('./routes/itemRt');
var staticRt = require('./routes/staticRt');
var usersRt = require('./routes/usersRt');
var listRt = require('./routes/listRt');
var apiRt = require('./routes/apiRt');
var User = require('./models/userMdl');

require('./config/passport')(passport); // pass passport for configuration

// view engine setup
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(
  stylus.middleware({
    src: path.resolve(__dirname),
    dest: path.resolve(__dirname, 'public'),
    compile: compile
  })
);

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/views', express.static(__dirname + '/views'));
app.use(express.static(path.resolve(__dirname, 'public')));

// required for passport
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  unset: 'destroy',
  cookie: {maxAge: 1000 * 60 * 60 * 24},
  store: new MongoStore({
      url: process.env.MONGO_URL
    })
  })
); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next) {
  if (req.session && req.session.passport.user) {
    User.findOne({ _id: req.session.passport.user }, function(err, user) {
      // console.log('found USER: ', user)
      if (user) {
        req.user = user;
        delete req.user.local.password; // delete the password from the session
        req.session.user = user;  //refresh the session value
        res.locals.user = user;
      }
      // finishing processing the middleware and run the route
      next();
    });
  } else {
    next();
  }
});

app.use('/', staticRt);
app.use('/', usersRt);
app.use('/', itemRt);
app.use('/', listRt);
app.use('/api', apiRt);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  res.render('status/404', {
    alias: 'status',
    url: req.url
  });
  return;
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

function compile(str, path) {
  return stylus(str).set('filename', path);
}

module.exports = app;
