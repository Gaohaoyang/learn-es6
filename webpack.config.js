const path = require('path')

module.exports = {
  entry: './src/index',
  output: {
    filename: './dist/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }, {
            loader: 'eslint-loader',
            options: {
              // quiet: true
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, '/'),
    compress: true,
    port: 9000
  },
  // devtool: 'source-map' // enum
  // devtool: 'inline-source-map', // inlines SourceMap into original file
  // devtool: 'eval-source-map', // inlines SourceMap per module
  // devtool: 'hidden-source-map', // SourceMap without reference in original file
  // devtool: 'cheap-source-map', // cheap-variant of SourceMap without module mappings
  // devtool: 'cheap-module-source-map', // cheap-variant of SourceMap with module mappings
  devtool: 'eval', // no SourceMap, but named modules. Fastest at the expense of detail.
  // enhance debugging by adding meta info for the browser devtools
  // source-map most detailed at the expense of build speed.
}
