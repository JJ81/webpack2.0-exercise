var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpackConfig = {
  // 아래와 같이 설정을 하면 js만이 아니라 모든 에셋에 대한 경로가 정의된다.
  //
  entry: './assets/js/index.js',
  output: {
    path: './assets/build', // 한곳에만 넣을 수 있는거라면 ....
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      // { test: /\.html$/, loader: 'html-loader' },
      { test: /\.handlebars$/, loader: "handlebars-loader" },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    // html 플러그인을 사용하면 번들이 자동으로 이루어진다.
    new HtmlWebpackPlugin({
      title: 'Custom template using Handlebars',
      template: 'index.hbs'
      // filename: 'index.html' // 일단 html을 build폴더로 이동시킬 수 있었다.
    }) // info 동일한 플러그인을 배열에 여러 개를 선언하여 사용할 수 있다.
    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: 'template.html'
    // })
    // new HtmlWebpackPlugin({
    //   title : 'handlebars',
    //   filename : 'index.html'
    //   //filename : './assets/build/html/index.hbs',
    //   //template : 'index.hbs' // 특정 장소의 모든 hbs를 변경하려면 어떻게 하지??
    // })
  ]
};


module.exports = webpackConfig;
