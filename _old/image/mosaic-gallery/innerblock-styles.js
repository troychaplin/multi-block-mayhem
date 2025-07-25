import { unregisterBlockStyle } from '@wordpress/blocks';
import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';
import { select } from '@wordpress/data';

const MosaicGalleryInnerblockImageStyles = createHigherOrderComponent(BlockEdit => {
	return props => {
		if (props.name === 'core/image') {
			const { getBlockParents, getBlockName } = select('core/block-editor');
			const blockParents = getBlockParents(props.clientId, true);
			const inMosaicGallery = blockParents.some(
				parentId => getBlockName(parentId) === 'multi-block-mayhem/mosaic-gallery'
			);

			if (inMosaicGallery) {
				unregisterBlockStyle('core/image', 'default');
				unregisterBlockStyle('core/image', 'rounded');
			}
		}

		return <BlockEdit {...props} />;
	};
}, 'MosaicGalleryInnerblockImageStyles');

// Add the filter
addFilter(
	'editor.BlockEdit',
	'multi-block-mayhem/filter-mosaic-gallery-image-styles',
	MosaicGalleryInnerblockImageStyles
);
