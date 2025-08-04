const path = require('path');

module.exports = {
  mode: 'production',
  entry: './public/hello.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};