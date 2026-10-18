// Personal Information
export const PERSONAL_INFO = {
  name: "Dany Arkham",
  alias: "hematenergi",
  title: "Frontend & Mobile Engineer · React · React Native · Web3 (Solana, EVM)",
  tagline:
    "Web and mobile apps on one React + TypeScript stack — Solana dApps, real-time trading dashboards, and App Store apps.",
  email: "danyarkham@gmail.com",
  github: "https://github.com/hematenergi",
  linkedin: "https://www.linkedin.com/in/dany-arkham-615165b6/",
  resume: "/Dany-Arkham-CV-2026.pdf",
  location: "Indonesia",
  timezone: "GMT+7",
  company: "Anugerah Inovasi Makmur Indonesia",
  bio: "Frontend & mobile engineer (React, Next.js, React Native, TypeScript) and web3 frontend (Solana, EVM). 5+ years in production; building Fragment, open-source memory for AI coding agents.",
  funFact:
    "My most frequent code reviewer is an AI agent — so I built Fragment to make it remember why I said no.",
} as const

// Tech Stack - Updated from GitHub profile
export const TECH_STACK = [
  "TypeScript",
  "React",
  "React Native",
  "Expo",
  "Next.js",
  "Zustand",
  "Tanstack Query",
  "Firebase",
  "PostgreSQL",
  "Node.js",
  "Express",
  "Solana Web3.js",
  "Golang",
  "Tailwind CSS",
  "WebSocket",
] as const

// Highlights (keep factual / repo-backed)
export const HIGHLIGHTS = [
  {
    title: "Buddy — AI Companion App",
    description:
      "AI companion mobile app built with React Native + Expo, Firebase (Auth/Firestore/Messaging), notifications, and subscription/paywall tooling.",
    icon: "MessageCircle",
  },
  {
    title: "ZiroDelta — Solana Trading dApp",
    description:
      "Built the wallet layer (wallet-adapter provider, connection, auth) and core trading screens of the web app, plus the React Native wallet flows: Phantom, WalletConnect, send/receive.",
    icon: "TrendingUp",
  },
  {
    title: "AIMI / Flimty — Web & Mobile",
    description:
      "Consumer React Native app plus internal web systems: FIS operations system, CRM, POS & stock PWA, LMS and a Next.js customer portal.",
    icon: "ShoppingCart",
  },
  {
    title: "Fragment — Memory for AI Coding Agents",
    description:
      "Open-source harness (Bash + Git, MIT) that keeps decisions, rejected paths and next steps in the repo. Used on two production repos with a shared CI guard.",
    icon: "Code2",
  },
] as const

// Case Studies (repo-backed; avoid unverifiable metrics)
export const CASE_STUDIES = [
  {
    id: "buddy",
    title: "Buddy — AI Companion App",
    category: "Mobile / AI",
    description:
      "AI companion app built with React Native + Expo, Firebase (Auth/Firestore/Messaging), notifications, and subscription/paywall tooling.",
    tags: ["React Native", "Expo", "Firebase", "OpenAI", "Notifee", "RevenueCat", "Superwall"],
    year: "2025-2026",
    features: [
      "Expo Router app structure with modular screens",
      "Moments feature: create/publish custom guided activities with instructions + preview chat",
      "Multi-bubble assistant rendering (delimiter-based message splitting)",
      "Notifications settings with local scheduling + streak reminders",
      "Firebase Auth + Firestore persistence, plus FCM token + preferences sync",
      "Subscription/paywall dependencies: RevenueCat + Superwall",
    ],
    challenges: [
      "Coordinating notification permissions, local schedules, and remote token sync",
      "Keeping app state consistent between local store and Firestore",
      "Designing safe UX around account deletion and user data",
    ],
    solutions: [
      "Centralized notification service (init/check permissions/schedule/cancel) called from settings flows",
      "Store-first updates with Firestore persistence (preferences + FCM token) for multi-device consistency",
      "Clear permission prompts and fallback paths (open device settings when denied)",
    ],
    link: "/case-studies/buddy",
    external: false,
  },
  {
    id: "zdlt",
    title: "ZiroDelta — Solana Trading dApp",
    category: "Web3 / Frontend",
    description:
      "Wallet layer and core trading screens for a Solana funding-rate arbitrage dApp, plus the wallet flows of its React Native app.",
    tags: ["Solana", "Wallet Adapter", "React", "TypeScript", "Zustand", "WebSocket", "React Native"],
    year: "2025-2026",
    features: [
      "Solana wallet-adapter provider and connection flow, with an auth store tied to the connected wallet",
      "Pair detail page and execution panel for arbitrage executions",
      "Live portfolio, executions and trade drill-downs across Bybit and KuCoin over WebSocket",
      "React Native wallet flows: create/import wallet, Phantom and WalletConnect, send/receive SPL tokens, transaction confirmation",
      "Vault dApp hardening (Anchor client): RPC config moved to environment variables, input validation",
    ],
    challenges: [
      "Keeping wallet connection, auth and trading state consistent while users switch wallets",
      "Showing live execution data from two exchanges without overwhelming traders",
      "Making mobile wallet flows understandable for people who are new to self-custody",
    ],
    solutions: [
      "One wallet provider and a Zustand auth store as the single source of truth for every trading screen",
      "Contextual modals for trade drill-downs instead of dumping every trade on the page, with consistent date and number formatting",
      "An explicit confirmation step before every transaction, and readable error handling for Phantom and WalletConnect failures",
    ],
    link: "/case-studies/zdlt",
    external: false,
  },
  {
    id: "flimty",
    title: "Flimty — React Native App",
    category: "Mobile / Commerce",
    description:
      "Consumer app for a health-commerce brand: authentication, push messaging, barcode scanning, real-time updates, analytics and crash reporting.",
    tags: ["React Native", "Expo Modules", "Firebase", "PostHog", "Sentry", "Redux Toolkit"],
    year: "2021-2026",
    features: [
      "React Navigation stack/tab navigation",
      "Firebase Auth + Firebase Messaging",
      "Push notifications",
      "Product analytics with PostHog and crash reporting with Sentry",
      "Real-time channels via Pusher WebSocket client",
      "Barcode scanning via react-native-vision-camera",
    ],
    challenges: [
      "Managing a large production RN app with multiple native dependencies",
      "Keeping a fast release cadence safe",
      "Handling real-time updates reliably on mobile networks",
    ],
    solutions: [
      "Instrumented releases with Sentry and PostHog",
      "Automated release-integrity checks: release ledger vs. app manifest, store copy vs. build number",
      "Leaned on established libraries (Pusher, Firebase) to reduce custom infrastructure",
    ],
    link: "/case-studies/flimty",
    external: false,
  },
  {
    id: "p5",
    title: "P5 — SPA Admin Portal",
    category: "Enterprise / SPA",
    description:
      "Single-page application with advanced admin features including Excel export, dynamic forms, and role-based access control.",
    tags: ["React", "TypeScript", "React Query", "Excel Export", "RBAC"],
    year: "2023",
    features: [
      "Dynamic form builder with validation",
      "Excel export with custom formatting",
      "Role-based access control (RBAC)",
      "Real-time data updates with React Query",
      "Advanced filtering and search",
    ],
    challenges: [
      "Generating large Excel files without blocking UI",
      "Managing complex form state with nested fields",
      "Implementing granular permissions system",
    ],
    solutions: [
      "Used Web Workers for Excel generation to keep UI responsive",
      "Built custom form state manager with React Hook Form",
      "Implemented HOC-based permission checks for components",
    ],
    link: "https://aplikasi-p5.site/",
    external: true,
  },
] as const

