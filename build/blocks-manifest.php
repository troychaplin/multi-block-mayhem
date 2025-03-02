<?php
// This file is generated. Do not modify it manually.
return array(
	'dynamic' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'example/dynamic',
		'version' => '0.1.0',
		'title' => 'Dynamic Example',
		'category' => 'text',
		'icon' => 'wordpress',
		'description' => 'Example of a dynamic block.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'multi-block-mayhem',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'interactive' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'example/interactive',
		'version' => '0.1.0',
		'title' => 'Interactive Block',
		'category' => 'text',
		'icon' => 'wordpress',
		'description' => 'Example of an interactive block.',
		'example' => array(
			
		),
		'supports' => array(
			'interactive' => true
		),
		'textdomain' => 'multi-block-mayhem',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php',
		'viewScriptModule' => 'file:./view.js'
	),
	'static' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'example/static',
		'version' => '0.1.0',
		'title' => 'Static Example',
		'category' => 'text',
		'icon' => 'wordpress',
		'description' => 'Example of a static block.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'multi-block-mayhem',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'mosaic-gallery' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'multi-block-mayhem/mosaic-gallery',
		'version' => '0.1.0',
		'title' => 'Mosaic Gallery',
		'category' => 'media',
		'description' => 'An gallery block that displays images in a mosaic grid layout.',
		'supports' => array(
			'align' => array(
				'full',
				'wide'
			),
			'alignWide' => true,
			'html' => false
		),
		'attributes' => array(
			'columns' => array(
				'type' => 'number',
				'default' => 3
			),
			'gap' => array(
				'type' => 'number',
				'default' => 10
			)
		),
		'textdomain' => 'multi-block-mayhem',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'example' => array(
			'attributes' => array(
				'columns' => 3,
				'gap' => 10
			)
		)
	),
	'picture-frame-gallery' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'multi-block-mayhem/picture-frame-gallery',
		'version' => '0.1.0',
		'title' => 'Picture Frame Gallery',
		'category' => 'media',
		'icon' => 'wordpress',
		'description' => 'An block that displays images in a css grid.',
		'textdomain' => 'multi-block-mayhem',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	)
);
