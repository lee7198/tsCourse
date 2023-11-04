const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "./"),
    },
  },
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
    // [contenthash] 실행 파일에 prefix로 hash 값이 적힘
    filename: "[contenthash]bundle.js",
    // 하드코딩 되어 있지 않은 path name을 구축
    path: path.resolve(__dirname, "dist"),
    // webpack dev serve 사용 시 (dev 모드)
    publicPath: "/dist",
  },
  // 최신 버전의 빌드 파일만 유지
  plugins: [new CleanWebpackPlugin()],
};
