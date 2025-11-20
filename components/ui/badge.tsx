import { cn } from "@/lib/utils"
import type { HTMLAttributes } from "react"

type BadgeVariant = "default" | "outline" | "secondary"

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
}

const badgeVariants: Record<BadgeVariant, string> = {
  default: "border-white/15 bg-white/5 text-white/80",
  outline: "border-cyan-400/30 bg-transparent text-cyan-400",
  secondary: "border-purple-400/30 bg-purple-500/10 text-purple-300",
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        badgeVariants[variant],
        className
      )}
      {...props}
    />
  )
}
