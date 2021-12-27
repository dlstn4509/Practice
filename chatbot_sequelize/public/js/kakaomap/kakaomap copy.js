let container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
let options = {
  //지도를 생성할 때 필요한 기본 옵션
  center: new kakao.maps.LatLng(37.67224096643057, 126.74972572696348), //지도의 중심좌표.
  level: 3, //지도의 레벨(확대, 축소 정도)
};
let map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

/* ----------------------------------------------- */
kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
  let markers = [];
  let latlng = mouseEvent.latLng;
  map.panTo(new kakao.maps.LatLng(latlng.getLat(), latlng.getLng()));
  let markerPosition = new kakao.maps.LatLng(latlng.getLat(), latlng.getLng());
  let marker = new kakao.maps.Marker({
    position: markerPosition,
  });
  marker.setMap(map);
  markers.push(marker);
});

/* ----------------------------------------------- */
var geocoder = new kakao.maps.services.Geocoder();
geocoder.addressSearch(
  '제주특별자치도 제주시 첨단로 242',
  function (result, status) {
    // 정상적으로 검색이 완료됐으면
    if (status === kakao.maps.services.Status.OK) {
      var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

      // 결과값으로 받은 위치를 마커로 표시합니다
      var marker = new kakao.maps.Marker({
        map: map,
        position: coords,
      });

      // 인포윈도우로 장소에 대한 설명을 표시합니다
      var infowindow = new kakao.maps.InfoWindow({
        content:
          '<div style="width:150px;text-align:center;padding:6px 0;">우리회사</div>',
      });
      infowindow.open(map, marker);

      // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
      map.setCenter(coords);
    }
  }
);
