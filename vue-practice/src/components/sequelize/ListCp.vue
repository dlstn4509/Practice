<template>
  <tr>
    <td>{{ lists.content }}</td>
    <td>{{ lists.writer }}</td>
    <td class="tdd"><img :src="url" alt="" /></td>
    <td>{{ lists.status }}</td>
  </tr>
</template>

<script>
export default {
  name: 'ListCp',
  props: ['lists'],
  computed: {
    url() {
      return 'https://dabanbus.kr/' + this.lists.cover;
    },
  },
};
</script>

<style lang="scss" scoped>
tr {
  td {
    vertical-align: middle;
  }
  .tdd {
    max-width: 40px;
    max-height: 40px;
    img {
      max-width: 100px;
    }
  }
}
</style>
