'use strict'

/**
 * Accepts as environment variables the following
 * @env NODE_ENV - Defines the node_env variable
 * @env COMPRESS - Uses minification
 * @env DEBUG - Enables debug mode on the application
 */

let webpack = require('webpack')
let path = require('path')

let plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  })
]

if (process.env.COMPRESS) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  )
}

module.exports = {

  externals: {},

  module: {
    loaders: [
      { test: /\.ts(x?)$/, loaders: ['babel', 'ts-loader'], exclude: /node_modules/ },
      { test: /\.js(x?)$/, loaders: ['babel'], exclude: /node_modules/ },
    ]
  },

  resolve: {
    root: [path.resolve('node_modules'), path.resolve('src')],
    extensions: [
      '', '.js', '.jsx',
      '.ts', '.tsx',
    ],
    alias: {}
  },

  plugins: plugins,

  devtool: process.env.COMPRESS ? null : 'inline-source-map',

  ts: {
    compiler: 'typescript'
  }
}
