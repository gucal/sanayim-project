var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// var mysql = require('mysql');

// let connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'password',
//   database: 'sanayim'
// })

// connection.connect(function(err){
//   if (err) throw err;
//   console.log('DB ON');
// })


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var addProductRouter = require('./routes/addProduct');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('jspages'));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/giris', loginRouter);
app.use('/urun', addProductRouter);

// app.post('/submitForm',function(req,res){
//   let sqlSorgusu = "INSERT INTO kullanicilar VALUES(NULL,'"+req.body.adSoyad+"','"+req.body.ePosta+"','"+req.body.password+"','"+req.body.markaAd+"','"+req.body.sektorAd+"','"+req.body.sehir+"')"
//   connection.query(sqlSorgusu,function(err){
//     if (err) throw err;
//     console.log('BAŞARILI BİR ŞEKİLDE KULLANICI EKLENDİ');
//   })
// })

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

module.exports = app;
