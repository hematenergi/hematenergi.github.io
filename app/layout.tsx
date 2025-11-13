import './styles/globals.css'

export const metadata = {
  title: 'Dany Arkham — Front‑End, Mobile & Web3 Engineer',
  description:
    'Dual full-time engineer at ZDLT (Web3/Trading) & Flimty (E‑Commerce/Health). I build fast, reliable, and maintainable real‑time UIs on web & mobile.',
  openGraph: {
    title: 'Dany Arkham — Front‑End, Mobile & Web3 Engineer',
    description:
      'Dual full-time engineer at ZDLT (Web3/Trading) & Flimty (E‑Commerce/Health). I build fast, reliable, and maintainable real‑time UIs on web & mobile.',
    url: 'https://hematenergi.github.io/',
    siteName: 'Dany Arkham Portfolio',
    images: [],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dany Arkham — Front‑End, Mobile & Web3 Engineer',
    description:
      'Dual full-time engineer at ZDLT (Web3/Trading) & Flimty (E‑Commerce/Health). I build fast, reliable, and maintainable real‑time UIs on web & mobile.'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
