import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

export default function Highlights() {
  const items = [
    {
      title: 'Trading Dashboard UX',
      desc: 'Order flow real-time dengan UX stabil untuk keputusan cepat.'
    },
    {
      title: 'PWA E‑Commerce',
      desc: 'Core Web Vitals hijau, responsif di perangkat low-end.'
    },
    {
      title: 'Mobile Scanning Workflows',
      desc: 'Vision Camera + RN untuk proses scanning cepat dan akurat.'
    },
    {
      title: 'TypeScript‑first Codebase',
      desc: 'Maintainability tinggi, error minim, build lebih cepat.'
    }
  ]

  return (
    <section className="highlights" id="highlights">
      <h3>Highlights</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
        {items.map((it) => (
          <Card key={it.title}>
            <CardHeader>
              <CardTitle>{it.title}</CardTitle>
              <CardDescription>{it.desc}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}
