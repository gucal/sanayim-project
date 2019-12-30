var express = require('express');

var dbconfig = require('../database');

var mysql = require('mysql');
var connection = mysql.createConnection(dbconfig.connection);

let urunler = { urunID: null, urunAdi: null, urunFiyati: null, kategoriAdi: null, urunDetaylari: null }
var veriCekmeSorgusu = connection.query('SELECT * FROM `urunlistesi`');
veriCekmeSorgusu.on('result', function (row) {
  var urunID = row['id'];
  var urunAdi = row['urunAdi'];
  var urunFiyati = row['urunFiyat'];
  var kategoriAdi = row['kategoriAdi'];
  var uretimDurumu = row['uretimDurumu'];
  var urunDetaylari = row['urunDetaylari'];
  var stokSayisi = row['stokSayisi'];
  var sehirAdi = row['sehirSayisi'];
  var urunResmi = row['urunResmi'];
  if (uretimDurumu == 0) uretimDurumu = "Üretilecek";
  else if (uretimDurumu == 1) uretimDurumu = "Üretildi";
  console.log(urunID + " " + urunAdi + "  " + "  " + urunFiyati + "  " + kategoriAdi + "  " + uretimDurumu + "  " + urunDetaylari + " " + stokSayisi + " " + sehirAdi + " " + urunResmi);
  urunler.urunID = urunID;
  urunler.urunAdi = urunAdi;
  urunler.urunFiyati = urunFiyati;
  urunler.kategoriAdi = kategoriAdi;
  urunler.urunDetaylari = urunDetaylari;


});
module.exports = urunler;

