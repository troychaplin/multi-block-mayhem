import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { columns, gap, radius, aspectRatio } = attributes;

	const blockProps = useBlockProps.save({
		style: {
			'--mbm-image-collage-cols': String(columns),
			'--mbm-image-collage-gap': `${gap}px`,
			'--mbm-image-collage-radius': `${radius}px`,
			'--mbm-image-collage-aspect-ratio': aspectRatio,
		},
	});

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
}
