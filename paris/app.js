const express = require("express");
const ejs = require("ejs");
const app = express();

app.set("view engjine", "ejs");
app.set('views', './views/')

app.use(express.static(__dirname + '/'));

var mysql = require('mysql');

var db = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'seungjin1031!',
  database: 'travel'
});
db.connect(function(err){
    if(err) throw err;
    console.log('Connected');
});

module.exports = db;

app.get('/index', function(req,res) { // form /getlist 랑 연동한 ejs 연결
    var sql = "SELECT * FROM place"; // 쿼리문 날려주고 select 문
    
    db.query(sql, function(err, rows){
        if(err) throw err;  // err 가있으면 err 를 throw 한다
        res.render('index',{rows : rows});
    });
});

app.listen(2222, function(){
    console.log("실행중...");
});