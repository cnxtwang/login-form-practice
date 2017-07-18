var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './style/main.scss',
  output: {
    filename: 'build/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
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
