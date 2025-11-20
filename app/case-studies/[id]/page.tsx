import { notFound } from "next/navigation"
import Link from "next/link"
import { CASE_STUDIES } from "@/lib/constants"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { LinkButton } from "@/components/ui/button"

export async function generateStaticParams() {
  return CASE_STUDIES.filter((cs) => !cs.external).map((caseStudy) => ({
    id: caseStudy.id,
  }))
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const caseStudy = CASE_STUDIES.find((cs) => cs.id === params.id)

  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
    }
  }

  return {
    title: `${caseStudy.title} - Case Study | Dany Arkham`,
    description: caseStudy.description,
  }
}

export default function CaseStudyPage({ params }: { params: { id: string } }) {
  const caseStudy = CASE_STUDIES.find((cs) => cs.id === params.id)

  if (!caseStudy || caseStudy.external) {
    notFound()
  }

  return (
    <div className="min-h-screen  ">
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Back Button */}
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
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
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Badge className="text-sm">{caseStudy.category}</Badge>
            <span className="text-slate-400">{caseStudy.year}</span>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            {caseStudy.title}
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            {caseStudy.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            {caseStudy.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {caseStudy.metrics.map((metric) => (
            <Card key={metric.label}>
              <CardHeader>
                <CardDescription>{metric.label}</CardDescription>
                <CardTitle className="text-4xl text-cyan-400">
                  {metric.value}
                </CardTitle>
                <CardDescription>{metric.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-white">Key Features</h2>
          <Card>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {caseStudy.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Challenges & Solutions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <section>
            <h2 className="text-3xl font-bold mb-6 text-white">Challenges</h2>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {caseStudy.challenges.map((challenge) => (
                    <li key={challenge} className="flex items-start gap-3">
                      <svg
                        className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-slate-300">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-white">Solutions</h2>
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {caseStudy.solutions.map((solution) => (
                    <li key={solution} className="flex items-start gap-3">
                      <svg
                        className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-slate-300">{solution}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* CTA */}
        <Card className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-cyan-500/20">
          <CardHeader>
            <CardTitle className="text-2xl">
              Interested in Similar Projects?
            </CardTitle>
            <CardDescription className="text-lg">
              Let's discuss how I can help bring your vision to life with the
              same level of expertise and dedication.
            </CardDescription>
            <div className="flex gap-4 pt-4">
              <LinkButton href="/#contact">Get in Touch</LinkButton>
              <LinkButton href="/#work" variant="outline">
                View More Work
              </LinkButton>
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  )
}
