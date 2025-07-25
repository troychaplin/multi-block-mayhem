import { registerBlockType } from '@wordpress/blocks';
import { category } from '@wordpress/icons';
import './style.scss';
import Edit from './edit';
import save from './save';
import metadata from './block.json';

registerBlockType(metadata.name, {
	icon: category,
	edit: Edit,
	save,
});
