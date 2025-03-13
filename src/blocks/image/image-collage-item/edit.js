import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes, context, style }) {
	const { imageUrl, focalPoint, columnSpan, columns } = attributes;

	const blockClasses = imageUrl ? 'multi-block-mayhem-editor' : 'placeholder';

	const blockProps = useBlockProps({
		className: blockClasses,
		style: {
			...style,
			'--mbm-image-collage-col-span': columnSpan,
		},
	});

	// Get attributes from context of parent block
	setAttributes({
		columns: context['multi-block-mayhem/image-collage-columns'],
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

			{imageUrl ? (
				<div {...blockProps}>Image should be added now</div>
			) : (
				<div {...blockProps}>
					Add Image
					<br />
					{columns} Columns
				</div>
			)}
		</>
	);
}
