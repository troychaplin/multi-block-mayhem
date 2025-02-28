<?php // phpcs:ignore Squiz.Commenting.FileComment.Missing

namespace MultiBlockOfMadness;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Class PluginPaths
 *
 * This class provides methods to handle and retrieve various paths related to the plugin.
 *
 * @package MultiBlockOfMadness
 */
class PluginPaths {

	/**
	 * Get the URL to the plugin directory.
	 *
	 * @return string The URL to the plugin directory.
	 */
	public static function plugin_url() {
		// Ensure the constant is defined before using it.
		if ( ! defined( 'MADNESS_URL' ) ) {
			return '';
		}
		return MADNESS_URL;
	}

	/**
	 * Get the path to the plugin directory.
	 *
	 * @return string The path to the plugin directory.
	 */
	public static function plugin_path() {
		// Ensure the constant is defined before using it.
		if ( ! defined( 'MADNESS_PATH' ) ) {
			return '';
		}
		return MADNESS_PATH;
	}
}
