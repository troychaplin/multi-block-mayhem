import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';
import './innerblock-settings';
import './innerblock-styles';

export default function Edit() {
	return (
		<p {...useBlockProps()}>
			{__('Image Collage in the editor!', 'multi-block-mayhem')}
		</p>
	);
}
