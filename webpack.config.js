const path = require('path');
/* const UglifyJsPlugin = require('uglifyjs-webpack-plugin');*/
const HelloWorldPlugin = require('./plugins/HelloWorldPlugin');
const HelloCompilationPlugin = require('./plugins/HelloCompilationPlugin');
const HelloAsyncPlugin = require('./plugins/HelloAsyncPlugin');
const FileListPlugin = require('./plugins/FileListPlugin');
const CompilationInspectPlugin = require('./plugins/CompilationInspectPlugin');
const WatchFilePlugin = require('./plugins/WatchFilePlugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    /* new UglifyJsPlugin(),*/
    /* new HelloAsyncPlugin(),*/
    /* new HelloCompilationPlugin(),*/
    /* new HelloWorldPlugin({ options: true }),*/
    /* new FileListPlugin(),*/
    /* new CompilationInspectPlugin(),*/
    /* new WatchFilePlugin(),*/
    new webpack.ProvidePlugin({
      _: 'lodash',
    }),
  ],
};
