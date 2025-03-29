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
		add_action( 'enqueue_block_editor_assets', array( $this, 'mayhem_enqueue_block_assets' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'mayhem_enqueue_frontend_assets' ) );
	}

	/**
	 * Enqueues the block assets for the editor
	 */
	public function mayhem_enqueue_block_assets() {
		$asset_file = include PluginPaths::plugin_path() . 'build/mayhem-editor.asset.php';

		wp_enqueue_script(
			'mayhem-editor-js',
			PluginPaths::plugin_url() . 'build/mayhem-editor.js',
			$asset_file['dependencies'],
			$asset_file['version'],
			false
		);
	}

	/**
	 * Enqueues the block assets for the frontend
	 */
	public function mayhem_enqueue_frontend_assets() {
		$asset_file = include PluginPaths::plugin_path() . 'build/mayhem-frontend.asset.php';

		wp_enqueue_script(
			'mayhem-frontend-js',
			PluginPaths::plugin_url() . 'build/mayhem-frontend.js',
			$asset_file['dependencies'],
			$asset_file['version'],
			true
		);
	}
}
