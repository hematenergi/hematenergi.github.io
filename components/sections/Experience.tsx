import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { EXPERIENCE } from "@/lib/constants"

export default function Experience() {
  return (
    <section className="min-h-screen flex flex-col justify-center py-12">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
        Experience
      </h2>
      <div className="space-y-6">
        {EXPERIENCE.map((exp) => (
          <Card key={`${exp.company}-${exp.role}`}>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                <div>
                  <CardTitle className="text-xl">{exp.role}</CardTitle>
                  <p className="font-semibold text-primary">{exp.company}</p>
                </div>
                <div className="text-sm text-muted-foreground">
                  <p>{exp.period}</p>
                  <p>{exp.location}</p>
                </div>
              </div>
              <CardDescription className="leading-relaxed mb-4">
                {exp.description}
              </CardDescription>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}
