
function hideMarkers() {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
} // 마커 숨기는 코드 



function initMapA() {
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {lat: 48.863769, lng: 2.312777}
  });

  const bounds = new google.maps.LatLngBounds();
  const infowindow = new google.maps.InfoWindow();

  var i, label;
  var myIcon = new google.maps.MarkerImage("../img/마커2.png", null, null, null, new google.maps.Size(30,25));
  
  _list.forEach(({ placeType, placeName, lat, lng, imgUrl_1}) => {
    if (placeType == 'A') {
        const marker = new google.maps.Marker({
          position: { lat, lng },
          map: map,
          icon: myIcon
        });
        bounds.extend(marker.position);
        
        marker.addListener("mouseover", () => {
          infowindow.setContent(placeName);
          infowindow.open({
            anchor: marker,
            map,
          });
        });
        marker.addListener("click", () => {
          map.panTo(marker.position);
        });
        markers.push(marker)
      }
  });
  map.fitBounds(bounds);
  
}

function initMapB() {
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {lat: 48.863769, lng: 2.312777}
  });

  const bounds = new google.maps.LatLngBounds();
  const infowindow = new google.maps.InfoWindow();

  var i, label;
  _list.forEach(({ placeType, placeName, lat, lng }) => {
    if (placeType == 'B') {
        const marker = new google.maps.Marker({
          position: { lat, lng },
          label: placeType,
          map: map
        });
        markers.push(marker)
        bounds.extend(marker.position);
        marker.addListener("click", () => {
          map.panTo(marker.position);
          infowindow.setContent(placeName);
          infowindow.open({
            anchor: marker,
            map,
          });
        });
      }
  });
  map.fitBounds(bounds);
}

function initMapC() {
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {lat: 48.863769, lng: 2.312777}
  });

  const bounds = new google.maps.LatLngBounds();
  const infowindow = new google.maps.InfoWindow();

  var i, label;
  _list.forEach(({ placeType, placeName, lat, lng }) => {
    if (placeType == 'C') {
        const marker = new google.maps.Marker({
          position: { lat, lng },
          label: placeType,
          map: map
        });
        markers.push(marker)
        bounds.extend(marker.position);
        marker.addListener("click", () => {
          map.panTo(marker.position);
          infowindow.setContent(placeName);
          infowindow.open({
            anchor: marker,
            map,
          });
        });
      }
  });
  map.fitBounds(bounds);
}

function initMapD() {
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {lat: 48.863769, lng: 2.312777}
  });

  const bounds = new google.maps.LatLngBounds();
  const infowindow = new google.maps.InfoWindow();

  var i, label;
  _list.forEach(({ placeType, placeName, lat, lng }) => {
    if (placeType == 'D') {
        const marker = new google.maps.Marker({
          position: { lat, lng },
          label: placeType,
          map: map
        });
        markers.push(marker)
        bounds.extend(marker.position);
        marker.addListener("click", () => {
          map.panTo(marker.position);
          infowindow.setContent(placeName);
          infowindow.open({
            anchor: marker,
            map,
          });
        });
      }
  });
  map.fitBounds(bounds);
}

function initMapE() {
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {lat: 48.863769, lng: 2.312777}
  });

  const bounds = new google.maps.LatLngBounds();
  const infowindow = new google.maps.InfoWindow();

  var i, label;
  _list.forEach(({ placeType, placeName, lat, lng }) => {
    if (placeType == 'E') {
        const marker = new google.maps.Marker({
          position: { lat, lng },
          label: placeType,
          map: map
        });
        markers.push(marker)
        bounds.extend(marker.position);
        marker.addListener("click", () => {
          map.panTo(marker.position);
          infowindow.setContent(placeName);
          infowindow.open({
            anchor: marker,
            map,
          });
        });
      }
  });
  map.fitBounds(bounds);
}

 