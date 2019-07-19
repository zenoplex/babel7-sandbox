const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const { NODE_ENV } = process.env;

module.exports = {
  entry: ['core-js/stable', 'regenerator-runtime/runtime', './src/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_module/,
        use: ['babel-loader'],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    ...(NODE_ENV === 'production' ? [new BundleAnalyzerPlugin()] : [])
  ],
  devServer: {
    open: true,
    port: 3000,
    overlay: true,
  }
};
