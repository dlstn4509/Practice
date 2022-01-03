<template>
  <h1 class="logo">
    <router-link to="/">카카오 검색</router-link>
    <span> /</span>
    <router-link to="/canvas">캔버스</router-link>
    <span> /</span>
    <router-link to="/sequelize">외부 api 가져오기</router-link>
    <span> /</span>
    <router-link to="/kakaomap">카카오 지도</router-link>
  </h1>
</template>

<script>
export default {
  name: 'Logo',
};
</script>

<style lang="scss" scoped>
h1.logo {
  padding: 0.5em;
  a {
    margin-left: 0.5em;
  }
}
</style>
