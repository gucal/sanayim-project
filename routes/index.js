var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sanayim - 81 İl, Yüzlerce Yatırımcı, Binlerce Üretici' });

});

module.exports = router;
