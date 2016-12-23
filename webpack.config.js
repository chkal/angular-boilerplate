module.exports = {
  entry: {
    index: "./src/main/javascript/index.js"
  },
  output: {
    path: "./target/generated-web-resources/assets/",
    filename: "[name].js"
  },
  resolve: {
    modulesDirectories: [
      "node_modules",
      "src/main/javascript"
    ]
  },
  module: {
    loaders: [{
      test: /\.ts$/,
      exclude: /node_modules/,
      loader: "ts-loader"
    }]
  },
  devServer: {
    publicPath: "/angular-boilerplate/assets/",
    proxy: {
      "*": {
        target: 'http://localhost:8080'
      }
    }
  }
};
