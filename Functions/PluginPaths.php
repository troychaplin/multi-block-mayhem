<?php // phpcs:ignore Squiz.Commenting.FileComment.Missing

namespace Multi_Block_Mayhem;

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

/**
 * Class PluginPaths
 *
 * This class provides methods to handle and retrieve various paths related to the plugin.
 *
 * @package Multi_Block_Mayhem
 */
class PluginPaths {

    /**
     * Get the URL to the plugin directory.
     *
     * @return string The URL to the plugin directory.
     */
    public static function plugin_url() {
        return MULTI_BLOCK_MAYHEM_URL;
    }

    /**
     * Get the path to the plugin directory.
     *
     * @return string The path to the plugin directory.
     */
    public static function plugin_path() {
        return MULTI_BLOCK_MAYHEM_PATH;
    }

    /**
     * Get the version of the plugin.
     *
     * @return string The version of the plugin.
     */
    public static function plugin_version() {
        return MULTI_BLOCK_MAYHEM_VERSION;
    }
}
