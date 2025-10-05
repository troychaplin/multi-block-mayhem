# Image Collage: Single Image Block

A specialized image block designed specifically for use within the Image Collage block. This inner block provides advanced image controls including column spanning, focal point selection, and zoom functionality to create sophisticated collage layouts.

## Features

- **Column Spanning**: Span multiple columns in the parent collage grid
- **Advanced Image Uploader**: Custom drag-and-drop interface with multiple resolution options
- **Focal Point Control**: Interactive focal point picker for precise image cropping
- **Image Zoom**: Fine-tune image scaling for better composition
- **Context Awareness**: Automatically inherits layout settings from parent collage
- **PHP Rendering**: Server-side rendering for optimal performance

## How to Use

This block is automatically inserted when you add images to an Image Collage block. You cannot add it independently - it's designed to work exclusively within the collage context.

1. **Add to Collage**: Insert images into an Image Collage block
2. **Upload Image**: Use the custom image uploader to add your image
3. **Set Column Span**: Choose how many columns this image should occupy
4. **Adjust Focal Point**: Click on the image preview to set the focal point
5. **Fine-tune Zoom**: Adjust zoom level if needed for better cropping

## Block Options

### Column Span
- **Range**: 1 to maximum columns of parent collage
- **Default**: 1 column
- **Usage**: Controls how many grid columns this image occupies
- **Visual Effect**: Larger spans create more prominent images
- **Tip**: Use 2-3 column spans for hero images, 1 column for supporting images

### Image Upload
- **Custom Interface**: Drag and drop or click to upload
- **Media Library Integration**: Select from existing WordPress media
- **Multiple Sizes**: Choose from thumbnail, medium, large, or full size
- **Default**: Large size for optimal balance of quality and performance
- **Tip**: Use full size for high-DPI displays, large for standard web use

### Focal Point
- **Interactive Picker**: Click anywhere on the image preview
- **Visual Feedback**: Shows current focal point with a crosshair
- **Range**: Full image area (0,0 to 1,1)
- **Default**: Center of image (0.5, 0.5)
- **Usage**: Determines which part of the image remains visible when cropped
- **Tip**: Essential for portraits or images with important details

### Image Resolution
- **Options**: Thumbnail, Medium, Large, Full Size
- **Default**: Large
- **Usage**: Controls the source image size used for display
- **Performance**: Larger sizes = better quality but slower loading
- **Tip**: Use Large for most cases, Full Size only when necessary

### Image Zoom
- **Range**: 0-50% zoom
- **Default**: 0% (no zoom)
- **Usage**: Allows slight magnification for better focal point positioning
- **Visual Effect**: Zooms the image before cropping to aspect ratio
- **Tip**: Use sparingly - high zoom levels can cause pixelation

## Technical Implementation

### Rendering Method
This block uses PHP server-side rendering (`render.php`) for optimal performance rather than JavaScript save functions.

### Context Integration
- **Inherits Settings**: Automatically receives columns and aspectRatio from parent
- **Dynamic Updates**: Settings update in real-time when parent changes
- **Block Context**: Uses WordPress block context API for seamless integration

### CSS Grid Integration
- **Grid Column Spanning**: Uses CSS `grid-column: span` for column spanning
- **Aspect Ratio**: Maintains consistent aspect ratios across all images
- **Responsive**: Automatically adapts to parent grid changes

## Best Practices

### Column Spanning
- **Create Hierarchy**: Use larger spans for more important images
- **Balance Layout**: Don't span too many columns - it can overwhelm smaller images
- **Consistent Patterns**: Establish visual rhythm with consistent spanning patterns

### Focal Points
- **Set for All Images**: Always set focal points for images that will be cropped
- **Consider Composition**: Place focal points on faces, important objects, or center of interest
- **Test on Mobile**: Verify focal points work well at different screen sizes

### Image Quality
- **High Resolution**: Start with high-quality source images
- **Appropriate Sizing**: Use the right resolution setting for your needs
- **Optimize**: Compress images for web while maintaining quality

### Performance
- **Choose Wisely**: Use Full Size only when necessary for quality
- **Consistent Sizing**: Stick to one resolution setting per collage when possible
- **Test Loading**: Check how your collage performs on slower connections

## Common Use Cases

### Hero + Supporting Images
- Hero image: 2-3 column span with focal point on main subject
- Supporting images: 1 column span with appropriate focal points

### Magazine Layout
- Feature image: 2 column span
- Smaller images: 1 column span
- Mix of portrait and landscape focal points

### Portfolio Grid
- All images: 1 column span for uniform appearance
- Consistent focal points (usually center)
- Same aspect ratio for all images

---

## Technical Documentation

### Block Details
- **Namespace**: `multi-block-mayhem/image-collage-image`
- **Category**: Media
- **API Version**: 3
- **Parent**: `multi-block-mayhem/image-collage`
- **Context Consumer**: Uses columns and aspectRatio from parent
- **Render Method**: PHP server-side rendering

### Architecture

#### Core Files
- `edit.js` - Editor component with advanced image controls
- `render.php` - PHP server-side rendering function
- `index.js` - Block registration
- `block.json` - Block metadata and configuration

#### Styling
- `editor.scss` - Editor-specific styles with placeholder states
- `style.scss` - Frontend styles with grid spanning support
- Uses CSS Grid properties for column spanning

### Attributes
```javascript
{
  columnSpan: number (1-max, default: 1),
  columns: number (inherited from context),
  aspectRatio: string (inherited from context),
  imageId: number (default: null),
  imageUrl: string (default: null),
  imageResolution: string (default: "large"),
  imageWidth: number (default: null),
  imageHeight: number (default: null),
  focalPoint: object (default: {x: 0.5, y: 0.5}),
  zoom: number (default: 0)
}
```

### Key Implementation Details

#### Context Integration
Uses WordPress block context to receive columns and aspectRatio from parent collage block.

#### PHP Rendering
Server-side rendering in `render.php` for optimal performance and SEO benefits.

#### Custom Image Uploader
Integrates with custom image uploader component for enhanced upload experience.

#### Grid Spanning
CSS classes generated dynamically based on columnSpan attribute for grid positioning.

### Dependencies
- WordPress Block Editor APIs
- Custom Image Uploader component (`../../supports/CustomImageUploader`)
- WordPress Media Library APIs
- No external dependencies beyond standard WordPress packages
