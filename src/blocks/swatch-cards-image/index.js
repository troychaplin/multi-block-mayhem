import { registerBlockType } from '@wordpress/blocks';
import { grid } from '@wordpress/icons';
import './style.scss';
import Edit from './edit';
import metadata from './block.json';

registerBlockType( metadata.name, {
	icon: grid,
	edit: Edit,
} );
