# PWA Icons Required

Untuk mendapatkan skor Best Practices **100/100**, tambahkan icon PWA di folder `/public`:

## Required Icons:

1. **icon-192.png** (192x192 pixels)

   - Untuk Android homescreen
   - Format: PNG dengan background solid (tidak transparan untuk maskable)

2. **icon-512.png** (512x512 pixels)
   - Untuk splash screen dan high-res displays
   - Format: PNG dengan background solid

## Quick Creation:

Bisa gunakan tools online:

- https://realfavicongenerator.net/
- https://www.pwabuilder.com/imageGenerator

Atau buat manual di Figma/Canva:

- Canvas size: 512x512
- Safe area untuk maskable: 80% dari canvas (masking circle)
- Background: #0a0a0a (dark theme)
- Logo/initial: "DA" atau design custom

## Current Status:

✅ `manifest.ts` sudah dibuat
✅ Viewport meta tag added
✅ Theme-color configured
⏳ Icon files belum ada (butuh dibuat manual)

Tanpa icon files, PWA manifest akan error tapi tidak affect Best Practices score di Lighthouse.
