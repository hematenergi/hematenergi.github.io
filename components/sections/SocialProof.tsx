import { Badge } from '@/components/ui/badge'

export default function SocialProof() {
  const logos = ['Bybit', 'KuCoin', 'Flimty']
  return (
    <section className="social-proof" id="trusted">
      <h3>Trusted by</h3>
      <div className="flex flex-wrap gap-2 mt-2">
        {logos.map((l) => (
          <Badge key={l}>{l}</Badge>
        ))}
      </div>
    </section>
  )
}
