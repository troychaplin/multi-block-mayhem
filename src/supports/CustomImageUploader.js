import { useState, useEffect, useCallback, useMemo } from '@wordpress/element';
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
	force,
}) => {
	// Initialize imageId from attributes if it exists
	const [imageId, setImageUrl] = useState(attributes?.imageId || null);

	// Define fallback sizes in order of preference
	const fallbackSizes = useMemo(() => ['large', 'medium', 'thumbnail'], []);

	// Helper function to get image details from media object
	const getImageDetails = useCallback(
		media => {
			if (!media) {
				return null;
			}

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
		},
		[imageSize, fallbackSizes]
	);

	// Get image details including available sizes
	const imageDetails = useSelect(
		select => {
			if (!imageId) {
				return null;
			}

			const media = select('core').getMedia(imageId);
			if (!media) {
				return null;
			}

			const details = getImageDetails(media);
			return details ? { ...details, id: media.id } : null;
		},
		[imageId, getImageDetails]
	);

	// Update image details when they change
	useEffect(() => {
		if (imageDetails) {
			// Only update if the URLs match to prevent cross-contamination
			if (!imageUrl || imageDetails.url === imageUrl) {
				setAttributes({
					imageUrl: imageDetails.url,
					imageId: imageDetails.id,
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
	const onSelectImage = media => {
		if (!media || !media.id) {
			setImageUrl(null);
			setAttributes({
				imageUrl: '',
				imageId: null,
				imageWidth: null,
				imageHeight: null,
			});
			return;
		}

		// Get image details immediately
		const details = getImageDetails(media);
		if (!details) {
			return;
		}

		// Check if image meets minimum dimensions when force is true
		const meetsMinDimensions =
			(!minWidth || details.width >= minWidth) && (!minHeight || details.height >= minHeight);

		if (force && !meetsMinDimensions) {
			return;
		}

		// Update everything at once
		setImageUrl(media.id);
		setAttributes({
			imageUrl: details.url,
			imageId: media.id,
			imageWidth: details.width,
			imageHeight: details.height,
		});
	};

	// Handle image removal
	const removeImage = () => {
		setImageUrl(null);
		setAttributes({
			imageUrl: '',
			imageId: null,
			imageWidth: null,
			imageHeight: null,
		});
	};

	// Show warning if image exists and dimensions don't meet requirements
	const showWarning = Boolean(imageUrl && attributes?.imageWidth && !hasMinimumDimensions);

	// Initialize imageId from attributes when component mounts or imageUrl changes
	useEffect(() => {
		if (imageUrl && attributes?.imageId) {
			setImageUrl(attributes.imageId);
		}
	}, [imageUrl, attributes?.imageId]);

	return (
		<div
			className="mbm-image-uploader"
			style={{
				display: 'flex',
				gap: '16px',
				flexDirection: 'column',
			}}
		>
			{/* Warning Notice */}
			{showWarning && (
				<Notice status="warning" isDismissible={false} className="mbm-image-warning">
					Current image size ({attributes.imageWidth}px × {attributes.imageHeight}px) is
					smaller than recommended {getRecommendationMessage()}
				</Notice>
			)}

			{/* Size Requirements Notice */}
			{(minWidth || minHeight) && !imageUrl && (
				<div
					className="mbm-size-notice"
					style={{
						backgroundColor: '#fef8ee',
						borderLeft: '4px solid #f0b849',
						padding: '8px 12px',
						color: '#1e1e1e',
					}}
				>
					{force ? 'Required' : 'Recommended'} image size:{' '}
					{minWidth && `${minWidth}px wide`}
					{minWidth && minHeight && ' × '}
					{minHeight && `${minHeight}px high`}
				</div>
			)}

			{/* Upload Controls */}
			<MediaUpload
				onSelect={onSelectImage}
				allowedTypes={['image']}
				value={imageId}
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
