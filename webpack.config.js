module.exports = {
  context: __dirname + "/app",
  entry: ["./infiniteScroll/app"],
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};
