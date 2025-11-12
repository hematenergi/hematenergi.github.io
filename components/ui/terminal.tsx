"use client"
import { useEffect, useMemo, useState } from 'react'
import { cn } from '@/lib/utils'

export function Terminal({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('rounded-2xl border border-white/15 bg-black/40 backdrop-blur-sm text-white font-mono text-sm', className)}>
      <div className="flex items-center gap-2 px-3 py-2 border-b border-white/10">
        <span className="inline-block h-3 w-3 rounded-full bg-[#ff5f56]" />
        <span className="inline-block h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="inline-block h-3 w-3 rounded-full bg-[#27c93f]" />
        <span className="ml-auto text-white/60">~/hematenergi.github.io</span>
      </div>
      <div className="p-4 space-y-2">
        {children}
      </div>
    </div>
  )
}

export function AnimatedSpan({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setShow(true), delay)
    return () => clearTimeout(t)
  }, [delay])
  return <span className={cn('block opacity-0 transition-opacity duration-300', show && 'opacity-100', className)}>{children}</span>
}

export function TypingAnimation({ children, className, duration = 60, delay = 0 }: { children: string; className?: string; duration?: number; delay?: number }) {
  const [text, setText] = useState('')
  const chars = useMemo(() => children.split(''), [children])
  useEffect(() => {
    const start = setTimeout(() => {
      let i = 0
      const timer = setInterval(() => {
        setText((prev) => prev + chars[i])
        i++
        if (i >= chars.length) clearInterval(timer)
      }, duration)
    }, delay)
    return () => clearTimeout(start)
  }, [chars, duration, delay])
  return <span className={cn('block', className)}>{text}</span>
}
