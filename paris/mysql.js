var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'seungjin1031!',
  database : 'travel'
});
 
connection.connect();
 
connection.query('SELECT * FROM place', function (error, results, fields) {
  if (error) {
    console.log(error);
  }
  console.log(results);
});

connection.end();