module.exports = {
    entry: './src/main.js',
    output: {
        filename: './dist/main.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
};
