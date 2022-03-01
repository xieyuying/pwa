const { join, resolve } = require('path');
// const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const notifier = require('node-notifier');
module.exports = {
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:3000',
    },
    static: {
      directory: join(__dirname, '../dist'),
    },
    hot: true,
    port: 3000,
  },
  output: {
    publicPath: '/',
    filename: 'scripts/[name].bundule.js',
    assetModuleFilename: 'images/[name].[ext]',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '中国联通财务共享平台',
      filename: 'index.html',
      template: resolve(__dirname, './config/template/index.ejs'),
    }),
    // new FriendlyErrorsWebpackPlugin({
    //   compilationSuccessInfo: {
    //     messages: ['You application is running here http://localhost:3000'],
    //     notes: ['💊 构建信息请及时关注窗口右上角'],
    //   },
    //   onErrors: function (severity, errors) {
    //     if (severity !== 'error') {
    //       return;
    //     }
    //     const error = errors[0];
    //     notifier.notify({
    //       title: '👒 Webpack构建失败',
    //       message: severity + ': ' + error.name,
    //       subtitle: error.file || '',
    //       icon: join(__dirname, 'icon.png'),
    //     });
    //   },
    //   clearConsole: true,
    // }),
  ],
};
