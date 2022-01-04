<template>
  <div class="kakaoMap-wrap">
    <input type="text" class="kakaoMapTxt" value="대화동 2266-3" />
    <button class="btn btn-primary" @click="mapSearch">검색</button>
    <ListCp :kakaoMap="kakaoMap" />
    <div class="map-wrapper">
      <div id="map" class="text-center"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import ListCp from './kakaoMap/ListCp.vue';

export default {
  name: 'KakaoMapCp',
  components: { ListCp },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['GET_KAKAOMAP']),
    kakaoMap: function () {
      return this.GET_KAKAOMAP;
    },
  },
  created() {},
  mounted() {
    let mapContainer = document.getElementById('map'), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(37.67224096643057, 126.74972572696348),
        level: 3,
      };
    let map = new kakao.maps.Map(mapContainer, mapOption);
    let geocoder = new kakao.maps.services.Geocoder();
  },
  methods: {
    mapSearch() {
      let kakaoMapTxt = document.querySelector('.kakaoMapTxt').value;
      this.$store.dispatch('ACT_KAKAOMAP', kakaoMapTxt);
      geocoder.addressSearch(kakaoMapTxt, function (result, status) {
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
    },
  },
};
</script>

<style lang="scss" scoped>
.kakaoMap-wrap {
  width: 1300px;
  text-align: center;
  margin-top: 80px;
  .kakaoMapTxt {
    margin-right: 1em;
  }
}
#map {
  width: 500px;
  height: 400px;
  text-align: center;
  left: 100px;
  margin-top: 150px;
  position: absolute;
}
</style>
