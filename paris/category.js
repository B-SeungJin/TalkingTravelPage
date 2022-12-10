
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
  _list.forEach(({ placeType, placeName, lat, lng }) => {
    if (placeType == 'A') {
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


 