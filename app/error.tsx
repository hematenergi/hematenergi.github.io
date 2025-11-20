"use client"

import { useEffect } from "react"
import { LinkButton } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Error:", error)
  }, [error])

  return (
    <div className="min-h-screen   flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="mb-6">
          <svg
            className="w-20 h-20 text-red-500 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <h2 className="text-3xl font-bold text-white mb-2">
            Something went wrong!
          </h2>
          <p className="text-slate-400 mb-6">
            An unexpected error occurred. Don't worry, we're on it.
          </p>
        </div>

        {error.message && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
            <p className="text-sm text-red-400 font-mono">{error.message}</p>
          </div>
        )}

        <div className="flex gap-4 justify-center">
          <LinkButton onClick={() => reset()}>Try Again</LinkButton>
          <LinkButton href="/" variant="outline">
            Go Home
          </LinkButton>
        </div>
      </div>
    </div>
  )
}
