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
    "I balance two full-time dev jobs, crypto projects, and dad life — and still find time to chase weird ideas that might just work.",
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

// Highlights
export const HIGHLIGHTS = [
  {
    title: "Funding Rate Farming & Arbitrage Platform",
    description:
      "Built advanced funding rate arbitrage platform for ZDLT with real-time WebSocket integration across Bybit & KuCoin, enabling automated delta-neutral positions for funding rate farming.",
    icon: "TrendingUp",
  },
  {
    title: "App Developer",
    description:
      "IT in-house engineer at AIMI managing complete tech ecosystem: PWA, mobile apps, admin dashboards, inventory, and payment systems serving 100K+ MAU.",
    icon: "ShoppingCart",
  },
  {
    title: "Mobile-First Development",
    description:
      "Architected cross-platform mobile apps using React Native, Expo, and Vision Camera for barcode scanning workflows with 99.5% crash-free rate.",
    icon: "Smartphone",
  },
  {
    title: "TypeScript-First Architecture",
    description:
      "Maintained strict TypeScript codebases with comprehensive type safety, reducing runtime errors by 80% and improving production productivity.",
    icon: "Code2",
  },
  {
    title: "ZiroDelta — Trading Platform",
    description:
      "Launched public trading frontend at app.zirodelta.ag — WebSocket-powered order book, low-latency execution, and cross-exchange arbitrage tools.",
    icon: "Globe",
  },
] as const

// Case Studies
export const CASE_STUDIES = [
  {
    id: "zdlt",
    title: "ZDLT — Web3 Developer",
    category: "Web3 / Dev",
    description:
      "Advanced funding rate arbitrage platform with real-time WebSocket integration across multiple exchanges for automated funding rate farming strategies.",
    tags: ["React", "TypeScript", "WebSocket", "Zustand", "TradingView"],
    year: "2024-2025",
    metrics: [
      {
        label: "Latency",
        value: "<100ms",
        description: "WebSocket message processing",
      },
      { label: "Uptime", value: "99.9%", description: "Service availability" },
      { label: "Orders/day", value: "50K+", description: "Peak daily volume" },
    ],
    features: [
      "Real-time order book synchronization across multiple exchanges",
      "Advanced charting with TradingView integration",
      "Multi-account portfolio management",
      "Automated trading bot interface",
      "WebSocket-based live price feeds",
    ],
    challenges: [
      "Handling high-frequency updates without UI lag",
      "Managing complex state across multiple exchange connections",
      "Ensuring data consistency in real-time environment",
    ],
    solutions: [
      "Implemented virtual scrolling for order books with 1000+ entries",
      "Used Zustand with immer for efficient state updates",
      "Built custom WebSocket reconnection logic with exponential backoff",
    ],
    link: "/case-studies/zdlt",
    external: false,
  },
  {
    id: "flimty",
    title: "AIMI — IT In-House Engineer",
    category: "Full-Stack / IT Systems",
    description:
      "IT in-house engineer managing entire tech infrastructure: PWA, mobile apps, admin dashboards, inventory systems, and payment integrations for health & e-commerce ecosystem.",
    tags: ["React", "React Native", "Expo", "React Query", "Firebase"],
    year: "2023-2025",
    metrics: [
      { label: "Performance", value: "95+", description: "Lighthouse score" },
      {
        label: "Crash-free",
        value: "99.5%",
        description: "Mobile app stability",
      },
      { label: "MAU", value: "100K+", description: "Monthly active users" },
    ],
    features: [
      "End-to-end IT infrastructure: PWA, mobile apps, admin systems",
      "Real-time inventory management and warehouse operations",
      "Payment gateway integrations (Midtrans, Xendit)",
      "Admin dashboards for operations, finance, and logistics",
      "Push notification systems and customer engagement tools",
    ],
    challenges: [
      "Optimizing performance for low-end Android devices",
      "Syncing data across web and mobile platforms",
      "Managing complex checkout flow with multiple payment methods",
    ],
    solutions: [
      "Implemented code-splitting and lazy loading, reducing initial bundle by 40%",
      "Used React Query for efficient data synchronization and caching",
      "Built reusable headless UI components for consistent UX",
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
      "Deep expertise in both mobile and web platforms means you get cohesive solutions that work seamlessly across all devices, not siloed implementations.",
  },
  {
    title: "Modern Tech Stack",
    description:
      "Leverage cutting-edge tools like TypeScript, Zustand, and React Query combined with strong emphasis on maintainability, resulting in fewer bugs and faster iteration cycles.",
  },
  {
    title: "Performance-First Mindset",
    description:
      "Every line of code is written with performance in mind. From Core Web Vitals optimization to efficient state management, your users get blazing-fast experiences.",
  },
  {
    title: "Production-Ready Code",
    description:
      "Shipped mission-critical applications handling real money in trading platforms and serving 100K+ users in e-commerce. I know how to build for scale and reliability.",
  },
  {
    title: "End-to-End Ownership",
    description:
      "From UI/UX implementation to backend integration and deployment, I can handle the full development lifecycle, reducing communication overhead and shipping faster.",
  },
  {
    title: "Continuous Learning",
    description:
      "Staying current with the latest in web and mobile development. Recently upgraded to M3 MacBook with 16GB/512GB for optimal development workflow and testing.",
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
