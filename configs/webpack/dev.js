// development config
const merge = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  mode: 'development',
  entry: [
    './index.tsx'
  ],
  devServer: {
    port:3000
  },
  devtool: 'cheap-module-eval-source-map'
});
