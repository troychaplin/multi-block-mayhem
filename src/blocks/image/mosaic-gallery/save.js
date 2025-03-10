import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { columns, gap, radius } = attributes;

	const blockProps = useBlockProps.save({
		style: {
			'--mbm-mosaic-gallery-cols': String(columns),
			'--mbm-mosaic-gallery-gap': `${gap}px`,
			'--mbm-mosaic-gallery-radius': `${radius}px`,
		},
	});

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
}
