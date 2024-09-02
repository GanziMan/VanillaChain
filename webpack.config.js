const path = require("path");

module.exports = {
  entry: "./src/index.js", // 번들링을 시작할 파일 지정
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      // Babel 로더를 사용하여 ES6+ 코드를 ES5로 변환
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  devServer: {
    // Webpack Dev Server의 설정
    contentBase: path.resolve(__dirname, "dist"),
    compress: true,
    port: 9000,
  },
  mode: "development",
};
