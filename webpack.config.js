const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
//const extractCSS = new ExtractTextPlugin('./assets/css/[name].css');
//const CompressionPlugin = require("compression-webpack-plugin");

const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const webpackConfig = {
	devtool: "source-map",
	//entry : './assets/js/index.js',
	entry : {
		'scripts' : './assets/js',
		'styles' : './assets/css/styles.css'
		
		// scripts : './assets/js',
		// styles : './assets/css/styles.css'
	},
  output: {
	  filename : "[name].js?[hash]", // [name] --> entry name 으로 나오게 된다
	  path: __dirname + "/assets/build" // build path
	  // ,publicPath: "./assets/"
  },
  module: {
    loaders: [
      // { test: /\.html$/, loader: 'html-loader' },
      {
      	test: /\.handlebars$/,
	      loader: "handlebars-loader"
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['es2015']
        }
      }
	    ,
	    { test: /\.css$/, use: ExtractTextPlugin.extract({
		    fallback: "style-loader",
		    use: {
			    loader: "css-loader",
			    options: {
				    sourceMap: true
			    }
		    }
	    }) }
	    //{ test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader') }
	    // { // css로더를 사용하여 번들링한다.
		   //  test: /\.css$/,
		   //  loader: 'style!css'
	    // }
    ]
  },
  plugins: [
	  // new ExtractTextPlugin("styles.css?[hash]"),
	  new webpack.optimize.UglifyJsPlugin({
		  minimize: true,
		  include: /\.min\.js$/,
		  compressor: {
			  warnings: false,
		  },
		  output: {
			  comments: false
		  }
	  }),
	  
	  
	  // new OptimizeCssAssetsPlugin({
		 //  assetNameRegExp: /\.min\.css$/g,
		 //  cssProcessor: require('cssnano'),
		 //  cssProcessorOptions: { discardComments: {removeAll: true } },
		 //  canPrint: true
	  // }),
	  
	  
  	// 아래는 html minify만 제공하는 것 같다.
	  new HtmlWebpackPlugin({
      // title: 'Custom template using Handlebars',
      // template: 'index.hbs',
	    minify: {
		    collapseWhitespace: true,
		    removeComments: true,
		    removeRedundantAttributes: true,
		    removeScriptTypeAttributes: true,
		    removeStyleLinkTypeAttributes: true
	    }
	  })
	 
  ]
};


module.exports = webpackConfig;