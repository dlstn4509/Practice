<template>
  <div v-if="search.length" class="vclip-wrapper">
    <ul v-for="v in search" :key="v.id" class="vclip-wrap">
      <li class="vclip">
        <img :src="v.thumbnail" alt="" class="thumb" />
        <div class="main">
          <div class="title">{{ v.title }}</div>
          <div class="play-time">{{ v.paly_time }}</div>
          <div class="url">
            <a :href="v.url" target="_blank">{{ v.url }}</a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'VclipCp',
  props: ['search'],
};
</script>

<style lang="scss" scoped>
.vclip-wrapper {
  text-align: center;
  .vclip-wrap {
    margin: 1em;
    display: inline-block;
    width: 1200px;
    .vclip {
      display: flex;
      .thumb {
        margin-right: 0.5em;
      }
    }
  }
}
</style>
