import { registerBlockType } from '@wordpress/blocks';
import { crop } from '@wordpress/icons';
import './style.scss';
import Edit from './edit';
import metadata from './block.json';

registerBlockType(metadata.name, {
	icon: crop,
	edit: Edit,
});
