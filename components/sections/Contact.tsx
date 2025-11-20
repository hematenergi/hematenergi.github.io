import { LinkButton } from "@/components/ui/button"
import { PERSONAL_INFO } from "@/lib/constants"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Mail, Linkedin, Github, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center py-20 scroll-mt-20"
      id="contact"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Ready to turn your concept into a high-performance application? Let's
          discuss how I can help.
        </p>
      </div>

      <Card className="max-w-5xl mx-auto">
        <CardHeader className="text-center p-8 md:p-12">
          <CardTitle className="text-3xl md:text-4xl mb-6">
            Let's Build Something Great
          </CardTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-12 max-w-4xl mx-auto">
            <Card className="flex items-center gap-4 p-5 hover:border-primary/30 transition-all">
              <Mail className="w-6 h-6 flex-shrink-0 text-primary" />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-muted-foreground mb-1 font-medium">
                  Email
                </p>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-base font-medium hover:text-primary transition-colors truncate block"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </Card>

            <Card className="flex items-center gap-4 p-5 hover:border-primary/30 transition-all">
              <Linkedin className="w-6 h-6 flex-shrink-0 text-primary" />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-muted-foreground mb-1 font-medium">
                  LinkedIn
                </p>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium hover:text-primary transition-colors truncate block"
                >
                  {PERSONAL_INFO.name}
                </a>
              </div>
            </Card>

            <Card className="flex items-center gap-4 p-5 hover:border-primary/30 transition-all">
              <Github className="w-6 h-6 flex-shrink-0 text-primary" />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-muted-foreground mb-1 font-medium">
                  GitHub
                </p>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium hover:text-primary transition-colors truncate block"
                >
                  @hematenergi
                </a>
              </div>
            </Card>

            <Card className="flex items-center gap-4 p-5 hover:border-primary/30 transition-all">
              <MapPin className="w-6 h-6 flex-shrink-0 text-primary" />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-muted-foreground mb-1 font-medium">
                  Location
                </p>
                <p className="text-base font-medium">
                  {PERSONAL_INFO.location} ({PERSONAL_INFO.timezone})
                </p>
              </div>
            </Card>
          </div>

          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <LinkButton
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3"
            >
              Hire Me on LinkedIn
            </LinkButton>
            <LinkButton
              href={PERSONAL_INFO.resume}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              className="px-8 py-3"
            >
              Download Resume
            </LinkButton>
            <LinkButton
              href={`mailto:${PERSONAL_INFO.email}`}
              variant="ghost"
              className="px-8 py-3"
            >
              Send Email
            </LinkButton>
          </div>
        </CardHeader>
      </Card>
    </section>
  )
}
