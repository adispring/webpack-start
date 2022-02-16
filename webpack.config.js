const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
    search: './src/search.js'
  },
  module: {
  },
  output: {
    filename: '[name].[contenthash].bundle.js',
  },
  plugins: [
  ],
};
