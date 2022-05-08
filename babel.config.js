module.exports = {
  presets: ["@babel/preset-react", "@babel/preset-typescript"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src/"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        alias: {
          underscore: "lodash",
        },
      },
    ],
  ],
  env: {},
};
