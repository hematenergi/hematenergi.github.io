import Navbar from "@/components/layout/navbar-new"
import Footer from "@/components/layout/Footer"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Stack from "@/components/sections/Stack"
import Expertise from "@/components/sections/Expertise"
import Highlights from "@/components/sections/Highlights"
import Experience from "@/components/sections/Experience"
import CaseStudies from "@/components/sections/CaseStudies"
import WhyWorkWithMe from "@/components/sections/WhyWorkWithMe"
import Contact from "@/components/sections/Contact"

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6">
        <Hero />
        <About />
        <Stack />
        <Expertise />
        <Highlights />
        <Experience />
        <CaseStudies />
        <WhyWorkWithMe />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
