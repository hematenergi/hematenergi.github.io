"use client"

import Link from "next/link"
import { LinkButton } from "@/components/ui/button"
import { RetroGrid } from "@/components/ui/retro-grid"
import { MorphingText } from "@/components/ui/morphing-text"
import { BlurFade } from "@/components/ui/blur-fade"
import { PERSONAL_INFO } from "@/lib/constants"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

const JOB_TITLES = [
  "Front-End",
  "Mobile Developer",
  "Web3 Developer",
  "UX Enthusiast",
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Retro Grid Background */}
      <RetroGrid
        angle={65}
        opacity={0.5}
        cellSize={50}
        lightLineColor="#3b82f6"
        darkLineColor="#60a5fa"
      />

      <div className="relative z-10 w-full px-6 md:px-12">
        <div className="max-w-5xl mx-auto backdrop-blur-sm bg-slate-900/20 rounded-2xl p-8 md:p-12 border border-white/5">
          <BlurFade delay={0.2} duration={0.6}>
            <div className="text-center space-y-8">
              {/* Greeting */}
              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-blue-400 font-medium">
                  Hi, I'm
                </p>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text leading-[1.1]">
                  Dany Arkham
                </h1>
              </div>

              {/* Morphing Job Title */}
              <div className="h-24 md:h-28 flex items-center justify-center">
                <MorphingText
                  texts={JOB_TITLES}
                  className="text-3xl md:text-5xl text-white font-bold"
                />
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Building high-performance, real-time applications across web and
                mobile platforms. Specialized in{" "}
                <span className="text-blue-400 font-semibold">React</span>,{" "}
                <span className="text-blue-400 font-semibold">TypeScript</span>,
                and{" "}
                <span className="text-blue-400 font-semibold">WebSocket</span>{" "}
                technologies with{" "}
                <span className="text-purple-400 font-semibold">
                  300M+ monthly active users
                </span>{" "}
                experience.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <LinkButton
                  href="#projects"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 font-semibold sm:w-auto"
                >
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </LinkButton>
                <LinkButton
                  href="#contact"
                  variant="outline"
                  className="border-white/30 hover:bg-white/10 text-white px-8 py-3 font-semibold sm:w-auto"
                >
                  Get In Touch
                </LinkButton>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-8">
                <Link
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors p-2"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </Link>
                <Link
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors p-2"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-white/70 hover:text-white transition-colors p-2"
                  aria-label="Email"
                >
                  <Mail className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  )
}
