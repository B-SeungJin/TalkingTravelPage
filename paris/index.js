var mysql = require('mysql');
var db = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'seungjin1031!',
  database: 'travel'
});
db.connect();

db.query('SELECT * FROM place', function(error, results, fields){
  if (error) {
    console.log(error);
  }
  else{
    lat = results[1].lat;
    lng = results[1].lng;
  }
});

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat : lat, lng : lng },
    zoom: 12.5,
  });
}

db.end();
