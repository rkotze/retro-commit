const path = require('path');

module.exports = {
  entry: './src/index.ts',
  mode: "none",
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
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'commit-retro.js',
    path: path.resolve(__dirname, '../dist'),
  },
};