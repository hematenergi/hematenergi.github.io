import type { Metadata } from "next"
import { CASE_STUDIES } from "@/lib/constants"

export const dynamicParams = false

export const metadata: Metadata = (() => {
  const cs = CASE_STUDIES.find((c) => c.id === "flimty")
  return {
    title: cs ? `${cs.title} - Case Study | Dany Arkham` : "AIMI - Case Study | Dany Arkham",
    description: cs?.description,
  }
})()

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
