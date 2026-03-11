# Image Collage

A CSS grid-based image collage block that creates magazine-style layouts with customizable columns, aspect ratios, and column spanning.

## Block Relationship

```
multi-block-mayhem/image-collage (Parent)
  └── multi-block-mayhem/image-collage-image (Child)
```

The Image Collage parent block only accepts `image-collage-image` child blocks. Child blocks cannot be used independently.

---

## Parent Block: Image Collage

**Name:** `multi-block-mayhem/image-collage`
**Category:** Media
**Source:** `src/blocks/image-collage/`

### Description

A collage of images in a CSS grid with customizable columns, gap, and aspect ratio. The block renders using a JavaScript save function with `InnerBlocks.Content`.

### How to Use

1. Insert the "Image Collage" block from the Media category
2. Configure columns, gap, border radius, and aspect ratio in the sidebar
3. The block starts with 6 placeholder image blocks — replace with your images
4. Add more images with the "+" button inside the collage

### Attributes

| Attribute | Type | Default | Range | Description |
|-----------|------|---------|-------|-------------|
| `columns` | `number` | `3` | 1–6 | Number of grid columns |
| `gap` | `number` | `5` | 0–50 | Spacing between images in pixels |
| `radius` | `number` | `5` | 0–50 | Border radius for all images in pixels |
| `aspectRatio` | `string` | `"4/3"` | — | Aspect ratio applied to all images |

### Aspect Ratio Options

Square (1:1), Standard (4:3), Portrait (3:4), Classic (3:2), Classic Portrait (2:3), Wide (16:9), Tall (9:16)

These are defined in `src/supports/block-controller-options.js` — see [Block Controller Options](../supports/block-controller-options.md).

### Context Provided

The parent shares these values with child blocks via the WordPress block context API:

| Context Key | Source Attribute |
|-------------|-----------------|
| `multi-block-mayhem/image-collage-columns` | `columns` |
| `multi-block-mayhem/image-collage-aspect-ratio` | `aspectRatio` |

### Supports

- Alignment: `full`, `wide`
- HTML editing: disabled

### CSS Variables

```css
--mb-mayhem-image-collage-cols
--mb-mayhem-image-collage-gap
--mb-mayhem-image-collage-radius
--mb-mayhem-image-collage-aspect-ratio
```

### Files

| File | Purpose |
|------|---------|
| `block.json` | Block metadata and configuration |
| `index.js` | Block registration |
| `edit.js` | Editor component with InspectorControls |
| `save.js` | Frontend save using InnerBlocks.Content |
| `editor.scss` | Editor-specific styles |
| `style.scss` | Frontend styles using CSS Grid |

---

## Child Block: Image Collage Image

**Name:** `multi-block-mayhem/image-collage-image`
**Category:** Media
**Parent:** `multi-block-mayhem/image-collage`
**Source:** `src/blocks/image-collage-image/`

### Description

A single image block designed exclusively for use within the Image Collage. Provides advanced controls for image selection, focal point positioning, zoom, column spanning, and image resolution. Renders server-side via PHP.

### Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `columnSpan` | `number` | `1` | Number of grid columns this image spans (1 to parent columns) |
| `columns` | `number` | `3` | Inherited from parent context |
| `aspectRatio` | `string` | `"4/3"` | Inherited from parent context |
| `imageId` | `number` | `null` | WordPress media library attachment ID |
| `imageUrl` | `string` | `null` | URL of the selected image |
| `imageResolution` | `string` | `"large"` | Image size to use (thumbnail, medium, large, full) |
| `imageWidth` | `number` | `null` | Width of the selected image in pixels |
| `imageHeight` | `number` | `null` | Height of the selected image in pixels |
| `focalPoint` | `object` | `{x: 0.5, y: 0.5}` | Focal point coordinates (0–1 range) |
| `zoom` | `number` | `0` | Zoom level (0–50) |

### Context Consumed

| Context Key | Maps to Attribute |
|-------------|-------------------|
| `multi-block-mayhem/image-collage-columns` | `columns` |
| `multi-block-mayhem/image-collage-aspect-ratio` | `aspectRatio` |

### Editor Controls

- **Custom Image Uploader** — Uses the shared [CustomImageUploader](../supports/custom-image-uploader.md) component for image selection with media library integration
- **Image Resolution** — Dropdown to select image size (thumbnail, medium, large, full) from options in [Block Controller Options](../supports/block-controller-options.md)
- **Focal Point Picker** — Interactive control to set which part of the image stays visible when cropped
- **Zoom** — Range control (0–50) for slight magnification before cropping
- **Column Span** — Range control (1 to parent columns) for spanning multiple grid columns

### Rendering

Server-side rendered via `render.php`. The image renders as a background image with `object-position` set from the focal point values. CSS classes are generated dynamically from the `columnSpan` attribute (e.g., `has-col-span-2`).

### Files

| File | Purpose |
|------|---------|
| `block.json` | Block metadata and configuration |
| `index.js` | Block registration |
| `edit.js` | Editor component with image controls |
| `render.php` | PHP server-side rendering |
| `editor.scss` | Editor styles with placeholder states |
| `style.scss` | Frontend styles with grid spanning |

---

## Layout Examples

### Magazine Layout
- 4 columns, 8px gap, 10px radius, 4:3 aspect ratio
- Mix of 1-column and 2-column spanning images

### Portfolio Showcase
- 3 columns, 15px gap, 0px radius, 1:1 aspect ratio
- All images at 1-column span for a uniform grid

### Hero + Grid
- 3 columns, 10px gap, 5px radius, 3:2 aspect ratio
- One 3-column hero image with smaller 1-column images below

## Best Practices

- **Focal points** — Always set for images that will be cropped by the aspect ratio
- **Column spanning** — Use larger spans for hero/feature images, 1-column for supporting images
- **Image resolution** — Use "large" for most cases, "full" only when high-DPI quality is critical
- **Performance** — Choose appropriate image sizes to balance quality and load time
- **Mobile** — Test spanning behavior on smaller screens

## Dependencies

- WordPress Block Editor APIs (`@wordpress/block-editor`, `@wordpress/components`)
- [CustomImageUploader](../supports/custom-image-uploader.md)
- [Block Controller Options](../supports/block-controller-options.md) (aspect ratios, image resolutions)
