
require('es6-promise').polyfill();

module.exports = {

  entry: __dirname + '/../src/js/main.js',

  output: {
    path: __dirname + '/../build',
    publicPath: '/build/',
    filename: 'build.js',
    chunkFilename: '[name].js'
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
        test: /\.css$/,
        loaders: ['style','css']
      }
    ]
  }

};
