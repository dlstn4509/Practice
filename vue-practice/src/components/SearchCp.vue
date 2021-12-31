<template>
  <div class="searchCp-wrapper wrapper">
    <table class="table text-center my-5">
      <select name="searchSelect" id="searchSelect">
        <option value="web">웹문서</option>
        <option value="vclip">동영상</option>
        <option value="image" selected>이미지</option>
        <option value="blog">블로그</option>
        <option value="book">책</option>
        <option value="cafe">카페</option>
      </select>
      <input type="text" class="search-input" />
      <button class="btn btn-primary" @click="onSearch">검색</button>
    </table>
    <ImageCp :search="search" v-if="this.cate === 'image'" />
    <WebCp :search="search" v-if="this.cate === 'web'" />
    <VclipCp :search="search" v-if="this.cate === 'vclip'" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ImageCp from './search/ImageCp.vue';
import WebCp from './search/WebCp.vue';
import VclipCp from './search/VclipCp.vue';

export default {
  name: 'SearchCp',
  components: { ImageCp, WebCp, VclipCp },
  data() {
    return {
      cate: '',
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
      let searchInput = document.querySelector('.search-input').value;
      let searchSelect = document.querySelector('#searchSelect').value;
      this.$store.dispatch('ACT_SEARCH', { searchInput, searchSelect });
      this.cate = searchSelect;
    },
  },
};
</script>

<style lang="scss" scoped>
.search-input {
  margin-right: 50px;
  margin-left: 1em;
}
</style>
