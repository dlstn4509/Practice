/* 전역변수 */
let markers = [];
let geocoder = new kakao.maps.services.Geocoder();
let mapTypeControl = new kakao.maps.MapTypeControl(); // 지도, 스카이뷰
let zoomControl = new kakao.maps.ZoomControl(); // 줌 레벨

/* 최초 맵 위치 */
let mapContainer = document.getElementById('map'), // 지도를 표시할 div
  mapOption = {
    center: new kakao.maps.LatLng(37.67224096643057, 126.74972572696348),
    level: 9,
  };
let map = new kakao.maps.Map(mapContainer, mapOption);
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

/* 클러스터 */
let clusterer = new kakao.maps.MarkerClusterer({
  map: map,
  averageCenter: true,
  minLevel: 3,
  disableClickZoom: true,
});

$.get('/json/chicken.json', function (data) {
  let markers = $(data.positions).map(function (i, position) {
    return new kakao.maps.Marker({
      position: new kakao.maps.LatLng(position.lat, position.lng),
    });
  });
  clusterer.addMarkers(markers);
});

kakao.maps.event.addListener(clusterer, 'clusterclick', function (cluster) {
  let level = map.getLevel() - 1;
  map.setLevel(level, { anchor: cluster.getCenter() });
});

/* 검색 */
document.querySelector('.btn').addEventListener('click', function (mouseEvent) {
  mouseEvent.preventDefault();
  setMarkers(null);
  let searchAddr = document.querySelector('#address').value;
  geocoder.addressSearch(searchAddr, function (result, status) {
    if (status === kakao.maps.services.Status.OK) {
      let coords = new kakao.maps.LatLng(result[0].y, result[0].x);
      addMarker(coords);
      map.setCenter(coords); // 화면 가운데로 이동
    } else {
      alert('주소를 확인해주세요.');
      document.querySelector('#address').focus();
    }
  });
});

/* 맵 클릭 */
kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
  setMarkers(null);
  addMarker(mouseEvent.latLng);
});

/* 위치 받아서 마커 추가하기 */
const addMarker = (position) => {
  let marker = new kakao.maps.Marker({
    position: position,
  });
  marker.setMap(map);
  markers.push(marker);
};

/* 기존 마커 삭제 */
const setMarkers = (map) => {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
};
