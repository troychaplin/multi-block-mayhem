# Multi Block Mayhem

A collection of advanced WordPress blocks for creating visual layouts. Multi Block Mayhem provides blocks for galleries, collages, and interactive content that go beyond the standard WordPress block library.

## Table of Contents

- [Available Blocks](#available-blocks)
- [Quick Start](#quick-start)
- [Documentation](#documentation)
- [Development](#development)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Available Blocks

### Image Collage

A CSS grid-based image collage with customizable columns, aspect ratios, and column spanning. Each image supports focal point positioning, zoom, and multiple resolution options.

- **Parent block:** `multi-block-mayhem/image-collage`
- **Child block:** `multi-block-mayhem/image-collage-image`
- [Full documentation](docs/blocks/image-collage.md)

### Mosaic Gallery

A masonry-style gallery using CSS columns. Images flow naturally based on their height, creating a Pinterest-like layout. Uses `core/image` blocks as children.

- **Block:** `multi-block-mayhem/mosaic-gallery`
- [Full documentation](docs/blocks/mosaic-gallery.md)

## Quick Start

### Installation

1. Download the plugin and upload it to your WordPress site
2. Activate the plugin in your WordPress admin
3. The blocks appear in the **Media** category of the block inserter

### Basic Usage

1. Add a block from the Media category in the block editor
2. Configure settings using the sidebar controls
3. Add content by uploading images
4. Customize appearance with spacing, borders, and layout options

## Documentation

### Blocks

- [Image Collage](docs/blocks/image-collage.md) — Grid-based collage with parent/child block documentation
- [Mosaic Gallery](docs/blocks/mosaic-gallery.md) — Masonry-style gallery

### Shared Utilities

- [Custom Image Uploader](docs/supports/custom-image-uploader.md) — Reusable image upload component with validation
- [Block Controller Options](docs/supports/block-controller-options.md) — Shared aspect ratio and image resolution constants

### Modifications

- [Block Styles](docs/modifications/block-styles.md) — Editor-side block style registration/unregistration

### Other

- [Changelog](CHANGELOG.md)
- [Pull Request Template](.github/PULL_REQUEST_TEMPLATE.md)

## Development

### Prerequisites

- WordPress 6.6+
- Node.js 20+ (see `.nvmrc`)
- PHP 7.0+
- Composer

### Setup

```bash
# Use correct Node version
nvm use

# Install dependencies
npm install
composer install

# Start development with hot reloading
npm start
```

### Build

```bash
npm run build
```

### Commands

| Command | Description |
|---------|-------------|
| `npm start` | Start development with hot reloading |
| `npm run build` | Build production assets |
| `npm run lint` | Run all linters (JS, CSS, PHP) |
| `npm run format` | Format all code (JS, CSS, PHP) |
| `npm run lint:js` | Lint JavaScript files |
| `npm run format:js` | Fix JavaScript lint issues |
| `npm run lint:css` | Lint CSS/SCSS files |
| `npm run format:css` | Fix CSS lint issues |
| `npm run lint:php` | Lint PHP files (via phpcs) |
| `npm run format:php` | Fix PHP lint issues (via phpcbf) |
| `npm run packages-update` | Update WordPress packages |
| `npm run plugin-zip` | Create distributable plugin zip |

## Architecture

### PHP Classes

The plugin uses a modular PHP architecture under the `Multi_Block_Mayhem` namespace. Classes are autoloaded via Composer from the `classes/` directory.

| Class | File | Purpose |
|-------|------|---------|
| `Plugin_Module` | `class-plugin-module.php` | Abstract base class requiring an `init()` method |
| `Plugin_Paths` | `class-plugin-paths.php` | Utility for resolving plugin URLs, paths, and asset metadata |
| `Register_Blocks` | `class-register-blocks.php` | Registers all blocks from `build/blocks-manifest.php` |
| `Enqueues` | `class-enqueues.php` | Enqueues editor and frontend scripts/styles |

### Initialization Flow

```
plugin.php
  -> Load Composer autoload
  -> Instantiate Register_Blocks -> hooks into init
  -> Instantiate Enqueues -> hooks into enqueue_block_editor_assets + wp_enqueue_scripts
```

### Build System

- Webpack-based via `@wordpress/scripts`
- Custom `webpack.config.js` adds `editor.js` and `frontend.js` entry points
- Block assets compiled from `src/blocks/` into `build/blocks/`
- Asset metadata (`.asset.php` files) generated automatically for dependency management

### Block Types

- **Static blocks** — JavaScript save function renders markup (Image Collage, Mosaic Gallery parents)
- **Dynamic blocks** — PHP `render.php` for server-side rendering (Image Collage Image)

## Project Structure

```
multi-block-mayhem/
├── plugin.php                  # Plugin entry point
├── webpack.config.js           # Build configuration
├── package.json                # Node dependencies and scripts
├── composer.json               # PHP dependencies and autoloading
├── phpcs.xml.dist              # PHP coding standards config
├── .eslintrc.js                # JavaScript linting config
├── .editorconfig               # Editor formatting config
├── .nvmrc                      # Node version
├── CHANGELOG.md                # Version history
├── classes/                    # PHP classes (PSR-4 autoloaded)
│   ├── class-plugin-module.php
│   ├── class-plugin-paths.php
│   ├── class-register-blocks.php
│   └── class-enqueues.php
├── src/                        # Source code
│   ├── blocks/                 # Block implementations
│   │   ├── image-collage/      # Parent: CSS grid collage
│   │   ├── image-collage-image/# Child: individual collage image
│   │   └── mosaic-gallery/     # Parent: masonry gallery
│   ├── supports/               # Shared components and utilities
│   │   ├── custom-image-uploader.js
│   │   └── block-controller-options.js
│   ├── modifications/          # Editor-side block modifications
│   │   └── block-styles.js
│   ├── editor.js               # Editor entry point
│   └── frontend.js             # Frontend entry point
├── docs/                       # Documentation
│   ├── blocks/                 # Block documentation
│   ├── supports/               # Utility documentation
│   └── modifications/          # Modification documentation
├── .github/                    # GitHub templates
│   └── PULL_REQUEST_TEMPLATE.md
├── build/                      # Compiled assets (generated)
├── vendor/                     # Composer dependencies
└── node_modules/               # Node dependencies
```

## Contributing

### Reporting Issues

1. Check existing issues first
2. Provide your WordPress version, theme, and steps to reproduce
3. Include screenshots when possible

### Code Contributions

1. Fork the repository
2. Create a feature branch from `main`
3. Follow WordPress coding standards (phpcs, eslint)
4. Update documentation for new features
5. Submit a pull request using the [PR template](.github/PULL_REQUEST_TEMPLATE.md)

## License

This plugin is licensed under the GPL v2 or later.
