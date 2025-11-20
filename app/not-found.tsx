import Link from "next/link"
import { LinkButton } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen   flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-9xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
          404
        </h1>
        <h2 className="text-3xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-slate-400 mb-8 max-w-md mx-auto">
          Sorry, the page you're looking for doesn't exist. It might have been
          moved or deleted.
        </p>
        <div className="flex gap-4 justify-center">
          <LinkButton href="/">Go Home</LinkButton>
          <LinkButton href="/#work" variant="outline">
            View Projects
          </LinkButton>
        </div>
      </div>
    </div>
  )
}
