import { registerBlockType } from '@wordpress/blocks';
import { image } from '@wordpress/icons';
import './style.scss';
import Edit from './edit';
import metadata from './block.json';

registerBlockType( metadata.name, {
	icon: image,
	edit: Edit,
} );
