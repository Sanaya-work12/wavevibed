/**
 * Authored by Shruti
 * Webpack configurations for module bundling
 */

const path = require('path');

module.exports = {
	entry: './src/js/index.js',
	output: {
		filename: 'bundle.[name]-[contenthash].js',
		path: path.resolve(__dirname, 'dist')
	}
};
