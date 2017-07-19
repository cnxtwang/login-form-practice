module.exports = {
  entry: ['./src/javascript/main.js', './index.html'],
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build/',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(html)$/,
        loader: 'file-loader?name=[path][name].[ext]!extract-loader!html-loader'
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
  }
}
