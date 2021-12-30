<template>
  <header class="header-wrapper">
    <Logo />
  </header>
</template>

<script>
import Logo from './Logo.vue';

export default {
  name: 'Header',
  components: { Logo },
};
</script>

<style lang="scss" scoped>
.header-wrapper {
  @include flex($h: space-between);
  background-color: $dark-color;
  color: $light-color;
  font-size: 1.5em;
}
</style>
