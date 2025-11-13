import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import Highlights from '@/components/sections/Highlights'
import CaseStudies from '@/components/sections/CaseStudies'
import Stack from '@/components/sections/Stack'
import Contact from '@/components/sections/Contact'
import FloatingCTA from '@/components/ui/floating-cta'

export default function Page() {
  return (
    <div className="mainContainer">
      <Navbar />
      <Hero />

      <section className="about" id="about">
        <h3>About Me</h3>
        <p>
          Saya Front-End & Mobile Engineer yang mengerjakan aplikasi real-time
          di dua domain besar.
        </p>
        <ul>
          <li>
            <strong>ZDLT</strong> – Web3/Trading UI terintegrasi Bybit & KuCoin,
            fokus sinkronisasi order dan UX untuk trader.
          </li>
          <li>
            <strong>Flimty (AIMI Group)</strong> – E-commerce/Health app dengan
            performa tinggi dan pengalaman pengguna modern.
          </li>
        </ul>
        <p>
          Fokus saya: desain rapi, performa cepat, dan codebase yang mudah
          dirawat.
        </p>
        <ul>
          <li>Stack: React, React Native, TypeScript, Expo</li>
          <li>State & data: Zustand, React Query, WebSocket</li>
          <li>Mobile: React Navigation, RN Paper, Reanimated, Vision Camera</li>
          <li>Backend & cloud: Golang, Firebase</li>
        </ul>
      </section>

      <Stack />

      <Highlights />
      <section className="projects" id="work">
        <h3>Experience & Selected Work</h3>
      </section>
      <CaseStudies />

      <section className="why" id="why">
        <h3>Why Work With Me</h3>
        <ul>
          <li>
            I bring deep understanding of both mobile and web platforms — so you
            get versatile solutions, not just “one side works”.
          </li>
          <li>
            I combine modern tools (TypeScript, Zustand, React Query) with a
            strong emphasis on maintainability and performance — meaning fewer
            bugs and faster build times.
          </li>
          <li>
            I’m constantly upgrading: from a previous MacBook Air M1 to a M3
            with 16/512GB, optimizing my setup for efficiency and reliability.
          </li>
          <li>
            Because I’ve built side projects (scanner apps, weather apps) and
            core business apps (P5 system), I know how to ship end-to-end — from
            UI to backend logic.
          </li>
        </ul>
      </section>

      <Contact />

      <FloatingCTA />
      <footer>
        © 2025 Dany Arkham. Built with React, TypeScript & Expo. All rights
        reserved.
      </footer>
    </div>
  )
}
