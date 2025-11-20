import { cn } from "@/lib/utils"
import type { HTMLAttributes } from "react"

type BadgeVariant = "default" | "secondary" | "accent"

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
}

const badgeVariants: Record<BadgeVariant, string> = {
  default: "border bg-card text-card-foreground",
  secondary: "bg-secondary text-secondary-foreground border-transparent",
  accent: "bg-accent text-accent-foreground border-transparent",
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
