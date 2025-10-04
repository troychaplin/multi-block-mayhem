<?php
/**
 * Base class for plugin modules which can be initialized.
 *
 * @package Multi_Block_Mayhem
 */

namespace Multi_Block_Mayhem;

/**
 * Plugin module extended by other classes.
 */
abstract class Plugin_Module {
	/**
	 * Initialize the module.
	 */
	abstract public function init();
}
