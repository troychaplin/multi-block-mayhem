const [
	scriptConfig,
	moduleConfig,
] = require( '@wordpress/scripts/config/webpack.config' );
const path = require( 'path' );

module.exports = [
	{
		...scriptConfig,
		entry: {
			...scriptConfig.entry(),
			editor: path.resolve( __dirname, 'src/editor.js' ),
			frontend: path.resolve( __dirname, 'src/frontend.js' ),
		},
	},
	moduleConfig,
];
