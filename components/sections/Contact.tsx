import { LinkButton } from '@/components/ui/button'

export default function Contact() {
  return (
    <section className="cta-contact" id="contact">
      <h3>Let’s Build Something</h3>
      <p>Ready to turn a concept into a solid app?</p>
      <p>Email: your email</p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/dany-arkham-615165b6/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/dany-arkham-615165b6/</a></p>
      <p>GitHub: your GitHub link</p>
      <div className="cta-group">
        <LinkButton href="https://www.linkedin.com/in/dany-arkham-615165b6/" target="_blank" rel="noopener noreferrer">Hire Me</LinkButton>
        <LinkButton href="https://drive.google.com/file/d/1vF6RlWwwhuUO7qPgoJdKQDBYivtsmX7_/view?usp=sharing" target="_blank" rel="noopener noreferrer" variant="outline">Download Resume</LinkButton>
      </div>
    </section>
  )
}
