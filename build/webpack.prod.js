const merge = require("webpack-merge");
const common = require("./webpack.conf.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require("path");

module.exports = merge(common,{
  mode:'production',
  entry :
    './src/index.js' ,
  output:{
    filename:'YuiDialog.min.js',
    library:'YuiDialog',
    libraryExport: 'default',
    libraryTarget: 'umd',
    path:path.resolve(__dirname,'../dist')
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname,'../src')
        ],
        loader: "babel-loader"
      },
      {
        test: /\.styl$/,
        use: [MiniCssExtractPlugin.loader,'css-loader','postcss-loader','stylus-loader']
      }
    ]
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename:"YuiDialog.min.css"
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessorOptions: {
        safe: true,
        autoprefixer: { disable: true },
        mergeLonghand: false,
        discardComments: {
          removeAll: true
        }
      },
      canPrint: true
    })
  ]
})
