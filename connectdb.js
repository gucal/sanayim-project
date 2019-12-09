const mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'sanayim'
})

/* ID BOLUMU SUREKLI OLARAK *NULL* KALMALIDIR */
// let sqlSorgusu = `INSERT INTO kullanicilar VALUES('8','abdurrahimbalta@outlook.com','12613','Abdurrahim BALTA','BMW','Otomobil','İstanbul');`


connection.connect(function (err) {
    if (err) throw err;
    connection.query(sqlSorgusu, function (err, result) {
        if (err) throw err.message;
        console.log('Kulllanıcı başarılı bir şekilde eklendi');
    });
    connection.end(function (err) {
        if (err) throw err;
        console.log('Bağlantı sona erdi.');
    })
});
