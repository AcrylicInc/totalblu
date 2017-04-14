var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname);
var APP_DIR = path.resolve(__dirname);

var plugins = [
  new ExtractTextPlugin({ filename: 'assets/css/style.css', disable: false, allChunks: true })
];


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
  			test: /\.js?/,
  			include: APP_DIR,
        exclude: '/node_modules/',
  			loader: 'babel-loader',
        query: { presets: ["es2015", "react", "stage-0"] }
  		},
      {
        test: /\.scss$/,
        exclude: [/node_modules/, /src\/containers\/mixins.scss$/],
        loader: ExtractTextPlugin.extract('css-loader!sass-loader')
      },
  	]
  },
  plugins: plugins,
};


      // {
      //   loader: 'sass-resources-loader',
      //   options: {
      //     // Provide path to the file with resources
      //     resources: ExtractTextPlugin({ filename: './src/containers/mixins.scss', disable: false, allChunks: true }),
      //   },
      // },

module.exports = config;
