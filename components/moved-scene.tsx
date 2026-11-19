"use client"

import { useEffect, useRef, useState } from "react"
import { motion, type Variants } from "framer-motion"

const VOID = "#0a0a0a"
const BONE = "#ece7dc"
const DIM = "#8a867d"
const SIGNAL = "#c9ff3b"
const SERIF = 'var(--font-scene-serif), "Instrument Serif", "Iowan Old Style", Georgia, serif'
const MONO = 'var(--font-scene-mono), "JetBrains Mono", ui-monospace, Menlo, Consolas, monospace'
const OUT = [0.16, 1, 0.3, 1] as const

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  a: number
  ph: number
}

/**
 * Dim drifting dust. Near the link, particles are drawn toward its edge and
 * settle into a loose halo (pull strengthens on hover/focus). With reduced
 * motion it paints one static frame and never starts a loop.
 */
function Field({
  linkRef,
  pullRef,
  kickRef,
  reduced,
}: {
  linkRef: React.RefObject<HTMLAnchorElement | null>
  pullRef: React.MutableRefObject<number>
  kickRef: React.MutableRefObject<{ x: number; y: number } | null>
  reduced: boolean
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (!canvas || !ctx) return

    let w = 0
    let h = 0
    let dpr = 1
    let particles: Particle[] = []
    let raf = 0
    let last = 0
    let pull = 0 // eased value following pullRef
    let flare = 0 // brief brightening after a kick, decays to 0
    const rnd = (a: number, b: number) => a + Math.random() * (b - a)

    const seed = () => {
      const n = Math.round(Math.min(90, Math.max(34, (w * h) / 15000)))
      particles = Array.from({ length: n }, () => ({
        x: rnd(0, w),
        y: rnd(0, h),
        vx: rnd(-6, 6),
        vy: rnd(-5, 4),
        r: rnd(0.5, 1.5),
        a: rnd(0.14, 0.42),
        ph: rnd(0, Math.PI * 2),
      }))
    }

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      seed()
      if (reduced) paint(0)
    }

    const paint = (t: number) => {
      ctx.clearRect(0, 0, w, h)
      ctx.fillStyle = BONE
      for (const p of particles) {
        const tw = reduced ? 1 : 0.75 + 0.25 * Math.sin(t * 0.0008 + p.ph)
        ctx.globalAlpha = Math.min(1, p.a * tw * (1 + flare * 1.6))
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1
    }

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame)
      const dt = Math.min((now - (last || now)) / 1000, 0.05)
      last = now

      pull += (pullRef.current - pull) * Math.min(1, dt * 3)
      flare = Math.max(0, flare - dt * 0.8)

      // metamorphosis shockwave: dust near the name is thrown outward
      const kick = kickRef.current
      if (kick) {
        kickRef.current = null
        flare = 1
        const kr = 280
        for (const p of particles) {
          const kx = p.x - kick.x
          const ky = p.y - kick.y
          const kd = Math.hypot(kx, ky) || 1
          if (kd < kr) {
            const f = (1 - kd / kr) * 140
            p.vx += (kx / kd) * f
            p.vy += (ky / kd) * f
          }
        }
      }

      const box = linkRef.current?.getBoundingClientRect()
      const cx = box ? box.left + box.width / 2 : w / 2
      const cy = box ? box.top + box.height / 2 : h / 2
      const hw = box ? box.width / 2 : 0
      const hh = box ? box.height / 2 : 0
      const reach = Math.max(180, Math.min(w, h) * 0.55)
      const halo = 16
      const strength = 14 + 70 * pull

      for (const p of particles) {
        // distance from the particle to the link's rectangle
        const dx = p.x - cx
        const dy = p.y - cy
        const ex = Math.max(Math.abs(dx) - hw, 0)
        const ey = Math.max(Math.abs(dy) - hh, 0)
        const d = Math.hypot(ex, ey)
        const len = Math.hypot(dx, dy) || 1

        if (box && d < reach) {
          const f = (1 - d / reach) * strength
          // spring toward a ring `halo` px outside the edge, slight swirl
          const dir = d > halo ? -1 : 1
          p.vx += (dx / len) * f * dir * dt + (-dy / len) * f * 0.35 * dt
          p.vy += (dy / len) * f * dir * dt + (dx / len) * f * 0.35 * dt
        }

        // damp, with a faint restoring drift so the field never freezes
        const damp = Math.pow(0.55, dt)
        p.vx = p.vx * damp + Math.sin(now * 0.0002 + p.ph) * 0.9 * dt
        p.vy = p.vy * damp + Math.cos(now * 0.00017 + p.ph) * 0.9 * dt
        const sp = Math.hypot(p.vx, p.vy)
        if (sp < 3) {
          p.vx += Math.cos(p.ph) * 3 * dt
          p.vy += Math.sin(p.ph) * 3 * dt
        }

        p.x += p.vx * dt
        p.y += p.vy * dt
        if (p.x < -10) p.x = w + 10
        else if (p.x > w + 10) p.x = -10
        if (p.y < -10) p.y = h + 10
        else if (p.y > h + 10) p.y = -10
      }
      paint(now)
    }

    const start = () => {
      if (reduced || raf) return
      last = 0
      raf = requestAnimationFrame(frame)
    }
    const stop = () => {
      cancelAnimationFrame(raf)
      raf = 0
    }
    const onVisibility = () => (document.hidden ? stop() : start())

    resize()
    start()
    window.addEventListener("resize", resize)
    document.addEventListener("visibilitychange", onVisibility)
    return () => {
      stop()
      window.removeEventListener("resize", resize)
      document.removeEventListener("visibilitychange", onVisibility)
    }
  }, [linkRef, pullRef, kickRef, reduced])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 h-full w-full"
    />
  )
}

