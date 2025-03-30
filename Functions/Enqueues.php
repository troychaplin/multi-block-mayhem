<?php // phpcs:ignore Squiz.Commenting.FileComment.Missing

namespace Multi_Block_Mayhem;

use Multi_Block_Mayhem\PluginPaths;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Class Enqueues
 *
 * This class is responsible for enqueueing scripts and styles for the plugin.
 *
 * @package Multi_Block_Mayhem
 */
class Enqueues {

	/**
	 * Constructor for the class.
	 */
	public function __construct() {
		add_action( 'enqueue_block_editor_assets', array( $this, 'enqueue_block_assets' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_frontend_assets' ) );
	}

	/**
	 * Enqueues the block assets for the editor.
	 *
	 * @return void
	 */
	public function enqueue_block_assets() {
		$asset_file = $this->get_asset_file( 'mayhem-editor' );
		if ( ! $asset_file ) {
			return;
		}

		wp_enqueue_script(
			'multi-block-mayhem-editor',
			PluginPaths::plugin_url() . 'build/mayhem-editor.js',
			$asset_file['dependencies'],
			PluginPaths::plugin_version(),
			false
		);
	}

	/**
	 * Enqueues the block assets for the frontend.
	 *
	 * @return void
	 */
	public function enqueue_frontend_assets() {
		$asset_file = $this->get_asset_file( 'mayhem-frontend' );
		if ( ! $asset_file ) {
			return;
		}

		wp_enqueue_script(
			'multi-block-mayhem-frontend',
			PluginPaths::plugin_url() . 'build/mayhem-frontend.js',
			$asset_file['dependencies'],
			PluginPaths::plugin_version(),
			true
		);
	}

	/**
	 * Get the asset file for a given script.
	 *
	 * @param string $script_name The name of the script without extension.
	 * @return array|false The asset file array or false if not found.
	 */
	private function get_asset_file( $script_name ) {
		$asset_file_path = PluginPaths::plugin_path() . "build/{$script_name}.asset.php";

		if ( ! file_exists( $asset_file_path ) ) {
			return false;
		}

		$asset_file = include $asset_file_path;
		if ( ! is_array( $asset_file ) || ! isset( $asset_file['dependencies'] ) ) {
			return false;
		}

		return $asset_file;
	}
}
