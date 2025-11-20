import { Badge } from "@/components/ui/badge"
import { TRUSTED_BY } from "@/lib/constants"

export default function SocialProof() {
  return (
    <div className="py-6">
      <h3 className="text-sm font-semibold text-slate-500 mb-3">Trusted By</h3>
      <div className="flex flex-wrap gap-2">
        {TRUSTED_BY.map((company) => (
          <Badge
            key={company.name}
            variant="secondary"
            className="text-sm py-1.5 px-4"
          >
            {company.name}
          </Badge>
        ))}
      </div>
    </div>
  )
}
