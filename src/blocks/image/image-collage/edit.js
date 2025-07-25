import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, RangeControl, SelectControl } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes, style }) {
	const { columns, gap, radius, aspectRatio } = attributes;

	const blockProps = useBlockProps({
		className: 'multi-block-mayhem-editor',
		style: {
			...style,
			'--mbm-image-collage-cols': String(columns),
			'--mbm-image-collage-gap': `${gap}px`,
			'--mbm-image-collage-radius': `${radius}px`,
			'--mbm-image-collage-aspect-ratio': aspectRatio,
		},
	});

	const allowedBlocks = ['multi-block-mayhem/image-collage-image'];
	const blockTemplate = Array(6).fill(['multi-block-mayhem/image-collage-image', {}]);

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Collage Settings', 'multi-block-mayhem')}>
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
					<SelectControl
						label="Aspect Ratio"
						value={aspectRatio}
						options={[
							{
								label: 'Square - 1:1',
								value: '1/1',
							},
							{
								label: 'Standard - 4:3',
								value: '4/3',
							},
							{
								label: 'Portrait - 3:4',
								value: '3/4',
							},
							{
								label: 'Classic - 3:2',
								value: '3/2',
							},
							{
								label: 'Classic Portrait - 2:3',
								value: '2/3',
							},
							{
								label: 'Wide - 16:9',
								value: '16/9',
							},
							{
								label: 'Tall - 9:16',
								value: '9/16',
							},
						]}
						onChange={value => setAttributes({ aspectRatio: value })}
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
