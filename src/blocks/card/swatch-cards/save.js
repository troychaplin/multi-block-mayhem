import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { columns, gap, radius, aspectRatio } = attributes;

	const blockProps = useBlockProps.save({
		className: 'mbm-swatch-cards',
		style: {
			'--mbm-swatch-cards-cols': String(columns),
			'--mbm-swatch-cards-gap': `${gap}px`,
			'--mbm-swatch-cards-radius': `${radius}px`,
			'--mbm-swatch-cards-aspect-ratio': aspectRatio,
		},
	});

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
}
