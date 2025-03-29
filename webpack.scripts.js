const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const path = require( 'path' );

module.exports = {
	...defaultConfig,
	entry: {
		...defaultConfig.entry,
		'mayhem-editor': path.resolve( __dirname, 'src/mayhem-editor.js' ),
		'mayhem-frontend': path.resolve( __dirname, 'src/mayhem-frontend.js' ),
	},
	output: {
		...defaultConfig.output,
		path: path.resolve( __dirname, 'build' ),
		filename: '[name].js',
	},
};
