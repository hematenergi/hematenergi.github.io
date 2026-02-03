import { Card, CardContent } from "@/components/ui/card"
import { Zap } from "lucide-react"

export default function About() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center py-12 scroll-mt-20"
      id="about"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
        About Me
      </h2>
      <Card>
        <CardContent className="pt-6">
          <div className="text-base leading-relaxed space-y-4 text-muted-foreground">
            <p className="text-lg font-semibold text-foreground">
              Frontend & Mobile Engineer | Product Builder | Tech Dad
            </p>
            <p>
              I'm a Front-End and Mobile Engineer specializing in building
              real-time applications across three major domains:
            </p>
            <ul className="space-y-3 ml-4 list-none">
              <li className="flex items-start gap-3">
                <span className="font-bold flex-shrink-0 text-primary">
                  ZDLT
                </span>
                <span>
                  Solana-based ecosystem for funding rate farming, staking, and
                  arbitrage. Web3/Dev platform with real-time order
                  synchronization integrated with Bybit & KuCoin. Focus on
                  reliable platform and professional UX.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold flex-shrink-0 text-primary">AIMI</span>
                <span>
                  IT in-house engineer managing complete tech infrastructure for health & e-commerce ecosystem under AIMI Group: PWA, mobile apps, admin dashboards, inventory systems, and payment integrations. Serving 100K+ monthly active users.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold flex-shrink-0 text-primary">Buddy</span>
                <span>
                  AI companion app focused on daily check-ins and emotional support, with push-triggered follow-ups and a premium subscription model.
                </span>
              </li>
            </ul>
            <p>
              My focus is on creating clean, performant interfaces with
              maintainable codebases. I leverage modern tools like TypeScript,
              Zustand, Tanstack Query, and WebSocket to deliver production-ready
              applications that scale.
            </p>
            <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border">
              <p className="text-sm italic">
                <span className="font-semibold text-foreground inline-flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-500" /> Fun Fact:
                </span>{" "}
                I balance multiple full-time roles, crypto projects, and dad life
                — and still find time to chase weird ideas that might just work.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
