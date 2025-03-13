import { useState, useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { MediaUpload } from '@wordpress/block-editor';
import { ButtonGroup, Button, Notice } from '@wordpress/components';

export const CustomImageUploader = ({
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

	// Helper function to get image details from media object
	const getImageDetails = (media) => {
		if (!media) return null;

		// Try to get specified size first
		if (imageSize && media.media_details?.sizes?.[imageSize]) {
			return {
				url: media.media_details.sizes[imageSize].source_url,
				width: media.media_details.sizes[imageSize].width,
				height: media.media_details.sizes[imageSize].height,
			};
		}

		// Try fallback sizes in order
		for (const size of fallbackSizes) {
			if (media.media_details?.sizes?.[size]) {
				return {
					url: media.media_details.sizes[size].source_url,
					width: media.media_details.sizes[size].width,
					height: media.media_details.sizes[size].height,
				};
			}
		}

		// If no sizes available, use original
		return {
			url: media.source_url,
			width: media.media_details?.width,
			height: media.media_details?.height,
		};
	};
	
	// Get image details including available sizes
	const imageDetails = useSelect(
		(select) => {
			if (!mediaId) return null;
			
			const media = select('core').getMedia(mediaId);
			if (!media) return null;

			const details = getImageDetails(media);
			return details ? { ...details, id: media.id } : null;
		},
		[mediaId, imageSize]
	);

	// Update image details when they change
	useEffect(() => {
		if (imageDetails) {
			// Only update if the URLs match to prevent cross-contamination
			if (!imageUrl || imageDetails.url === imageUrl) {
				setAttributes({
					imageUrl: imageDetails.url,
					mediaId: imageDetails.id,
					imageWidth: imageDetails.width,
					imageHeight: imageDetails.height,
				});
			}
		}
	}, [imageDetails, setAttributes, imageUrl]);

	// Check if image meets minimum dimensions
	const hasMinimumDimensions = !attributes?.imageWidth
		? true
		: (!minWidth || attributes.imageWidth >= minWidth) &&
		  (!minHeight || attributes.imageHeight >= minHeight);

	// Get recommendation message based on which dimensions are specified
	const getRecommendationMessage = () => {
		if (minWidth && minHeight) {
			return `width of ${minWidth}px and height of ${minHeight}px`;
		}
		if (minWidth) {
			return `width of ${minWidth}px`;
		}
		if (minHeight) {
			return `height of ${minHeight}px`;
		}
		return '';
	};

	// Handle image selection
	const onSelectImage = (media) => {
		if (!media || !media.id) {
			setMediaId(null);
			setAttributes({
				imageUrl: '',
				mediaId: null,
				imageWidth: null,
				imageHeight: null,
			});
			return;
		}

		// Get image details immediately
		const details = getImageDetails(media);
		if (!details) return;

		// Update everything at once
		setMediaId(media.id);
		setAttributes({
			imageUrl: details.url,
			mediaId: media.id,
			imageWidth: details.width,
			imageHeight: details.height,
		});
	};

	// Handle image removal
	const removeImage = () => {
		setMediaId(null);
		setAttributes({
			imageUrl: '',
			mediaId: null,
			imageWidth: null,
			imageHeight: null,
		});
	};

	// Show warning if image exists and dimensions don't meet requirements
	const showWarning = Boolean(
		imageUrl && 
		attributes?.imageWidth &&
		!hasMinimumDimensions
	);

	// Initialize mediaId from attributes when component mounts or imageUrl changes
	useEffect(() => {
		if (imageUrl && attributes?.mediaId) {
			setMediaId(attributes.mediaId);
		}
	}, [imageUrl, attributes?.mediaId]);

	return (
		<div 
			className="mbm-image-uploader"
			style={{
				display: 'flex',
				gap: '16px',
				flexDirection: 'column'
			}}
		>
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
					Current image size ({attributes.imageWidth}px × {attributes.imageHeight}px) is smaller than recommended {getRecommendationMessage()}
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
