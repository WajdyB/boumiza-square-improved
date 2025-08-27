"use client"

import { useEffect, useState } from "react"

export function FloatingElements() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating geometric shapes */}
      <div
        className="absolute w-2 h-2 bg-accent/20 rounded-full transition-transform duration-1000 ease-out"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          left: "10%",
          top: "20%",
        }}
      />
      <div
        className="absolute w-3 h-3 bg-accent/10 rounded-full transition-transform duration-1500 ease-out"
        style={{
          transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
          right: "15%",
          top: "30%",
        }}
      />
      <div
        className="absolute w-1 h-1 bg-accent/30 rounded-full transition-transform duration-800 ease-out"
        style={{
          transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)`,
          left: "80%",
          bottom: "40%",
        }}
      />
    </div>
  )
}
