<?php
/**
 * Render the image collage item block.
 *
 * This file contains the PHP logic for rendering the image collage item block
 * in the Multi Block Mayhem plugin.
 *
 * @package MultiBlockMayhem
 */

// Get block attributes.
$mbm_image_collage_image_col_span = isset( $attributes['columnSpan'] ) ? 'has-col-span-' . $attributes['columnSpan'] : '';

// Get image attributes.
$mbm_image_collage_image_background_image = isset( $attributes['imageUrl'] ) ? $attributes['imageUrl'] : '';
$mbm_image_collage_image_focal_point_x    = isset( $attributes['focalPoint']['x'] ) ? ( $attributes['focalPoint']['x'] * 100 ) . '%' : '50%';
$mbm_image_collage_image_focal_point_y    = isset( $attributes['focalPoint']['y'] ) ? ( $attributes['focalPoint']['y'] * 100 ) . '%' : '50%';
$mbm_image_collage_image_zoom_level       = isset( $attributes['zoomLevel'] ) ? str_pad( $attributes['zoomLevel'], 2, '0', STR_PAD_LEFT ) : '01';

// Build inline styles.
$mbm_image_collage_inline_styles = sprintf(
	'background-image: url(%s); background-position: %s %s; transform: scale(1.%s);',
	esc_url( $mbm_image_collage_image_background_image ),
	esc_attr( $mbm_image_collage_image_focal_point_x ),
	esc_attr( $mbm_image_collage_image_focal_point_y ),
	esc_attr( $mbm_image_collage_image_zoom_level )
);
?>

<div class="mbm-image-collage-image <?php echo esc_attr( $mbm_image_collage_image_col_span ); ?>">
	<div style="<?php echo esc_attr( $mbm_image_collage_inline_styles ); ?>"></div>
</div>