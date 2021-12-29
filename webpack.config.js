const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  // This resolves the issue, but feels hacky
  /*
  resolve: {
    alias: {
      'core-js': path.dirname(require.resolve('core-js')),
    },
  },
  */
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
