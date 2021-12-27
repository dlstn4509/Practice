let mapContainer = document.getElementById('map'), // 지도를 표시할 div
  mapOption = {
    center: new kakao.maps.LatLng(37.67224096643057, 126.74972572696348),
    level: 3,
  };
let map = new kakao.maps.Map(mapContainer, mapOption);
let geocoder = new kakao.maps.services.Geocoder();

document.querySelector('.btn').addEventListener('click', function (e) {
  e.preventDefault();
  let searchAddr = document.querySelector('#address').value;
  geocoder.addressSearch(searchAddr, function (result, status) {
    if (status === kakao.maps.services.Status.OK) {
      let coords = new kakao.maps.LatLng(result[0].y, result[0].x);
      let marker = new kakao.maps.Marker({
        map: map,
        position: coords,
      });
      map.setCenter(coords);
    } else {
      alert('주소를 확인해주세요.');
      document.querySelector('#address').focus();
    }
  });
});

kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
  (function setMarkers(map) {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(map);
    }
  })(null);
  addMarker(mouseEvent.latLng);
});
var markers = [];
function addMarker(position) {
  var marker = new kakao.maps.Marker({
    position: position,
  });
  marker.setMap(map);
  markers.push(marker);
}
