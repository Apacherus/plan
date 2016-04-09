/**
 * Created by ozver on 09.04.2016.
 */
module.exports = {
    entry: "./src/js/app.js",
    output: {
        path: './www/js',
        filename: "app.js"
    },
    devtool : '#source-map',
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    }
};
