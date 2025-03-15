import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { columns, gap, radius, aspectRatio } = attributes;

	const blockProps = useBlockProps.save({
		style: {
			'--mbm-promo-cards-cols': String(columns),
			'--mbm-promo-cards-gap': `${gap}px`,
			'--mbm-promo-cards-radius': `${radius}px`,
			'--mbm-promo-cards-aspect-ratio': aspectRatio,
		},
	});

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
}
