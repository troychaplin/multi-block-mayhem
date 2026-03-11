# Mosaic Gallery

A masonry-style image gallery block that creates Pinterest-like layouts using CSS columns.

## Block Relationship

```
multi-block-mayhem/mosaic-gallery (Parent)
  └── core/image (WordPress core block)
```

The Mosaic Gallery accepts only `core/image` blocks as children. It customizes their behavior by disabling border, shadow, and spacing controls and removing default image block styles.

---

## Parent Block: Mosaic Gallery

**Name:** `multi-block-mayhem/mosaic-gallery`
**Category:** Media
**Source:** `src/blocks/mosaic-gallery/`

### Description

A gallery block that displays images in a mosaic grid layout using CSS `column-count`. Images flow naturally into columns based on their height, creating an organic masonry effect. Renders using a JavaScript save function with `InnerBlocks.Content`.

### How to Use

1. Insert the "Mosaic Gallery" block from the Media category
2. The block starts with 6 placeholder image blocks — replace with your images
3. Adjust columns, gap, and border radius in the sidebar settings
4. Add more images with the "+" button inside the gallery

### Attributes

| Attribute | Type | Default | Range | Description |
|-----------|------|---------|-------|-------------|
| `columns` | `number` | `3` | 2–12 | Number of CSS columns |
| `gap` | `number` | `10` | 0–50 | Spacing between images in pixels |
| `radius` | `number` | `0` | 0–50 | Border radius for all images in pixels |

### Supports

- Alignment: `full`, `wide`
- HTML editing: disabled

### CSS Variables

```css
--mb-mayhem-mosaic-gallery-cols
--mb-mayhem-mosaic-gallery-gap
--mb-mayhem-mosaic-gallery-radius
```

### Inner Block Customization

The block modifies child `core/image` blocks in two ways:

- **`innerblock-settings.js`** — Filters image block settings to disable border, shadow, and spacing controls when inside the mosaic gallery
- **`innerblock-styles.js`** — Removes default and rounded image block styles

### Files

| File | Purpose |
|------|---------|
| `block.json` | Block metadata and configuration |
| `index.js` | Block registration |
| `edit.js` | Editor component with InspectorControls |
| `save.js` | Frontend save using InnerBlocks.Content |
| `innerblock-settings.js` | Filters child image block settings |
| `innerblock-styles.js` | Removes child image block styles |
| `editor.scss` | Editor-specific styles |
| `style.scss` | Frontend styles using CSS columns |

### Technical Notes

- Uses `column-count` and `column-gap` CSS properties (not Grid or Flexbox)
- Images break naturally across columns based on their height
- Editor uses `.multi-block-mayhem-editor` class for editor-specific styling
- Same CSS custom properties used in both editor and frontend

---

## Layout Examples

### Portfolio Gallery
- 4 columns, 15px gap, 8px radius
- Mix of image heights for best masonry effect

### Photo Collection
- 3 columns, 20px gap, 0px radius
- Works well for event photos or travel galleries

### Product Showcase
- 2 columns, 10px gap, 5px radius
- Ideal for featuring products with detailed images

## Best Practices

- **Mix image heights** — Varying heights creates the best masonry effect
- **Column count** — 3–4 columns works well for most use cases; up to 12 for thumbnail grids
- **Performance** — Optimize images for web to ensure fast loading
- **Mobile** — The layout automatically adapts to smaller screens

## Dependencies

- WordPress Block Editor APIs (`@wordpress/block-editor`, `@wordpress/components`)
- No external dependencies beyond standard WordPress packages
