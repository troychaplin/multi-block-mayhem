import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { columns, gap, radius, aspectRatio } = attributes;

	const blockProps = useBlockProps.save( {
		className: 'multi-block-mayhem-image-collage',
		style: {
			'--mb-mayhem-image-collage-cols': String( columns ),
			'--mb-mayhem-image-collage-gap': `${ gap }px`,
			'--mb-mayhem-image-collage-radius': `${ radius }px`,
			'--mb-mayhem-image-collage-aspect-ratio': aspectRatio,
		},
	} );

	return (
		<div { ...blockProps }>
			<InnerBlocks.Content />
		</div>
	);
}
