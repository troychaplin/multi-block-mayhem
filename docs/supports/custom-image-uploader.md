# Custom Image Uploader

A robust, accessible React component for WordPress Gutenberg blocks that provides image selection and validation functionality with comprehensive error handling and dimension requirements.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [Basic Example](#basic-example)
  - [With Dimension Requirements](#with-dimension-requirements)
  - [With Strict Validation](#with-strict-validation)
- [Props](#props)
- [How It Works](#how-it-works)
  - [Image Selection Flow](#image-selection-flow)
  - [Dimension Validation](#dimension-validation)
  - [Size Fallback Logic](#size-fallback-logic)
- [Architecture](#architecture)
- [Error Handling](#error-handling)
- [Accessibility](#accessibility)
- [Examples](#examples)

## Overview

The `CustomImageUploader` component is designed for WordPress Gutenberg block development, providing a user-friendly interface for selecting images from the WordPress Media Library. It includes built-in validation for image dimensions, error handling, loading states, and accessibility features.

## Features

- ✅ **WordPress Media Library Integration** - Seamlessly connects to WordPress media selection
- ✅ **Dimension Validation** - Enforce or recommend minimum image dimensions
- ✅ **Multiple Size Support** - Automatically selects optimal image size with intelligent fallbacks
- ✅ **Error Handling** - Comprehensive error messages for various failure scenarios
- ✅ **Loading States** - Visual feedback during image selection and loading
- ✅ **Accessibility** - Full ARIA labels and semantic HTML for screen readers
- ✅ **Image Removal** - Clean image removal with proper state cleanup
- ✅ **Real-time Validation** - Immediate feedback on image dimension requirements
- ✅ **Memory Management** - Proper cleanup to prevent memory leaks

## Installation

The component is already part of the Multi Block Mayhem plugin. To use it in your custom blocks:

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

**What this does:**
- Displays a "Select Image" button
- Allows user to choose any image from the Media Library
- Automatically stores `imageUrl`, `imageId`, `imageWidth`, and `imageHeight` in block attributes
- Shows "Replace Image" and "Remove" buttons when an image is selected

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

**What this does:**
- Shows a notice recommending images be at least 800×600px
- Displays a warning if selected image is smaller than recommended
- Still allows smaller images to be selected
- Uses "large" image size by default

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

**What this does:**
- Requires images to be at least 1200×800px
- Prevents selection of images that don't meet requirements
- Shows error message if user attempts to select an undersized image
- Uses "full" (original) image size

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `imageUrl` | `string` | No | `''` | The current image URL to display |
| `setAttributes` | `function` | **Yes** | - | Function to update block attributes (from WordPress) |
| `attributes` | `object` | No | `{}` | Block attributes object containing `imageId`, `imageWidth`, `imageHeight` |
| `imageSize` | `string` | No | `'large'` | Preferred WordPress image size (`'thumbnail'`, `'medium'`, `'large'`, `'full'`, or custom size) |
| `minWidth` | `number` | No | `0` | Minimum required/recommended width in pixels |
| `minHeight` | `number` | No | `0` | Minimum required/recommended height in pixels |
| `force` | `boolean` | No | `false` | If `true`, enforces dimension requirements; if `false`, only recommends |

### Block Attributes

Your block should define these attributes to work properly with the component:

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

## How It Works

### Image Selection Flow

1. **User Clicks "Select Image"**
   - Opens WordPress Media Library modal
   - User browses and selects an image

2. **Component Processes Selection**
   - Retrieves image metadata from WordPress
   - Attempts to get preferred size (e.g., "large")
   - Falls back to other sizes if preferred not available
   - Extracts URL, width, and height

3. **Validation (if enabled)**
   - Compares image dimensions to `minWidth`/`minHeight`
   - If `force={true}` and dimensions too small → shows error, rejects selection
   - If `force={false}` and dimensions too small → allows selection, shows warning

4. **Updates Block Attributes**
   - Stores `imageUrl`, `imageId`, `imageWidth`, `imageHeight`
   - Triggers block re-render with new image

### Dimension Validation

The component supports two validation modes:

#### Recommended Mode (`force={false}`, default)
- Shows a notice before selection: "Recommended image size: 800px × 600px"
- Allows any image to be selected
- Displays warning after selection if image is undersized
- User can choose to keep the smaller image

#### Required Mode (`force={true}`)
- Shows a notice before selection: "Required image size: 800px × 600px"
- Prevents selection of undersized images
- Shows error message: "Selected image does not meet minimum size requirements"
- Forces user to select appropriately sized image

### Size Fallback Logic

When you request an image size (e.g., `imageSize="large"`), the component follows this priority:

1. **Try requested size first**
   - Checks `media.media_details.sizes[imageSize]`
   - Checks `media.sizes[imageSize]`

2. **Fall back to standard sizes** (in order)
   - `large`
   - `medium`
   - `thumbnail`

3. **Use original/full size**
   - If no sized versions exist, uses `media.url` or `media.source_url`

This ensures images are always available, even if WordPress hasn't generated all size variations.

## Architecture

### State Management

The component uses React hooks for state management:

```javascript
const [imageId, setImageId] = useState(attributes?.imageId || null);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);
```

- **`imageId`**: Tracks the WordPress media ID for the current image
- **`isLoading`**: Shows spinner during image selection/loading
- **`error`**: Stores error messages for display

### Data Flow

```
┌─────────────────┐
│  Media Library  │
│   (WordPress)   │
└────────┬────────┘
         │ User selects image
         ▼
┌─────────────────┐
│  onSelectImage  │
│   (callback)    │
└────────┬────────┘
         │ Validates & processes
         ▼
┌─────────────────┐
│ getImageDetails │
│   (helper fn)   │
└────────┬────────┘
         │ Extracts URL, dimensions
         ▼
┌─────────────────┐
│ setAttributes   │
│  (WordPress)    │
└────────┬────────┘
         │ Updates block
         ▼
┌─────────────────┐
│   Re-render     │
│  with new data  │
└─────────────────┘
```

### Key Functions

#### `getImageDetails(media)`
Extracts image URL and dimensions from WordPress media object. Handles multiple formats and fallback sizes.

#### `onSelectImage(media)`
Main callback when user selects an image. Validates dimensions, handles errors, updates attributes.

#### `removeImage()`
Clears all image-related state and attributes when user clicks "Remove".

### Performance Optimizations

- **`useMemo`**: Caches validation logic and UI components to prevent unnecessary re-renders
- **`useCallback`**: Memoizes event handlers to maintain referential equality
- **`useEffect` cleanup**: Prevents memory leaks by clearing state on unmount

## Error Handling

The component handles these error scenarios:

| Error | Cause | User Message |
|-------|-------|--------------|
| Invalid media object | Media object missing required data | "Invalid image selected" |
| Load failure | Unable to retrieve image from library | "Failed to load image from media library" |
| Dimension requirement | Image too small with `force={true}` | "Selected image does not meet minimum size requirements" |
| Selection failure | General error during selection | "Failed to select image" |
| Removal failure | Error during image removal | "Failed to remove image" |

All errors:
- Display as dismissible notices
- Are automatically cleared on successful operations
- Include internationalized messages

## Accessibility

The component follows WCAG 2.1 guidelines:

### ARIA Labels
```javascript
aria-label="Image uploader controls"        // Container
aria-label="Select an image"                // Select button (no image)
aria-label="Replace current image"          // Select button (has image)
aria-label="Remove current image"           // Remove button
aria-label="Image size requirements"        // Size notice
```

### Semantic HTML
- Uses proper `role` attributes (`region`, `alert`, `note`)
- ButtonGroup for related actions
- Notice components with appropriate status levels

### Keyboard Navigation
- All buttons fully keyboard accessible
- Media Library modal supports keyboard navigation
- Focus management handled by WordPress components

## Examples

### Example 1: Hero Image Block

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

### Example 2: Thumbnail with Strict Requirements

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

### Example 3: Optional Avatar (No Requirements)

```javascript
<CustomImageUploader
  imageUrl={attributes.avatarUrl}
  setAttributes={setAttributes}
  attributes={attributes}
  imageSize="medium"
/>
```

### Example 4: Multiple Images in One Block

```javascript
function GalleryBlockEdit({ attributes, setAttributes }) {
  return (
    <div>
      <h4>Image 1</h4>
      <CustomImageUploader
        imageUrl={attributes.image1Url}
        setAttributes={(attrs) => setAttributes({
          image1Url: attrs.imageUrl,
          image1Id: attrs.imageId,
          image1Width: attrs.imageWidth,
          image1Height: attrs.imageHeight,
        })}
        attributes={{
          imageId: attributes.image1Id,
          imageWidth: attributes.image1Width,
          imageHeight: attributes.image1Height,
        }}
        minWidth={800}
        minHeight={600}
      />
      
      <h4>Image 2</h4>
      <CustomImageUploader
        imageUrl={attributes.image2Url}
        setAttributes={(attrs) => setAttributes({
          image2Url: attrs.imageUrl,
          image2Id: attrs.imageId,
          image2Width: attrs.imageWidth,
          image2Height: attrs.imageHeight,
        })}
        attributes={{
          imageId: attributes.image2Id,
          imageWidth: attributes.image2Width,
          imageHeight: attributes.image2Height,
        }}
        minWidth={800}
        minHeight={600}
      />
    </div>
  );
}
```

## Best Practices

### 1. Always Pass Attributes
Even if minimal, always pass the attributes object:
```javascript
attributes={{
  imageId: attributes.imageId,
  imageWidth: attributes.imageWidth,
  imageHeight: attributes.imageHeight,
}}
```

### 2. Match imageSize to Use Case
- `thumbnail` (150×150): Small icons, avatars
- `medium` (300×300): Content images, previews
- `large` (1024×1024): Featured images, headers
- `full`: Original size, backgrounds, hero images

### 3. Use force Sparingly
Only use `force={true}` when layout absolutely requires specific dimensions. Otherwise, use recommendations to provide flexibility.

### 4. Provide Clear Size Requirements
When setting `minWidth`/`minHeight`, consider:
- Your theme's layout breakpoints
- Retina display requirements (2×)
- Common device resolutions

### 5. Handle Attribute Mapping
When using custom attribute names (not `imageUrl`, `imageId`, etc.), map them in `setAttributes`:
```javascript
setAttributes={(newAttrs) => ({
  customImageUrl: newAttrs.imageUrl,
  customImageId: newAttrs.imageId,
  // ... etc
})}
```

## Troubleshooting

### Image Not Displaying
**Problem**: Image selected but not showing
**Solution**: Verify your block's `attributes` object includes `imageId`, `imageWidth`, `imageHeight`

### Validation Not Working
**Problem**: Warnings not appearing for small images
**Solution**: Ensure you're passing both `attributes.imageWidth` and `attributes.imageHeight`, and they're numbers

### Size Not Available
**Problem**: Error about image size not found
**Solution**: The component automatically falls back to other sizes. If error persists, use `imageSize="full"` for original

### Multiple Instances Conflict
**Problem**: Two uploaders in same block interfering with each other
**Solution**: Use unique attribute names for each uploader and map them properly in `setAttributes`

---

## Version History

- **v0.1.0** (Initial Release)
  - Core image upload functionality
  - Dimension validation (recommended and required modes)
  - Error handling and loading states
  - Accessibility features
  - Size fallback logic

## License

Part of the Multi Block Mayhem WordPress plugin. See main plugin license for details.

