const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");


module.exports = {
    mode: "development", //development production
    entry: {
        // index:"./src/index.js",
        index: path.join(__dirname,"src", "index.js"),
        about: path.join(__dirname,"src", "about.js"),
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "./[name].js", //js/index.js
        // '[name]_main.js'
    },
    devServer:{
        static:"./dist",
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:"./src/index.html", // 번들 전 html
            filename:"./index.html", // 번들 후 html
            hash: true, // 모든 스크립트, css 캐시 무효화
            showErrors: true, // 오류 html에 출력
            chunks: ["index"],
        }),
        new HtmlWebpackPlugin({
            template:"./src/about.html", // 번들 전 html
            filename:"./about.html", // 번들 후 html
            hash: true, // 모든 스크립트, css 캐시 무효화
            showErrors: true, // 오류 html에 출력
            chunks: ["about"],
        }),
        new MiniCssExtractPlugin({
            filename: "./css/style.css", // 번들 후 파일명
        }),
    ],
    module: {
        rules: [
          {
            test: /\.css$/, //정규표현식을 통해 확장자가 css로 끝나는 파일 선택
            // use: ["style-loader", "css-loader"], //작성은 순서대로 로딩실행은 반대로
            use: [MiniCssExtractPlugin.loader, "css-loader"], //작성은 순서대로 로딩실행은 반대로, 별도의 css 생성
            exclude: /node_modules/,
          },
        ],
    },
};