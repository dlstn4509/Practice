<template>
  <div class="youtube-wrapper">
    <!-- <iframe
      src="https://www.youtube.com/embed/pnNTgrIeEus?autoplay=1&mute=1"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <iframe
      src="https://www.youtube.com/embed/EkS4USRdZv4?autoplay=1&mute=1"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe> -->
  </div>
</template>

<script>
export default {
  name: 'YouTubeCp',
};
</script>

<style lang="scss" scoped>
.youtube-wrapper {
  text-align: center;
  margin-top: 100px;
  iframe {
    width: 560px;
    height: 315px;
    margin-right: 20px;
    border-radius: 3%;
  }
}
</style>
