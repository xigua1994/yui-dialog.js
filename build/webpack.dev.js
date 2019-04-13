const merge = require("webpack-merge");
const common = require("./webpack.conf.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = merge(common,{
  mode:'development',
  module:{
    rules:[
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
    ]
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename:"yuidialog.min.css",
      chunkFilename:'[id].css'
    }),
  ]
})