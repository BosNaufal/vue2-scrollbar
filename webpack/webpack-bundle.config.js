
var webpack = require('webpack');
var combineLoaders = require('webpack-combine-loaders');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
require('es6-promise').polyfill();

var npm = require("../package.json");

module.exports = {

  entry: __dirname + '/../src/js/plugin.js',

  output: {
    path: __dirname + '/../dist/',
    publicPath: '../dist/',
    filename: npm.name + '.js',
    libraryTarget: "umd",
    library: "Vue2Scrollbar"
  },

  externals: {
    "vue": "Vue"
  },


  module: {

    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },

      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ["es2015"],
          plugins: ["transform-object-rest-spread","transform-vue-jsx"]
        }
      },

      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
      },

      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
      },

      {
        test: /\.css$/,
        loaders: ['style','css']
      },

      {
        test: /\.json$/,
        loader: 'json'
      },
    ]
  },

  plugins: [

    new webpack.BannerPlugin((
      [
        "Copyright (c) 2016 Naufal Rabbani (http://github.com/BosNaufal)",
        "\n",
        "Licensed Under MIT (http://opensource.org/licenses/MIT)",
        "\n",
        "\n",
        "Vue 2 Scrollbar @ Version "+ npm.version,
        "\n"
      ])
      .join(",")),

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),

  ]

};
