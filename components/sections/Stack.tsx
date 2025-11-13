import { Badge } from '@/components/ui/badge'

export default function Stack() {
  const items = [
    'React',
    'TypeScript',
    'React Native',
    'Expo',
    'Zustand',
    'React Query',
    'WebSocket',
    'Firebase',
    'Golang'
  ]
  return (
    <section className="stack" id="expertise">
      <h3>Expertise</h3>
      <div className="flex flex-wrap gap-2 mt-2">
        {items.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>
    </section>
  )
}
