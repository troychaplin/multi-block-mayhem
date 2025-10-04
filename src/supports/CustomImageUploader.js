import { useState, useEffect, useCallback, useMemo } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { MediaUpload } from '@wordpress/block-editor';
import { ButtonGroup, Button, Notice, Spinner } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import PropTypes from 'prop-types';

// Constants
const FALLBACK_SIZES = [ 'large', 'medium', 'thumbnail' ];
const DEFAULT_IMAGE_SIZE = 'large';

// Styled components constants
const UPLOADER_STYLES = {
	display: 'flex',
	gap: '16px',
	flexDirection: 'column',
};

const SIZE_NOTICE_STYLES = {
	backgroundColor: '#fef8ee',
	borderLeft: '4px solid #f0b849',
	padding: '8px 12px',
	color: '#1e1e1e',
};

/**
 * Custom Image Uploader component for handling image selection and validation.
 * Provides a user-friendly interface for selecting images with dimension validation,
 * error handling, and accessibility features.
 *
 * @since 0.1.0
 *
 * @param {Object}   props               Component props
 * @param {string}   props.imageUrl      The current image URL
 * @param {Function} props.setAttributes Function to update block attributes
 * @param {string}   props.imageSize     Preferred image size to use
 * @param {number}   props.minWidth      Minimum required width for the image
 * @param {number}   props.minHeight     Minimum required height for the image
 * @param {Object}   props.attributes    Block attributes containing image metadata
 * @param {boolean}  props.force         Whether to enforce minimum dimensions strictly
 * @return {JSX.Element} The CustomImageUploader component with controls and validation
 */
	export const CustomImageUploader = ( {
	imageUrl,
	setAttributes,
	imageSize = DEFAULT_IMAGE_SIZE,
	minWidth = 0,
	minHeight = 0,
	attributes = {},
	force = false,
} ) => {
	// Initialize imageId from attributes if it exists
	const [ imageId, setImageId ] = useState( attributes?.imageId || null );
	const [ isLoading, setIsLoading ] = useState( false );
	const [ error, setError ] = useState( null );

	// Consolidated image validation and messaging logic
	const imageValidation = useMemo( () => {
		// If we don't have dimensions yet, assume they're valid until we get them
		const hasMinimumDimensions = ! attributes?.imageWidth || ! attributes?.imageHeight || (
			( ! minWidth || attributes.imageWidth >= minWidth ) &&
			( ! minHeight || attributes.imageHeight >= minHeight )
		);
		
		const recommendationMessage = (() => {
			if ( minWidth && minHeight ) {
				return `${ minWidth }px × ${ minHeight }px`;
			}
			if ( minWidth ) {
				return `${ minWidth }px wide`;
			}
			if ( minHeight ) {
				return `${ minHeight }px high`;
			}
			return '';
		})();
		
		return { hasMinimumDimensions, recommendationMessage };
	}, [
		attributes?.imageWidth,
		attributes?.imageHeight,
		minWidth,
		minHeight,
	] );

	// Extract validation values from memoized object
	const { hasMinimumDimensions, recommendationMessage } = imageValidation;

	/**
	 * Helper function to get image details from media object.
	 * Attempts to get the preferred size first, then falls back to other sizes.
	 * Includes error handling for invalid media objects.
	 *
	 * @since 0.1.0
	 *
	 * @param {Object} media The media object from WordPress media library
	 * @return {Object|null} The image details with url, width, height or null if invalid
	 * @throws {Error} When media object is malformed or missing required data
	 */
	const getImageDetails = useCallback(
		( media ) => {
			try {
				if ( ! media || ! media.id ) {
					return null;
				}

				// Try to get specified size first - check both media_details.sizes and direct sizes
				if ( imageSize ) {
					let sizeData = null;
					
					// Check media_details.sizes first (older format)
					if ( media.media_details?.sizes?.[ imageSize ] ) {
						sizeData = media.media_details.sizes[ imageSize ];
						return {
							url: sizeData.source_url,
							width: sizeData.width,
							height: sizeData.height,
						};
					}
					
					// Check direct sizes property (newer format)
					if ( media.sizes?.[ imageSize ] ) {
						sizeData = media.sizes[ imageSize ];
						return {
							url: sizeData.url,
							width: sizeData.width,
							height: sizeData.height,
						};
					}
				}

				// Try fallback sizes in order
				for ( const size of FALLBACK_SIZES ) {
					let sizeData = null;
					
					// Check media_details.sizes first
					if ( media.media_details?.sizes?.[ size ] ) {
						sizeData = media.media_details.sizes[ size ];
						return {
							url: sizeData.source_url,
							width: sizeData.width,
							height: sizeData.height,
						};
					}
					
					// Check direct sizes property
					if ( media.sizes?.[ size ] ) {
						sizeData = media.sizes[ size ];
						return {
							url: sizeData.url,
							width: sizeData.width,
							height: sizeData.height,
						};
					}
				}

				// If no sizes available, use original
				if ( media.url || media.source_url ) {
					const url = media.url || media.source_url;
					// Handle case where dimensions might be in different locations
					const width = media.width || media.media_details?.width;
					const height = media.height || media.media_details?.height;
					
					if ( width && height ) {
						return {
							url: url,
							width: width,
							height: height,
						};
					}
					
					// If we have a URL but no dimensions, still return it but with null dimensions
					// This allows the image to be selected and dimensions can be fetched later
					return {
						url: url,
						width: null,
						height: null,
					};
				}

				return null;
			} catch ( err ) {
				console.error( 'Error getting image details:', err );
				setError( __( 'Failed to load image details', 'multi-block-mayhem' ) );
				return null;
			}
		},
		[ imageSize ]
	);

	// Get image details including available sizes with error handling
	const imageDetails = useSelect(
		( select ) => {
			if ( ! imageId ) {
				return null;
			}

			try {
				const media = select( 'core' ).getMedia( imageId );
				if ( ! media ) {
					return null;
				}

				const details = getImageDetails( media );
				return details ? { ...details, id: media.id } : null;
			} catch ( err ) {
				console.error( 'Error fetching media:', err );
				setError( __( 'Failed to load image from media library', 'multi-block-mayhem' ) );
				return null;
			}
		},
		[ imageId, getImageDetails ]
	);

	// Update image details when they change - simplified logic
	useEffect( () => {
		if ( imageDetails && imageDetails.url ) {
			setAttributes( {
				imageUrl: imageDetails.url,
				imageId: imageDetails.id,
				imageWidth: imageDetails.width,
				imageHeight: imageDetails.height,
			} );
			setError( null ); // Clear any previous errors
		}
	}, [ imageDetails, setAttributes ] );

	/**
	 * Handle image selection from the media library.
	 * Includes validation, error handling, and loading states.
	 *
	 * @since 0.1.0
	 *
	 * @param {Object} media The selected media object from WordPress
	 */
	const onSelectImage = useCallback(
		( media ) => {
			setIsLoading( true );
			setError( null );
			
			try {
				if ( ! media || ! media.id ) {
					setImageId( null );
					setAttributes( {
						imageUrl: '',
						imageId: null,
						imageWidth: null,
						imageHeight: null,
					} );
					return;
				}

				// Get image details immediately
				const details = getImageDetails( media );
				
				if ( ! details || ! details.url ) {
					setError( __( 'Invalid image selected', 'multi-block-mayhem' ) );
					return;
				}

				// Check if image meets minimum dimensions when force is true
				// Only check if we have dimensions available
				const meetsMinDimensions = !details.width || !details.height || (
					( ! minWidth || details.width >= minWidth ) &&
					( ! minHeight || details.height >= minHeight )
				);

				if ( force && details.width && details.height && ! meetsMinDimensions ) {
					setError( __( 
						'Selected image does not meet minimum size requirements', 
						'multi-block-mayhem' 
					) );
					return;
				}

				// Update everything at once
				setImageId( media.id );
				setAttributes( {
					imageUrl: details.url,
					imageId: media.id,
					imageWidth: details.width,
					imageHeight: details.height,
				} );
			} catch ( err ) {
				console.error( 'Error selecting image:', err );
				setError( __( 'Failed to select image', 'multi-block-mayhem' ) );
			} finally {
				setIsLoading( false );
			}
		},
		[ getImageDetails, minWidth, minHeight, force, setAttributes ]
	);

	/**
	 * Handle image removal with proper cleanup.
	 * Clears all image-related state and attributes.
	 *
	 * @since 0.1.0
	 */
	const removeImage = useCallback( () => {
		try {
			setImageId( null );
			setError( null );
			setAttributes( {
				imageUrl: '',
				imageId: null,
				imageWidth: null,
				imageHeight: null,
			} );
		} catch ( err ) {
			console.error( 'Error removing image:', err );
			setError( __( 'Failed to remove image', 'multi-block-mayhem' ) );
		}
	}, [ setAttributes ] );

	// Determine UI states
	const showWarning = Boolean(
		imageUrl && attributes?.imageWidth && ! hasMinimumDimensions
	);
	const showSizeNotice = Boolean( ( minWidth || minHeight ) && ! imageUrl );

	// Initialize imageId from attributes when component mounts
	useEffect( () => {
		if ( attributes?.imageId && ! imageId ) {
			setImageId( attributes.imageId );
		}
	}, [ attributes?.imageId, imageId ] );

	// Cleanup function for memory management
	useEffect( () => {
		return () => {
			// Clear any pending operations or subscriptions
			setError( null );
			setIsLoading( false );
		};
	}, [] );

	// Memoize the uploader controls with accessibility improvements
	const uploaderControls = useMemo(
		() => (
			<MediaUpload
				onSelect={ onSelectImage }
				allowedTypes={ [ 'image' ] }
				value={ imageId }
				render={ ( { open } ) => (
					<div className="mbm-image-controls">
						<ButtonGroup>
							<Button 
								onClick={ open } 
								variant="primary"
								disabled={ isLoading }
								aria-label={ imageUrl ? 
									__( 'Replace current image', 'multi-block-mayhem' ) : 
									__( 'Select an image', 'multi-block-mayhem' ) 
								}
							>
								{ isLoading && <Spinner /> }
								{ imageUrl ? __( 'Replace Image', 'multi-block-mayhem' ) : __( 'Select Image', 'multi-block-mayhem' ) }
							</Button>
							{ imageUrl && (
								<Button
									onClick={ removeImage }
									variant="secondary"
									style={ { marginLeft: '8px' } }
									aria-label={ __( 'Remove current image', 'multi-block-mayhem' ) }
								>
									{ __( 'Remove', 'multi-block-mayhem' ) }
								</Button>
							) }
						</ButtonGroup>
					</div>
				) }
			/>
		),
		[ imageUrl, imageId, onSelectImage, removeImage, isLoading ]
	);

	return (
		<div
			className="mbm-image-uploader"
			style={ UPLOADER_STYLES }
			role="region"
			aria-label={ __( 'Image uploader controls', 'multi-block-mayhem' ) }
		>
			{ /* Error Notice */ }
			{ error && (
				<Notice
					status="error"
					isDismissible={ true }
					onRemove={ () => setError( null ) }
					className="mbm-image-error"
				>
					{ error }
				</Notice>
			) }

			{ /* Warning Notice */ }
			{ showWarning && (
				<Notice
					status="warning"
					isDismissible={ false }
					className="mbm-image-warning"
					role="alert"
				>
					{ __( 
						'Current image size', 
						'multi-block-mayhem' 
					) } ({ attributes.imageWidth }px × { attributes.imageHeight }px) { __( 
						'is smaller than recommended', 
						'multi-block-mayhem' 
					) } { recommendationMessage }
				</Notice>
			) }

			{ /* Size Requirements Notice */ }
			{ showSizeNotice && (
				<div
					className="mbm-size-notice"
					style={ SIZE_NOTICE_STYLES }
					role="note"
					aria-label={ __( 'Image size requirements', 'multi-block-mayhem' ) }
				>
					{ force ? __( 'Required', 'multi-block-mayhem' ) : __( 'Recommended', 'multi-block-mayhem' ) } { __( 
						'image size', 
						'multi-block-mayhem' 
					) }: { recommendationMessage }
				</div>
			) }

			{ /* Upload Controls */ }
			{ uploaderControls }
		</div>
	);
};

CustomImageUploader.propTypes = {
	/** Current image URL */
	imageUrl: PropTypes.string,
	/** Function to update block attributes */
	setAttributes: PropTypes.func.isRequired,
	/** Preferred image size to use */
	imageSize: PropTypes.string,
	/** Minimum required width for the image */
	minWidth: PropTypes.number,
	/** Minimum required height for the image */
	minHeight: PropTypes.number,
	/** Block attributes containing image metadata */
	attributes: PropTypes.shape( {
		imageId: PropTypes.number,
		imageWidth: PropTypes.number,
		imageHeight: PropTypes.number,
	} ),
	/** Whether to enforce minimum dimensions strictly */
	force: PropTypes.bool,
};

CustomImageUploader.defaultProps = {
	imageUrl: '',
	imageSize: DEFAULT_IMAGE_SIZE,
	minWidth: 0,
	minHeight: 0,
	attributes: {},
	force: false,
};
