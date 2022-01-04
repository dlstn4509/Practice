<template>
  <div class="gongsilCp-wrapper">
    <ListCp :lists="gongsil" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ListCp from './gongsil/ListCp.vue';

export default {
  name: 'GongsilCp',
  components: { ListCp },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['GET_GONGSIL']),
    gongsil: function () {
      return this.GET_GONGSIL;
    },
  },
  created() {
    this.$store.dispatch('ACT_GONGSIL');
  },
};
</script>

<style></style>
