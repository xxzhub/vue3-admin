// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
const name = '后台管理系统'
const port = 9527

function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'assets',
  devServer: {
    port,
    // host: '192.168.0.103',
    open: true,
    hot: true
  },
  configureWebpack: {
    name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
