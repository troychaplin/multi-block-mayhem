# Mosaic Gallery Block

A responsive masonry-style image gallery block that creates beautiful Pinterest-like layouts using CSS columns. Perfect for showcasing portfolios, photo collections, or any visual content where you want images to flow naturally in a grid.

## Features

- **Masonry Layout**: Images automatically flow into columns based on their height, creating a natural, organic look
- **Responsive Design**: Adapts to different screen sizes while maintaining the mosaic effect
- **Customizable Layout**: Control columns, spacing, and border radius
- **Image-Only Gallery**: Designed specifically for displaying images in an organized, visually appealing way
- **WordPress Native**: Built using WordPress Block Editor APIs for seamless integration

## How to Use

1. **Add the Block**: Insert the "Mosaic Gallery" block from the Media category
2. **Add Images**: The block starts with 6 placeholder image blocks - replace these with your own images
3. **Customize Layout**: Use the block settings panel to adjust columns, gap, and border radius
4. **More Images**: Add additional image blocks by clicking the "+" button within the gallery

## Block Options

### Number of Columns
- **Range**: 2-12 columns
- **Default**: 3 columns
- **Usage**: Controls how many vertical columns the images flow into
- **Tip**: More columns work well for smaller images, fewer columns for larger featured images

### Gallery Gap
- **Range**: 0-50px
- **Default**: 10px
- **Usage**: Sets the spacing between images in the gallery
- **Tip**: Smaller gaps create a tighter, more cohesive look; larger gaps give images more breathing room

### Border Radius
- **Range**: 0-50px
- **Default**: 0px (square corners)
- **Usage**: Adds rounded corners to all images in the gallery
- **Tip**: Subtle rounding (5-10px) can soften the overall appearance

## Best Practices

- **Image Sizes**: Mix different image heights for the best masonry effect
- **Consistent Width**: Keep images at similar widths for a cleaner look
- **Column Count**: Consider your content - 3-4 columns work well for most use cases
- **Mobile**: The layout automatically adapts to smaller screens
- **Performance**: Optimize images for web to ensure fast loading

## Examples

### Portfolio Gallery
- 4 columns, 15px gap, 8px border radius
- Perfect for showcasing design work or photography

### Photo Collection
- 3 columns, 20px gap, 0px border radius
- Great for event photos or travel galleries

### Product Showcase
- 2 columns, 10px gap, 5px border radius
- Ideal for featuring products with detailed images

---

## Technical Documentation

### Block Details
- **Namespace**: `multi-block-mayhem/mosaic-gallery`
- **Category**: Media
- **API Version**: 3
- **Inner Blocks**: Only allows `core/image` blocks
- **Template**: 6 image blocks by default

### Architecture

#### Core Files
- `edit.js` - Editor component with inspector controls
- `save.js` - Frontend save function using InnerBlocks.Content
- `index.js` - Block registration
- `block.json` - Block metadata and configuration

#### Styling
- `editor.scss` - Editor-specific styles with CSS custom properties
- `style.scss` - Frontend styles using same CSS custom properties
- Uses CSS columns for layout (not flexbox/grid)

#### Advanced Features
- `innerblock-settings.js` - Filters image block settings when inside mosaic gallery
- `innerblock-styles.js` - Removes image block styles when inside mosaic gallery

### Attributes & CSS Variables
```javascript
{
  columns: number (2-12, default: 3),
  gap: number (0-50px, default: 10),
  radius: number (0-50px, default: 0)
}
```

CSS variables:
- `--mb-mayhem-mosaic-gallery-cols`
- `--mb-mayhem-mosaic-gallery-gap`
- `--mb-mayhem-mosaic-gallery-radius`

### Key Implementation Details

#### CSS Column Layout
Uses `column-count` and `column-gap` for masonry effect. Images break naturally across columns.

#### Inner Block Customization
- Disables border, shadow, and spacing controls on child image blocks
- Removes default and rounded image block styles
- Uses WordPress filters to modify block behavior

#### Editor vs Frontend
- Editor has `.multi-block-mayhem-editor` class for different styling
- Same CSS custom properties used in both contexts

### Dependencies
- WordPress Block Editor APIs
- No external dependencies beyond standard WordPress packages
