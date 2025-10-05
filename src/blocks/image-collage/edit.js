import { __ } from '@wordpress/i18n';
import {
	InnerBlocks,
	useBlockProps,
	InspectorControls,
} from '@wordpress/block-editor';
import { RangeControl, SelectControl,
	__experimentalToolsPanel as ToolsPanel,
	__experimentalToolsPanelItem as ToolsPanelItem, } from '@wordpress/components';
import { aspectRatioOptions } from '../../supports/block-controller-options';
import './editor.scss';

export default function Edit( { attributes, setAttributes, style } ) {
	const { columns, gap, radius, aspectRatio } = attributes;

	const blockProps = useBlockProps( {
		className: 'multi-block-mayhem-editor',
		style: {
			...style,
			'--mb-mayhem-image-collage-cols': String( columns ),
			'--mb-mayhem-image-collage-gap': `${ gap }px`,
			'--mb-mayhem-image-collage-radius': `${ radius }px`,
			'--mb-mayhem-image-collage-aspect-ratio': aspectRatio,
		},
	} );

	const allowedBlocks = [ 'multi-block-mayhem/image-collage-image' ];
	const blockTemplate = Array( 6 ).fill( [
		'multi-block-mayhem/image-collage-image',
		{},
	] );

	return (
		<>
			<InspectorControls>
                <ToolsPanel
					label={ __( 'Collage Settings', 'multi-block-mayhem' ) }
					resetAll={ () =>
						setAttributes( {
							columns: 3,
							gap: 10,
							radius: 0,
							aspectRatio: '4/3',
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
                            min={ 1 }
                            max={ 6 }
                            value={ columns }
                            onChange={ ( value ) =>
                                setAttributes( { columns: value } )
                            }
                        />
                    </ToolsPanelItem><ToolsPanelItem
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
					<ToolsPanelItem
						hasValue={ () => !! aspectRatio }
						label={ __( 'Aspect Ratio', 'multi-block-mayhem' ) }
						onDeselect={ () => setAttributes( { aspectRatio: '4/3' } ) }
						isShownByDefault
					>
                        <SelectControl
                            label="Aspect Ratio"
                            value={ aspectRatio }
                            options={ aspectRatioOptions }
                            onChange={ ( value ) =>
                                setAttributes( { aspectRatio: value } )
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
