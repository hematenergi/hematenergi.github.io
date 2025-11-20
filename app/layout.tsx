import "./styles/globals.css"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import type { Metadata, Viewport } from "next"
import { PersonSchema } from "./person-schema"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL("https://hematenergi.github.io"),
  title: {
    default: "Dany Arkham — Front-End, Mobile & Web3 Engineer",
    template: "%s | Dany Arkham",
  },
  description:
    "Dual full-time engineer at ZDLT (Web3/Dev) & AIMI (E-Commerce/Health). I build fast, reliable, and maintainable real-time UIs on web & mobile with React, TypeScript, and React Native.",
  keywords: [
    "Dany Arkham",
    "Dany Arkham Developer",
    "Dany Arkham Portfolio",
    "hematenergi",
    "React Developer",
    "React Native Developer",
    "TypeScript Developer",
    "Web3 Developer",
    "Funding Rate Arbitrage Platform Developer",
    "E-commerce Developer",
    "Mobile App Developer",
    "Frontend Engineer",
    "Full Stack Developer",
    "Indonesia Developer",
    "Jakarta Developer",
    "ZDLT Developer",
    "AIMI Developer",
  ],
  authors: [{ name: "Dany Arkham", url: "https://hematenergi.github.io" }],
  creator: "Dany Arkham",
  publisher: "Dany Arkham",
  alternates: {
    canonical: "https://hematenergi.github.io",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hematenergi.github.io/",
    title: "Dany Arkham — Front-End, Mobile & Web3 Engineer",
    description:
      "Dual full-time engineer at ZDLT (Web3/Dev) & AIMI (E-Commerce/Health). I build fast, reliable, and maintainable real-time UIs on web & mobile.",
    siteName: "Dany Arkham Portfolio",
    images: [
      {
        url: "/og-image.png", // Place a 1200x630 PNG image in public/og-image.png
        width: 1200,
        height: 630,
        alt: "Dany Arkham - Front-End & Mobile Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dany Arkham — Front-End, Mobile & Web3 Engineer",
    description:
      "Dual full-time engineer at ZDLT (Web3/Dev) & AIMI (E-Commerce/Health). I build fast, reliable, and maintainable real-time UIs on web & mobile.",
    images: ["/og-image.png"],
    creator: "@hematenergi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google42ed4bb1bec5b528",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <PersonSchema />
        <link rel="canonical" href="https://hematenergi.github.io" />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
