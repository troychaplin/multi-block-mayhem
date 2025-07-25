<?php // phpcs:ignore Squiz.Commenting.FileComment.Missing

namespace Multi_Block_Mayhem;

use Multi_Block_Mayhem\PluginPaths;

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

/**
 * Class RegisterBlocks
 *
 * This class is responsible for registering custom Gutenberg blocks for the plugin.
 *
 * @package Multi_Block_Mayhem
 */
class RegisterBlocks {

    /**
     * The base directory for blocks.
     *
     * @var string
     */
    private $blocks_base_dir;

    /**
     * Constructor for the class.
     */
    public function __construct() {
        $this->blocks_base_dir = PluginPaths::plugin_path() . 'build/blocks/';
        add_action( 'init', array( $this, 'register_blocks' ) );
    }

    /**
     * Registers custom Gutenberg blocks for the plugin.
     *
     * This function is responsible for registering the custom blocks
     * that are defined within the plugin. It ensures that the blocks
     * are available for use within the Gutenberg editor.
     *
     * @return void
     */
    public function register_blocks() {
        $block_categories = array(
            'card',
            'image',
            'interactive',
        );

        foreach ( $block_categories as $category ) {
            $category_path = $this->blocks_base_dir . $category . '/';
            if ( ! $this->is_valid_directory( $category_path ) ) {
                continue;
            }

            $this->register_block_category( $category_path );
        }
    }

    /**
     * Check if a directory exists and is valid.
     *
     * @param string $dir_path The directory path to check.
     * @return bool Whether the directory is valid.
     */
    private function is_valid_directory( $dir_path ) {
        if ( ! is_dir( $dir_path ) ) {
            return false;
        }

        return true;
    }

    /**
     * Register all blocks in a category directory.
     *
     * @param string $category_path The path to the category directory.
     * @return void
     */
    private function register_block_category( $category_path ) {
        // Register block metadata collection if available.
        if ( function_exists( 'wp_register_block_metadata_collection' ) ) {
            wp_register_block_metadata_collection(
                $category_path,
                PluginPaths::plugin_path() . 'src/blocks-manifest.php'
            );
        }

        $block_folders = glob( $category_path . '*', GLOB_ONLYDIR );
        foreach ( $block_folders as $block_path ) {
            $this->register_single_block( $block_path );
        }
    }

    /**
     * Register a single block.
     *
     * @param string $block_path The path to the block directory.
     * @return void
     */
    private function register_single_block( $block_path ) {
        $block_json = $block_path . '/block.json';
        if ( ! file_exists( $block_json ) ) {
            return;
        }

		// phpcs:ignore WordPress.WP.AlternativeFunctions.file_get_contents_file_get_contents -- Reading local file
        $block_json_content = file_get_contents( $block_json );
        if ( false === $block_json_content ) {
            return;
        }

        $metadata = json_decode( $block_json_content, true );
        if ( json_last_error() !== JSON_ERROR_NONE ) {
            return;
        }

        // Special handling for interactive blocks.
        if ( isset( $metadata['viewScriptModule'] ) ) {
            add_filter( 'should_load_separate_core_block_assets', '__return_true' );
        }

        register_block_type( $block_path );
    }
}
