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
?>

<div class="mbm-swatch-cards-text <?php echo esc_attr( $col_span ); ?>">
	<div>
		<h2>Swatch Cards Text</h2>
		<p>Content goes here.</p>
	</div>
</div>