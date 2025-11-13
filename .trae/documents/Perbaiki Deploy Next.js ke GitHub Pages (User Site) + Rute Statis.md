## Diagnosa Singkat
- Situs 404 karena Pages belum menyajikan hasil `next export` dari workflow (sumber belum diatur) atau artefak tidak berisi `index.html` yang valid pada root.
- Tipe repositori: user site (`hematenergi.github.io`) → domain root, **tanpa** basePath.
- Next.js harus mode statis penuh (tanpa SSR/API).

## Rencana Teknis
### 1) Konfigurasi Next.js untuk Static Export User Site
- Edit `next.config.js`:
  - `output: 'export'`
  - `images.unoptimized: true`
  - `trailingSlash: true`
  - **Tanpa** `basePath` (root domain user pages)
- Tambahkan `app/not-found.tsx` (sudah ada) untuk menghasilkan `404.html` pada export.

### 2) Workflow Deploy yang Konsisten
- Pilih satu mode agar tidak bingung:
  - Opsi A (Direkomendasikan): **GitHub Actions (Pages)**
    - Gunakan `.github/workflows/deploy.yml`:
      - `npm ci`
      - `npm run build`
      - `npm run export`
      - Upload artifact dari `./out` → `actions/deploy-pages`
      - Tambahkan langkah `touch ./out/.nojekyll` supaya folder `_next` tidak diabaikan.
    - Di Settings → Pages → Source: **GitHub Actions**.
  - Opsi B: **Deploy from a branch (gh-pages)**
    - Pakai `.github/workflows/deploy-gh-pages.yml`:
      - `npm ci`, `npm run build`, `npm run export`
      - `touch ./out/.nojekyll`
      - Publish `./out` ke branch `gh-pages` via `peaceiris/actions-gh-pages`.
    - Di Settings → Pages → Source: **Deploy from a branch**, Branch: `gh-pages`, Folder: `/`.
- **Pilih salah satu**; saya akan merapikan workflow yang dipilih dan menonaktifkan yang lain.

### 3) Verifikasi Artefak `out`
- Pastikan `out/index.html` ada.
- Pastikan asset `_next/static/*` ikut ter-upload dan `.nojekyll` ada.

### 4) Pembersihan Legacy
- Hapus file lama yang tidak relevan (`index.html`, CSS lama, aset root yang tidak dipakai) agar tidak mengganggu.

### 5) Dinamic Routes untuk Mode Statis
- App Router:
  - Tambahkan `export const dynamic = 'error'` pada layout/page yang harus statis.
  - Gunakan `generateStaticParams` untuk `[slug]` agar Next membuat halaman saat build.
  - Gunakan `fetch(..., { cache: 'force-cache' })` atau `next: { revalidate: N }` untuk data statis/ISR.
  - `export const dynamicParams = false` jika ingin 404 pada slug di luar cakupan build.
- Pages Router (jika dipakai): `getStaticPaths` + `getStaticProps`.

### 6) Terminal Komponen (Stabil)
- Pertahankan sequencing otomatis & cleanup effect agar teks tidak ganda di dev.
- Jika ingin memakai `@magicui/terminal` via MCP, tambahkan registri dan ganti import setelah deploy stabil.

## Eksekusi Setelah Disetujui
1. Sesuaikan `next.config.js` (hilangkan `basePath`).
2. Update workflow yang dipilih, tambahkan `.nojekyll` langkah.
3. Hapus file legacy tambahan yang masih tersisa (jika ada).
4. Push ke `main/master` → verifikasi halaman `https://hematenergi.github.io/` aktif.
5. Implement opsi rute statis bila nanti ada halaman dinamis.

## Hasil yang Diharapkan
- Situs aktif di `https://hematenergi.github.io/` tanpa 404.
- Build otomatis setiap push.
- Struktur sepenuhnya statis sesuai batasan GitHub Pages.