import { __ } from '@wordpress/i18n';
import { useState, useCallback } from '@wordpress/element';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	RangeControl,
	FocalPointPicker,
} from '@wordpress/components';
import { CustomImageUploader } from '../../../supports/CustomImageUploader';
import './editor.scss';

export default function Edit({ attributes, setAttributes, context, style }) {
	// Set state for focal point picker
	const [focalPoint, setFocalPoint] = useState(
		attributes.focalPoint || {
			x: 0.5,
			y: 0.5,
		}
	);

	const { imageUrl, columnSpan, columns } = attributes;

	const blockClasses = imageUrl ? 'mbm-editor' : 'mbm-placeholder';

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

	const onFocalPointChange = useCallback(
		(newFocalPoint) => {
			setFocalPoint(newFocalPoint);
			setAttributes({ focalPoint: newFocalPoint });
		},
		[setAttributes]
	);

	// Set styles based on Focal Point Picker value
	const bgImageStyles = {
		backgroundImage: `url(${imageUrl})`,
		backgroundPosition: `${focalPoint.x * 100}% ${focalPoint.y * 100}%`,
		backgroundSize: 'cover',
	};

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
					{imageUrl && (
						<FocalPointPicker
							url={imageUrl}
							value={focalPoint}
							onDragStart={setFocalPoint}
							onDrag={onFocalPointChange}
							onChange={onFocalPointChange}
						/>
					)}
					<CustomImageUploader
						imageUrl={imageUrl}
						setAttributes={setAttributes}
						imageSize={columnSpan === 1 ? 'medium' : 'large'}
						minWidth={columnSpan === 1 ? 600 : 1024}
						minHeight={columnSpan === 1 ? 450 : 768}
						attributes={attributes}
					/>
				</PanelBody>
			</InspectorControls>

			{imageUrl ? (
				<div
					{...blockProps}
					style={{
						...blockProps.style,
						...bgImageStyles,
					}}
				/>
			) : (
				<div {...blockProps}>Add Image</div>
			)}
		</>
	);
}
