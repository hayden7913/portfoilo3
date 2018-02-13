const path =  require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  // devtool: 'cheap-module-eval-source-map',
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /(\.scss$|\.css$)/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src', 'styles'),
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
