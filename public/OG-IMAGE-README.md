# OG Image Placeholder

Please create a 1200x630 PNG image for social media sharing and save it as `og-image.png` in this directory.

## Recommended Tools

- [Canva](https://canva.com) - Free templates
- [Figma](https://figma.com) - Design from scratch
- [OG Image Generator](https://og-image.vercel.app/) - Quick online tool

## Requirements

- **Dimensions**: 1200 x 630 pixels
- **Format**: PNG or JPG
- **File name**: `og-image.png`
- **Content suggestions**:
  - Your name and title
  - Key skills/technologies
  - Portfolio URL
  - Professional photo (optional)
  - Brand colors matching your site

## Current Metadata

The image is already configured in `/app/layout.tsx`:

```typescript
images: [
  {
    url: "/og-image.png",
    width: 1200,
    height: 630,
    alt: "Dany Arkham - Front-End & Mobile Engineer",
  },
]
```

Once you create and add `og-image.png` to this folder, it will automatically be used for:

- LinkedIn shares
- Twitter/X cards
- Facebook posts
- Other social media platforms
