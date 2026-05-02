# Mosaic Gallery

A masonry-style image gallery block that creates Pinterest-like layouts using CSS columns.

## Block Relationship

```
multi-block-mayhem/mosaic-gallery (Parent)
  └── core/image (WordPress core block)
```

The Mosaic Gallery accepts only `core/image` blocks as children.

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
3. Adjust columns in the Mosaic Settings panel
4. Use the sidebar panels for spacing, border, and color controls
5. Add more images with the "+" button inside the gallery

### Custom Attributes

| Attribute | Type | Default | Range | Description |
|-----------|------|---------|-------|-------------|
| `columns` | `number` | `3` | 2–12 | Number of CSS columns |

### Core Block Supports

The block leverages WordPress core block supports for most styling controls, providing theme-integrated UI that matches native blocks:

| Support | Controls | Description |
|---------|----------|-------------|
| `spacing.blockGap` | Block Spacing | Gap between images, uses theme spacing presets |
| `spacing.margin` | Margin | Top and bottom margin controls |
| `spacing.padding` | Padding | Padding controls |
| `__experimentalBorder` | Border | Full border panel with color, style, width, and radius |
| `color.background` | Background | Background color with theme palette and gradients |
| `align` | Alignment | Wide and full width alignment |

Block gap uses `__experimentalSkipSerialization` (following the `core/gallery` pattern) because CSS columns require `column-gap` rather than the `gap` property WordPress normally generates for flex/grid layouts. The value is read from attributes and applied as a `--wp--style--block-gap` CSS variable.

### CSS Variables

```css
--mb-mayhem-mosaic-gallery-cols  /* Column count */
--wp--style--block-gap           /* Spacing between images (from core blockGap support) */
```

### Files

| File | Purpose |
|------|---------|
| `block.json` | Block metadata, attributes, and core supports configuration |
| `index.js` | Block registration |
| `edit.js` | Editor component with columns RangeControl |
| `save.js` | Frontend save using InnerBlocks.Content |
| `editor.scss` | Editor-specific styles |
| `style.scss` | Frontend styles using CSS columns |

### Technical Notes

- Uses `column-count` and `column-gap` CSS properties (not Grid or Flexbox)
- Images break naturally across columns based on their height
- Editor uses `.multi-block-mayhem-editor` class for editor-specific styling
- Border controls (including radius) apply to the gallery wrapper; child `core/image` blocks have their own border support for per-image styling

---

## Layout Examples

### Portfolio Gallery
- 4 columns with medium spacing and subtle border radius

### Photo Collection
- 3 columns with larger spacing and no border radius

### Product Showcase
- 2 columns with tight spacing and slight border radius

## Best Practices

- **Mix image heights** — Varying heights creates the best masonry effect
- **Column count** — 3–4 columns works well for most use cases; up to 12 for thumbnail grids
- **Per-image borders** — Use the `core/image` block's own border controls for individual image radius
- **Performance** — Optimize images for web to ensure fast loading
- **Mobile** — The layout automatically adapts to smaller screens

## Dependencies

- WordPress Block Editor APIs (`@wordpress/block-editor`, `@wordpress/components`)
- No external dependencies beyond standard WordPress packages
