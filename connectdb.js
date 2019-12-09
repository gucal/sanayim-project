const mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'sanayim'
})

connection.connect(function (err) {
    if(err) throw err;
    console.log('Veri tabanı bağlantısı başarıyla gerçekleşti.');

});