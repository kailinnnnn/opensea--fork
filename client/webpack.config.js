const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[hash].js",
    // publicPath: "../public",
  },

  devServer: {
    static: "./dist",
    historyApiFallback: true,
    port: 3000,
    hot: true,
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              //讓postcss讀的懂css的import
            },
          },
          {
            loader: "postcss-loader",
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.png/,
        type: "asset/resource",
      },
      {
        test: /\.jpg/,
        type: "asset/resource",
      },
      {
        test: /\.mp4/,
        type: "asset/resource",
      },
      {
        test: /\.svg/,
        type: "asset/resource",
      },
      {
        test: /\.avif/,
        type: "asset/resource",
      },
    ],
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    new MiniCssExtractPlugin({ filename: "style.[hash].css" }),
    // new CleanWebpackPlugin(),
    new CopyPlugin({
      //可以設定需要複製到dist的檔案
      patterns: [{ from: "./public/media", to: "./media" }],
    }),
  ],
};
