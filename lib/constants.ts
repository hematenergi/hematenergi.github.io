// Personal Information
export const PERSONAL_INFO = {
  name: "Dany Arkham",
  alias: "hematenergi",
  title: "Frontend & Mobile Engineer | Product Builder | Tech Dad",
  tagline:
    "Building high-performance, real-time applications across web and mobile platforms",
  email: "danyarkham@gmail.com",
  github: "https://github.com/hematenergi",
  linkedin: "https://www.linkedin.com/in/dany-arkham-615165b6/",
  resume:
    "https://drive.google.com/file/d/1vF6RlWwwhuUO7qPgoJdKQDBYivtsmX7_/view?usp=sharing",
  location: "Indonesia",
  timezone: "GMT+7",
  company: "Anugerah Inovasi Makmur Indonesia",
  bio: "Frontend & Mobile Engineer (React, React Native, Expo). Building products & integrating Web3.",
  funFact:
    "I balance multiple full-time roles, crypto projects, and dad life — and still find time to chase weird ideas that might just work.",
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
    title: "Funding-Rate Arbitrage Stack (Zirodelta)",
    description:
      "Microservices stack to ingest funding rates + orderbook depth (Bybit/KuCoin), store snapshots in Redis, and expose dashboards + REST APIs (FastAPI).",
    icon: "TrendingUp",
  },
  {
    title: "AIMI / Flimty Mobile App",
    description:
      "React Native app with Firebase Auth/Messaging, AppCenter (analytics/crashes), CodePush, and real-time updates tooling.",
    icon: "ShoppingCart",
  },
  {
    title: "TypeScript + React Ecosystem",
    description:
      "TypeScript-first UI codebases across web & mobile, focusing on maintainable state management and component systems.",
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
    title: "Zirodelta — Funding-Rate Arbitrage Stack",
    category: "Backend / Trading Infra",
    description:
      "Microservices stack to ingest funding rates + orderbook depth (Bybit/KuCoin), store snapshots in Redis, and serve dashboards + REST APIs.",
    tags: ["Python", "FastAPI", "Redis", "Docker", "WebSocket"],
    year: "2024-2025",
    features: [
      "Exchange adapters (Bybit WebSocket; KuCoin HTTP/WebSocket) writing normalized snapshots to Redis",
      "REST endpoints for market data + strategy snapshot",
      "Static dashboards for funding rates, orderbook depth, and top candidates",
      "Async strategy loop ranking candidates using per-day normalized differentials",
      "Docker Compose setup for Redis/Postgres/API services",
    ],
    challenges: [
      "Normalizing data from multiple venues into consistent payloads and keys",
      "Keeping dashboards simple while still exposing useful diagnostics",
      "Designing a strategy loop that is tunable and observable via config",
    ],
    solutions: [
      "Defined explicit Redis key conventions + payload schema for each venue",
      "Separated concerns: adapters → Redis, API → aggregation, dashboards → fetch()",
      "Strategy outputs snapshot key + PubSub channel for downstream consumers",
    ],
    link: "/case-studies/zdlt",
    external: false,
  },
  {
    id: "flimty",
    title: "Flimty — React Native App",
    category: "Mobile / Commerce",
    description:
      "React Native app with authentication, push messaging, analytics/crash reporting, OTA updates, and real-time messaging tooling.",
    tags: ["React Native", "Firebase", "Notifee", "AppCenter", "CodePush", "Redux Toolkit"],
    year: "2023-2025",
    features: [
      "React Navigation stack/tab navigation",
      "Firebase Auth + Firebase Messaging",
      "Push notifications via Notifee",
      "Analytics/crash reporting with AppCenter",
      "OTA updates with CodePush",
      "Real-time channels via Pusher WebSocket client",
      "Camera workflows via react-native-vision-camera",
    ],
    challenges: [
      "Managing a large production RN app with multiple native dependencies",
      "Keeping release cadence safe with OTA updates",
      "Handling real-time updates reliably on mobile networks",
    ],
    solutions: [
      "Instrumented releases with AppCenter analytics/crashes",
      "Used CodePush for controlled rollout of JS bundles",
      "Leveraged established libraries (Pusher/Notifee/Firebase) to reduce custom infra",
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
    metrics: [
      { label: "Users", value: "500+", description: "Active administrators" },
      {
        label: "Export speed",
        value: "<2s",
        description: "Excel generation for 10K rows",
      },
      {
        label: "Form types",
        value: "50+",
        description: "Dynamic form schemas",
      },
    ],
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
    company: "Buddy",
    role: "Product Engineer (Mobile / AI)",
    period: "2025 - Present",
    location: "Remote",
    description:
      "Building an AI companion app focused on daily check-ins, guided moments, and event-driven reminders with a subscription model.",
    technologies: [
      "React Native",
      "Expo",
      "Firebase",
      "OpenAI",
      "RevenueCat",
    ],
  },
  {
    company: "ZDLT",
    role: "Front-End Engineer",
    period: "2024 - Present",
    location: "Remote",
    description:
      "Building Web3 Dev platform with real-time order synchronization and professional trader UX",
    technologies: [
      "React",
      "TypeScript",
      "WebSocket",
      "Zustand",
      "TradingView",
    ],
  },
  {
    company: "AIMI (AIMI Group)",
    role: "IT In-House Engineer",
    period: "2023 - Present",
    location: "Remote",
    description:
      "Managing entire tech stack from web/mobile apps to admin systems, inventory management, and payment integrations for health & e-commerce ecosystem",
    technologies: [
      "React Native",
      "Expo",
      "React Query",
      "Firebase",
      "Vision Camera",
    ],
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
  "Funding Rate Arbitrage Platform Developer",
  "E-commerce Developer",
  "Mobile App Developer",
  "Frontend Engineer",
  "Full Stack Developer",
  "Indonesia Developer",
] as const
