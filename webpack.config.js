var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path')

module.exports = {
  entry: './src/javascript/main.js',
  output: {
    filename: 'build/bundle.js',
    path: path.resolve(__dirname, './build'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        loaders: ['css-hot-loader'].concat(ExtractTextPlugin.extract(['css-loader', 'sass-loader']))
      },
      {
        test: /\.html$/,
        loader: "raw-loader"
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ['file-loader?name=[hash].[ext]', {
          loader: 'image-webpack-loader',
          query: {
            mozjpeg: {
              progressive: true
            },
            gifsicle: {
              interlaced: false
            },
            optipng: {
              optimizationLevel: 4
            },
            pngquant: {
              quality: '75-90',
              speed: 3
            }
          }
        }]
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
