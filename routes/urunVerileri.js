var express = require('express');

var dbconfig = require('../database');

var mysql = require('mysql');
var connection = mysql.createConnection(dbconfig.connection);

let urunler = { urunID: [], urunAdi: [], urunFiyati: [], uretimDurumu: [], kategoriAdi: [], uretimDurumu: [], urunDetaylari: [], stokSayisi: [], sehirAdi: [], urunResmi: [] }
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
  // console.log(urunID + " " + urunAdi + "  " + "  " + urunFiyati + "  " + kategoriAdi + "  " + uretimDurumu + "  " + urunDetaylari + " " + stokSayisi + " " + sehirAdi + " " + urunResmi);
  urunler.urunID.push(urunID);
  urunler.urunAdi.push(urunAdi);
  urunler.urunFiyati.push(urunFiyati);
  urunler.kategoriAdi.push(kategoriAdi);
  urunler.uretimDurumu.push(uretimDurumu);
  urunler.urunDetaylari.push(urunDetaylari);
  urunler.stokSayisi.push(stokSayisi);
  urunler.sehirAdi.push(sehirAdi);
  urunler.urunResmi.push(urunResmi);

});
module.exports = urunler;

