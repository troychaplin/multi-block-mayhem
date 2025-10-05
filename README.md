# Multi Block Mayhem

A collection of advanced WordPress blocks for creating stunning visual layouts. Multi Block Mayhem provides professional-grade blocks for galleries, collages, and interactive content that go beyond the standard WordPress block library.

## Table of Contents

- [Available Blocks](#-available-blocks)
- [Quick Start](#-quick-start)
- [Block Documentation](#-block-documentation)
- [Development](#️-development)
- [Contributing](#-contributing)
- [Technical Specifications](#-technical-specifications)
- [Project Structure](#-project-structure)

## 🎨 Available Blocks

### Gallery & Layout Blocks

- **[Mosaic Gallery](src/blocks/mosaic-gallery/README.md)** - Create Pinterest-style masonry layouts with CSS columns
- **[Image Collage](src/blocks/image-collage/README.md)** - Build magazine-style grid layouts with column spanning

### Supporting Blocks

- **[Image Collage Image](src/blocks/image-collage-image/README.md)** - Advanced image block for collages with focal points and spanning

## ✨ Key Features

- **Modern CSS Layouts**: CSS Grid, Flexbox, and CSS Columns for responsive designs
- **Advanced Image Controls**: Focal points, zoom, multiple resolutions, and custom uploaders
- **Responsive Design**: All blocks automatically adapt to different screen sizes
- **Performance Optimized**: Efficient asset loading and PHP rendering where appropriate
- **Developer Friendly**: Clean code, WordPress standards, and comprehensive documentation

## 🚀 Quick Start

### Installation

1. **Download the plugin** and upload it to your WordPress site
2. **Activate** the plugin in your WordPress admin
3. **Start building** - the blocks will appear in the Media category of the block inserter

### Basic Usage

1. **Add a block** from the Media category in the block editor
2. **Configure settings** using the block's sidebar controls
3. **Add content** by uploading images or adding text as needed
4. **Customize appearance** with spacing, borders, and layout options

## 📖 Block Documentation

Each block includes comprehensive documentation:

- **User guides** with step-by-step instructions
- **Feature explanations** with tips and best practices
- **Technical documentation** for developers
- **Example layouts** and use cases

Click on any block name above to view its complete documentation.

## 🛠️ Development

### Prerequisites

- WordPress 5.8+ (Block Editor support)
- Node.js 16+ (for development)
- Composer (for PHP dependencies)

### Local Development Setup

```bash
# Clone the repository
git clone [repository-url]
cd multi-block-mayhem

# Install dependencies
npm install
composer install

# Start development
npm start
```

### Building for Production

```bash
npm run build
```

### Development Commands

- `npm start` - Start development with hot reloading
- `npm run build` - Build production assets
- `npm run lint:js` - Lint JavaScript files
- `npm run lint:css` - Lint CSS files
- `npm run format` - Format code to WordPress standards

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Reporting Issues

1. **Check existing issues** first
2. **Provide details** about your WordPress version, theme, and steps to reproduce
3. **Include screenshots** when possible

### Suggesting Features

1. **Open a discussion** to propose new features
2. **Describe the use case** and how it would benefit users
3. **Consider existing blocks** and how it might fit

### Code Contributions

1. **Fork the repository**
2. **Create a feature branch** from `main`
3. **Follow WordPress coding standards**
4. **Add tests** for new functionality
5. **Update documentation** as needed
6. **Submit a pull request**

### Development Guidelines

- **Follow WordPress coding standards** (PHP_CodeSniffer, ESLint)
- **Write clear commit messages**
- **Update documentation** for any new features
- **Test across different themes and WordPress versions**
- **Ensure accessibility compliance**

## 📋 Technical Specifications

### Block Architecture

- **Static Blocks**: JavaScript-rendered blocks with save functions
- **Dynamic Blocks**: PHP server-side rendered blocks
- **Interactive Blocks**: Client-side JavaScript functionality

### Build System

- **Webpack-based** build process
- **Automatic versioning** through WordPress asset system
- **Optimized bundles** for editor and frontend
- **CSS preprocessing** with SCSS support

### Performance Features

- **Conditional asset loading** - scripts only load when blocks are used
- **PHP rendering** for dynamic content to improve performance
- **Optimized images** with multiple resolution support
- **Minimal dependencies** for fast loading

## 📁 Project Structure

```
multi-block-mayhem/
├── build/                    # Compiled assets
├── src/                      # Source code
│   ├── blocks/               # Individual block implementations
│   │   ├── mosaic-gallery/   # Masonry gallery block
│   │   ├── image-collage/    # Grid-based collage block
│   │   └── swatch-cards/     # Color swatch display block
│   └── supports/             # Shared components
├── classes/                  # PHP classes
├── vendor/                   # Composer dependencies
└── node_modules/             # Node dependencies
```

## 📄 License

This plugin is licensed under the GPL v2 or later.

## 🙏 Credits

Built with modern WordPress development practices and the WordPress Block Editor APIs.