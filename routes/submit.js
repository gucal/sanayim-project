var express = require('express');
var router = express.Router();
var dbconfig = require('../database');

var mysql = require('mysql');
var connection = mysql.createConnection(dbconfig.connection);


router.post('/', function (req, res) {
    let sqlSorgusu = "INSERT INTO kullanicilar VALUES(NULL,'" + req.body.ePosta + "','" + req.body.password + "','" + req.body.adSoyad + "','" + req.body.markaAd + "','" + req.body.sektorAd + "','" + req.body.sehir + "')"
    connection.query(sqlSorgusu, function (err) {
        if (err) throw err;
        console.log('BAŞARILI BİR ŞEKİLDE KULLANICI EKLENDİ');
        res.render('index', { title: 'Sanayim - 81 İl, Yüzlerce Yatırımcı, Binlerce Üretici' });
    })
})
module.exports = router;