import { MetadataRoute } from "next"

export const dynamic = "force-static"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dany Arkham — Front-End, Mobile & Web3 Engineer",
    short_name: "Dany Arkham",
    description:
      "Dual full-time engineer at ZDLT (Web3/Dev) & AIMI (E-Commerce/Health). I build fast, reliable, and maintainable real-time UIs on web & mobile with React, TypeScript, and React Native.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  }
}
