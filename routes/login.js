var express = require('express');
var router = express.Router();
var app = express();
var mysql = require('mysql');

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'sanayim'
})

connection.connect(function(err){
  if (err) throw err;
  console.log('DB ON');
})


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login',{ title: 'Sanayim üye girişi' });
});

app.post('/submitForm',function(req,res){
  let sqlSorgusu = `INSERT INTO kullanicilar VALUES(NULL,'abdurrahimbalta@outlook.com','12613','Abdurrahim BALTA','BMW','Otomobil','İstanbul');`
  connection.query(sqlSorgusu,function(err){
    if (err) throw err;
    console.log('BAŞARILI BİR ŞEKİLDE KULLANICI EKLENDİ');
  })
})

module.exports = router;