module.exports = {
    publicPath:'./',
    lintOnSave: false, // eslint-loader 是否在保存的时候检查
    configureWebpack:{
        resolve: {
            alias: {
              'assets': '@/assets',
              'components': '@/components',
              'views': '@/views'
            }
          }
    },
    css: {
      loaderOptions: {
          postcss: {
              plugins: [
                  require('postcss-pxtorem')({ // 把px单位换算成rem单位
                      rootValue: 75, // 换算的基数(设计图750的根字体为75)
                      // selectorBlackList: ['weui', 'mu'], // 忽略转换正则匹配项
                      propList: ['*']
                  })
              ]
          }
      }
  },
  configureWebpack: config => {
      if (process.env.NODE_ENV === 'production') {
          // 为生产环境修改配置...
      } else {
          // 为开发环境修改配置...
      }
  }
}
