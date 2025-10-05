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
$mb_mayhem_col_span = isset( $attributes['columnSpan'] ) ? 'has-col-span-' . $attributes['columnSpan'] : '';

// Get image attributes.
$mb_mayhem_bg_image      = isset( $attributes['imageUrl'] ) ? $attributes['imageUrl'] : '';
$mb_mayhem_focal_point_x = isset( $attributes['focalPoint']['x'] ) ? ( $attributes['focalPoint']['x'] * 100 ) . '%' : '50%';
$mb_mayhem_focal_point_y = isset( $attributes['focalPoint']['y'] ) ? ( $attributes['focalPoint']['y'] * 100 ) . '%' : '50%';
$mb_mayhem_zoom_level    = isset( $attributes['zoomLevel'] ) ? str_pad( $attributes['zoomLevel'], 2, '0', STR_PAD_LEFT ) : '01';

// Build inline styles.
$mb_mayhem_inline_styles = sprintf(
	'background-image: url(%s); background-position: %s %s; transform: scale(1.%s);',
	esc_url( $mb_mayhem_bg_image ),
	esc_attr( $mb_mayhem_focal_point_x ),
	esc_attr( $mb_mayhem_focal_point_y ),
	esc_attr( $mb_mayhem_zoom_level )
);
?>

<div class="multi-block-mayhem-image-collage-image <?php echo esc_attr( $mb_mayhem_col_span ); ?>">
	<div style="<?php echo esc_attr( $mb_mayhem_inline_styles ); ?>"></div>
</div>