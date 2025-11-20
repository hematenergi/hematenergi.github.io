"use client"

import { Badge } from "@/components/ui/badge"
import { Marquee } from "@/components/ui/marquee"
import { TECH_STACK } from "@/lib/constants"

const TechBadge = ({ name }: { name: string }) => {
  return (
    <Badge
      variant="outline"
      className="bg-blue-600/20 text-blue-300 border-blue-500/50 px-4 py-2 text-sm font-medium whitespace-nowrap"
    >
      {name}
    </Badge>
  )
}

export default function Stack() {
  // Split tech stack into multiple rows for visual variety
  const firstRow = TECH_STACK.slice(0, 4)
  const secondRow = TECH_STACK.slice(4, 8)
  const thirdRow = TECH_STACK.slice(8)

  return (
    <section id="stack" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Tech Stack
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Technologies I use to build modern, scalable, and performant
            applications
          </p>
        </div>

        <div className="space-y-4">
          <Marquee pauseOnHover className="[--duration:40s]">
            {firstRow.map((tech, idx) => (
              <TechBadge key={`row1-${idx}`} name={tech} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:35s]">
            {secondRow.map((tech, idx) => (
              <TechBadge key={`row2-${idx}`} name={tech} />
            ))}
          </Marquee>
          <Marquee pauseOnHover className="[--duration:45s]">
            {thirdRow.map((tech, idx) => (
              <TechBadge key={`row3-${idx}`} name={tech} />
            ))}
          </Marquee>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-white/60">
            ...and always exploring new technologies
            <span className="inline-block animate-pulse ml-2">🚀</span>
          </p>
        </div>
      </div>
    </section>
  )
}
