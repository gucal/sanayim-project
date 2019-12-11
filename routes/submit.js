var express = require('express');
var router = express.Router();
var mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'sanayim'
})

connection.connect(function (err) {
    if (err) throw err;
    console.log('DB ON');
})

router.post('/', function (req, res) {
    let sqlSorgusu = "INSERT INTO kullanicilar VALUES(NULL,'" + req.body.adSoyad + "','" + req.body.ePosta + "','" + req.body.password + "','" + req.body.markaAd + "','" + req.body.sektorAd + "','" + req.body.sehir + "')"
    connection.query(sqlSorgusu, function (err) {
        if (err) throw err;
        console.log('BAŞARILI BİR ŞEKİLDE KULLANICI EKLENDİ');
        res.render('index');
    })
})
module.exports = router;