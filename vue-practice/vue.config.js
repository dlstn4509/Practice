module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/assets/scss/_common.scss";',
      },
    },
  },
  configureWebpack: {
    // 웹팩 청크파일 크기 설정, 쪼개기 불르기
    optimization: {
      splitChunks: {
        maxSize: 1024000, // 1메가
      },
    },
  },
};
