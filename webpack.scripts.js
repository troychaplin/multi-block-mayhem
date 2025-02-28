const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');

module.exports = {
	...defaultConfig,
	entry: {
		...defaultConfig.entry,
		'madness-editor': path.resolve(__dirname, 'src/madness-editor.js'),
		'madness-frontend': path.resolve(__dirname, 'src/madness-frontend.js'),
	},
	output: {
		...defaultConfig.output,
		path: path.resolve(__dirname, 'build'),
		filename: '[name].js',
	},
};
