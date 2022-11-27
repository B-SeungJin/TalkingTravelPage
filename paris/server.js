const express = require('express');
const app = express();
// var dbConfig = require(__dirname + '/config/db.js');
// var conn = dbConfig.init();

// dbConfig.connect(conn);

// app.get('/list', function (req, res) {
//     var sql = 'SELECT * FROM place';
//     conn.query(sql, function (err, rows, fields) {
//         if(err) console.log('query is not excuted. select fail...\n' + err);
//         else res.render('index.ejs', {list : rows});
//     });
// });

app.listen(3000, () => console.log('서버 시작'));