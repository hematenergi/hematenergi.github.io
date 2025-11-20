"use client"

import { Badge } from "@/components/ui/badge"
import { Marquee } from "@/components/ui/marquee"
import { TECH_STACK } from "@/lib/constants"

const TechBadge = ({ name }: { name: string }) => {
  return (
    <Badge
      variant="secondary"
      className="px-4 py-2 text-sm font-medium whitespace-nowrap"
    >
      {name}
    </Badge>
  )
}

export default function Stack() {
  // Better distribution: 6-5-5 for smoother marquee
  const firstRow = TECH_STACK.slice(0, 6)
  const secondRow = TECH_STACK.slice(6, 11)
  const thirdRow = TECH_STACK.slice(11)

  return (
    <section
      id="stack"
      className="min-h-screen flex flex-col justify-center py-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Tech Stack
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
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
          <p className="text-muted-foreground">
            ...and always exploring new technologies
            <span className="inline-block animate-pulse ml-2">🚀</span>
          </p>
        </div>
      </div>
    </section>
  )
}
