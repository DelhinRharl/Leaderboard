const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const merge = require('lodash.merge');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/myindex.html',
    }),
  ],
};
const productionConfig = merge([ //eslint-disable-line
  {
    output: {
      publicPath: '/Leaderboard/',
    },
  },
]);
