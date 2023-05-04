module.exports = {
  devServer: {
    port: 8324,
    open: true,
    proxy: {
      '/api': {
        target:'http://byg5f2.natappfree.cc',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  }
}
