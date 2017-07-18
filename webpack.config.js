var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./javascript/main.js', './style/main.scss'],
  output: {
    filename: 'build/bundle.js'
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
