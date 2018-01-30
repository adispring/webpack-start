const path = require('path');
const HelloWorldPlugin = require('./plugins/HelloWorldPlugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HelloWorldPlugin({ options: true }),
    new UglifyJsPlugin(),
  ],
};
