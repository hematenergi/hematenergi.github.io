import { cn } from '@/lib/utils'
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react'

type Variant = 'default' | 'outline' | 'ghost'
type Size = 'md' | 'icon'

type BaseProps = {
  variant?: Variant
  size?: Size
  children: ReactNode
  className?: string
}

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>
type LinkProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement>

const base = 'inline-flex items-center justify-center rounded-xl font-semibold transition-transform duration-200'
const sizes: Record<Size, string> = {
  md: 'h-11 px-5 text-sm',
  icon: 'h-11 w-11'
}
const variants: Record<Variant, string> = {
  default: 'text-white bg-gradient-to-br from-accent to-accent2 shadow-lg hover:translate-y-[-1px] active:translate-y-0',
  outline: 'border border-white/20 text-white hover:bg-white/10',
  ghost: 'text-white/80 hover:text-white hover:bg-white/10'
}

export function Button({ variant = 'default', size = 'md', className, children, ...props }: ButtonProps) {
  return (
    <button className={cn(base, sizes[size], variants[variant], className)} {...props}>
      {children}
    </button>
  )
}

export function LinkButton({ variant = 'default', size = 'md', className, children, ...props }: LinkProps) {
  return (
    <a className={cn(base, sizes[size], variants[variant], className)} {...props}>
      {children}
    </a>
  )
}
