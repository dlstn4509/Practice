/* 전역변수 */
let markers = [];
let geocoder = new kakao.maps.services.Geocoder();
let mapTypeControl = new kakao.maps.MapTypeControl(); // 지도, 스카이뷰
let zoomControl = new kakao.maps.ZoomControl(); // 줌 레벨

/* 최초 맵 위치 */
let mapContainer = document.getElementById('map'), // 지도를 표시할 div
  mapOption = {
    center: new kakao.maps.LatLng(37.566513918661066, 126.97796545433206),
    level: 6,
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
  searchAddrFromCoords(mouseEvent.latLng, function (result, status) {
    console.log(result);
    console.log(status);
  });
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

/* 리스트에서 위도 경도 뽑아내기 */
window.onload = function () {
  document.querySelectorAll('.img').forEach((v, i) => {
    v.addEventListener('click', function (e) {
      setMarkers(null);
      let lat = document
        .querySelector(`.lat${i}`)
        .innerHTML.split(':')[1]
        .trim();
      let lng = document
        .querySelector(`.lng${i}`)
        .innerHTML.split(':')[1]
        .trim();

      let coords = new kakao.maps.LatLng(lat, lng);
      addMarker(coords);
      map.setCenter(coords); // 화면 가운데로 이동

      let addr = getAddr(lat, lng);
    });
  });
};

/* 좌표로 주소 검색 */
function getAddr(lat, lng) {
  let arr = [];
  let coord = new kakao.maps.LatLng(lat, lng);
  geocoder.coord2Address(
    coord.getLng(),
    coord.getLat(),
    async function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        await arr.push(result[0]);
      }
    }
  );
  return arr;
}
