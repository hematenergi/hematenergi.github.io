import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { EXPERIENCE } from "@/lib/constants"

export default function Experience() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      <div className="space-y-6">
        {EXPERIENCE.map((exp) => (
          <Card key={`${exp.company}-${exp.role}`}>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                <div>
                  <CardTitle className="text-xl">{exp.role}</CardTitle>
                  <p className="text-cyan-400 font-semibold">{exp.company}</p>
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
  )
}
