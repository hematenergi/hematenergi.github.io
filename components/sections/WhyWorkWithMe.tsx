import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { WHY_WORK_WITH_ME } from "@/lib/constants"

export default function WhyWorkWithMe() {
  return (
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
  )
}
