const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/static/js/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // dist 폴더를 빌드 전에 정리
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // 사용자 지정 템플릿 파일 경로
      filename: "index.html", // 생성될 파일 이름
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"), // 정적 파일 제공 경로
    },
    compress: true,
    port: 9000,
  },
  mode: "development",
};
