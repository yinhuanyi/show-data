module.exports = {
  devServer: {
    // 指定nodejs开发服务器的socket地址，如果端口改为8000，那么开发服务器监听的端口就是8000
    host: 'localhost',
    port: 8080,
    proxy: {
      '/activity': {
        target: 'https://www.imooc.com',
        changeOrigin: true,
        pathRewrite: {
          '/activity': '/activity'
        }
      }
    }
  }
}