const FROM = "hematenergi"
const TO = "Dany Arkham"
const GLYPHS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ#%&*+=/<>"
const DURATION = 1.35 // seconds, whole metamorphosis
const SWAP_MS = 46 // glyph reshuffle cadence

type Cell = { ch: string; hot: boolean }

/**
 * The name "hematenergi" decays into signal-green static, then resolves
 * letter by letter (left to right) into "Dany Arkham". One way: once done it
 * stays done. Both names are 11 characters; the slot width is eased from the
 * old name's width to the new one so the rest of the sentence glides rather
 * than jumps. Idle state carries a very slow shimmer under the name.
 */
function NameSwap({
  triggered,
  onBurst,
}: {
  triggered: boolean
  onBurst: (x: number, y: number) => void
}) {
  const [phase, setPhase] = useState<"idle" | "running" | "done">("idle")
  const [cells, setCells] = useState<Cell[]>([])
  const wrapRef = useRef<HTMLSpanElement>(null)
  const fromRef = useRef<HTMLSpanElement>(null)
  const toRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!triggered) return
    const wrap = wrapRef.current
    const gFrom = fromRef.current
    const gTo = toRef.current
    if (!wrap || !gFrom || !gTo) return

    const from = gFrom.getBoundingClientRect().width
    const to = gTo.getBoundingClientRect().width
    const box = wrap.getBoundingClientRect()
    onBurst(box.left + box.width / 2, box.top + box.height / 2)

    wrap.style.width = `${from}px`
    setPhase("running")

    const rnd = () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
    const t0 = performance.now()
    let lastSwap = 0
    let raf = 0

    const tick = (now: number) => {
      const t = (now - t0) / 1000
      const wp = Math.min(1, t / (DURATION * 0.8))
      wrap.style.width = `${from + (to - from) * (1 - Math.pow(1 - wp, 3))}px`

      if (t >= DURATION) {
        wrap.style.width = ""
        setPhase("done")
        return
      }
      if (now - lastSwap >= SWAP_MS) {
        lastSwap = now
        setCells(
          Array.from({ length: TO.length }, (_, i) => {
            const resolveAt = 0.32 + (i / (TO.length - 1)) * 0.72
            if (t < 0.18) {
              // first the old name flickers
              return { ch: Math.random() < 0.35 ? rnd() : FROM[i], hot: true }
            }
            if (t < resolveAt) return { ch: rnd(), hot: true }
            return { ch: TO[i], hot: t < resolveAt + 0.2 }
          }),
        )
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [triggered])

  const ghost =
    "pointer-events-none invisible absolute left-0 top-0 whitespace-nowrap"

  return (
    <span
      ref={wrapRef}
      className="relative inline-block whitespace-nowrap align-baseline"
      style={{ textAlign: "left" }}
    >
      {phase === "idle" && (
        <>
          {FROM}
          {/* barely-there cue that the name can be touched */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -bottom-[3px] h-px"
            style={{ background: "rgba(138,134,125,0.28)" }}
          />
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -bottom-[3px] h-px"
            style={{
              backgroundImage: `linear-gradient(90deg, transparent 0%, ${SIGNAL} 50%, transparent 100%)`,
              backgroundSize: "40% 100%",
              backgroundRepeat: "no-repeat",
              opacity: 0.55,
            }}
            initial={{ backgroundPositionX: "-60%" }}
            animate={{ backgroundPositionX: ["-60%", "160%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.5, delay: 4.5 }}
          />
        </>
      )}
      {phase === "running" && (
        <>
          <span className="sr-only">{TO}</span>
          <span aria-hidden="true">
            {cells.map((c, i) => (
              <span
                key={i}
                className="inline-block"
                style={{
                  color: c.hot ? SIGNAL : "inherit",
                  textShadow: c.hot ? "0 0 10px rgba(201,255,59,0.55)" : "none",
                  transition: "color 0.35s ease-out, text-shadow 0.35s ease-out",
                  minWidth: TO[i] === " " ? "0.25em" : undefined,
                }}
              >
                {c.ch === " " ? " " : c.ch}
              </span>
            ))}
          </span>
        </>
      )}
      {phase === "done" && TO}
      <span ref={fromRef} aria-hidden="true" className={ghost}>
        {FROM}
      </span>
      <span ref={toRef} aria-hidden="true" className={ghost}>
        {TO}
      </span>
    </span>
  )
}

export default function MovedScene({ fontClassName = "" }: { fontClassName?: string }) {
  // null until the media query has been read on the client
  const [reduced, setReduced] = useState<boolean | null>(null)
  const linkRef = useRef<HTMLAnchorElement>(null)
  const pullRef = useRef(0.3)
  const kickRef = useRef<{ x: number; y: number } | null>(null)
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduced(mq.matches)
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  const ready = reduced !== null
  const still = reduced === true

  const rise = (delay: number): Variants => ({
    hidden: { opacity: 0, y: still ? 0 : 14, filter: still ? "blur(0px)" : "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: still ? { duration: 0 } : { duration: 1.5, delay, ease: OUT },
    },
  })
  const fade = (delay: number): Variants => ({
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: still ? { duration: 0 } : { duration: 2, delay, ease: "easeOut" },
    },
  })

  const hot = () => (pullRef.current = 1)
  const calm = () => (pullRef.current = 0.3)
  const burst = (x: number, y: number) => (kickRef.current = { x, y })

  return (
    <div
      className={`${fontClassName} relative flex h-[100svh] w-full items-center justify-center overflow-hidden px-6`}
      style={{ background: VOID, color: BONE, fontFamily: SERIF }}
    >
      <Field linkRef={linkRef} pullRef={pullRef} kickRef={kickRef} reduced={still} />

      <motion.main
        initial="hidden"
        animate={ready ? "show" : "hidden"}
        className="relative z-10 flex max-w-xl flex-col items-center text-center"
      >
        <motion.p
          variants={fade(0.5)}
          className="mb-6 text-[0.75rem] uppercase leading-none sm:mb-8"
          style={{ fontFamily: MONO, letterSpacing: "0.14em", color: DIM }}
        >
          00 · NOTHING
        </motion.p>

        <motion.h1
          variants={rise(1.3)}
          className="text-[clamp(2.75rem,10vw,5.25rem)] font-normal leading-[0.98]"
          style={{ letterSpacing: "-0.03em" }}
        >
          This site has moved.
        </motion.h1>

        <motion.p
          variants={rise(2.3)}
          className="mt-6 max-w-[34rem] text-[clamp(1.2rem,3.6vw,1.6rem)] leading-[1.25]"
          style={{ color: DIM }}
          onPointerEnter={(e) => {
            if (e.pointerType !== "touch") setTriggered(true)
          }}
          onClick={() => setTriggered(true)}
        >
          {/* server render and no-JS keep the plain sentence in one text node */}
          {ready ? (
            still ? (
              "Dany Arkham now lives at "
            ) : (
              <>
                <NameSwap triggered={triggered} onBurst={burst} />
                {" now lives at "}
              </>
            )
          ) : (
            "hematenergi now lives at "
          )}
          <span className="whitespace-nowrap">danyarkham.is-a.dev</span>. This
          old address is kept online only so nobody hits a dead end.
        </motion.p>

        <motion.div variants={rise(3.4)} className="mt-10 sm:mt-12">
          <a
            ref={linkRef}
            href="https://danyarkham.is-a.dev"
            onPointerEnter={hot}
            onPointerLeave={calm}
            onFocus={hot}
            onBlur={calm}
            className="group relative inline-block rounded-full px-7 py-3.5 text-[0.8125rem] outline-none transition-[color,background-color,border-color,transform] duration-500 hover:-translate-y-px focus-visible:-translate-y-px"
            style={{
              fontFamily: MONO,
              letterSpacing: "0.04em",
              color: BONE,
              border: "1px solid rgba(236,231,220,0.45)",
            }}
          >
            {/* slow pulsing glow behind the link */}
            <motion.span
              aria-hidden="true"
              className="pointer-events-none absolute -inset-px rounded-full"
              initial={false}
              animate={
                still
                  ? { opacity: 0.55 }
                  : { opacity: [0.25, 0.85, 0.25] }
              }
              transition={
                still
                  ? { duration: 0 }
                  : { duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 4 }
              }
              style={{
                boxShadow: `0 0 22px 2px rgba(201,255,59,0.22), inset 0 0 14px rgba(201,255,59,0.1)`,
              }}
            />
            {/* brighter state on hover / keyboard focus */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -inset-px rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
              style={{
                border: `1px solid ${SIGNAL}`,
                background: "rgba(201,255,59,0.07)",
                boxShadow: `0 0 34px 4px rgba(201,255,59,0.32)`,
              }}
            />
            <span className="relative">Go to danyarkham.is-a.dev</span>
          </a>
        </motion.div>

        <motion.p
          variants={fade(4.6)}
          className="mt-12 text-[0.75rem] leading-snug sm:mt-14"
          style={{ fontFamily: MONO, letterSpacing: "0.06em", color: "rgba(138,134,125,0.6)" }}
        >
          Nothing matters. So I choose what does.
        </motion.p>
      </motion.main>
    </div>
  )
}
