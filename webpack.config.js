const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'my-bundle.js',
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.ts$/, use: 'ts-loader' },
    ],
  },
  devServer: {
    open: true,
    historyApiFallback: true,
    static: './',
    compress: true,
    port: 8080,
  },
};
