import { useEffect, useRef, useState } from "react"

type AnimatedCounterProps = {
  value: number
  suffix?: string
  duration?: number
  className?: string
}

const numberFormatter = new Intl.NumberFormat("id-ID")

export default function AnimatedCounter({
  value,
  suffix = "",
  duration = 1600,
  className,
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const counterRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const element = counterRef.current
    if (!element) return

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches
    let animationFrame = 0
    let observer: IntersectionObserver | undefined

    const startCounting = () => {
      if (reducedMotion) {
        setDisplayValue(value)
        return
      }

      const startTime = performance.now()
      const updateCounter = (currentTime: number) => {
        const progress = Math.min((currentTime - startTime) / duration, 1)
        const easedProgress = 1 - Math.pow(1 - progress, 3)

        setDisplayValue(Math.round(value * easedProgress))

        if (progress < 1) {
          animationFrame = requestAnimationFrame(updateCounter)
        }
      }

      animationFrame = requestAnimationFrame(updateCounter)
    }

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            observer?.disconnect()
            startCounting()
          }
        },
        { threshold: 0.35 },
      )
      observer.observe(element)
    } else {
      startCounting()
    }

    return () => {
      observer?.disconnect()
      cancelAnimationFrame(animationFrame)
    }
  }, [duration, value])

  const finalValue = `${numberFormatter.format(value)}${suffix}`

  return (
    <>
      <span
        ref={counterRef}
        className={`tabular-nums ${className ?? ""}`}
        aria-hidden="true"
      >
        {numberFormatter.format(displayValue)}
        {suffix}
      </span>
      <span className="sr-only">{finalValue}</span>
    </>
  )
}
