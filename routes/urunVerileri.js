var express = require('express');
var dbconfig = require('../database');

var mysql = require('mysql');
var connection = mysql.createConnection(dbconfig.connection);

var veriCekmeSorgusu = connection.query('SELECT * FROM `urunlistesi` WHERE `urunAdi` = "SAD"');
veriCekmeSorgusu.on('result', function (row) {
  var urunAdi = row['urunAdi'];
  var urunFiyati = row['urunFiyat'];
  var uretimDurumu = row['uretimDurumu'];
  console.log(urunAdi + urunFiyati + uretimDurumu);
});
