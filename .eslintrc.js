module.exports = {
	extends: [
		require.resolve( '@wordpress/eslint-plugin/configs/recommended' ),
	],
	rules: {
		'@wordpress/no-unsafe-wp-apis': 'off',
	},
};
