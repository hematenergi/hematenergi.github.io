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
import { ArrowRight, ExternalLink } from "lucide-react"

export default function CaseStudies() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center py-12 scroll-mt-20"
      id="work"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CASE_STUDIES.map((project) => (
          <Card
            key={project.id}
            className="group hover:border-primary/30 transition-all duration-300 flex flex-col"
          >
            <CardHeader className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="text-xs">
                  {project.category}
                </Badge>
                <span className="text-xs text-muted-foreground">
                  {project.year}
                </span>
              </div>
              <CardTitle className="mb-3 group-hover:text-primary transition-colors">
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
                href={
                  project.external
                    ? project.link
                    : `/case-studies/${project.id}`
                }
                variant="ghost"
                className="group flex items-center gap-2"
                target={project.external ? "_blank" : undefined}
                rel={project.external ? "noopener noreferrer" : undefined}
              >
                {project.external ? (
                  <>
                    Visit Site <ExternalLink className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    View Details{" "}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </LinkButton>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* View All Projects CTA */}
      <div className="text-center mt-12">
        <LinkButton
          href="https://github.com/hematenergi?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          variant="outline"
          className="group"
        >
          View All Projects on GitHub
          <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </LinkButton>
      </div>
    </section>
  )
}
