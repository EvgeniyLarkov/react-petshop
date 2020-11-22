const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: `${__dirname}/src/index.js`,
  devServer: {
    proxy: {
      "/data": "http://localhost:3000",
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/template.html`,
    }),
    new FaviconsWebpackPlugin({
      logo: `${__dirname}/public/favicon.ico`,
      favicons: {
        appName: `Drag'n'Drop store`,
        appDescription: 'Pet project used for educational purposes',
        developerName: 'Evgeniy Larkov',
        background: '#ddd',
        theme_color: '#333',
        icons: {
          coast: false,
          yandex: false
        }
      }
    })
  ],
};
