import { LinkButton } from '@/components/ui/button'

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-5 right-5 z-50 hidden md:block">
      <LinkButton href="#contact">Hire Me</LinkButton>
    </div>
  )
}
