const express = require("express");
var http = require('http');
const ejs = require("ejs");
const app = express();

app.set("view engjine", "ejs");
app.set('views', './views/index.ejs')
app.engine('ejs', require('ejs').__express)
app.use(express.json());

app.use(express.static(__dirname + '/views'));


db.connect(function(err){
    if(err) throw err;
    console.log('Connected');
});

app.get('/index', function(req,res) { // form /getlist 랑 연동한 ejs 연결
    var sql = "SELECT * FROM place"; // 쿼리문 날려주고 select 문
    
    db.query(sql, function(err, rows){
        if(err) throw err;  // err 가있으면 err 를 throw 한다
        rows = JSON.stringify(rows);
        res.render('index',{rows : rows});
    });
});

module.exports = db;

app.listen(2222, function(){
    console.log("실행중...");
});

/*
const express = require('express');
const app = express();
const fs = require('fs');
const ejs = require('ejs');
const mysql = require('mysql');

const db = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'seungjin1031!',
  database: 'travel'
});

const mainPage = fs.readFileSync('./index.ejs', 'utf8');

app.get('/', (req, res) => {
  var page = ejs.render(mainPage, {
      title: "Temporary Title",
  });
  res.send(page);
});


app.get('/getdata?', function(req,res) { // form /getlist 랑 연동한 ejs 연결

  client.query("SELECT * FROM place", function(err, result, fields){
      if(err) throw err;  // err 가있으면 err 를 throw 한다
      else {
          var page = ejs.render(mainPage, {
            title: "Temporary Title",
            data: result,
          });
          res.send(page);
      }
  });
});


app.listen(2222, function(){
    console.log("실행중...");
});
*/