// Work Experience
export const EXPERIENCE = [
  {
    company: "AIMI Group (Flimty)",
    role: "Mobile & Web Engineer (In-house)",
    period: "2021 - Present",
    location: "Remote",
    description:
      "Build and maintain the Flimty consumer app and six internal products: field-sales app, POS & stock PWA, CRM and affiliate dashboards, LMS and a Next.js customer portal.",
    technologies: ["React Native", "Expo", "TypeScript", "Firebase", "Next.js"],
  },
  {
    company: "Buddy (Canada)",
    role: "Product Engineer, Mobile / AI",
    period: "Dec 2025 - Apr 2026",
    location: "Remote · Contract",
    description:
      "Shipped Buddy: Virtual Pet Chat to the App Store as part of a two-person team (9 App Store releases in about seven weeks): onboarding v2, paywalls and subscriptions, notifications, streaks and widgets.",
    technologies: ["Expo", "React Native", "Firebase", "RevenueCat", "PostHog"],
  },
  {
    company: "ZiroDelta",
    role: "Front-End Engineer (Web3)",
    period: "Jun 2025 - Feb 2026",
    location: "Remote · Contract",
    description:
      "Solana dApp for funding-rate arbitrage: built the wallet layer and core trading screens of the web app, live data over WebSocket, and the wallet flows of the React Native app.",
    technologies: ["Solana", "React", "TypeScript", "WebSocket", "Zustand"],
  },
] as const

// Skills & Expertise
export const SKILLS = {
  "Frontend Development": [
    "React.js / Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Responsive Design",
    "Web Performance Optimization",
  ],
  "Mobile Development": [
    "React Native",
    "Expo",
    "React Navigation",
    "Native Modules",
    "App Store Deployment",
  ],
  "State Management": [
    "Zustand",
    "React Query",
    "Context API",
    "Redux (legacy projects)",
  ],
  "Real-Time & APIs": [
    "WebSocket",
    "REST APIs",
    "GraphQL",
    "Server-Sent Events",
  ],
  "Backend & Cloud": [
    "Golang",
    "Firebase",
    "Supabase",
    "Vercel",
    "AWS (basic)",
  ],
  "Tools & Workflow": [
    "Git / GitHub",
    "VS Code",
    "Figma",
    "Chrome DevTools",
    "Postman",
  ],
} as const

// Why Work With Me
export const WHY_WORK_WITH_ME = [
  {
    title: "Full-Stack Versatility",
    description:
      "Comfortable shipping across mobile, web, and backend services — so projects stay cohesive instead of siloed.",
  },
  {
    title: "Modern Tech Stack",
    description:
      "TypeScript, React/React Native, and pragmatic state/data tools (e.g., Zustand / Query patterns) with a focus on maintainability.",
  },
  {
    title: "Performance-First Mindset",
    description:
      "Performance and UX are treated as product features: smooth UI updates, sensible caching, and careful rendering.",
  },
  {
    title: "Production Habits",
    description:
      "Instrumentation, safe rollouts, and clear error handling — the boring stuff that keeps apps reliable.",
  },
  {
    title: "End-to-End Ownership",
    description:
      "Can take features from spec → implementation → deployment, while keeping communication tight.",
  },
] as const

// Navigation Links
export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
] as const

// SEO Keywords
export const SEO_KEYWORDS = [
  "React Developer",
  "React Native Developer",
  "TypeScript Developer",
  "Web3 Developer",
  "Web3 Frontend Engineer",
  "Solana Developer",
  "dApp Developer",
  "Funding Rate Arbitrage Platform Developer",
  "E-commerce Developer",
  "Mobile App Developer",
  "Frontend Engineer",
  "Full Stack Developer",
  "Indonesia Developer",
] as const
