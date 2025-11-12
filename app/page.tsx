import { LinkButton } from '@/components/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import {
  Terminal,
  TypingAnimation,
  AnimatedSpan,
} from '@/components/ui/terminal'

export default function Page() {
  return (
    <div className="mainContainer">
      <div className="header">
        <div className="logoname">
          <div className="logo">
            <h1>D</h1>
            <h3>code</h3>
          </div>
        </div>
        <div className="navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <div className="content">
        <div className="left">
          <Terminal className="m-4">
            <TypingAnimation>
              hire dany --roles "Front-End, Mobile, Web3
            </TypingAnimation>
            <AnimatedSpan className="text-green-500">
              ✔ Proven in real-time apps and trading UIs
            </AnimatedSpan>
            <TypingAnimation>
              stack: React · React Native · TypeScript · Expo · Zustand · React
              Query
            </TypingAnimation>
            <TypingAnimation>
              domains: ZDLT (Web3/Trading) · Flimty (E-Commerce/Health)
            </TypingAnimation>
            <AnimatedSpan className="text-blue-500">
              ● Deliverables: fast UI, stable UX, maintainable code
            </AnimatedSpan>
            <TypingAnimation>
              contact: linkedin.com/in/dany-arkham-615165b6
            </TypingAnimation>
            <TypingAnimation>
              resume:
              drive.google.com/file/d/1vF6RlWwwhuUO7qPgoJdKQDBYivtsmX7_/view
            </TypingAnimation>
            <TypingAnimation className="text-white/70">
              open portfolio: #projects
            </TypingAnimation>
          </Terminal>
        </div>
        <div className="right">
          <section className="hero" id="home">
            <h1>Hi, I’m Dany — Front-End, Mobile & Web3 Engineer</h1>
            <p className="subheading">
              Full-time at ZDLT (Web3/Trading) & Flimty (AIMI Group). I build
              seamless interfaces and high-performance apps across platforms.
            </p>
            <div className="cta-group">
              <LinkButton href="#projects">See My Work</LinkButton>
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
        </div>
      </div>

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

      <section className="skills" id="skills">
        <h3>Core Skills</h3>
        <ul>
          <li>React & React Native (TypeScript)</li>
          <li>Expo & mobile-first development</li>
          <li>Zustand (State Management)</li>
          <li>@tanstack/react-query (Data Fetching)</li>
          <li>React Navigation, React Native Paper</li>
          <li>
            react-native-vision-camera (Mobile scanning & camera features)
          </li>
          <li>Gradients & animations (React Native Reanimated)</li>
          <li>Flutter (Side projects)</li>
          <li>Golang (Backend & SaaS integration)</li>
          <li>Firebase (Realtime & serverless features)</li>
          <li>Performance & maintainability-first mindset</li>
        </ul>
      </section>

      <section className="projects" id="projects">
        <h3>Experience</h3>
        <Card className="project">
          <CardHeader>
            <CardTitle>ZDLT — Full-Time Web3 Front-End Developer</CardTitle>
            <CardDescription>
              Membangun UI & sistem trading crypto lintas exchange (Bybit,
              KuCoin). Fokus pada sinkronisasi real-time order, integrasi API,
              dan UX untuk trader profesional.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Stack: React, TypeScript, Zustand, React Query, WebSocket.</p>
          </CardContent>
        </Card>
        <Card className="project">
          <CardHeader>
            <CardTitle>
              Flimty (AIMI Group) — Full-Time Front-End Developer
            </CardTitle>
            <CardDescription>
              Mengembangkan dan memelihara aplikasi mobile dan web untuk
              platform kesehatan & e-commerce Flimty. Fokus pada performa, UI
              responsif, dan pengalaman pengguna modern.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Stack: React Native, TypeScript, Expo, Zustand, Reanimated,
              Firebase.
            </p>
          </CardContent>
        </Card>
        <h3 style={{ marginTop: 24 }}>Selected Projects</h3>
        <Card className="project">
          <CardHeader>
            <CardTitle>FlimtyApp</CardTitle>
            <CardDescription>
              Mobile scanning & UI/UX app built with React Native + Vision
              Camera + TypeScript. Includes smooth animations and integrated
              backend for real-time scanning workflows.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <LinkButton href="#" variant="outline">
              Link to GitHub / Demo
            </LinkButton>
          </CardFooter>
        </Card>
        <Card className="project">
          <CardHeader>
            <CardTitle>Floodie</CardTitle>
            <CardDescription>
              Weather app built with Flutter focusing on immersive visual
              experience + monetization via ads on Google Play. Showcases
              cross-platform capability.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <LinkButton href="#" variant="outline">
              Link to Play Store / Demo
            </LinkButton>
          </CardFooter>
        </Card>
        <Card className="project">
          <CardHeader>
            <CardTitle>
              Aplikasi P5 – Projek Penguatan Profil Pelajar Pancasila
            </CardTitle>
            <CardDescription>
              Full-stack web SPA + Admin portal: React + TypeScript, uses
              dynamic routing (useLocalSearchParams), React Query for data
              interactions, exports data to Excel.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <LinkButton
              href="https://aplikasi-p5.site/"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
            >
              https://aplikasi-p5.site/
            </LinkButton>
            <span className="mx-2">·</span>
            <LinkButton
              href="https://aplikasi-p5.site/portal"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
            >
              https://aplikasi-p5.site/portal
            </LinkButton>
          </CardFooter>
        </Card>
      </section>

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

      <section className="cta-contact" id="contact">
        <h3>Let’s Build Something</h3>
        <p>Ready to turn a concept into a solid app?</p>
        <p>Email: your email</p>
        <p>
          LinkedIn:{' '}
          <a
            href="https://www.linkedin.com/in/dany-arkham-615165b6/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.linkedin.com/in/dany-arkham-615165b6/
          </a>
        </p>
        <p>GitHub: your GitHub link</p>
        <div className="cta-group">
          <LinkButton
            href="https://www.linkedin.com/in/dany-arkham-615165b6/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hire Me
          </LinkButton>
          <LinkButton
            href="https://drive.google.com/file/d/1vF6RlWwwhuUO7qPgoJdKQDBYivtsmX7_/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
          >
            Download Resume
          </LinkButton>
        </div>
      </section>

      <footer>
        © 2025 Dany Arkham. Built with React, TypeScript & Expo. All rights
        reserved.
      </footer>
    </div>
  )
}
