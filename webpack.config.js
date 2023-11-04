const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        // 정규 표현식
        test: /\.tsx?$/,
        // ts-loader를 통해 연결
        use: "ts-loader",
        // 노드 모듈 확장
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    // 사용할 확장자 정의
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    // 하드코딩 되어 있지 않은 path name을 구축
    path: path.resolve(__dirname, "dist"),
  },
};
