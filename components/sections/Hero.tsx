"use client"

import Link from "next/link"
import { LinkButton } from "@/components/ui/button"
import { RetroGrid } from "@/components/ui/retro-grid"
import { MorphingText } from "@/components/ui/morphing-text"
import { BlurFade } from "@/components/ui/blur-fade"
import { PERSONAL_INFO } from "@/lib/constants"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

const JOB_TITLES = [
  "Front-End Engineer",
  "Mobile Developer",
  "Real-Time Specialist",
  "WebSocket Expert",
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

      <div className="relative z-10 w-full px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">
          {/* Main Content with Backdrop */}
          <div className="backdrop-blur-sm rounded-2xl p-8 md:p-12">
            <BlurFade delay={0.25} duration={0.8}>
              <div className="text-center space-y-8">
                {/* Greeting */}
                <div className="space-y-6">
                  <p className="text-xl md:text-2xl lg:text-3xl text-blue-400 font-medium drop-shadow-[0_2px_10px_rgba(59,130,246,0.5)]">
                    Hi, I'm
                  </p>
                  <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text leading-[1.1] drop-shadow-[0_0_60px_rgba(147,51,234,0.6)]">
                    D
                  </h1>
                </div>

                {/* Morphing Job Title with Fixed Height */}
                <div className="h-20 sm:h-24 md:h-28 lg:h-32 flex items-center justify-center">
                  <MorphingText
                    texts={JOB_TITLES}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]"
                  />
                </div>

                {/* Description */}
                <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
                  Building high-performance, real-time applications across web
                  and mobile platforms. Specialized in{" "}
                  <span className="text-blue-400 font-semibold drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                    React
                  </span>
                  ,{" "}
                  <span className="text-blue-400 font-semibold drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                    TypeScript
                  </span>
                  , and{" "}
                  <span className="text-blue-400 font-semibold drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                    WebSocket
                  </span>{" "}
                  technologies with{" "}
                  <span className="text-purple-400 font-semibold drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                    300M+ monthly active users
                  </span>{" "}
                  experience.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <LinkButton
                    href="#projects"
                    className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 text-lg font-semibold w-full sm:w-auto shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] transition-all duration-300 hover:scale-105"
                  >
                    View My Work
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </LinkButton>
                  <LinkButton
                    href="#contact"
                    variant="outline"
                    className="border-white/30 hover:bg-white/10 text-white px-10 py-4 text-lg font-semibold w-full sm:w-auto hover:border-white/50 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                  >
                    Get In Touch
                  </LinkButton>
                </div>

                {/* Social Links */}
                <div className="flex items-center justify-center gap-6 pt-4">
                  <Link
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-all duration-200 hover:scale-125 transform p-3 rounded-xl hover:bg-white/10 backdrop-blur-sm border border-transparent hover:border-white/20"
                    aria-label="GitHub"
                  >
                    <Github className="h-6 w-6" />
                  </Link>
                  <Link
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-all duration-200 hover:scale-125 transform p-3 rounded-xl hover:bg-white/10 backdrop-blur-sm border border-transparent hover:border-white/20"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-6 w-6" />
                  </Link>
                  <Link
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-white/70 hover:text-white transition-all duration-200 hover:scale-125 transform p-3 rounded-xl hover:bg-white/10 backdrop-blur-sm border border-transparent hover:border-white/20"
                    aria-label="Email"
                  >
                    <Mail className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  )
}
