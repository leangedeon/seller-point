var createError = require('http-errors');
var express = require('express');
var path = require('path');
const mongoose = require('mongoose');
const config      = require('./config/config');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

console.log(config)
mongoose.connect(config.mongo_uri_connect, { useNewUrlParser: true, useFindAndModify: false });
mongoose.connection
  .on('connected', () => { console.log('mongo connected'); console.log('http://localhost:3000'); })
  .on('error', () => {
      throw new Error("unable to connect to database: ", config.mongo_uri_connect);
  });


module.exports = app;
