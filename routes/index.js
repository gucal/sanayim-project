var express = require('express');
var router = express.Router();
var urunVerileri = require('./urunVerileri');




/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Sanayim - 81 İl, Yüzlerce Yatırımcı, Binlerce Üretici',
    urunler: urunVerileri, urunIdLength: urunVerileri.urunID.length
  });
  console.log(urunVerileri.urunAdi);
});

module.exports = router;
