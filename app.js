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
// ⚡ Bolt: express.static is moved up to serve static files before any unnecessary middleware (logger, body-parser, cookie-parser)
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
//app.use(bodyParser.multipart());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use('/', routes);
// app.use('/users', users);

// ⚡ Bolt: Move API routes before the catch-all '*' route to avoid unnecessary logic in the catch-all.
//
app.post('/api/upload', upload.uploadFile);

//
app.post('/api/register', register.register);

app.get('*', function(req, res, next){
  // ⚡ Bolt: Removed console.log and path.parse to optimize performance.
  // ⚡ Bolt: Using regex for a faster check on static file extensions.
  if (/\.(js|png|css)$/.test(req.url)) {
    next();
  } else {
    res.render('index');
  }
});


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
