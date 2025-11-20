import { cn } from "@/lib/utils"
import type {
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  ReactNode,
} from "react"

type Variant = "default" | "outline" | "ghost"
type Size = "md" | "icon"

type BaseProps = {
  variant?: Variant
  size?: Size
  children: ReactNode
  className?: string
}

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>
type LinkProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement>

const base =
  "inline-flex items-center justify-center rounded-xl font-semibold transition-transform duration-200"
const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  icon: "h-11 w-11",
}
const variantStyles = {
  default:
    "bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 hover:translate-y-[-1px] active:translate-y-0",
  outline:
    "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  ghost: "hover:bg-accent hover:text-accent-foreground",
}

export function Button({
  variant = "default",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(base, sizes[size], variantStyles[variant], className)}
      {...props}
    >
      {children}
    </button>
  )
}

export function LinkButton({
  variant = "default",
  size = "md",
  className,
  children,
  ...props
}: LinkProps) {
  return (
    <a
      className={cn(base, sizes[size], variantStyles[variant], className)}
      {...props}
    >
      {children}
    </a>
  )
}
