import { Card, CardContent } from "@/components/ui/card"
import { Zap } from "lucide-react"
import { PERSONAL_INFO } from "@/lib/constants"

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
              Frontend & Mobile Engineer · Web3 · Dad of one · Based in Indonesia (GMT+7)
            </p>
            <p>
              I&apos;ve spent the last five years shipping mobile and web
              products to real users:
            </p>
            <ul className="space-y-3 ml-4 list-none">
              <li className="flex items-start gap-3">
                <span className="font-bold flex-shrink-0 text-primary">AIMI</span>
                <span>
                  In-house engineer for Flimty since 2021: the consumer app, POS and
                  stock PWA, field-sales app, CRM, LMS and customer portal.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold flex-shrink-0 text-primary">Buddy</span>
                <span>
                  Contract (Dec 2025 – Apr 2026). Shipped an AI companion app to the
                  App Store; built the onboarding funnel, streaks, notification
                  settings and analytics, and took releases from development to
                  the App Store.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold flex-shrink-0 text-primary">ZDLT</span>
                <span>
                  Contract (Jun 2025 – Feb 2026). Solana trading dApp: built the
                  wallet layer and core trading screens of the web app, and the
                  wallet flows of the React Native app (Phantom, WalletConnect).
                </span>
              </li>
            </ul>
            <p>
              On my own time I build on-chain tooling (Uniswap v3/v4 with viem,
              a Meteora DLMM bot on Solana) and Fragment, an open-source project
              memory for AI coding agents.
            </p>
            <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border">
              <p className="text-sm italic">
                <span className="font-semibold text-foreground inline-flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-500" /> Fun Fact:
                </span>{" "}
                {PERSONAL_INFO.funFact}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
