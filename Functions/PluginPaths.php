<?php // phpcs:ignore Squiz.Commenting.FileComment.Missing

namespace MultiBlockMayhem;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Class PluginPaths
 *
 * This class provides methods to handle and retrieve various paths related to the plugin.
 *
 * @package MultiBlockMayhem
 */
class PluginPaths {

	/**
	 * Get the URL to the plugin directory.
	 *
	 * @return string The URL to the plugin directory.
	 */
	public static function plugin_url() {
		// Ensure the constant is defined before using it.
		if ( ! defined( 'MAYHEM_URL' ) ) {
			return '';
		}
		return MAYHEM_URL;
	}

	/**
	 * Get the path to the plugin directory.
	 *
	 * @return string The path to the plugin directory.
	 */
	public static function plugin_path() {
		// Ensure the constant is defined before using it.
		if ( ! defined( 'MAYHEM_PATH' ) ) {
			return '';
		}
		return MAYHEM_PATH;
	}
}
