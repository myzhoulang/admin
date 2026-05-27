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

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// Bolt Optimization: Move static middleware above logger and parsers
// This allows static assets to be served without unnecessary logging, cookie parsing, or body parsing,
// reducing I/O and CPU overhead for every asset request.
app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));
//app.use(bodyParser.multipart());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use('/', routes);
// app.use('/users', users);

// Bolt Optimization: Refactor catch-all route for better performance and reliability
// 1. Added missing 'next' parameter.
// 2. Removed synchronous console.log calls.
// 3. Use 'req.path' to avoid query parameters interfering with extension checks.
// 4. Expanded extension list to ensure 404 assets don't unnecessarily render the SPA index.
app.get('*', function(req, res, next){
  var oPath = path.parse(req.path);
  if(['.js', '.png', '.css', '.html', '.ico', '.jpg', '.jpeg', '.gif', '.svg', '.woff', '.woff2', '.ttf', '.eot'].indexOf(oPath.ext) !== -1){
    next();
  }else{
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
