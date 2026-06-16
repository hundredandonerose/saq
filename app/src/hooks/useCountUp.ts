import { useState, useEffect, useRef } from 'react'

interface UseCountUpOptions {
  target: number
  duration?: number
  suffix?: string
  prefix?: string
  decimals?: number
  enabled?: boolean
}

export function useCountUp({
  target,
  duration = 2000,
  suffix = '',
  prefix = '',
  decimals = 0,
  enabled = true,
}: UseCountUpOptions) {
  const [value, setValue] = useState(0)
  const rafRef = useRef<number | null>(null)
  const startRef = useRef<number | null>(null)

  useEffect(() => {
    if (!enabled) {
      setValue(0)
      return
    }

    const animate = (timestamp: number) => {
      if (!startRef.current) startRef.current = timestamp
      const elapsed = timestamp - startRef.current
      const progress = Math.min(elapsed / duration, 1)

      // ease-out-expo
      const eased = 1 - Math.pow(2, -10 * progress)
      setValue(eased * target)

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate)
      }
    }

    startRef.current = null
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [target, duration, enabled])

  const formatted = decimals > 0
    ? `${prefix}${value.toFixed(decimals)}${suffix}`
    : `${prefix}${Math.round(value)}${suffix}`

  return formatted
}
