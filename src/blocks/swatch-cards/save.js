import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { columns, gap, radius, aspectRatio } = attributes;

	const blockProps = useBlockProps.save( {
		className: 'mbm-swatch-cards',
		style: {
			'--mb-mayhem-swatch-cards-cols': String( columns ),
			'--mb-mayhem-swatch-cards-gap': `${ gap }px`,
			'--mb-mayhem-swatch-cards-radius': `${ radius }px`,
			'--mb-mayhem-swatch-cards-aspect-ratio': aspectRatio,
		},
	} );

	return (
		<div { ...blockProps }>
			<InnerBlocks.Content />
		</div>
	);
}
