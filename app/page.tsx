import { Instrument_Serif, JetBrains_Mono } from "next/font/google"
import MovedScene from "@/components/moved-scene"

// Same faces as the destination site, bundled at build time (self-hosted by
// next/font) so the scene typesets identically on every device.
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-scene-serif",
})

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-scene-mono",
})

export default function Page() {
  return <MovedScene fontClassName={`${serif.variable} ${mono.variable}`} />
}
