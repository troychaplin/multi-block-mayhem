# Custom Image Uploader

A reusable React component for WordPress Gutenberg blocks that provides image selection and validation with error handling and dimension requirements.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [Basic Example](#basic-example)
  - [With Dimension Requirements](#with-dimension-requirements)
  - [With Strict Validation](#with-strict-validation)
- [Props](#props)
- [Block Attributes](#block-attributes)
- [How It Works](#how-it-works)
  - [Image Selection Flow](#image-selection-flow)
  - [Dimension Validation](#dimension-validation)
  - [Size Fallback Logic](#size-fallback-logic)
- [Architecture](#architecture)
- [Error Handling](#error-handling)
- [Accessibility](#accessibility)
- [Examples](#examples)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)

## Overview

The `CustomImageUploader` component provides a user-friendly interface for selecting images from the WordPress Media Library. It includes built-in validation for image dimensions, error handling, loading states, and accessibility features.

**Source:** `src/supports/custom-image-uploader.js`

## Features

- **WordPress Media Library Integration** — Seamlessly connects to WordPress media selection
- **Dimension Validation** — Enforce or recommend minimum image dimensions
- **Multiple Size Support** — Automatically selects optimal image size with intelligent fallbacks
- **Error Handling** — Comprehensive error messages for various failure scenarios
- **Loading States** — Visual feedback during image selection and loading
- **Accessibility** — Full ARIA labels and semantic HTML for screen readers
- **Image Removal** — Clean image removal with proper state cleanup
- **Real-time Validation** — Immediate feedback on image dimension requirements
- **Memory Management** — Proper cleanup to prevent memory leaks

## Installation

The component is part of the Multi Block Mayhem plugin. Import it in your block's edit component:

```javascript
import { CustomImageUploader } from '../../supports/custom-image-uploader';
```

## Usage

### Basic Example

The simplest implementation with no dimension requirements:

```javascript
import { CustomImageUploader } from '../../supports/custom-image-uploader';

function MyBlockEdit({ attributes, setAttributes }) {
  const { imageUrl } = attributes;

  return (
    <CustomImageUploader
      imageUrl={imageUrl}
      setAttributes={setAttributes}
      attributes={attributes}
    />
  );
}
```

This displays a "Select Image" button, allows the user to choose any image from the Media Library, and automatically stores `imageUrl`, `imageId`, `imageWidth`, `imageHeight`, and `imageResolution` in block attributes.

### With Dimension Requirements

Add recommended minimum dimensions to guide users:

```javascript
<CustomImageUploader
  imageUrl={imageUrl}
  setAttributes={setAttributes}
  attributes={attributes}
  minWidth={800}
  minHeight={600}
  imageSize="large"
/>
```

Shows a notice recommending images be at least 800x600px and displays a warning if the selected image is smaller. Still allows smaller images to be selected.

### With Strict Validation

Enforce dimension requirements and prevent selection of undersized images:

```javascript
<CustomImageUploader
  imageUrl={imageUrl}
  setAttributes={setAttributes}
  attributes={attributes}
  minWidth={1200}
  minHeight={800}
  imageSize="full"
  force={true}
/>
```

Requires images to be at least 1200x800px and prevents selection of images that don't meet the requirement.

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `imageUrl` | `string` | No | `''` | The current image URL to display |
| `setAttributes` | `function` | Yes | — | Function to update block attributes (from WordPress) |
| `attributes` | `object` | No | `{}` | Block attributes containing `imageId`, `imageWidth`, `imageHeight` |
| `imageSize` | `string` | No | `'large'` | Preferred WordPress image size (`'thumbnail'`, `'medium'`, `'large'`, `'full'`, or custom) |
| `minWidth` | `number` | No | `0` | Minimum required/recommended width in pixels |
| `minHeight` | `number` | No | `0` | Minimum required/recommended height in pixels |
| `force` | `boolean` | No | `false` | If `true`, enforces dimension requirements; if `false`, only recommends |

## Block Attributes

Your block should define these attributes in `block.json` to work properly with the component:

```json
{
  "attributes": {
    "imageUrl": {
      "type": "string",
      "default": ""
    },
    "imageId": {
      "type": "number"
    },
    "imageWidth": {
      "type": "number"
    },
    "imageHeight": {
      "type": "number"
    },
    "imageResolution": {
      "type": "string",
      "default": "large"
    }
  }
}
```

Note: `imageResolution` is auto-managed by the component. When the component calls `setAttributes`, it sets `imageResolution` to the current `imageSize` prop value (or preserves the existing `attributes.imageResolution` value). You do not need to pass this as a prop — just define it in your block's attributes so the value persists.

## How It Works

### Image Selection Flow

1. **User clicks "Select Image"** — Opens WordPress Media Library modal
2. **Component processes selection** — Retrieves image metadata, attempts to get preferred size, falls back to other sizes if needed
3. **Validation (if enabled)** — Compares dimensions to `minWidth`/`minHeight`. If `force={true}` and too small, rejects. If `force={false}` and too small, allows with a warning.
4. **Updates block attributes** — Stores `imageUrl`, `imageId`, `imageWidth`, `imageHeight`, `imageResolution`

### Dimension Validation

The component supports two validation modes:

**Recommended Mode** (`force={false}`, default)
- Shows a notice before selection: "Recommended image size: 800px x 600px"
- Allows any image to be selected
- Displays warning after selection if image is undersized

**Required Mode** (`force={true}`)
- Shows a notice before selection: "Required image size: 800px x 600px"
- Prevents selection of undersized images
- Shows error message if user attempts to select an undersized image

### Size Fallback Logic

When you request an image size (e.g., `imageSize="large"`), the component follows this priority:

1. **Try requested size** — Checks `media.media_details.sizes[imageSize]` then `media.sizes[imageSize]`
2. **Fall back to standard sizes** (in order) — `large`, `medium`, `thumbnail`
3. **Use original/full size** — If no sized versions exist, uses `media.url` or `media.source_url`

This ensures images are always available, even if WordPress hasn't generated all size variations.

## Architecture

### State Management

```javascript
const [imageId, setImageId] = useState(attributes?.imageId || null);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);
```

- `imageId` — Tracks the WordPress media ID for the current image
- `isLoading` — Shows spinner during image selection/loading
- `error` — Stores error messages for display

### Data Flow

```
Media Library (WordPress)
  │ User selects image
  ▼
onSelectImage (callback)
  │ Validates & processes
  ▼
getImageDetails (helper fn)
  │ Extracts URL, dimensions
  ▼
setAttributes (WordPress)
  │ Updates block
  ▼
Re-render with new data
```

### Key Functions

- **`getImageDetails(media)`** — Extracts image URL and dimensions from WordPress media object. Handles multiple formats and fallback sizes.
- **`onSelectImage(media)`** — Main callback when user selects an image. Validates dimensions, handles errors, updates attributes.
- **`removeImage()`** — Clears all image-related state and attributes.

### Performance Optimizations

- **`useMemo`** — Caches validation logic to prevent unnecessary re-renders
- **`useCallback`** — Memoizes event handlers to maintain referential equality
- **`useEffect` cleanup** — Prevents memory leaks by clearing state on unmount

## Error Handling

| Error | Cause | User Message |
|-------|-------|--------------|
| Invalid media object | Media object missing required data | "Invalid image selected" |
| Load failure | Unable to retrieve image from library | "Failed to load image from media library" |
| Dimension requirement | Image too small with `force={true}` | "Selected image does not meet minimum size requirements" |
| Selection failure | General error during selection | "Failed to select image" |
| Removal failure | Error during image removal | "Failed to remove image" |

All errors display as dismissible notices and are automatically cleared on successful operations.

## Accessibility

### ARIA Labels

```javascript
aria-label="Image uploader controls"   // Container
aria-label="Select an image"           // Select button (no image)
aria-label="Replace current image"     // Select button (has image)
aria-label="Remove current image"      // Remove button
aria-label="Image size requirements"   // Size notice
```

### Semantic HTML

- Uses proper `role` attributes (`region`, `alert`, `note`)
- ButtonGroup for related actions
- Notice components with appropriate status levels
- All buttons fully keyboard accessible

## Examples

### Hero Image Block

```javascript
import { CustomImageUploader } from '../../supports/custom-image-uploader';

function HeroBlockEdit({ attributes, setAttributes }) {
  const { heroImageUrl } = attributes;

  return (
    <div className="hero-block-editor">
      <h3>Hero Image</h3>
      <CustomImageUploader
        imageUrl={heroImageUrl}
        setAttributes={(newAttrs) =>
          setAttributes({
            heroImageUrl: newAttrs.imageUrl,
            heroImageId: newAttrs.imageId,
            heroImageWidth: newAttrs.imageWidth,
            heroImageHeight: newAttrs.imageHeight,
          })
        }
        attributes={{
          imageId: attributes.heroImageId,
          imageWidth: attributes.heroImageWidth,
          imageHeight: attributes.heroImageHeight,
        }}
        minWidth={1920}
        minHeight={1080}
        imageSize="full"
        force={false}
      />
    </div>
  );
}
```

### Thumbnail with Strict Requirements

```javascript
<CustomImageUploader
  imageUrl={attributes.thumbnailUrl}
  setAttributes={setAttributes}
  attributes={attributes}
  minWidth={300}
  minHeight={300}
  imageSize="thumbnail"
  force={true}
/>
```

### Optional Avatar (No Requirements)

```javascript
<CustomImageUploader
  imageUrl={attributes.avatarUrl}
  setAttributes={setAttributes}
  attributes={attributes}
  imageSize="medium"
/>
```

## Best Practices

1. **Always pass attributes** — Even if minimal, always pass the attributes object with `imageId`, `imageWidth`, `imageHeight`.

2. **Match imageSize to use case:**
   - `thumbnail` (150x150) — Small icons, avatars
   - `medium` (300x300) — Content images, previews
   - `large` (1024x1024) — Featured images, headers
   - `full` — Original size, backgrounds, hero images

3. **Use force sparingly** — Only use `force={true}` when layout absolutely requires specific dimensions.

4. **Handle attribute mapping** — When using custom attribute names, map them in `setAttributes`:

```javascript
setAttributes={(newAttrs) => ({
  customImageUrl: newAttrs.imageUrl,
  customImageId: newAttrs.imageId,
})}
```

## Troubleshooting

**Image not displaying** — Verify your block's `attributes` object includes `imageId`, `imageWidth`, `imageHeight`.

**Validation not working** — Ensure you're passing both `attributes.imageWidth` and `attributes.imageHeight` as numbers.

**Size not available** — The component automatically falls back to other sizes. If errors persist, use `imageSize="full"`.

**Multiple instances conflict** — Use unique attribute names for each uploader and map them properly in `setAttributes`.

---

## Version History

- **v0.1.0** — Initial release with core upload, dimension validation, error handling, accessibility features, and size fallback logic.

## License

Part of the Multi Block Mayhem WordPress plugin. See main plugin license for details.
