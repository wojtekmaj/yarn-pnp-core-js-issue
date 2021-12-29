const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'src'),
          path.dirname(require.resolve('@acme-inc/utils')),
        ],
        use: 'babel-loader',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
};
