var express = require('express');
var dbconfig = require('../database');

var mysql = require('mysql');
var connection = mysql.createConnection(dbconfig.connection);

var veriCekmeSorgusu = connection.query('SELECT * FROM `urunlistesi` WHERE `urunAdi` = "SAD"');
veriCekmeSorgusu.on('result', function (row) {

  var urunAdi = row['urunAdi'];
  var urunFiyati = row['urunFiyat'];
  var uretimDurumu = row['uretimDurumu'];
  var urunDetaylari = row['urunDetaylari'];

  if (uretimDurumu == 0) uretimDurumu = "Üretilecek";
  else if (uretimDurumu == 1) uretimDurumu = "Üretildi";

  console.log(urunAdi + "  " + "  " + urunFiyati + "  " + "  " + uretimDurumu + "  " + urunDetaylari);
});
