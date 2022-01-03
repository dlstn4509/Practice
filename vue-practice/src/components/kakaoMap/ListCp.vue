<template>
  <div>
    <table class="table mt-5">
      <thead>
        <tr>
          <td>시, 도</td>
          <td>구</td>
          <td>동</td>
          <td>신주소</td>
          <td>구주소</td>
        </tr>
      </thead>
      <tbody v-for="v in kakaoMap" :key="v.id">
        <tr>
          <td>{{ v.address.region_1depth_name }}</td>
          <td>{{ v.address.region_2depth_name }}</td>
          <td>{{ v.address.region_3depth_name }}</td>
          <td>{{ v.road_address.address_name }}</td>
          <td :v-if="v.address.address_name">{{ v.address.address_name }}</td>
        </tr>
      </tbody>
    </table>
    <!-- <MapCp /> -->
  </div>
</template>

<script>
import MapCp from './MapCp.vue';

export default {
  name: 'ListCp',
  components: { MapCp },
  props: ['kakaoMap'],
};
</script>

<style></style>
