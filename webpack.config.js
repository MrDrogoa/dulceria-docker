const path = require("path");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin"); //add this to the top

module.exports = (env) => {
  return {
    mode: !!env.production ? "production" : "development", // update this line
    devtool: !!env.production ? "hidden-source-map" : "inline-source-map",
    devServer: {
      open: true,
    },
    entry: "./src/index.tsx",
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".css", ".scss"],
      modules: ["src", "node_modules"],
    },
    module: {
      rules: [
        {
          test: /.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /.(ts|tsx)$/,
          exclude: /node_modules/,
          loader: "ts-loader",
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
        {
          test: /\.scss$/,
          use: [
            "style-loader",
            "css-modules-typescript-loader",
            {
              loader: "css-loader",
              options: {
                modules: true,
              },
            },
            {
              loader: "sass-loader",
              options: {
                implementation: require("sass"),
              },
            },
          ],
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/,
          use: "url-loader",
        },
        {
          test: /\.(woff2|woff|ttf|eot|svg)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
          use: "url-loader",
        },
      ],
    },
    plugins: [
      new BrowserSyncPlugin({
        proxy: {
          target: "http://localhost:8082",
        },
        files: ["./wpTheme/*.php", "./src/*.ts", "./src/*.tsx"],
        cors: true,
        reloadDelay: 0,
        open: false,
      }),
    ],
    output: {
      filename: "main.js",
      path: env.production
        ? path.resolve(__dirname, "./dist")
        : path.resolve(__dirname, "./wpTheme/dist"),
      clean: false, // add this line
    },
  };
};
