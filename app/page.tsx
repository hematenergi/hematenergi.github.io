import Navbar from "@/components/layout/navbar-new"
import Hero from "@/components/sections/Hero"
import Highlights from "@/components/sections/Highlights"
import CaseStudies from "@/components/sections/CaseStudies"
import Stack from "@/components/sections/Stack"
import Contact from "@/components/sections/Contact"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { WHY_WORK_WITH_ME, EXPERIENCE, PERSONAL_INFO } from "@/lib/constants"

export default function Page() {
  return (
    <div className="min-h-screen text-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6">
        <Hero />

        {/* About Section */}
        <section className="py-12 scroll-mt-20" id="about">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="text-base leading-relaxed space-y-4 text-white/70">
                <p>
                  I'm a Front-End and Mobile Engineer specializing in building
                  real-time applications across two major domains:
                </p>
                <ul className="space-y-3 ml-4 list-none">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold flex-shrink-0">
                      ZDLT
                    </span>
                    <span>
                      Web3/Trading platform with real-time order synchronization
                      integrated with Bybit & KuCoin. Focus on sub-100ms latency
                      and professional trader UX.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 font-bold flex-shrink-0">
                      Flimty
                    </span>
                    <span>
                      E-commerce and health application under AIMI Group,
                      serving 100K+ monthly active users with high-performance
                      PWA and React Native mobile app.
                    </span>
                  </li>
                </ul>
                <p>
                  My focus is on creating clean, performant interfaces with
                  maintainable codebases. I leverage modern tools like
                  TypeScript, Zustand, React Query, and WebSocket to deliver
                  production-ready applications that scale.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <Stack />

        {/* Expertise/Skills Section */}
        <section className="py-12 scroll-mt-20" id="expertise">
          <h2 className="text-3xl font-bold mb-6">Expertise</h2>
          <p className="text-white/70 mb-6">
            Specialized in building real-time, high-performance applications
            across web and mobile platforms.
          </p>
        </section>

        <Highlights />

        {/* Experience Section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-6">Experience</h2>
          <div className="space-y-6">
            {EXPERIENCE.map((exp) => (
              <Card key={`${exp.company}-${exp.role}`}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                    <div>
                      <CardTitle className="text-xl">{exp.role}</CardTitle>
                      <p className="text-cyan-400 font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-sm text-slate-400">
                      <p>{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>
                  <CardDescription className="leading-relaxed mb-4">
                    {exp.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <CaseStudies />

        {/* Why Work With Me Section */}
        <section className="py-12 scroll-mt-20" id="why">
          <h2 className="text-3xl font-bold mb-6">Why Work With Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WHY_WORK_WITH_ME.map((reason) => (
              <Card
                key={reason.title}
                className="group hover:border-cyan-500/30 transition-all"
              >
                <CardHeader>
                  <CardTitle className="text-lg mb-2 group-hover:text-cyan-400 transition-colors">
                    {reason.title}
                  </CardTitle>
                  <CardDescription className="leading-relaxed">
                    {reason.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <Contact />

        {/* Footer */}
        <footer className="text-center text-slate-500 py-12 border-t border-white/10 mt-12">
          <p className="mb-2">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with
            Next.js, TypeScript & Tailwind CSS.
          </p>
          <p className="text-sm">All rights reserved.</p>
        </footer>
      </main>
    </div>
  )
}
