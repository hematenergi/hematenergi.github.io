import { PERSONAL_INFO } from "@/lib/constants"

export function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PERSONAL_INFO.name,
    alternateName: PERSONAL_INFO.alias,
    jobTitle: "Frontend & Mobile Engineer",
    description: PERSONAL_INFO.bio,
    url: "https://hematenergi.github.io",
    image: "https://hematenergi.github.io/og-image.png",
    sameAs: [PERSONAL_INFO.github, PERSONAL_INFO.linkedin],
    email: PERSONAL_INFO.email,
    address: {
      "@type": "PostalAddress",
      addressCountry: "ID",
      addressLocality: PERSONAL_INFO.location,
    },
    worksFor: {
      "@type": "Organization",
      name: PERSONAL_INFO.company,
    },
    knowsAbout: [
      "React",
      "React Native",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "Mobile Development",
      "Web3",
      "Frontend Development",
      "WebSocket",
      "Real-time Applications",
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
