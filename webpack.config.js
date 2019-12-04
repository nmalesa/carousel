const path = require('path');
const SRC_DIR = path.join(__dirname, '/client');
const DIST_DIR = path.join(__dirname, '/dist');
module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
  filename: 'bundle.js',
  path: DIST_DIR
},
  module : {
    rules : [
      {
        test : /\.(js|jsx)$/,
        include : SRC_DIR,
        loader : 'babel-loader',
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }
};