<template>
  <div class="searchCp-wrapper">
    <table class="table text-center mt-5">
      <input type="text" />
      <button class="btn btn-primary" @click="onSearch">검색</button>
    </table>
    <table class="table">
      <thead>
        <tr>
          <img v-if="status" :src="this.search[0].thumbnail_url" alt="" />
          <h1 v-else>asdasd</h1>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'SearchCp',
  data() {
    return {
      status: false,
    };
  },
  computed: {
    ...mapGetters(['GET_SEARCH']),
    search: function () {
      return this.GET_SEARCH;
    },
  },
  created() {},
  methods: {
    onSearch() {
      this.$store.dispatch('ACT_SEARCH');
      this.status = true;
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  margin-right: 50px;
}
</style>
