import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { columns, gap, radius } = attributes;

	const blockProps = useBlockProps.save({
		style: {
			'--mosaic-cols': String(columns),
			'--mosaic-gap': `${gap}px`,
			'--mosaic-radius': `${radius}px`,
		},
	});

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
}
