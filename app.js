var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var util = require('util');

// mongo 
var mongo = require('./routes/mongo')
mongo.connectionMongo()

var routes = require('./routes/index');
var users = require('./routes/users');
var upload = require('./routes/upload');

var register = require('./routes/register');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');

// Move static middleware up to bypass logger and parsers for static assets
app.use(express.static(path.join(__dirname, 'public')));
// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
//app.use(bodyParser.multipart());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use('/', routes);
// app.use('/users', users);

// Catch-all route for SPA - optimized to avoid unnecessary processing for missing static assets
app.get('*', function(req, res, next){
  // Use path.extname(req.path) to correctly identify extensions even with query parameters
  var ext = path.extname(req.path);
  var staticExts = ['.js', '.png', '.css', '.html', '.ico', '.jpg', '.jpeg', '.gif', '.svg', '.woff', '.woff2', '.ttf', '.eot'];

  if (staticExts.indexOf(ext) !== -1) {
    // If it looks like a static asset but reached here, it's a 404
    next();
  } else {
    // Render the SPA entry point
    res.render('index');
  }
});

//
app.post('/api/upload', upload.uploadFile);

//
app.post('/api/register', register.register);


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
  console.log('error')
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
