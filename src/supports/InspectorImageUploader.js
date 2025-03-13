import { useState, useEffect, useCallback } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { MediaUpload } from '@wordpress/block-editor';
import { ButtonGroup, Button } from '@wordpress/components';

export const InspectorImageUploader = (props) => {
	const {
		imageUrl,
		setAttributes,
		minWidth,
		minHeight,
		imageName,
		forceSize = false,
		fallbackImageSize = 'medium',
	} = props;
	const [mediaId, setMediaId] = useState(null);
	const [errorType, setErrorType] = useState(null); // Can be 'warning', 'error', or null

	// Construct full image size names based on props
	const specificImageSize = `${imageName}`; // E.g., 'horizontal-card-lg'

	// Use useSelect to fetch media details based on id and check image sizes
	const uploadedImageDetails = useSelect(
		(select) => {
			if (!mediaId) return '';
			const media = select('core').getMedia(mediaId);

			// Fetch URLs based on constructed size names
			const specificImageUrl =
				media?.media_details?.sizes?.[specificImageSize]?.source_url;
			const fallbackImageUrl =
				media?.media_details?.sizes?.[fallbackImageSize]?.source_url ||
				media?.source_url;
			const fullImageUrl = media?.source_url;

			// Check if the uploaded image matches the specific size dimensions
			const isSpecificSize =
				media?.media_details?.sizes?.[specificImageSize]?.width ===
					media?.width &&
				media?.media_details?.sizes?.[specificImageSize]?.height ===
					media?.height;

			// Determine which URL to use based on availability and size match
			return isSpecificSize
				? fullImageUrl
				: specificImageUrl || fallbackImageUrl || fullImageUrl;
		},
		[mediaId, specificImageSize, fallbackImageSize]
	);

	// Handler when an image is uploaded or selected
	const onImageUpload = useCallback(
		(media) => {
			if (!media || !media.url) {
				setAttributes({ imageUrl: '', imageId: '' });
				return;
			}

			// Check for image dimensions if minWidth or minHeight are set
			let imageMeetsSize = true;
			if (minWidth || minHeight) {
				imageMeetsSize =
					(!minWidth || media.width >= minWidth) &&
					(!minHeight || media.height >= minHeight);

				if (!imageMeetsSize) {
					if (forceSize) {
						// Force size is true, block the image and display an error message
						setErrorType('error');
						return; // Do not set the image
					}
					// Force size is false, display a warning but still set the image
					setErrorType('warning');
				}

				// If the image meets the size, clear any previous warnings/errors
				if (imageMeetsSize) {
					setErrorType(null);
				}
			}

			// Image meets requirements or forceSize is false, set the image
			setMediaId(media.id);
			setAttributes({ imageId: media.id, imageUrl: media.url });
		},
		[setAttributes, minWidth, minHeight, forceSize]
	);

	// Effect to update attributes when uploadedImageDetails changes
	useEffect(() => {
		if (uploadedImageDetails) {
			setAttributes({ imageUrl: uploadedImageDetails });
		}
	}, [uploadedImageDetails, setAttributes]);

	// Handler to remove the selected image
	const removeImage = useCallback(() => {
		setAttributes({ imageUrl: '', imageId: '' });
		setMediaId(null);
		setErrorType(null); // Reset errors when image is removed
	}, [setAttributes]);

	return (
		<MediaUpload
			onSelect={onImageUpload}
			allowedTypes={['image']}
			value={imageUrl}
			render={({ open }) => (
				<>
					{(minWidth || minHeight) && (
						<p>
							The minimum recommended image size is{' '}
							{minWidth && `${minWidth}px wide`}
							{minWidth && minHeight && ' and '}
							{minHeight && `${minHeight}px high`}.
						</p>
					)}
					<ButtonGroup>
						<Button onClick={open} variant="primary">
							{imageUrl ? 'Replace Image' : 'Select Image'}
						</Button>
						{imageUrl && (
							<Button
								onClick={removeImage}
								variant="secondary"
								style={{ marginLeft: '12px' }}
							>
								Remove Image
							</Button>
						)}
					</ButtonGroup>

					{errorType === 'warning' && (
						<p
							style={{
								color: '#bd4b00',
								fontSize: '0.825rem',
								marginTop: '1rem',
								fontWeight: '600',
							}}
						>
							⚠️ Warning: The selected image should have a minimum
							size of {minWidth && `${minWidth}px wide`}
							{minWidth && minHeight && ' and '}
							{minHeight && `${minHeight}px high`} for best
							quality.
						</p>
					)}

					{errorType === 'error' && (
						<p
							style={{
								color: '#E91C24',
								fontSize: '0.825rem',
								marginTop: '1rem',
								fontWeight: '600',
							}}
						>
							❌ Error: The image must be at least{' '}
							{minWidth && `${minWidth}px wide`}
							{minWidth && minHeight && ' and '}
							{minHeight && `${minHeight}px high`}. Please select
							a larger image.
						</p>
					)}
				</>
			)}
		/>
	);
};
