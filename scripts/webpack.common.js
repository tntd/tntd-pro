const path = require("path");

module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"], // 支持解析的文件扩展名
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // 处理 TypeScript 文件
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/, // 处理 JavaScript 和 JSX 文件
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // 使用 Babel 处理 JSX 和 ES6+ 语法
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"], // 配置 Babel 预设
          },
        },
      },
      {
        test: /\.less$/, // 处理 Less 文件
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/, // 处理图片文件
        loader: require.resolve("url-loader"),
        options: {
          name: "img/[name].[hash:7].[ext]",
        },
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/, // 处理媒体文件
        loader: require.resolve("url-loader"),
        options: {
          name: "media/[name].[hash:7].[ext]",
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/, // 处理字体文件
        loader: require.resolve("url-loader"),
        options: {
          name: "fonts/[name].[hash:7].[ext]",
        },
      },
    ],
  },
};
