const path = require('path');
const webpack = require('webpack');
/* const UglifyJsPlugin = require('uglifyjs-webpack-plugin');*/
/* const HelloWorldPlugin = require('./plugins/HelloWorldPlugin');*/
/* const HelloCompilationPlugin = require('./plugins/HelloCompilationPlugin');*/
/* const HelloAsyncPlugin = require('./plugins/HelloAsyncPlugin');*/
/* const FileListPlugin = require('./plugins/FileListPlugin');*/
/* const CompilationInspectPlugin = require('./plugins/CompilationInspectPlugin');*/
/* const WatchFilePlugin = require('./plugins/WatchFilePlugin');*/

module.exports = {
  entry: {
    polyfills: './src/polyfills.js',
    index: './src/index.js',
    demo: './src/export-demo.js',
  },
  module: {
    rules: [{
      test: require.resolve('./src/export-demo.js'),
      use: [{
        loader: 'expose-loader',
        options: 'appName',
      }],
    }],
  },
  output: {
    filename: '[name].bundle.js',
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
      /* _: 'lodash',*/
      join: ['lodash', 'join'],
    }),
  ],
};
