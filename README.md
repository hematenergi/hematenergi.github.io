# Dany Arkham - Portfolio Website

A modern, high-performance portfolio website built with Next.js 16, React 19, TypeScript, and Tailwind CSS.

## 🚀 Features

- ✅ **Modern Stack**: Next.js 16 + React 19 + TypeScript
- ✅ **Styling**: Tailwind CSS with custom design system
- ✅ **Performance**: Static export for blazing-fast load times
- ✅ **SEO Optimized**: Complete metadata, sitemap, robots.txt
- ✅ **Responsive**: Mobile-first design with hamburger menu
- ✅ **Dark Mode**: Built-in dark mode toggle
- ✅ **Analytics**: Vercel Analytics integration
- ✅ **Accessibility**: ARIA labels, semantic HTML, keyboard navigation
- ✅ **Type-Safe**: Strict TypeScript configuration
- ✅ **State Management**: Zustand ready for complex state
- ✅ **Data Fetching**: React Query integrated
- ✅ **Animations**: Framer Motion + custom animations
- ✅ **Icons**: Lucide React icon library

## 📦 Tech Stack

### Core

- **Framework**: Next.js 16.0.0 (App Router, Static Export)
- **React**: 19.0.0
- **TypeScript**: 5.6.3
- **Styling**: Tailwind CSS 3.4.13

### State & Data

- **State Management**: Zustand 5.0.2
- **Data Fetching**: TanStack React Query 5.59.20
- **Utility**: clsx, tailwind-merge

### UI & Animation

- **Animations**: Framer Motion 11.11.17
- **Icons**: Lucide React 0.454.0
- **Fonts**: Inter (Google Fonts, optimized)

### Analytics & Monitoring

- **Analytics**: Vercel Analytics 1.4.1

## 🛠 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/hematenergi/hematenergi.github.io.git
cd hematenergi.github.io

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm start
```

The static site will be exported to the `out` directory.

## 📁 Project Structure

```
/
├── app/                          # Next.js App Router
│   ├── case-studies/[id]/       # Dynamic case study pages
│   ├── styles/                  # Global styles
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Homepage
│   ├── not-found.tsx            # 404 page
│   └── error.tsx                # Error boundary
├── components/
│   ├── layout/                  # Layout components (Navbar)
│   ├── sections/                # Page sections (Hero, Contact, etc.)
│   └── ui/                      # Reusable UI components
├── lib/
│   ├── constants.ts             # All content data & configuration
│   └── utils.ts                 # Utility functions
├── public/                      # Static assets
│   ├── .nojekyll               # GitHub Pages config
│   ├── robots.txt              # SEO crawler instructions
│   ├── sitemap.xml             # SEO sitemap
│   └── og-image.png            # Open Graph image (add your own)
└── registry/
    └── magicui/                 # Custom UI components (Terminal)
```

## 🎨 Customization

### Update Personal Information

Edit `/lib/constants.ts`:

```typescript
export const PERSONAL_INFO = {
  name: "Your Name",
  title: "Your Title",
  email: "your@email.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  // ... more fields
}
```

### Add/Edit Projects

In `/lib/constants.ts`, update the `CASE_STUDIES` array:

```typescript
export const CASE_STUDIES = [
  {
    id: "project-slug",
    title: "Project Title",
    category: "Category",
    description: "Description",
    tags: ["React", "TypeScript"],
    // ... more fields
  },
]
```

### Modify Colors

Edit `/tailwind.config.js` or update CSS variables in `/app/styles/globals.css`.

### Add OG Image

1. Create a 1200x630 PNG image
2. Save as `/public/og-image.png`
3. The metadata is already configured in `app/layout.tsx`

### Add Favicon

1. Add your favicon files to `/public/`
2. Update `app/layout.tsx` to include favicon link tags

## 🚀 Deployment

### GitHub Pages

This site is configured for GitHub Pages deployment:

1. **Ensure `next.config.js` has**:

   ```js
   output: 'export',
   images: { unoptimized: true }
   ```

2. **Build the project**:

   ```bash
   npm run build
   ```

3. **Deploy to GitHub Pages**:

   - The `out` directory contains your static site
   - Push to the `gh-pages` branch or configure GitHub Pages to deploy from `out`

4. **GitHub Actions** (recommended):
   Create `.github/workflows/deploy.yml`:

   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [master]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with:
             node-version: "20"
         - run: npm ci
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v4
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./out
   ```

### Vercel (Alternative)

1. Import your repository on [Vercel](https://vercel.com)
2. Vercel will auto-detect Next.js and deploy
3. Analytics will work automatically with Vercel deployment

## 📊 Performance

### Optimizations Included

- ✅ Static export for instant page loads
- ✅ Font optimization with `next/font`
- ✅ Component code-splitting
- ✅ Tailwind CSS purging in production
- ✅ Lazy-loaded components where appropriate
- ✅ Optimized animations with Framer Motion

### Lighthouse Scores (Target)

- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## 🧪 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Preview production build
npm run type-check   # Run TypeScript compiler check
npm run lint         # Run ESLint (when configured)
```

### Environment Variables

Create a `.env.local` file for any environment-specific variables (none required by default).

## 📝 Content Management

All content is managed through `/lib/constants.ts` for easy updates:

- **Personal Info**: Contact details, social links
- **Tech Stack**: List of technologies
- **Highlights**: Key achievements
- **Case Studies**: Project details
- **Experience**: Work history
- **Why Work With Me**: Value propositions

## 🔧 Troubleshooting

### Build Errors

**Issue**: OG Image generation fails
**Solution**: OG image is static (`/public/og-image.png`). Create your own 1200x630 PNG.

**Issue**: Sitemap build errors
**Solution**: Sitemap is static XML in `/public/sitemap.xml`. Update manually when adding pages.

**Issue**: Module not found
**Solution**: Run `rm -rf node_modules package-lock.json && npm install`

### Runtime Errors

Check the error boundary (`app/error.tsx`) for detailed error messages.

## 📄 License

All rights reserved © 2025 Dany Arkham

## 🤝 Contributing

This is a personal portfolio. Feel free to fork and adapt for your own use!

## 📧 Contact

- **Email**: danyarkham@example.com (update in constants.ts)
- **LinkedIn**: [Dany Arkham](https://www.linkedin.com/in/dany-arkham-615165b6/)
- **GitHub**: [@hematenergi](https://github.com/hematenergi)

---

Built with ❤️ using Next.js, React, TypeScript & Tailwind CSS
