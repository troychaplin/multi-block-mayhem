import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	return <p {...useBlockProps.save()}>{'Custom Embed (static block) on the frontend'}</p>;
}
