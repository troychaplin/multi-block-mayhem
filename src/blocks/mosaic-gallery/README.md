# Mosaic Gallery Block - Technical Documentation

## Overview
WordPress block that creates a masonry-style image gallery using CSS columns. Displays images in a responsive grid layout with configurable columns, gaps, and border radius.

## Block Details
- **Namespace**: `multi-block-mayhem/mosaic-gallery`
- **Category**: Media
- **API Version**: 3
- **Inner Blocks**: Only allows `core/image` blocks
- **Template**: 6 image blocks by default

## Architecture

### Core Files
- `edit.js` - Editor component with inspector controls
- `save.js` - Frontend save function using InnerBlocks.Content
- `index.js` - Block registration
- `block.json` - Block metadata and configuration

### Styling
- `editor.scss` - Editor-specific styles with CSS custom properties
- `style.scss` - Frontend styles using same CSS custom properties
- Uses CSS columns for layout (not flexbox/grid)

### Advanced Features
- `innerblock-settings.js` - Filters image block settings when inside mosaic gallery
- `innerblock-styles.js` - Removes image block styles when inside mosaic gallery

## Attributes & CSS Variables
```javascript
{
  columns: number (1-6, default: 3),
  gap: number (0-50px, default: 10),
  radius: number (0-50px, default: 0)
}
```

CSS variables:
- `--mb-mayhem-mosaic-gallery-cols`
- `--mb-mayhem-mosaic-gallery-gap`
- `--mb-mayhem-mosaic-gallery-radius`

## Key Implementation Details

### CSS Column Layout
Uses `column-count` and `column-gap` for masonry effect. Images break naturally across columns.

### Inner Block Customization
- Disables border, shadow, and spacing controls on child image blocks
- Removes default and rounded image block styles
- Uses WordPress filters to modify block behavior

### Editor vs Frontend
- Editor has `.multi-block-mayhem-editor` class for different styling
- Same CSS custom properties used in both contexts

## Dependencies
- WordPress Block Editor APIs
- No external dependencies beyond standard WordPress packages
