var express = require('express');
var router = express.Router();
var urunVerileri = require('./urunVerileri');
var dbconfig = require('../database');
var mysql = require('mysql');
var connection = mysql.createConnection(dbconfig.connection);



router.get('/details/:id', function (req, res) {
  var veriCekmeSorgusu = connection.query('SELECT * FROM urunlistesi  HAVING id=' + req.params.id);
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
    if (uretimDurumu == 1) {
      uretimDurumu = "Satışa hazır.";
    } else { uretimDurumu = "İstek doğrultusunda üretilir."; }
    res.render('details', { title: 'Detaylar', urunID, urunAdi, urunFiyati, kategoriAdi, uretimDurumu, urunDetaylari, stokSayisi, sehirAdi, urunResmi })
  })
});

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Sanayim - 81 İl, Yüzlerce Yatırımcı, Binlerce Üretici',
    urunler: urunVerileri, urunIdLength: urunVerileri.urunID.length
  });
  console.log(urunVerileri.urunAdi);
});


module.exports = router;
