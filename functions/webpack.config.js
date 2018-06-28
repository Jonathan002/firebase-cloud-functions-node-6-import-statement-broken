var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// var nodeModules = {};
// fs.readdirSync('node_modules')
//   .filter(function (x) {
//     return ['.bin'].indexOf(x) === -1;
//   })
//   .forEach(function (mod) {
//     nodeModules[mod] = 'commonjs ' + mod;
// });

module.exports = {
  entry: './src/index.ts',
  target: 'node',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'lib')
  },
  mode: 'none',
  devtool: 'source-map',
  plugins: [],
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
    //   {test: /\.json$/, loader: ''json-loader'] }
    ]
  },
};