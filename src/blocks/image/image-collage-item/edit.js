import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes, style }) {
	const { imageUrl, focalPoint } = attributes;

	const blockProps = useBlockProps({
		className: 'multi-block-mayhem-editor',
	});

	return (
		<>
			{/* <InspectorControls>
				<PanelBody title={__('Collage Settings', 'multi-block-mayhem')}>
					<SelectControl
						label={__('Number of Columns', 'multi-block-mayhem')}
						min={1}
						max={6}
						value={imageUrl}
						onChange={(value) => setAttributes({ imageUrl: value })}
					/>
				</PanelBody>
			</InspectorControls> */}

			<div {...blockProps}>Add Image</div>
		</>
	);
}
