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
			'multi-block-mayhem-editor': path.resolve(
				__dirname,
				'src/multi-block-mayhem-editor.js'
			),
			'multi-block-mayhem-frontend': path.resolve(
				__dirname,
				'src/multi-block-mayhem-frontend.js'
			),
		},
	},
	moduleConfig,
];
