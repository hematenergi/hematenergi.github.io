import Link from "next/link"
import { CASE_STUDIES } from "@/lib/constants"
import Navbar from "@/components/layout/navbar-new"
import Footer from "@/components/layout/Footer"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { LinkButton } from "@/components/ui/button"

export function CaseStudyTemplate({ id }: { id: string }) {
  const caseStudy = CASE_STUDIES.find((cs) => cs.id === id)

  if (!caseStudy || caseStudy.external) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-3">
            Case study not available
          </h1>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            This case study is not available.
          </p>
          <Link
            href="/#work"
            className="inline-flex items-center justify-center rounded-xl font-semibold transition-transform duration-200 h-11 px-5 text-sm bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 hover:translate-y-[-1px] active:translate-y-0"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6">
        <section className="py-12">
          {/* Back Button */}
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/90 mb-8 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Portfolio
          </Link>

          {/* Header */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="secondary" className="text-xs">
                {caseStudy.category}
              </Badge>
              <span className="text-xs text-muted-foreground">{caseStudy.year}</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {caseStudy.title}
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
              {caseStudy.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mt-6">
              {caseStudy.tags.map((tag) => (
                <Badge key={tag} className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Features */}
          <section className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-5">Key Features</h2>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {caseStudy.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-primary/80" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Challenges & Solutions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-5">Challenges</h2>
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {caseStudy.challenges.map((challenge) => (
                      <li key={challenge} className="flex items-start gap-3">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-muted-foreground/60" />
                        <span className="text-muted-foreground">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-5">Solutions</h2>
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {caseStudy.solutions.map((solution) => (
                      <li key={solution} className="flex items-start gap-3">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-primary/60" />
                        <span className="text-muted-foreground">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </section>
          </div>

          {/* CTA */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">
                Interested in Similar Projects?
              </CardTitle>
              <CardDescription className="text-base">
                And many more — let’s discuss what you’re building and how I can help.
              </CardDescription>
              <div className="flex flex-wrap gap-3 pt-4">
                <LinkButton href="/#contact">Get in Touch</LinkButton>
                <LinkButton href="/#work" variant="outline">
                  View More Work
                </LinkButton>
              </div>
            </CardHeader>
          </Card>
        </section>

        <Footer />
      </main>
    </div>
  )
}
