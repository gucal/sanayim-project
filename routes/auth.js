var express = require('express');
var router = express.Router();
var session = require('express-session');
var bodyParser = require('body-parser');
var dbconfig = require('../database');

var mysql = require('mysql');
var connection = mysql.createConnection(dbconfig.connection);


router.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

router.post('/', function (req, res) {
  var username = req.body.username;
  var password = req.body.password;

  if (username && password) {
    connection.query("SELECT * FROM kullanicilar WHERE kullaniciEposta = ?  AND kullaniciSifre  = ?", [username, password], function (error, results, fields) {
      console.log(results);
      if (results.length > 0) {
        req.session.loggedin = true;
        req.session.username = username;
        console.log('GİRİŞ BAŞARILI');
        res.redirect('/');
      } else {
        console.log('GİRİŞ BAŞARISIZ')
        res.render('login');
      }
    })
  }
  else {
    console.log('BOŞ BIRAKILAMAZ');
    res.render('login');
  }
}
)

module.exports = router;