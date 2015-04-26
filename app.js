var express = require('express');
var app = express();

var jade = require('jade');
var stylus = require('stylus');

var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var itemRt = require('./routes/itemRt');
var staticRt = require('./routes/staticRt');
var usersRt = require('./routes/usersRt');
var listRt = require('./routes/listRt');
var apiRt = require('./routes/apiRt');


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
app.use(express.static(path.resolve(__dirname, 'public')));

app.use('/', staticRt);
app.use('/', usersRt);
app.use('/', itemRt);
app.use('/', listRt);
app.use('/api', apiRt);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
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
