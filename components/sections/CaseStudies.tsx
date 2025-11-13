import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { LinkButton } from '@/components/ui/button'

export default function CaseStudies() {
  const cases = [
    {
      title: 'ZDLT — Web3 Trading UI',
      desc: 'Sinkronisasi order real‑time, integrasi WebSocket, UX untuk trader profesional.',
      link: '#'
    },
    {
      title: 'Flimty — E‑Commerce/Health App',
      desc: 'PWA + RN dengan performa tinggi, UX modern, crash rate rendah.',
      link: '#'
    },
    {
      title: 'P5 — SPA + Admin Portal',
      desc: 'React + TS, ekspor Excel, alur admin efisien, data dinamis dengan React Query.',
      link: 'https://aplikasi-p5.site/'
    }
  ]

  return (
    <section className="case-studies" id="work">
      <h3>Case Studies</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
        {cases.map((c) => (
          <Card key={c.title}>
            <CardHeader>
              <CardTitle>{c.title}</CardTitle>
              <CardDescription>{c.desc}</CardDescription>
            </CardHeader>
            <CardFooter>
              <LinkButton href={c.link} variant="outline">Read More</LinkButton>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
