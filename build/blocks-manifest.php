<?php
// This file is generated. Do not modify it manually.
return array(
	'promo-cards' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'multi-block-mayhem/promo-cards',
		'version' => '0.1.0',
		'title' => 'Promo Cards',
		'category' => 'text',
		'description' => 'A block that displays a series of promotional cards in a CSS grid.',
		'supports' => array(
			'align' => array(
				'full',
				'wide'
			),
			'alignWide' => true,
			'html' => false
		),
		'providesContext' => array(
			'multi-block-mayhem/promo-cards-columns' => 'columns'
		),
		'attributes' => array(
			'columns' => array(
				'type' => 'number',
				'default' => 2
			),
			'gap' => array(
				'type' => 'number',
				'default' => 5
			),
			'radius' => array(
				'type' => 'number',
				'default' => 5
			),
			'aspectRatio' => array(
				'type' => 'string',
				'default' => '4/3'
			)
		),
		'textdomain' => 'multi-block-mayhem',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'promo-cards-image' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'multi-block-mayhem/promo-cards-image',
		'version' => '0.1.0',
		'title' => 'Promo Cards: Image',
		'category' => 'media',
		'description' => 'The image block for the Promo Cards block.',
		'parent' => array(
			'multi-block-mayhem/promo-cards'
		),
		'usesContext' => array(
			'multi-block-mayhem/promo-cards-columns',
			'multi-block-mayhem/promo-cards-aspect-ratio'
		),
		'supports' => array(
			'align' => array(
				'full',
				'wide'
			),
			'alignWide' => true,
			'html' => false
		),
		'attributes' => array(
			'imageUrl' => array(
				'type' => 'string',
				'default' => null
			),
			'imageId' => array(
				'type' => 'number',
				'default' => null
			),
			'focalPoint' => array(
				'type' => 'object',
				'default' => array(
					'x' => 0.5,
					'y' => 0.5
				)
			),
			'imageWidth' => array(
				'type' => 'number',
				'default' => null
			),
			'imageHeight' => array(
				'type' => 'number',
				'default' => null
			),
			'columnSpan' => array(
				'type' => 'number',
				'default' => 1
			),
			'zoom' => array(
				'type' => 'number',
				'default' => 0
			),
			'columns' => array(
				'type' => 'number',
				'default' => 3
			),
			'aspectRatio' => array(
				'type' => 'string',
				'default' => '4/3'
			)
		),
		'textdomain' => 'multi-block-mayhem',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
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
	'image-collage' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'multi-block-mayhem/image-collage',
		'version' => '0.1.0',
		'title' => 'Image Collage',
		'category' => 'media',
		'description' => 'An block that displays a collage of images in a css grid.',
		'supports' => array(
			'align' => array(
				'full',
				'wide'
			),
			'alignWide' => true,
			'html' => false
		),
		'providesContext' => array(
			'multi-block-mayhem/image-collage-columns' => 'columns'
		),
		'attributes' => array(
			'columns' => array(
				'type' => 'number',
				'default' => 3
			),
			'gap' => array(
				'type' => 'number',
				'default' => 5
			),
			'radius' => array(
				'type' => 'number',
				'default' => 5
			),
			'aspectRatio' => array(
				'type' => 'string',
				'default' => '4/3'
			)
		),
		'textdomain' => 'multi-block-mayhem',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'example' => array(
			'attributes' => array(
				'columns' => 3,
				'gap' => 5,
				'borderRadius' => 0,
				'aspectRatio' => '4/3'
			),
			'innerBlocks' => array(
				array(
					'name' => 'core/image',
					'attributes' => array(
						'columnSpan' => '1'
					)
				),
				array(
					'name' => 'core/image',
					'attributes' => array(
						'columnSpan' => '1'
					)
				),
				array(
					'name' => 'core/image',
					'attributes' => array(
						'columnSpan' => '1'
					)
				),
				array(
					'name' => 'core/image',
					'attributes' => array(
						'columnSpan' => '1'
					)
				),
				array(
					'name' => 'core/image',
					'attributes' => array(
						'columnSpan' => '1'
					)
				),
				array(
					'name' => 'core/image',
					'attributes' => array(
						'columnSpan' => '1'
					)
				),
				array(
					'name' => 'core/image',
					'attributes' => array(
						'columnSpan' => '1'
					)
				)
			)
		)
	),
	'image-collage-item' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'multi-block-mayhem/image-collage-item',
		'version' => '0.1.0',
		'title' => 'Image Collage',
		'category' => 'media',
		'description' => 'An block that displays a collage of images in a css grid.',
		'parent' => array(
			'multi-block-mayhem/image-collage'
		),
		'usesContext' => array(
			'multi-block-mayhem/image-collage-columns',
			'multi-block-mayhem/image-collage-aspect-ratio'
		),
		'supports' => array(
			'align' => array(
				'full',
				'wide'
			),
			'alignWide' => true,
			'html' => false
		),
		'attributes' => array(
			'imageUrl' => array(
				'type' => 'string',
				'default' => null
			),
			'imageId' => array(
				'type' => 'number',
				'default' => null
			),
			'focalPoint' => array(
				'type' => 'object',
				'default' => array(
					'x' => 0.5,
					'y' => 0.5
				)
			),
			'imageWidth' => array(
				'type' => 'number',
				'default' => null
			),
			'imageHeight' => array(
				'type' => 'number',
				'default' => null
			),
			'columnSpan' => array(
				'type' => 'number',
				'default' => 1
			),
			'zoom' => array(
				'type' => 'number',
				'default' => 0
			),
			'columns' => array(
				'type' => 'number',
				'default' => 3
			),
			'aspectRatio' => array(
				'type' => 'string',
				'default' => '4/3'
			)
		),
		'textdomain' => 'multi-block-mayhem',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'render' => 'file:./render.php'
	),
	'mosaic-gallery' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'multi-block-mayhem/mosaic-gallery',
		'version' => '0.1.0',
		'title' => 'Mosaic Gallery',
		'category' => 'media',
		'description' => 'A gallery block that displays images in a mosaic grid layout.',
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
			),
			'radius' => array(
				'type' => 'number',
				'default' => 0
			)
		),
		'textdomain' => 'multi-block-mayhem',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'example' => array(
			'attributes' => array(
				'columns' => 3,
				'gap' => 10,
				'borderRadius' => 5
			),
			'innerBlocks' => array(
				array(
					'name' => 'core/image',
					'attributes' => array(
						'height' => 175
					)
				),
				array(
					'name' => 'core/image',
					'attributes' => array(
						'height' => 201
					)
				),
				array(
					'name' => 'core/image',
					'attributes' => array(
						'height' => 146
					)
				),
				array(
					'name' => 'core/image',
					'attributes' => array(
						'height' => 138
					)
				),
				array(
					'name' => 'core/image',
					'attributes' => array(
						'height' => 89
					)
				),
				array(
					'name' => 'core/image',
					'attributes' => array(
						'height' => 103
					)
				),
				array(
					'name' => 'core/image',
					'attributes' => array(
						'height' => 153
					)
				)
			)
		)
	)
);
