"use client"
import React, { Children, useEffect, useMemo, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export function Terminal({
  children,
  className,
  sequence = true,
  startOnView = true,
}: {
  children: React.ReactNode
  className?: string
  sequence?: boolean
  startOnView?: boolean
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(!startOnView)

  useEffect(() => {
    if (!startOnView || !ref.current) return
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisible(true)
      },
      { threshold: 0.2 }
    )
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [startOnView])

  let content: React.ReactNode = children
  if (sequence && visible) {
    const list = Children.toArray(children)
    let delayAcc = 0
    content = list.map((child) => {
      if (React.isValidElement(child)) {
        if (child.type === TypingAnimation) {
          const txt: string =
            typeof (child.props as any).children === "string"
              ? (child.props as any).children
              : ""
          const speed: number = (child.props as any)?.duration ?? 60
          const d = delayAcc
          delayAcc += txt.length * speed
          return React.cloneElement(
            child as React.ReactElement<any>,
            { delay: d } as any
          )
        }
        if (child.type === AnimatedSpan) {
          const d = delayAcc + 200
          delayAcc += 500
          return React.cloneElement(
            child as React.ReactElement<any>,
            { delay: d } as any
          )
        }
      }
      return child
    })
  }

  return (
    <div
      ref={ref}
      className={cn(
        "w-full h-auto min-h-[320px] rounded-2xl border border-white/15 bg-black/40 backdrop-blur-sm text-white font-mono text-sm shadow-2xl",
        className
      )}
    >
      <div className="flex items-center gap-2 px-3 py-2 border-b border-white/10">
        <span className="inline-block h-3 w-3 rounded-full bg-[#ff5f56]" />
        <span className="inline-block h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="inline-block h-3 w-3 rounded-full bg-[#27c93f]" />
        <span className="ml-auto text-white/60 text-xs">~/portfolio</span>
      </div>
      <div className="p-4 space-y-2">{visible ? content : null}</div>
    </div>
  )
}

export function AnimatedSpan({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setShow(true), delay)
    return () => clearTimeout(t)
  }, [delay])
  return (
    <span
      className={cn(
        "block opacity-0 transition-opacity duration-300",
        show && "opacity-100",
        className
      )}
    >
      {children}
    </span>
  )
}
AnimatedSpan.displayName = "AnimatedSpan"

export function TypingAnimation({
  children,
  className,
  duration = 60,
  delay = 0,
}: {
  children: string
  className?: string
  duration?: number
  delay?: number
}) {
  const [text, setText] = useState("")
  const chars = useMemo(() => children.split(""), [children])
  const startRef = useRef<number | null>(null)
  const intervalRef = useRef<number | null>(null)

  useEffect(() => {
    setText("")
    let i = 0
    startRef.current = window.setTimeout(() => {
      intervalRef.current = window.setInterval(() => {
        if (i < chars.length) {
          setText((prev) => prev + chars[i])
          i++
        } else if (intervalRef.current) {
          clearInterval(intervalRef.current)
          intervalRef.current = null
        }
      }, duration)
    }, delay)

    return () => {
      if (startRef.current) {
        clearTimeout(startRef.current)
        startRef.current = null
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [chars, duration, delay])

  return <span className={cn("block", className)}>{text}</span>
}
TypingAnimation.displayName = "TypingAnimation"
