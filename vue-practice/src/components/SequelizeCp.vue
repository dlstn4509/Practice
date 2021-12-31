<template>
  <div class="sequelize-wrap">
    <div class="table-wrap">
      <table class="table mt-5">
        <thead>
          <tr>
            <td>제목</td>
            <td>작가</td>
            <td>표지이미지</td>
            <td>판매여부</td>
          </tr>
        </thead>
        <tbody>
          <ListCp v-for="v in sequelize.books" :key="v.id" :lists="v" />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import ListCp from './sequelize/ListCp.vue';

export default {
  name: 'SequelizeCp',
  data() {
    return {};
  },
  methods: {},
  components: { ListCp },
  computed: {
    ...mapGetters(['GET_SEQUELIZE']),
    sequelize: function () {
      return this.GET_SEQUELIZE;
    },
  },
  created() {
    this.$store.dispatch('ACT_SEQUELIZE');
  },
};
</script>

<style lang="scss" scoped>
.sequelize-wrap {
  text-align: center;
  width: 1200px;
  .table-wrap {
    margin-left: 100px;
  }
}
</style>
