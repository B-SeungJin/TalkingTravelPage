const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const dbConfig = require('./config/db.js');
var conn = dbConfig.init();
const bodyParser = require('body-parser');

dbConfig.connect(conn);

// app.engine('html', require('ejs').renderFile); // html 용

// app.set('views', './paris/views')
// app.set('view engine', 'ejs');
// app.use(express.static('paris')); // 수정필요

app.get('/', function (req, res) {
    res.send('메인');
});

app.get('/Paris', function (req, res) {
    conn.query("SELECT * FROM place", (err, data)=> {
        if(!err){
            res.send(data);
        }
        else{
            console.log('query is not excuted. select fail...\n' + err);
        }
    })
});

app.get('/about', function (req, res) {
    var sql = "SELECT * FROM place";
    conn.query(sql, function (err, rows, fields) {
        if(err) console.log('query is not excuted. select fail...\n' + err);
        res.render('about', {list : rows});
    });
});

app.listen(PORT, () => console.log('서버 시작'));