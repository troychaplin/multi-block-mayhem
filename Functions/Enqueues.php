<?php // phpcs:ignore Squiz.Commenting.FileComment.Missing

namespace MultiBlockOfMadness;

use MultiBlockOfMadness\PluginPaths;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Class Enqueues
 *
 * This class is responsible for enqueueing scripts and styles for the plugin.
 *
 * @package MultiBlockOfMadness
 */
class Enqueues {

	/**
	 * Constructor for the class.
	 */
	public function __construct() {
		add_action( 'enqueue_block_editor_assets', array( $this, 'madness_enqueue_block_assets' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'madness_enqueue_frontend_assets' ) );
	}

	/**
	 * Enqueues the block assets for the editor
	 */
	public function madness_enqueue_block_assets() {
		$asset_file = include PluginPaths::plugin_path() . 'build/madness-editor.asset.php';

		wp_enqueue_script(
			'madness-editor-js',
			PluginPaths::plugin_url() . 'build/madness-editor.js',
			$asset_file['dependencies'],
			$asset_file['version'],
			false
		);
	}

	/**
	 * Enqueues the block assets for the frontend
	 */
	public function madness_enqueue_frontend_assets() {
		$asset_file = include PluginPaths::plugin_path() . 'build/madness-frontend.asset.php';

		wp_enqueue_script(
			'madness-frontend-js',
			PluginPaths::plugin_url() . 'build/madness-frontend.js',
			$asset_file['dependencies'],
			$asset_file['version'],
			true
		);
	}
}
