const { defineConfig } = require('@vue/cli-service')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = defineConfig({

  pages: {
    index: {
      entry: './examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
        .add('/packages')
        .end()
      .use('babel')
        .loader('babel-loader')
  },
  configureWebpack:{
    plugins:[
      // new BundleAnalyzerPlugin()
    ]
  },
  transpileDependencies: true,
  lintOnSave:false,
  productionSourceMap:false
})
