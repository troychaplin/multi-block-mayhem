import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { columns, gap, radius } = attributes;

	const blockProps = useBlockProps.save( {
		style: {
			'--mb-mayhem-mosaic-gallery-cols': String( columns ),
			'--mb-mayhem-mosaic-gallery-gap': `${ gap }px`,
			'--mb-mayhem-mosaic-gallery-radius': `${ radius }px`,
		},
	} );

	return (
		<div { ...blockProps }>
			<InnerBlocks.Content />
		</div>
	);
}
