var express = require('express');
var router = express.Router();
var dbconfig = require('../database');

var mysql = require('mysql');
var connection = mysql.createConnection(dbconfig.connection);

router.post('/', function (req, res) {
  let sqlSorgusu = "INSERT INTO urunlistesi VALUES(NULL,'" + req.body.urunAd + "','" + req.body.urunFiyat + "','" + req.body.kategoriAd + "','" +
    req.body.uretimDurum + "','" + req.body.urunBilgi + "','" + req.body.stokSayisi + "','" + req.body.sehirAdi + "','" + req.body.gorselEklenen + "');"

  connection.query(sqlSorgusu, function (err) {
    if (err) throw err;
    console.log('ÜRÜN BAŞARILI BİR ŞEKİLDE EKLENDİ');
    res.redirect('/');
  })
});

module.exports = router;