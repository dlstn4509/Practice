<template>
  <div class="map-wrapper">
    <div id="map" class="text-center"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'MapCp',
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement('script');
      script.onload = () => {
        kakao.maps.load(this.initMap);
      };
      script.src =
        'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=1a1e9a216c68ddc95311f81f5191d54d&libraries=services,clusterer,drawing';
      document.head.appendChild(script);
    }
  },
  methods: {
    initMap() {
      let mapContainer = document.getElementById('map'), // 지도를 표시할 div
        mapOption = {
          center: new kakao.maps.LatLng(
            this.kakaoMap.length ? this.kakaoMap[0] : 37.564343,
            this.kakaoMap.length ? this.kakaoMap[0] : 126.947613
          ),
          level: 3,
        };
      let map = new kakao.maps.Map(mapContainer, mapOption);
      let geocoder = new kakao.maps.services.Geocoder();
    },
  },
  computed: {
    ...mapGetters(['GET_KAKAOMAP']),
    kakaoMap: function () {
      return this.GET_KAKAOMAP;
    },
  },
};
</script>

<style lang="scss" scoped>
#map {
  width: 500px;
  height: 400px;
  text-align: center;
  left: 100px;
  margin-top: 150px;
  position: absolute;
}
</style>
