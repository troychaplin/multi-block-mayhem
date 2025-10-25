import { __ } from '@wordpress/i18n';

export const aspectRatioOptions = [
	{
		label: __( 'Square - 1:1', 'multi-block-mayhem' ),
		value: '1/1',
	},
	{
		label: __( 'Standard - 4:3', 'multi-block-mayhem' ),
		value: '4/3',
	},
	{
		label: __( 'Portrait - 3:4', 'multi-block-mayhem' ),
		value: '3/4',
	},
	{
		label: __( 'Classic - 3:2', 'multi-block-mayhem' ),
		value: '3/2',
	},
	{
		label: __( 'Classic Portrait - 2:3', 'multi-block-mayhem' ),
		value: '2/3',
	},
	{
		label: __( 'Wide - 16:9', 'multi-block-mayhem' ),
		value: '16/9',
	},
	{
		label: __( 'Tall - 9:16', 'multi-block-mayhem' ),
		value: '9/16',
	},
];

export const imageResolutionOptions = [
	{
		label: __( 'Thumbnail', 'multi-block-mayhem' ),
		value: 'thumbnail',
	},
	{
		label: __( 'Medium', 'multi-block-mayhem' ),
		value: 'medium',
	},
	{
		label: __( 'Large', 'multi-block-mayhem' ),
		value: 'large',
	},
	{
		label: __( 'Full Size', 'multi-block-mayhem' ),
		value: 'full',
	},
];
