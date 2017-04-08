var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname);
var APP_DIR = path.resolve(__dirname);

var plugins = [];

  // plugins.push(
  //   new webpack.optimize.UglifyJsPlugin(),
  //   new webpack.optimize.DedupePlugin(),
  //   new webpack.DefinePlugin({
  //     "process.env": {
  //       NODE_ENV: JSON.stringify("production")
  //     }
  //   }),
  //   new webpack.NoErrorsPlugin()
  // );

  plugins.push(
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    })
  );
  
var config = {
  entry: APP_DIR + '/src/index.js',
  target: 'node',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  module: {
  	loaders: [
  		{
  			test: /\.jsx?/,
  			include: APP_DIR,
        exclude: /node_modules/,
  			loader: 'babel-loader',
        query: { presets: ['es2015'] }
  		}
  	]
  },
  plugins: plugins
};

module.exports = config;
