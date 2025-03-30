import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';
import './editor.scss';
import './innerblock-settings';
import './innerblock-styles';

export default function Edit({ attributes, setAttributes, style }) {
	const { columns, gap, radius } = attributes;

	const blockProps = useBlockProps({
		className: 'mbm-editor',
		style: {
			...style,
			'--mbm-mosaic-gallery-cols': String(columns),
			'--mbm-mosaic-gallery-gap': `${gap}px`,
			'--mbm-mosaic-gallery-radius': `${radius}px`,
		},
	});

	const allowedBlocks = ['core/image'];
	const blockTemplate = Array(6).fill(['core/image', {}]);

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Mosaic Settings', 'multi-block-mayhem')}>
					<RangeControl
						label={__('Number of Columns', 'multi-block-mayhem')}
						min={1}
						max={6}
						value={columns}
						onChange={value => setAttributes({ columns: value })}
					/>
					<RangeControl
						label={__('Gallery Gap', 'multi-block-mayhem')}
						min={0}
						max={50}
						value={gap}
						onChange={value => setAttributes({ gap: value })}
					/>
					<RangeControl
						label={__('Border Radius', 'multi-block-mayhem')}
						min={0}
						max={50}
						value={radius}
						onChange={value => setAttributes({ radius: value })}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<InnerBlocks
					allowedBlocks={allowedBlocks}
					template={blockTemplate}
					orientation="horizontal"
					templateLock={false}
				/>
			</div>
		</>
	);
}
