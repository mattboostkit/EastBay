# Media Integration Guide for East Wear Bay Project

This guide explains how to add images and embed 3D models from Sketchfab in the East Wear Bay Project website.

## Table of Contents
1. [Adding Images with Next.js Image Component](#adding-images)
2. [Embedding Sketchfab 3D Models](#embedding-sketchfab-models)
3. [Optimizing Media for Performance](#optimizing-media)
4. [Accessibility Considerations](#accessibility)

---

## Adding Images

### Using the Next.js Image Component

Next.js provides an optimized `Image` component that automatically handles:
- Responsive sizes
- WebP/AVIF format conversion
- Lazy loading
- Preventing layout shift with proper sizing

### Basic Usage

```jsx
import Image from 'next/image'

// For local images in the public folder
<Image 
  src="/images/artifact.jpg" 
  alt="Ancient pottery fragment" 
  width={800} 
  height={600} 
/>

// For remote images from approved domains
<Image 
  src="https://cdn.sanity.io/images/ce9tlzu0/production/deb19698014c3332dc3ce9aeb12228d7f8a2b5f8-2016x1512.jpg" 
  alt="Archaeological excavation site" 
  width={800} 
  height={600} 
/>

// For responsive images that fill their container
<div className="relative h-80">
  <Image 
    src="/images/hero.jpg" 
    alt="Hero image of excavation site" 
    fill 
    className="object-cover" 
  />
</div>
```

### Next.js Image Configuration

Remote domains must be configured in `next.config.js`:

```javascript
module.exports = {
  images: {
    domains: ['cdn.sanity.io', 'sketchfab.com'],
  },
}
```

### Image Best Practices

1. **Always include descriptive alt text** for accessibility
2. **Specify width and height** to prevent layout shift
3. **Use proper image format** - JPG for photos, PNG for graphics with transparency, WebP for best compression
4. **Optimize image size** before uploading to the website
5. **Consider responsive behavior** using the `sizes` property for different viewports

---

## Embedding Sketchfab Models

### Using the ModelViewer Component

The project includes a custom `ModelViewer` component that makes it easy to embed 3D models from Sketchfab.

### Basic Usage

```jsx
import { ModelViewer } from '@/components/ui/ModelViewer'

<ModelViewer 
  src="https://sketchfab.com/models/213f3e27d14d4308abeb5c3e5650b903/embed" 
  title="Roman Pottery from East Wear Bay"
  aspectRatio="square"
/>
```

### Advanced Options

```jsx
<ModelViewer 
  src="https://sketchfab.com/models/213f3e27d14d4308abeb5c3e5650b903/embed" 
  title="Roman Pottery from East Wear Bay"
  aspectRatio="16/9"       // Options: 'square', '16/9', '4/3'
  autoPlay={true}          // Start loading and rendering immediately
  ui_controls={1}          // Show UI controls (0 to hide)
  autoSpin={1}             // Enable auto-rotation (0 to disable)
  transparent={1}          // Enable transparent background (0 for solid)
/>
```

### Getting the Sketchfab Embed URL

1. Go to the Sketchfab model page you want to embed
2. Click the "Share" button
3. Select the "Embed" tab
4. Copy the URL from the iframe's `src` attribute
   - Example: `https://sketchfab.com/models/213f3e27d14d4308abeb5c3e5650b903/embed`

### Sketchfab Best Practices

1. **Optimize 3D models** before uploading to Sketchfab (reduce polygon count, texture size)
2. **Set a clear background** for models to ensure they blend well with the website
3. **Configure proper lighting** on Sketchfab to highlight important features
4. **Add annotations** to important parts of the model to enhance educational value
5. **Set a default view** that best showcases the artifact

---

## Optimizing Media for Performance

### Image Optimization

1. Compress images before uploading using tools like:
   - [TinyPNG](https://tinypng.com/)
   - [Squoosh](https://squoosh.app/)
   - [ImageOptim](https://imageoptim.com/)

2. Choose appropriate dimensions:
   - Hero images: 1920px width max
   - Content images: 800-1200px width
   - Thumbnails: 400px width

3. Use modern formats:
   - WebP for general use
   - AVIF for even better compression (with fallbacks)

### 3D Model Optimization

1. Reduce polygon count to minimum needed for detail
2. Optimize textures to 2K or smaller
3. Use draco compression when exporting models
4. Set appropriate lighting to minimize rendering demands
5. Choose simple backgrounds or transparent options

---

## Accessibility Considerations

### Image Accessibility

1. **Always include descriptive alt text** that explains the image content
2. **Use empty alt text** for decorative images (`alt=""`)
3. **Include captions** for complex images with academic significance
4. **Consider colour contrast** between image and surrounding content
5. **Don't rely solely on images** to convey critical information

### 3D Model Accessibility

1. **Provide text alternatives** describing the 3D model
2. **Include multiple views or screenshots** for those who can't interact with 3D
3. **Ensure keyboard navigation** works with embedded models
4. **Add descriptive titles** that clearly identify what the model represents
5. **Consider performance** on lower-end devices

---

For technical support or questions about media integration, contact the development team at info@eastwearbay.org.