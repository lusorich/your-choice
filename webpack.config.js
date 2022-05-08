const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "index.tsx"),
  mode: "development",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.bundle.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", "jsx"],
    alias: {
      app: path.resolve(__dirname, "src/app/"),
      entities: path.resolve(__dirname, "src/entities/"),
      features: path.resolve(__dirname, "src/features/"),
      pages: path.resolve(__dirname, "src/pages/"),
      shared: path.resolve(__dirname, "src/shared/"),
      widgets: path.resolve(__dirname, "src/widgets/"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
  devServer: {
    historyApiFallback: true,
    proxy: [
      {
        context: ["/api"],
        target: "http://localhost:3003",
        changeOrigin: true,
        pathRewrite: { "^/api": "" },
      },
    ],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        resolve: {
          extensions: [".ts", ".tsx", ".js", ".jsx"],
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
