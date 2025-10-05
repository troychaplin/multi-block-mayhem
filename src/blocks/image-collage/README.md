# Image Collage Block

A flexible CSS grid-based image collage block that allows you to create stunning visual layouts with customizable columns, aspect ratios, and column spanning. Perfect for creating magazine-style layouts, portfolio showcases, or any creative image arrangements.

## Features

- **CSS Grid Layout**: Modern grid system for precise image positioning
- **Column Spanning**: Individual images can span multiple columns for emphasis
- **Flexible Aspect Ratios**: Choose from 7 predefined aspect ratios or use custom ones
- **Customizable Spacing**: Control gaps between images
- **Border Radius**: Add rounded corners to all images
- **Responsive Design**: Automatically adapts to different screen sizes
- **Context Sharing**: Child blocks inherit layout settings from parent

## How to Use

1. **Add the Block**: Insert the "Image Collage" block from the Media category
2. **Configure Layout**: Set columns, gap, border radius, and aspect ratio in the block settings
3. **Add Images**: The block starts with 6 placeholder image blocks - replace these with your own images
4. **Customize Individual Images**: Each image can span multiple columns and has its own settings
5. **More Images**: Add additional image blocks by clicking the "+" button within the collage

## Block Options

### Number of Columns
- **Range**: 1-6 columns
- **Default**: 3 columns
- **Usage**: Sets the base grid structure for the collage
- **Tip**: More columns allow for finer control over image placement

### Gallery Gap
- **Range**: 0-50px
- **Default**: 5px
- **Usage**: Controls spacing between all images in the collage
- **Tip**: Smaller gaps create a more unified look; larger gaps give images breathing room

### Border Radius
- **Range**: 0-50px
- **Default**: 5px (slightly rounded)
- **Usage**: Adds rounded corners to all images in the collage
- **Tip**: Subtle rounding (5-10px) creates a modern, polished appearance

### Aspect Ratio
- **Options**: Square (1:1), Standard (4:3), Portrait (3:4), Classic (3:2), Classic Portrait (2:3), Wide (16:9), Tall (9:16)
- **Default**: Standard (4:3)
- **Usage**: Sets the height-to-width ratio for all images in the collage
- **Tip**: Choose based on your image content - portrait ratios work well for people, wide ratios for landscapes

## Individual Image Options

Each image within the collage has additional customization options:

### Column Span
- **Range**: 1 to maximum columns
- **Default**: 1 column
- **Usage**: Allows images to span multiple columns for emphasis
- **Tip**: Use larger spans for hero images or focal points

### Image Upload
- **Custom Image Uploader**: Drag and drop or select from media library
- **Multiple Resolutions**: Choose from thumbnail, medium, large, or full size
- **Tip**: Use appropriate image sizes for performance

### Focal Point
- **Interactive Picker**: Click to set the focal point of the image
- **Usage**: Controls which part of the image is visible when cropped
- **Tip**: Essential for images that will be cropped to fit the aspect ratio

### Image Zoom
- **Range**: 0-50% zoom
- **Default**: 0% (no zoom)
- **Usage**: Allows slight zooming for better cropping control
- **Tip**: Use sparingly to avoid pixelation

## Best Practices

- **Visual Hierarchy**: Use column spanning to create focal points
- **Consistent Aspect Ratios**: Stick to one aspect ratio per collage for cohesion
- **Image Quality**: Use high-resolution images for best results
- **Focal Points**: Set focal points for images that will be cropped
- **Mobile Considerations**: Test on mobile devices as spanning may behave differently
- **Performance**: Optimize images for web loading

## Examples

### Magazine Layout
- 4 columns, 8px gap, 10px border radius, 4:3 aspect ratio
- Mix of 1-column and 2-column spanning images
- Perfect for editorial-style layouts

### Portfolio Showcase
- 3 columns, 15px gap, 0px border radius, 1:1 aspect ratio
- Consistent 1-column spanning for uniform grid
- Great for design portfolios or product galleries

### Hero + Grid Layout
- 3 columns, 10px gap, 5px border radius, 3:2 aspect ratio
- One 3-column hero image with smaller 1-column supporting images
- Ideal for landing pages or feature presentations

---

## Technical Documentation

### Block Details
- **Namespace**: `multi-block-mayhem/image-collage`
- **Category**: Media
- **API Version**: 3
- **Inner Blocks**: Only allows `multi-block-mayhem/image-collage-image` blocks
- **Template**: 6 image-collage-image blocks by default
- **Context Provider**: Shares columns and aspectRatio with child blocks

### Architecture

#### Core Files
- `edit.js` - Editor component with inspector controls
- `save.js` - Frontend save function using InnerBlocks.Content
- `index.js` - Block registration
- `block.json` - Block metadata and configuration

#### Styling
- `editor.scss` - Editor-specific styles with CSS custom properties
- `style.scss` - Frontend styles using CSS Grid
- Uses CSS Grid for layout with CSS custom properties

### Attributes & CSS Variables
```javascript
{
  columns: number (1-6, default: 3),
  gap: number (0-50px, default: 5),
  radius: number (0-50px, default: 5),
  aspectRatio: string (default: "4/3")
}
```

CSS variables:
- `--mb-mayhem-image-collage-cols`
- `--mb-mayhem-image-collage-gap`
- `--mb-mayhem-image-collage-radius`
- `--mb-mayhem-image-collage-aspect-ratio`

### Key Implementation Details

#### CSS Grid Layout
Uses `display: grid` with `grid-template-columns: repeat()` for flexible column layouts.

#### Context Sharing
Provides context to child blocks for columns and aspectRatio settings using WordPress block context API.

#### Inner Block Integration
Only allows custom `image-collage-image` blocks for full control over individual image behavior.

### Dependencies
- WordPress Block Editor APIs
- Custom image uploader component
- No external dependencies beyond standard WordPress packages
