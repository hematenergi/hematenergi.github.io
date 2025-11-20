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
              real-time applications across two major domains:
            </p>
            <ul className="space-y-3 ml-4 list-none">
              <li className="flex items-start gap-3">
                <span className="font-bold flex-shrink-0 text-primary">
                  ZDLT
                </span>
                <span>
                  Solana-based ecosystem for trading, staking, and arbitrage.
                  Web3/Trading platform with real-time order synchronization
                  integrated with Bybit & KuCoin. Focus on sub-100ms latency and
                  professional trader UX.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold flex-shrink-0 text-primary">
                  Flimty
                </span>
                <span>
                  Health e-commerce ecosystem under AIMI Group Jakarta, serving
                  100K+ monthly active users with high-performance PWA and React
                  Native mobile app.
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
                I balance two full-time dev jobs, crypto projects, and dad life
                — and still find time to chase weird ideas that might just work.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
