import { __ } from '@wordpress/i18n';
import { useState, useCallback } from '@wordpress/element';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl, FocalPointPicker } from '@wordpress/components';
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

	const { imageUrl, columnSpan, columns, zoom, aspectRatio } = attributes;

	const blockClasses = imageUrl ? 'multi-block-mayhem-editor' : 'multi-block-mayhem-placeholder';

	const blockProps = useBlockProps({
		className: blockClasses,
		style: {
			...style,
			'--mbm-image-collage-col-span': columnSpan,
			'--mbm-image-collage-aspect-ratio': aspectRatio,
		},
	});

	// Get attributes from context of parent block
	setAttributes({
		columns: context['multi-block-mayhem/image-collage-columns'],
		aspectRatio: context['multi-block-mayhem/image-collage-aspect-ratio'],
	});

	const onFocalPointChange = useCallback(
		newFocalPoint => {
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
		transform: `scale(1.${String(zoom).padStart(2, '0')})`,
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
						onChange={value => setAttributes({ columnSpan: value })}
					/>
					{imageUrl && (
						<>
							<FocalPointPicker
								url={imageUrl}
								value={focalPoint}
								onDragStart={setFocalPoint}
								onDrag={onFocalPointChange}
								onChange={onFocalPointChange}
							/>
							<RangeControl
								label={__('Image Zoom', 'multi-block-mayhem')}
								min={0}
								max={50}
								value={zoom}
								onChange={value => setAttributes({ zoom: value })}
							/>
						</>
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
					}}
				>
					<div
						style={{
							...bgImageStyles,
						}}
					/>
				</div>
			) : (
				<div {...blockProps}>Add Image</div>
			)}
		</>
	);
}
