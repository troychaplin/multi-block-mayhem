import { __ } from '@wordpress/i18n';
import { useState, useCallback } from '@wordpress/element';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	RangeControl,
	FocalPointPicker,
} from '@wordpress/components';
import { CustomImageUploader } from '../../../supports/CustomImageUploader';
import './editor.scss';

export default function Edit({ attributes, setAttributes, context, style }) {
	const { heading, columnSpan, columns, aspectRatio } = attributes;

	const blockProps = useBlockProps({
		className: 'mbm-editor',
		style: {
			...style,
			'--mbm-swatch-cards-col-span': columnSpan,
			'--mbm-swatch-cards-aspect-ratio': aspectRatio,
		},
	});

	// Get attributes from context of parent block
	setAttributes({
		columns: context['mbm/swatch-cards-columns'],
		aspectRatio: context['mbm/swatch-cards-aspect-ratio'],
	});

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Image Settings', 'multi-block-mayhem')}>
					<RangeControl
						label={__('Column Span', 'multi-block-mayhem')}
						min={1}
						max={columns}
						value={columnSpan}
						onChange={(value) =>
							setAttributes({ columnSpan: value })
						}
					/>
				</PanelBody>
			</InspectorControls>

			<div
				{...blockProps}
				style={{
					...blockProps.style,
				}}
			>
				<p>Content</p>
			</div>
		</>
	);
}
