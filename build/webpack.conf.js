const path = require("path")
const HtmlWebPackPlugin = require('html-webpack-plugin');
module.exports = {
  entry : './example/index.js',
  output:{
    filename:'[name].bundle.js',
    path:path.resolve(__dirname,'../dist')
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
          'style-loader',
          'css-loader',
        ]
      },
      { 
        test: /\.styl$/, 
        use: ['css-loader','postcss-loader','stylus-loader']
      }
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      filename:'index.html',
      template:'example/index.html'
    }),
  ]
}