"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-up"
  delay?: number
  threshold?: number
}

export function ScrollAnimation({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  threshold = 0.1,
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay, threshold])

  const getAnimationClass = () => {
    const base = "transition-all duration-700 ease-out"

    if (!isVisible) {
      switch (animation) {
        case "fade-up":
          return `${base} opacity-0 translate-y-8`
        case "fade-in":
          return `${base} opacity-0`
        case "slide-left":
          return `${base} opacity-0 -translate-x-8`
        case "slide-right":
          return `${base} opacity-0 translate-x-8`
        case "scale-up":
          return `${base} opacity-0 scale-95`
        default:
          return `${base} opacity-0 translate-y-8`
      }
    }

    return `${base} opacity-100 translate-y-0 translate-x-0 scale-100`
  }

  return (
    <div ref={ref} className={`${getAnimationClass()} ${className}`}>
      {children}
    </div>
  )
}
