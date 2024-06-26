const path = require('path');

  module.exports = {
    entry: './index.ts',
    mode: 'development',
   devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
      filename: '[name].pack.js',
      path: path.resolve(__dirname, 'public'),
    },
  };