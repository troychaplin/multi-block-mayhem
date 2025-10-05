import { __ } from '@wordpress/i18n';
import { useState, useCallback } from '@wordpress/element';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {
	RangeControl,
	SelectControl,
	FocalPointPicker,
	__experimentalToolsPanel as ToolsPanel,
	__experimentalToolsPanelItem as ToolsPanelItem,
} from '@wordpress/components';
import { CustomImageUploader } from '../../supports/custom-image-uploader';
import { imageResolutionOptions } from '../../supports/block-controller-options';
import './editor.scss';

export default function Edit( { attributes, setAttributes, context, style } ) {
	// Set state for focal point picker
	const [ focalPoint, setFocalPoint ] = useState(
		attributes.focalPoint || {
			x: 0.5,
			y: 0.5,
		}
	);

	const {
		columnSpan,
		columns,
		aspectRatio,
		imageUrl,
		imageResolution,
		zoom,
	} = attributes;

	const blockClasses = imageUrl
		? 'multi-block-mayhem-editor'
		: 'multi-block-mayhem-placeholder';

	const blockProps = useBlockProps( {
		className: blockClasses,
		style: {
			...style,
			'--mb-mayhem-image-collage-col-span': columnSpan,
			'--mb-mayhem-image-collage-aspect-ratio': aspectRatio,
		},
	} );

	// Get attributes from context of parent block
	setAttributes( {
		columns: context[ 'multi-block-mayhem/image-collage-columns' ],
		aspectRatio: context[ 'multi-block-mayhem/image-collage-aspect-ratio' ],
	} );

	const onFocalPointChange = useCallback(
		( newFocalPoint ) => {
			setFocalPoint( newFocalPoint );
			setAttributes( { focalPoint: newFocalPoint } );
		},
		[ setAttributes ]
	);

	// Set styles based on Focal Point Picker value
	const bgImageStyles = {
		backgroundImage: `url(${ imageUrl })`,
		backgroundPosition: `${ focalPoint.x * 100 }% ${ focalPoint.y * 100 }%`,
		backgroundSize: 'cover',
		transform: `scale(1.${ String( zoom ).padStart( 2, '0' ) })`,
	};

	return (
		<>
			<InspectorControls>
				<ToolsPanel
					label={ __( 'Image Settings', 'multi-block-mayhem' ) }
					resetAll={ () =>
						setAttributes( {
							columnSpan: 1,
							imageUrl: '',
							imageId: null,
							imageWidth: null,
							imageHeight: null,
							imageResolution: 'large',
							zoom: 0,
						} )
					}
				>
					<ToolsPanelItem
						hasValue={ () => columnSpan !== 1 }
						label={ __( 'Column Span', 'multi-block-mayhem' ) }
						onDeselect={ () => setAttributes( { columnSpan: 1 } ) }
						isShownByDefault
					>
						<RangeControl
							label={ __( 'Column Span', 'multi-block-mayhem' ) }
							min={ 1 }
							max={ columns }
							value={ columnSpan }
							onChange={ ( value ) =>
								setAttributes( { columnSpan: value } )
							}
						/>
					</ToolsPanelItem>
					<ToolsPanelItem
						hasValue={ () => !! imageUrl }
						label={ __( 'Image Upload', 'multi-block-mayhem' ) }
						onDeselect={ () =>
							setAttributes( {
								imageUrl: '',
								imageId: null,
								imageWidth: null,
								imageHeight: null,
							} )
						}
						isShownByDefault
					>
						<CustomImageUploader
							imageUrl={ imageUrl }
							setAttributes={ setAttributes }
							imageSize={ imageResolution }
							attributes={ attributes }
						/>
					</ToolsPanelItem>
					{ imageUrl && (
						<>
							<ToolsPanelItem
								hasValue={ () =>
									focalPoint.x !== 0.5 || focalPoint.y !== 0.5
								}
								label={ __(
									'Focal Point',
									'multi-block-mayhem'
								) }
								onDeselect={ () => {
									const defaultFocalPoint = {
										x: 0.5,
										y: 0.5,
									};
									setFocalPoint( defaultFocalPoint );
									setAttributes( {
										focalPoint: defaultFocalPoint,
									} );
								} }
								isShownByDefault
							>
								<FocalPointPicker
									url={ imageUrl }
									value={ focalPoint }
									onDragStart={ setFocalPoint }
									onDrag={ onFocalPointChange }
									onChange={ onFocalPointChange }
								/>
							</ToolsPanelItem>
							<ToolsPanelItem
								hasValue={ () => imageResolution !== 'large' }
								label={ __(
									'Image Resolution',
									'multi-block-mayhem'
								) }
								onDeselect={ () => {
									setAttributes( {
										imageResolution: 'large',
									} );
								} }
								isShownByDefault
							>
								<SelectControl
									label={ __(
										'Image Resolution',
										'multi-block-mayhem'
									) }
									value={ imageResolution }
									options={ imageResolutionOptions }
									onChange={ ( value ) =>
										setAttributes( {
											imageResolution: value,
										} )
									}
								/>
							</ToolsPanelItem>
							<ToolsPanelItem
								hasValue={ () => !! zoom }
								label={ __(
									'Image Zoom',
									'multi-block-mayhem'
								) }
								onDeselect={ () =>
									setAttributes( { zoom: 0 } )
								}
								isShownByDefault
							>
								<RangeControl
									label={ __(
										'Image Zoom',
										'multi-block-mayhem'
									) }
									min={ 0 }
									max={ 50 }
									value={ zoom }
									onChange={ ( value ) =>
										setAttributes( { zoom: value } )
									}
								/>
							</ToolsPanelItem>
						</>
					) }
				</ToolsPanel>
			</InspectorControls>

			{ imageUrl ? (
				<div
					{ ...blockProps }
					style={ {
						...blockProps.style,
					} }
				>
					<div
						style={ {
							...bgImageStyles,
						} }
					/>
				</div>
			) : (
				<div { ...blockProps }>Add Image</div>
			) }
		</>
	);
}
