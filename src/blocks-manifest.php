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
		'textdomain' => 'multi-block-of-madness',
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
		'textdomain' => 'multi-block-of-madness',
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
		'textdomain' => 'multi-block-of-madness',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
