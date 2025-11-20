import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <section className="py-12 scroll-mt-20" id="about">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <Card>
        <CardContent className="pt-6">
          <div className="text-base leading-relaxed space-y-4 text-muted-foreground">
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
                  E-commerce and health application under AIMI Group, serving
                  100K+ monthly active users with high-performance PWA and React
                  Native mobile app.
                </span>
              </li>
            </ul>
            <p>
              My focus is on creating clean, performant interfaces with
              maintainable codebases. I leverage modern tools like TypeScript,
              Zustand, React Query, and WebSocket to deliver production-ready
              applications that scale.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
