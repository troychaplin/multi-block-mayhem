import { __ } from '@wordpress/i18n';
import {
	InnerBlocks,
	useBlockProps,
	InspectorControls,
} from '@wordpress/block-editor';
import { PanelBody, RangeControl, SelectControl } from '@wordpress/components';
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
				<PanelBody
					title={ __( 'Collage Settings', 'multi-block-mayhem' ) }
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
					<RangeControl
						label={ __( 'Gallery Gap', 'multi-block-mayhem' ) }
						min={ 0 }
						max={ 50 }
						value={ gap }
						onChange={ ( value ) =>
							setAttributes( { gap: value } )
						}
					/>
					<RangeControl
						label={ __( 'Border Radius', 'multi-block-mayhem' ) }
						min={ 0 }
						max={ 50 }
						value={ radius }
						onChange={ ( value ) =>
							setAttributes( { radius: value } )
						}
					/>
					<SelectControl
						label="Aspect Ratio"
						value={ aspectRatio }
						options={ aspectRatioOptions }
						onChange={ ( value ) =>
							setAttributes( { aspectRatio: value } )
						}
					/>
				</PanelBody>
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
