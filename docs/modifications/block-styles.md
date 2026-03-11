# Block Styles

Editor-side modifications for registering and unregistering WordPress block styles.

**Source:** `src/modifications/block-styles.js`
**Loaded by:** `src/editor.js`

## Overview

The block styles module runs in the block editor only (not the frontend). It is imported by `editor.js`, which is enqueued via the `Enqueues` PHP class on the `enqueue_block_editor_assets` hook.

This module is a placeholder for customizing the styles available on core or third-party blocks within the editor.

## Current Status

The module is currently commented out and contains no active code. It serves as a template for when block style modifications are needed.

## How It Works

The loading pipeline:

```
plugin.php
  → Enqueues class (enqueue_block_editor_assets hook)
    → build/editor.js
      → src/editor.js
        → src/modifications/block-styles.js
```

## Usage

To unregister a default block style:

```javascript
import { unregisterBlockStyle } from '@wordpress/blocks';
import domReady from '@wordpress/dom-ready';

domReady(() => {
  unregisterBlockStyle('core/button', ['outline']);
});
```

To register a custom block style:

```javascript
import { registerBlockStyle } from '@wordpress/blocks';
import domReady from '@wordpress/dom-ready';

domReady(() => {
  registerBlockStyle('core/image', {
    name: 'rounded-shadow',
    label: 'Rounded with Shadow',
  });
});
```

The `domReady` wrapper ensures block styles are fully loaded before attempting to modify them.

## Adding New Modifications

New modification modules can be added under `src/modifications/` and imported in `src/editor.js`:

```javascript
// src/editor.js
import './modifications/block-styles';
import './modifications/my-new-modification';
```
