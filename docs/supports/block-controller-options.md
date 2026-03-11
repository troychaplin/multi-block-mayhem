# Block Controller Options

Shared configuration constants used across multiple blocks for consistent UI controls.

**Source:** `src/supports/block-controller-options.js`

## Overview

This module exports reusable option arrays for WordPress `SelectControl` components. All labels are internationalized using `@wordpress/i18n`.

## Exports

### `aspectRatioOptions`

Preset aspect ratio options used by blocks that support configurable aspect ratios.

| Label | Value |
|-------|-------|
| Square - 1:1 | `1/1` |
| Standard - 4:3 | `4/3` |
| Portrait - 3:4 | `3/4` |
| Classic - 3:2 | `3/2` |
| Classic Portrait - 2:3 | `2/3` |
| Wide - 16:9 | `16/9` |
| Tall - 9:16 | `9/16` |

**Used by:** Image Collage, Image Collage Image

### `imageResolutionOptions`

Image size options mapping to WordPress registered image sizes.

| Label | Value |
|-------|-------|
| Thumbnail | `thumbnail` |
| Medium | `medium` |
| Large | `large` |
| Full Size | `full` |

**Used by:** Image Collage Image

## Usage

```javascript
import {
  aspectRatioOptions,
  imageResolutionOptions,
} from '../../supports/block-controller-options';

// In a SelectControl
<SelectControl
  label={__('Aspect Ratio', 'multi-block-mayhem')}
  value={attributes.aspectRatio}
  options={aspectRatioOptions}
  onChange={(value) => setAttributes({ aspectRatio: value })}
/>

<SelectControl
  label={__('Image Resolution', 'multi-block-mayhem')}
  value={attributes.imageResolution}
  options={imageResolutionOptions}
  onChange={(value) => setAttributes({ imageResolution: value })}
/>
```
