<?php
/**
 * Render the image collage item block.
 *
 * This file contains the PHP logic for rendering the image collage item block
 * in the Multi Block Mayhem plugin.
 *
 * @package Multi_Block_Mayhem
 */

// Ensure attributes have default values.
$multi_block_mayhem_image_collage_background_image = isset( $attributes['imageUrl'] ) ? $attributes['imageUrl'] : '';
$multi_block_mayhem_image_collage_focal_point_x    = isset( $attributes['focalPoint']['x'] ) ? ( $attributes['focalPoint']['x'] * 100 ) . '%' : '50%';
$multi_block_mayhem_image_collage_focal_point_y    = isset( $attributes['focalPoint']['y'] ) ? ( $attributes['focalPoint']['y'] * 100 ) . '%' : '50%';
$multi_block_mayhem_image_collage_zoom_level       = isset( $attributes['zoomLevel'] ) ? str_pad( $attributes['zoomLevel'], 2, '0', STR_PAD_LEFT ) : '01';

// Build inline styles.
$multi_block_mayhem_image_collage_inline_styles = sprintf(
	'background-image: url(%s); background-position: %s %s; transform: scale(1.%s);',
	esc_url( $multi_block_mayhem_image_collage_background_image ),
	esc_attr( $multi_block_mayhem_image_collage_focal_point_x ),
	esc_attr( $multi_block_mayhem_image_collage_focal_point_y ),
	esc_attr( $multi_block_mayhem_image_collage_zoom_level )
);
?>

<div class="wp-block-multi-block-mayhem-image-collage-item">
	<div style="<?php echo esc_attr( $multi_block_mayhem_image_collage_inline_styles ); ?>">abc</div>
</div>