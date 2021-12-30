<template>
  <h1 class="logo">
    <router-link to="/">카카오 검색</router-link>
  </h1>
</template>

<script>
export default {
  name: 'Logo',
};
</script>

<style lang="scss" scoped>
h1.logo {
  a {
    display: block;
    padding: 0.5em;
  }
}
</style>
