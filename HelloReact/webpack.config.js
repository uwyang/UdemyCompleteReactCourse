//configures what webpack does.
//before:
//webpack ./public/app.js ./public/bundle.js
//now: just type webpack.
module.exports = {
  entry: './public/app.js',
  output: {
    //dirname: path to current folder
    path: __dirname,
    filename: './public/bundle.js',
  },
  resolve: {
    //all extensions we can support. 
    extensions: ['.js', '.jsx'],
  }
};
