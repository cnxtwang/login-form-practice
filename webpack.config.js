var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path')

module.exports = {
  entry: ['./javascript/main.js', './style/main.scss'],
  output: {
    filename: 'build/bundle.js',
    path: path.resolve(__dirname, './build'),
    publicPath: process.env.API_ENV ? './' : '/'
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      },
      {
        test: /\.html$/,
        loader: "raw-loader"
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'build/bundle.css',
      allChunks: true
    })
  ]
}
