'use client'

import { useRef, useEffect, useState, useMemo } from 'react'

interface StatCounterProps {
  value: string
  label: string
}

function parseValue(raw: string) {
  const match = raw.match(/^([+€]?)(\d+(?:\.\d+)?)(.*?)$/)
  if (!match) return null
  return { prefix: match[1], number: parseFloat(match[2]), suffix: match[3] }
}

export default function StatCounter({ value, label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const parsed = useMemo(() => parseValue(value), [value])
  const hasStarted = useRef(false)
  const rafId = useRef<number | null>(null)

  // Start display at zero version so there is no flash of the final value before animation
  const zeroDisplay = useMemo(() => {
    if (!parsed || parsed.number === 0) return value
    return `${parsed.prefix}0${parsed.suffix}`
  }, [parsed, value])

  const [display, setDisplay] = useState(zeroDisplay)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Skip animation for non-numeric or zero values (e.g. "0→1")
    if (!parsed || parsed.number === 0) {
      setDisplay(value)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasStarted.current) return
        hasStarted.current = true
        observer.unobserve(el)

        const target = parsed.number
        const duration = 1200
        const startTime = performance.now()

        function frame(now: number) {
          const elapsed = now - startTime
          const progress = Math.min(elapsed / duration, 1)
          // ease-out cubic
          const eased = 1 - Math.pow(1 - progress, 3)
          const current = target * eased
          const formatted =
            target % 1 !== 0
              ? current.toFixed(1)
              : Math.round(current).toString()
          setDisplay(`${parsed!.prefix}${formatted}${parsed!.suffix}`)
          if (progress < 1) {
            rafId.current = requestAnimationFrame(frame)
          }
        }

        rafId.current = requestAnimationFrame(frame)
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      if (rafId.current !== null) cancelAnimationFrame(rafId.current)
    }
  }, [parsed, value])

  return (
    <div ref={ref} className="flex flex-col gap-1 items-start">
      <span
        className="text-[22px] md:text-[36px] font-light leading-none tracking-[-0.04em]"
        style={{ color: '#2b5ce6' }}
      >
        {display}
      </span>
      <span
        className="text-[10px] font-medium uppercase tracking-[0.08em]"
        style={{ color: 'rgba(43,92,230,0.6)' }}
      >
        {label}
      </span>
    </div>
  )
}
