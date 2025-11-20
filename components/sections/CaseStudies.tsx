import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card"
import { LinkButton } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CASE_STUDIES } from "@/lib/constants"

export default function CaseStudies() {
  return (
    <section className="py-12 scroll-mt-20" id="work">
      <h2 className="text-3xl font-bold mb-6 text-white">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CASE_STUDIES.map((project) => (
          <Card
            key={project.id}
            className="group hover:border-cyan-500/30 transition-all duration-300 flex flex-col"
          >
            <CardHeader className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="text-xs">
                  {project.category}
                </Badge>
                <span className="text-xs text-slate-500">{project.year}</span>
              </div>
              <CardTitle className="mb-3 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </CardTitle>
              <CardDescription className="leading-relaxed mb-4">
                {project.description}
              </CardDescription>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} className="text-xs">
                    {tag}
                  </Badge>
                ))}
                {project.tags.length > 3 && (
                  <Badge className="text-xs">+{project.tags.length - 3}</Badge>
                )}
              </div>
            </CardHeader>
            <CardFooter>
              <LinkButton
                href={project.link}
                variant="outline"
                className="w-full"
                {...(project.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {project.external ? "Visit Site" : "View Details"}
              </LinkButton>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
