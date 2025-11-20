import { PERSONAL_INFO } from "@/lib/constants"

export default function Footer() {
  return (
    <footer className="text-center text-slate-500 py-12 border-t border-white/10 mt-12">
      <p className="mb-2">
        © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with Next.js,
        TypeScript & Tailwind CSS.
      </p>
      <p className="text-sm">All rights reserved.</p>
    </footer>
  )
}
