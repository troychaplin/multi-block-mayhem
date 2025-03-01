<?php
/**
 * Plugin Name:       Multi Block of Madness
 * Description:       A plugin that brings a collection of blocks and related functionality to the WordPress block editor.
 * Requires at least: 6.6
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Troy Chaplin
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       multi-block-of-madness
 *
 * @package MultiBlockOfMadness
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

// Define plugin constants.
define( 'MADNESS_PATH', plugin_dir_path( __FILE__ ) );
define( 'MADNESS_URL', plugin_dir_url( __FILE__ ) );

// Include Composer's autoload file.
require_once plugin_dir_path( __FILE__ ) . 'vendor/autoload.php';

// Instantiate the classes.
$madness_classes = array(
	\MultiBlockOfMadness\Enqueues::class,
	\MultiBlockOfMadness\PluginPaths::class,
	\MultiBlockOfMadness\RegisterBlocks::class,
);

foreach ( $madness_classes as $madness_class ) {
	new $madness_class();
}
