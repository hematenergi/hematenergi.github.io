"use client"

import Link from "next/link"
import { LinkButton } from "@/components/ui/button"
import { RetroGrid } from "@/components/ui/retro-grid"
import { MorphingText } from "@/components/ui/morphing-text"
import { BlurFade } from "@/components/ui/blur-fade"
import { PERSONAL_INFO } from "@/lib/constants"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

const JOB_TITLES = ["Front-End", "Mobile Dev", "Web3 Dev", "UX Geeks"]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-mt-20 px-4 sm:px-6"
    >
      {/* Retro Grid Background */}
      <RetroGrid
        angle={65}
        opacity={0.3}
        cellSize={50}
        lightLineColor="#d1d5db"
        darkLineColor="#60a5fa"
      />

      <div className="max-w-5xl mx-auto w-full">
        <BlurFade delay={0.2} duration={0.6}>
          <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16 md:mb-24">
            {/* Greeting */}
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <p className="text-lg sm:text-xl md:text-2xl text-primary font-medium">
                Hi, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-[1.1]">
                Dany Arkham
              </h1>
            </div>

            {/* Morphing Job Title */}
            <div className="h-20 sm:h-24 md:h-28 lg:h-32 flex items-center justify-center px-4">
              <MorphingText
                texts={JOB_TITLES}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold whitespace-nowrap"
              />
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              Building high-performance, gorgeous applications across web and
              mobile platforms. Specialized in{" "}
              <span className="font-semibold text-foreground">React</span>,{" "}
              <span className="font-semibold text-foreground">TypeScript</span>,
              and{" "}
              <span className="font-semibold text-foreground">WebSocket</span>{" "}
              technologies with{" "}
              <span className="font-semibold text-foreground">
                4+ years of experience
              </span>{" "}
              building thoughtful, user-focused applications.
            </p>
          </div>

          <div className="space-y-8">
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <LinkButton
                href="#work"
                className="px-8 py-3 font-semibold sm:w-auto"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </LinkButton>
              <LinkButton
                href="#contact"
                variant="outline"
                className="px-8 py-3 font-semibold sm:w-auto"
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
                className="text-muted-foreground hover:text-foreground transition-colors p-2"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </Link>
              <Link
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors p-2"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-muted-foreground hover:text-foreground transition-colors p-2"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
