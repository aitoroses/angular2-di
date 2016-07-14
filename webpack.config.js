
var webpack = require('webpack');
var path = require('path');
var buildPath = path.resolve('dist');
var mainPath = path.resolve('lib', 'src', 'index.js')

var config = {
	devtool: 'source-map',
	entry: mainPath,
	output: {
		path: buildPath,
		filename: 'bundle.js',
		libraryTarget: 'umd'
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		})
	]
};

module.exports = config;
