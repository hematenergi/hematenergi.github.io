import { CASE_STUDIES } from "@/lib/constants"
import { CaseStudyTemplate } from "../_template"

// Static export: only build the paths returned by generateStaticParams.
export const dynamicParams = false

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
  return <CaseStudyTemplate id={params.id} />
}
