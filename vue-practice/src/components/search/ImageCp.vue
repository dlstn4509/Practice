<template>
  <div v-if="search.length" class="list-wrap">
    <div v-for="v in search" :key="v.id" class="td">
      <img :src="v.thumbnail_url" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageCp',
  props: ['search'],
};
</script>

<style lang="scss" scoped>
.list-wrap {
  text-align: center;
  .td {
    display: inline-block;
    padding: 0.7em;
  }
}
</style>
