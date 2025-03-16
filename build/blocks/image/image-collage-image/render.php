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
$col_span = isset( $attributes['columnSpan'] ) ? 'has-col-span-' . $attributes['columnSpan'] : '';

// Get image attributes.
$background_image = isset( $attributes['imageUrl'] ) ? $attributes['imageUrl'] : '';
$focal_point_x    = isset( $attributes['focalPoint']['x'] ) ? ( $attributes['focalPoint']['x'] * 100 ) . '%' : '50%';
$focal_point_y    = isset( $attributes['focalPoint']['y'] ) ? ( $attributes['focalPoint']['y'] * 100 ) . '%' : '50%';
$zoom_level       = isset( $attributes['zoomLevel'] ) ? str_pad( $attributes['zoomLevel'], 2, '0', STR_PAD_LEFT ) : '01';

// Build inline styles.
$inline_styles = sprintf(
	'background-image: url(%s); background-position: %s %s; transform: scale(1.%s);',
	esc_url( $background_image ),
	esc_attr( $focal_point_x ),
	esc_attr( $focal_point_y ),
	esc_attr( $zoom_level )
);
?>

<div class="mbm-image-collage-image <?php echo esc_attr( $col_span ); ?>">
	<div style="<?php echo esc_attr( $inline_styles ); ?>"></div>
</div>