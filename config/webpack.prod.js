const os = require('os');
const { join, resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');
module.exports = {
  output: {
    path: join(__dirname, '../dist/assets'),
    publicPath: '/',
    filename: 'scripts/[name].[contenthash:5].bundule.js',
    assetModuleFilename: 'images/[name].[hash:5][ext]',
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({}), new CssMinimizerPlugin()],
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      minRemainingSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 10,
      maxInitialRequests: 10,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          minChunks: 1,
          priority: -10,
          reuseExistingChunk: true,
        },
        coreLibraries: {
          chunks: 'all',
          name: 'coreLibraries',
          test: /react-query|@reduxjs|axios/,
          priority: 10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '中国联通财务共享平台APP',
      filename: 'index.html',
      template: './config/template/index.ejs',
    }),
    new GenerateSW({ 
      clientsClaim: true,
      skipWaiting: true
    })
  ],
};
