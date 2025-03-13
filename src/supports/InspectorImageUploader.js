import { useState, useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { MediaUpload } from '@wordpress/block-editor';
import { ButtonGroup, Button, Notice } from '@wordpress/components';

export const InspectorImageUploader = ({
	imageUrl,
	setAttributes,
	imageSize,
	minWidth,
	minHeight,
	attributes,
}) => {
	// Initialize mediaId from attributes if it exists
	const [mediaId, setMediaId] = useState(attributes?.mediaId || null);

	// Define fallback sizes in order of preference
	const fallbackSizes = ['large', 'medium', 'thumbnail'];
	
	// Get image details including available sizes
	const imageDetails = useSelect(
		(select) => {
			if (!mediaId) return null;
			
			const media = select('core').getMedia(mediaId);
			if (!media) return null;

			// Try to get specified size first
			if (imageSize && media.media_details?.sizes?.[imageSize]) {
				return {
					url: media.media_details.sizes[imageSize].source_url,
					width: media.media_details.sizes[imageSize].width,
					height: media.media_details.sizes[imageSize].height,
					id: media.id,
				};
			}

			// Try fallback sizes in order
			for (const size of fallbackSizes) {
				if (media.media_details?.sizes?.[size]) {
					return {
						url: media.media_details.sizes[size].source_url,
						width: media.media_details.sizes[size].width,
						height: media.media_details.sizes[size].height,
						id: media.id,
					};
				}
			}

			// If no sizes available, use original
			return {
				url: media.source_url,
				width: media.media_details?.width,
				height: media.media_details?.height,
				id: media.id,
			};
		},
		[mediaId, imageSize]
	);

	// Update image details when they change
	useEffect(() => {
		if (imageDetails) {
			setAttributes({
				imageUrl: imageDetails.url,
				mediaId: imageDetails.id,
				imageDimensions: {
					width: imageDetails.width,
					height: imageDetails.height,
				},
			});
		}
	}, [imageDetails, setAttributes]);

	// Check if image meets minimum dimensions
	const hasMinimumDimensions = !attributes?.imageDimensions
		? true
		: (!minWidth || attributes.imageDimensions.width >= minWidth) &&
		  (!minHeight || attributes.imageDimensions.height >= minHeight);

	// Handle image selection
	const onSelectImage = (media) => {
		if (!media || !media.id) {
			setMediaId(null);
			setAttributes({
				imageUrl: '',
				mediaId: null,
				imageDimensions: null,
			});
			return;
		}
		setMediaId(media.id);
	};

	// Handle image removal
	const removeImage = () => {
		setMediaId(null);
		setAttributes({
			imageUrl: '',
			mediaId: null,
			imageDimensions: null,
		});
	};

	// Show warning if image exists and dimensions don't meet requirements
	const showWarning = imageUrl && 
		attributes?.imageDimensions && 
		!hasMinimumDimensions;

	return (
		<div className="mbm-image-uploader">
			{/* Size Requirements Notice */}
			{(minWidth || minHeight) && !imageUrl && (
				<p className="mbm-size-notice">
					Recommended image size:{' '}
					{minWidth && `${minWidth}px wide`}
					{minWidth && minHeight && ' × '}
					{minHeight && `${minHeight}px high`}
				</p>
			)}

			{/* Warning Notice */}
			{showWarning && (
				<Notice 
					status="warning" 
					isDismissible={false}
					className="mbm-image-warning"
				>
					Current image size ({attributes.imageDimensions.width}×
					{attributes.imageDimensions.height}px) is smaller than recommended (
					{minWidth || 'any'}×{minHeight || 'any'}px)
				</Notice>
			)}

			{/* Upload Controls */}
			<MediaUpload
				onSelect={onSelectImage}
				allowedTypes={['image']}
				value={mediaId}
				render={({ open }) => (
					<ButtonGroup className="mbm-image-controls">
						<Button onClick={open} variant="primary">
							{imageUrl ? 'Replace Image' : 'Select Image'}
						</Button>
						{imageUrl && (
							<Button
								onClick={removeImage}
								variant="secondary"
								style={{ marginLeft: '8px' }}
							>
								Remove
							</Button>
						)}
					</ButtonGroup>
				)}
			/>
		</div>
	);
};
