<?php
/**
 * Plugin Name:       Multi Block Mayhem
 * Description:       A plugin that brings a collection of blocks and related functionality to the WordPress block editor.
 * Requires at least: 6.6
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Troy Chaplin
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       multi-block-mayhem
 *
 * @package Multi_Block_Mayhem
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

// Define plugin constants.
define( 'MULTI_BLOCK_MAYHEM_VERSION', '0.1.0' );
define( 'MULTI_BLOCK_MAYHEM_PATH', plugin_dir_path( __FILE__ ) );
define( 'MULTI_BLOCK_MAYHEM_URL', plugin_dir_url( __FILE__ ) );

// Include Composer's autoload file.
require_once plugin_dir_path( __FILE__ ) . 'vendor/autoload.php';

/**
 * Initialize the plugin.
 */
function multi_block_mayhem_init() {
	// Define core classes that are always needed.
	$core_classes = array(
		\Multi_Block_Mayhem\PluginPaths::class,
		\Multi_Block_Mayhem\Enqueues::class,
		\Multi_Block_Mayhem\RegisterBlocks::class,
	);

	// Instantiate all classes.
	foreach ( $core_classes as $class ) {
		new $class();
	}
}
add_action( 'plugins_loaded', 'multi_block_mayhem_init' );
