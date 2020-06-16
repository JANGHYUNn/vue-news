module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-news' : '',
  lintOnSave: false,
  devServer: {
    proxy: 'https://api.hnpwa.com',
  },
};
