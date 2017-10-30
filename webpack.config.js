const path = require('path');

module.exports = {
  entry: __dirname + '/src/index.js',
  output: {
    path: path.resolve('public'),
    filename: 'app.js'
  },
  devtool: 'source-maps',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            }]
      }
    ]
  }
}
