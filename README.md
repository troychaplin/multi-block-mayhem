# Multi Block Starter Plugin

Supercharge your WordPress block development with this modern, production-ready starter plugin. Built for developers who need a robust foundation for creating multiple block types, this plugin combines the power of static, dynamic, and interactive blocks in one efficient setup. Say goodbye to juggling multiple plugins and hello to a streamlined development workflow with optimized asset loading, modern build tools, and best practices baked in.

This plugin serves as a foundational template for WordPress block development, uniquely combining different block types (dynamic, static, and interactive) into a single, efficient plugin structure.

## Prerequisites

Before you begin, ensure you have the following installed:

-   Node.js (v16 or higher)
-   Docker (if you intend to use `wp-en`)
-   Composer
-   Git

## Getting Setup

This plugin can be cloned into the plugins folder of an existing local WordPress installation, or cloned to any other location if you intend to use `wp-env` for local development.

```
git clone https://github.com/troychaplin/multi-block-starter.git
cd multi-block-starter
nvm install
npm install
```

## Local WordPress Environment

This project includes [@wordpress/env](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-env/) as an optional local development environment. You can run the following to start and stop the Docker container:

-   `npm run wp-env start`
-   `npm run wp-env stop`

### Local Site Info

-   Site: http://localhost:8888
-   Admin: http://localhost:8888/wp-admin
-   Login: `admin`
-   Password: `password`

### Troubleshooting

If wp-env issues occur try the following:

-   `npm run wp-env stop`
-   `npm run wp-env clean`
-   `npm run wp-env start`

## Development Commands

-   `npm start` - Start development mode with hot reloading
-   `npm run build` - Build production assets
-   `npm run lint:js` - Lint JavaScript files
-   `npm run lint:css` - Lint CSS files
-   `npm run format` - Format code using WordPress standards

## Create Block Templates

### Create dynamic block

```
npx @wordpress/create-block@latest {{ADD_BLOCK_NAME}} --template ./src/templates --no-plugin --target-dir='./src/blocks/{{ADD_BLOCK_NAME}}'
```

### Create static block

```
npx @wordpress/create-block@latest {{ADD_BLOCK_NAME}} --template ./src/templates --no-plugin --target-dir='./src/blocks/{{ADD_BLOCK_NAME}} --variant static'
```

### Create interactive block

```
npx @wordpress/create-block@latest {{ADD_BLOCK_NAME}} --template ./src/templates --no-plugin --target-dir='./src/blocks/{{ADD_BLOCK_NAME}} --variant interactive'
```

## Coding Standards

This project follows WordPress coding standards using:

-   PHP_CodeSniffer with WordPress Coding Standards
-   ESLint with WordPress configuration
-   Prettier for code formatting

Required VS Code extensions:

-   PHP CodeSniffer
-   ESLint
-   Prettier

### Troubleshooting

For PHP_CodeSniffer issues:

```
composer dump-autoload
```