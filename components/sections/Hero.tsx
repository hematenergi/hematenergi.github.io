import { Terminal, TypingAnimation, AnimatedSpan } from '@/registry/magicui/terminal'
import { LinkButton } from '@/components/ui/button'
import SocialProof from '@/components/sections/SocialProof'

export default function Hero() {
  return (
    <div className="content">
      <div className="left">
        <Terminal className="m-4">
          <TypingAnimation>
            {"> hire dany --roles \"Front-End, Mobile, Web3\""}
          </TypingAnimation>
          <AnimatedSpan className="text-green-500">
            ✔ Proven in real-time apps and trading UIs
          </AnimatedSpan>
          <TypingAnimation>
            {"> stack: React · React Native · TypeScript · Expo · Zustand · React Query"}
          </TypingAnimation>
          <TypingAnimation>
            {"> domains: ZDLT (Web3/Trading) · Flimty (E-Commerce/Health)"}
          </TypingAnimation>
          <AnimatedSpan className="text-blue-500">
            ● Deliverables: fast UI, stable UX, maintainable code
          </AnimatedSpan>
          <TypingAnimation>
            {"> contact: linkedin.com/in/dany-arkham-615165b6"}
          </TypingAnimation>
          <TypingAnimation>
            {"> resume: drive.google.com/file/d/1vF6RlWwwhuUO7qPgoJdKQDBYivtsmX7_/view"}
          </TypingAnimation>
          <TypingAnimation className="text-white/70">
            {"> open portfolio: #work"}
          </TypingAnimation>
        </Terminal>
      </div>
      <div className="right">
        <section className="hero" id="home">
          <h1>Hi, I’m Dany — Front-End, Mobile & Web3 Engineer</h1>
          <p className="subheading">
            Full-time at ZDLT (Web3/Trading) & Flimty (AIMI Group). I build seamless interfaces and high-performance apps across platforms.
          </p>
          <div className="cta-group">
            <LinkButton href="#work">See My Work</LinkButton>
            <LinkButton
              href="https://drive.google.com/file/d/1vF6RlWwwhuUO7qPgoJdKQDBYivtsmX7_/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
            >
              Download Resume
            </LinkButton>
            <LinkButton
              href="https://www.linkedin.com/in/dany-arkham-615165b6/"
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
            >
              Contact
            </LinkButton>
          </div>
        </section>
        <SocialProof />
      </div>
    </div>
  )
}
