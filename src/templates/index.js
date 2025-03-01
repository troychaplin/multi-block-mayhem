/**
 * Dependencies
 */
const { join } = require('path');

module.exports = {
	defaultValues: {
		transformer: (view) => {
			const {
				variantVars: { isInteractiveVariant },
			} = view;
			return {
				...view,
				requiresAtLeast: isInteractiveVariant ? '6.5' : '6.1',
			};
		},
		version: '1.0.0',
		namespace: 'multi-block-of-madness',
		description:
			'A plugin that brings a collection of blocks and related functionality to the WordPress block editor.',
		render: 'file:./render.php',
	},
	variants: {
		dynamic: {},
		interactive: {
			viewScriptModule: 'file:./view.js',
			supports: {
				interactive: true,
			},
		},
	},
	blockTemplatesPath: join(__dirname, 'files'),
};
