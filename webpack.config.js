var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    { test: /\.css$/, loader: "style-loader!css-loader" },
    {
  test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
  exclude: path.resolve(__dirname, "node_modules"),
  use: [
    {
      loader: "url-loader",
      options: {
        limit: 10000,
        mimetype: "image/svg+xml"
      }
    }
  ]
},
{
  test: /\.gif/,
  exclude: path.resolve(__dirname, "node_modules"),
  use: [
    {
      loader: "url-loader",
      options: {
        mimetype: "image/gif"
      }
    }
  ]
},
{
  test: /\.jpg/,
  exclude: path.resolve(__dirname, "node_modules"),
  use: [
    {
      loader: "url-loader",
      options: {
        mimetype: "image/jpg"
      }
    }
  ]
},
{
  test: /\.png/,
  exclude: path.resolve(__dirname, "node_modules"),
  use: [
    {
      loader: "url-loader",
      options: {
        mimetype: "image/png",
        name: "[path][name].[ext]"
      }
    }
  ]
}]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot:true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
};
