<template>
  <div id="app-wrapper">
    <Header />
    <transition name="slide-scale" mode="out-in">
      <router-view class="router-view" />
    </transition>
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Header from './components/inc/Header.vue';
import Footer from './components/inc/Footer.vue';

export default {
  name: 'App',
  components: { Header, Footer },
};
</script>

<style lang="scss">
.app-wrapper {
  height: 100vh;
}
</style>
