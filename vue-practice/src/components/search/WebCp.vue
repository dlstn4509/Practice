<template>
  <div v-if="search.length" class="list-wrap">
    <table class="table wrapper">
      <thead class="thead">
        <tr>
          <td>제목</td>
          <td>내용</td>
          <td>시간</td>
          <td>URL</td>
        </tr>
      </thead>
      <tbody v-for="v in search" :key="v.id">
        <tr>
          <td>{{ v.title }}</td>
          <td>{{ v.contents }}</td>
          <td>{{ v.datetime }}</td>
          <td>{{ v.url }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'WebCp',
  props: ['search'],
};
</script>

<style lang="scss" scoped>
.list-wrap {
  text-align: center;
}
.thead {
  tr {
    max-width: 1000px;
    td {
      &:nth-child(1),
      &:nth-child(3) {
        width: 20%;
      }
      &:nth-child(2) {
        width: 20%;
      }
      &:nth-child(4) {
        width: 20%;
      }
    }
  }
}
</style>
