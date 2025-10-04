import { __ } from '@wordpress/i18n';
import {
	InnerBlocks,
	useBlockProps,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	RangeControl,
    __experimentalToolsPanel as ToolsPanel,
	__experimentalToolsPanelItem as ToolsPanelItem,
} from '@wordpress/components';
import './editor.scss';

export default function Edit( { attributes, setAttributes, style } ) {
	const { columns, gap, radius } = attributes;

	const blockProps = useBlockProps( {
		className: 'multi-block-mayhem-editor',
		style: {
			...style,
			'--mb-mayhem-mosaic-gallery-cols': String( columns ),
			'--mb-mayhem-mosaic-gallery-gap': `${ gap }px`,
			'--mb-mayhem-mosaic-gallery-radius': `${ radius }px`,
		},
	} );

	const allowedBlocks = [ 'core/image' ];
	const blockTemplate = Array( 6 ).fill( [ 'core/image', {} ] );

	return (
		<>
			<InspectorControls>
				<ToolsPanel
					label={ __( 'Mosaic Settings', 'multi-block-mayhem' ) }
					resetAll={ () =>
						setAttributes( {
							columns: 3,
							gap: 10,
							radius: 0,
						} )
					}
				>
					<ToolsPanelItem
						hasValue={ () => !! columns }
						label={ __(
                            'Number of Columns',
                            'multi-block-mayhem'
                        ) }
						onDeselect={ () => setAttributes( { columns: 3 } ) }
						isShownByDefault
					>
						<RangeControl
							label={ __(
								'Number of Columns',
								'multi-block-mayhem'
							) }
							min={ 2 }
							max={ 12 }
							value={ columns }
							onChange={ ( value ) =>
								setAttributes( { columns: value } )
							}
						/>
					</ToolsPanelItem>
					<ToolsPanelItem
						hasValue={ () => !! gap }
						label={ __( 'Gallery Gap', 'multi-block-mayhem' ) }
						onDeselect={ () => setAttributes( { gap: 10 } ) }
						isShownByDefault
					>
						<RangeControl
							label={ __( 'Gallery Gap', 'multi-block-mayhem' ) }
							min={ 0 }
							max={ 50 }
							value={ gap }
							onChange={ ( value ) =>
								setAttributes( { gap: value } )
							}
						/>
					</ToolsPanelItem>
					<ToolsPanelItem
						hasValue={ () => !! radius }
						label={ __( 'Border Radius', 'multi-block-mayhem' ) }
						onDeselect={ () => setAttributes( { radius: 0 } ) }
						isShownByDefault
					>
						<RangeControl
							label={ __(
								'Border Radius',
								'multi-block-mayhem'
							) }
							min={ 0 }
							max={ 50 }
							value={ radius }
							onChange={ ( value ) =>
								setAttributes( { radius: value } )
							}
						/>
					</ToolsPanelItem>
				</ToolsPanel>
			</InspectorControls>

			<div { ...blockProps }>
				<InnerBlocks
					allowedBlocks={ allowedBlocks }
					template={ blockTemplate }
					orientation="horizontal"
					templateLock={ false }
				/>
			</div>
		</>
	);
}
