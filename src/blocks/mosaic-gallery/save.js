import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { columns } = attributes;
	const blockGap = attributes?.style?.spacing?.blockGap;

	const blockProps = useBlockProps.save( {
		style: {
			'--mb-mayhem-mosaic-gallery-cols': String( columns ),
			'--wp--style--block-gap': blockGap || '0.5em',
		},
	} );

	return (
		<div { ...blockProps }>
			<InnerBlocks.Content />
		</div>
	);
}
