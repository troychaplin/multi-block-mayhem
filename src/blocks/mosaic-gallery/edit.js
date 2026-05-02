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

export default function Edit( { attributes, setAttributes } ) {
	const { columns } = attributes;
	const blockGap = attributes?.style?.spacing?.blockGap;

	const blockProps = useBlockProps( {
		className: 'multi-block-mayhem-editor',
		style: {
			'--mb-mayhem-mosaic-gallery-cols': String( columns ),
			'--wp--style--block-gap': blockGap || '0.5em',
		},
	} );

	const allowedBlocks = [ 'core/image' ];
	const blockTemplate = Array( 6 ).fill( [ 'core/image', {} ] );

	return (
		<>
			<InspectorControls>
				<ToolsPanel
					label={ __( 'Mosaic Settings', 'multi-block-mayhem' ) }
					resetAll={ () => setAttributes( { columns: 3 } ) }
				>
					<ToolsPanelItem
						hasValue={ () => columns !== 3 }
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
