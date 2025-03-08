import { addFilter } from '@wordpress/hooks';
import { select } from '@wordpress/data';

function ImageCollageInnerblockImageSettings(
	settingValue,
	settingName,
	clientId,
	blockName
) {
	// Only target image blocks
	if (blockName !== 'core/image') {
		return settingValue;
	}

	// Get block parent information
	const { getBlockParents, getBlockName } = select('core/block-editor');

	// Get the block's parents
	const blockParents = getBlockParents(clientId, true);

	// Check if one of the parents is the mosaic gallery block
	const inMosaicGallery = blockParents.some(
		(parentId) =>
			getBlockName(parentId) === 'multi-block-mayhem/image-collage'
	);

	// If the image is inside the mosaic gallery, modify these settings
	if (inMosaicGallery) {
		const settingsToDisable = {
			'border.color': false,
			'border.radius': false,
			'border.width': false,
			shadow: false,
			'color.customDuotone': false,
			'spacing.margin': false,
		};

		// If the requested setting is one we want to disable
		if (settingsToDisable.hasOwnProperty(settingName)) {
			return settingsToDisable[settingName];
		}
	}

	// Return original value for all other cases
	return settingValue;
}

// Add the filters
addFilter(
	'blockEditor.useSetting.before',
	'multi-block-mayhem/image-collage-innerblock-image-settings',
	ImageCollageInnerblockImageSettings
);
