module.exports = {
  devServer: {
    proxy: "https://infinite-headland-81013.herokuapp.com",
  },
  pwa: {
    workboxOptions: {
      exclude: [/_redirects/],
    },
  },
};
