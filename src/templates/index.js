/**
 * Dependencies
 */
const { join } = require('path');

module.exports = {
	defaultValues: {
		transformer: view => {
			const {
				variantVars: { isInteractiveVariant },
			} = view;
			return {
				...view,
				requiresAtLeast: isInteractiveVariant ? '6.5' : '6.1',
			};
		},
		version: '0.1.0',
		namespace: 'multi-block-mayhem',
		description:
			'A plugin that brings a collection of blocks and related functionality to the WordPress block editor.',
		category: 'widgets',
		textdomain: 'multi-block-mayhem',
		editorScript: 'file:./index.js',
		editorStyle: 'file:./index.css',
		style: 'file:./style-index.css',
	},
	variants: {
		dynamic: {
			render: 'file:./render.php',
		},
		interactive: {
			viewScriptModule: 'file:./view.js',
			supports: {
				interactive: true,
			},
		},
		static: {
			customBlockJSON: {
				render: null,
			},
		},
	},
	blockTemplatesPath: join(__dirname, 'files'),
};
