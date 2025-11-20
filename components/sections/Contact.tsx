import { LinkButton } from "@/components/ui/button"
import { PERSONAL_INFO } from "@/lib/constants"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

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
              <svg
                className="w-6 h-6 flex-shrink-0 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
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
              <svg
                className="w-6 h-6 flex-shrink-0 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                  clipRule="evenodd"
                />
              </svg>
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
              <svg
                className="w-6 h-6 flex-shrink-0 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                  clipRule="evenodd"
                />
              </svg>
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
              <svg
                className="w-6 h-6 flex-shrink-0 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
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
