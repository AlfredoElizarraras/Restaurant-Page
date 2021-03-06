const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // eslint-disable-line import/no-unresolved
const HtmlWebpackPlugin = require('html-webpack-plugin'); // eslint-disable-line import/no-unresolved

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].main.js',
    path: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  mode: 'development',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Restaurant page',
      template: 'src/index.html',
    }),
  ],
};
