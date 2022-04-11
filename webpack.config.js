const path = require("path");
const HtmlWebpackPlugins = require("html-webpack-plugin");
const isDevelopment = process.env.
NODE_ENV !== "production";
const ReactRefreshWebPackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
module.exports = {
  mode: isDevelopment ? "development" : "production",
  devtool: isDevelopment ? "eval-source-map" : "source-map",
  entry: path.resolve(__dirname, "src", "index.jsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [
    isDevelopment && new ReactRefreshWebPackPlugin(),
    new HtmlWebpackPlugins({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ].filter(Boolean),
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    static: path.resolve(__dirname, "public"),
    hot:true,
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader:"babel-loader",
          options:{
            plugins:[
              isDevelopment && require.resolve('react-refresh/babel'),
            ].filter(Boolean)
              
            
          }
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
