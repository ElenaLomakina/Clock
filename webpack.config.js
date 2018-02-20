var join = require("path").join;
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: "./index.js",
    output: {
        path: join(__dirname, "./dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            { test: /\.css$/, use: ExtractTextPlugin.extract("css-loader")}
        ]
    },
    plugins: [
        new ExtractTextPlugin("clock.css"),
        new HtmlWebpackPlugin({
                template: "index.html"
            }
        )
    ],
    devServer: {
        port: 8080
    }
};