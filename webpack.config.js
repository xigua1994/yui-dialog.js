const path = require("path")
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
module.exports = {
  entry : './example/index.js',
  output:{
    filename:'[name].bundle.js',
    path:path.resolve(__dirname,'dist')
  },
  module:{
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          "babel-loader"
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'style-loader',
          'css-loader',
        ]
      },
      { 
        test: /\.styl$/, 
        use: [MiniCssExtractPlugin.loader,'css-loader','postcss-loader','stylus-loader']
      }
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      filename:'index.html',
      template:'example/index.html'
    }),
    new MiniCssExtractPlugin({
      filename:"yuidialog.min.css"
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessorOptions: {
        safe: true,
        autoprefixer: { disable: true }, 
        mergeLonghand: false,
        discardComments: {
          removeAll: true // 移除注释
        }
      },
      canPrint: true
    })
  ]
}