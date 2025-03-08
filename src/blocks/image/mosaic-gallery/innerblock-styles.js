import { unregisterBlockStyle } from '@wordpress/blocks';
import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';
import { select } from '@wordpress/data';

/**
 * A simple higher-order component to unregister styles for image blocks
 * inside mosaic gallery blocks
 */
const MosaicGalleryInnerblockImageStyles = createHigherOrderComponent(
	(BlockEdit) => {
		return (props) => {
			if (props.name === 'core/image') {
				// Check if this image block is inside a mosaic gallery
				const { getBlockParents, getBlockName } =
					select('core/block-editor');
				const blockParents = getBlockParents(props.clientId, true);
				const inMosaicGallery = blockParents.some(
					(parentId) =>
						getBlockName(parentId) ===
						'multi-block-mayhem/mosaic-gallery'
				);

				// If it's in a mosaic gallery, unregister styles
				if (inMosaicGallery) {
					unregisterBlockStyle('core/image', 'default');
					unregisterBlockStyle('core/image', 'rounded');
				}
			}

			return <BlockEdit {...props} />;
		};
	},
	'MosaicGalleryInnerblockImageStyles'
);

// Add the filter
addFilter(
	'editor.BlockEdit',
	'multi-block-mayhem/filter-mosaic-gallery-image-styles',
	MosaicGalleryInnerblockImageStyles
);
