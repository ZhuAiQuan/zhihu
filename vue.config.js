// vue.config.js
const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}
// 项目部署基础
// 默认情况下，我们假设你的应用将被部署在域的根目录下,
// 例如：https://www.my-app.com/
// 默认：'/'
// 如果您的应用程序部署在子路径中，则需要在这指定子路径
// 例如：https://www.foobar.com/my-app/
// 需要将它改为'/my-app/'
const BASE_URL = process.env.NODE_ENV === 'production'
  ? '/'
  : '/'
module.exports = {
  // 选项...
  outputDir: 'zhihu', // 输出文件目录 默认dist
  publicPath: BASE_URL, // 部署应用时的基本 URL
  lintOnSave: process.env.NODE_ENV !== 'production',
  chainWebpack: config => { // 是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改。
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'))
  },
  // 打包时不生成.map文件
  productionSourceMap: false,
  // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
  devServer: {
    disableHostCheck: false,
    host: '0.0.0.0',
    port: 8888,
    https: false,
    hotOnly: false,
    // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
    proxy: {
      '/api': {
        target: 'http://192.168.1.119:3000',
        ws: true,
        changeOrigin: true, // 是否跨域
        pathRewrite: { '^/api': '/' }
      }
    }
  }
}