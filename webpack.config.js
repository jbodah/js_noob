module.exports = {
  context: __dirname + "/app",
  entry: {
    infiniteScroll: "./infiniteScroll/app",
    slidingWindows: "./slidingWindows/app"
    scatterText: "./scatterText/app"
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ],
  },
  resolve: {
    exetensions: ['', '.js', '.css', '.svg']
  }
};
