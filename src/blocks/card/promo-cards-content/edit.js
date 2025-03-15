import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes, context, style }) {
	const { columnSpan, columns, aspectRatio } = attributes;

	const blockProps = useBlockProps({
		className: 'mbm-editor',
		style: {
			...style,
			'--mbm-promo-cards-col-span': columnSpan,
			'--mbm-promo-cards-aspect-ratio': aspectRatio,
		},
	});

	// Get attributes from context of parent block
	setAttributes({
		columns: context['multi-block-mayhem/promo-cards-columns'],
		aspectRatio: context['multi-block-mayhem/promo-cards-aspect-ratio'],
	});

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Image Settings', 'multi-block-mayhem')}>
					<RangeControl
						label={__('Column Span', 'multi-block-mayhem')}
						min={1}
						max={columns}
						value={columnSpan}
						onChange={(value) =>
							setAttributes({ columnSpan: value })
						}
					/>
				</PanelBody>
			</InspectorControls>

			<div
				{...blockProps}
				style={{
					...blockProps.style,
				}}
			>
				<p>Content</p>
			</div>
		</>
	);
}
