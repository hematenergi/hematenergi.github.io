import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { HIGHLIGHTS } from "@/lib/constants"
import * as Icons from "lucide-react"

export default function Highlights() {
  return (
    <section className="py-12 scroll-mt-20" id="highlights">
      <h2 className="text-3xl font-bold mb-6 text-white">Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {HIGHLIGHTS.map((highlight) => {
          const Icon = Icons[
            highlight.icon as keyof typeof Icons
          ] as React.ComponentType<{ className?: string }>
          return (
            <Card
              key={highlight.title}
              className="group hover:border-cyan-500/30 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all">
                    {Icon && <Icon className="w-6 h-6 text-cyan-400" />}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="mb-2">{highlight.title}</CardTitle>
                    <CardDescription className="leading-relaxed">
                      {highlight.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
