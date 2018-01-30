const path = require('path');
/* const UglifyJsPlugin = require('uglifyjs-webpack-plugin');*/
const HelloWorldPlugin = require('./plugins/HelloWorldPlugin');
const HelloCompilationPlugin = require('./plugins/HelloCompilationPlugin');
const HelloAsyncPlugin = require('./plugins/HelloAsyncPlugin');
const FileListPlugin = require('./plugins/FileListPlugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HelloAsyncPlugin(),
    new HelloCompilationPlugin(),
    new HelloWorldPlugin({ options: true }),
    new FileListPlugin(),
    /* new UglifyJsPlugin(),*/
  ],
};
