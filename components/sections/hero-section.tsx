"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Play } from "lucide-react"

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden borderless">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          src="/hero-video.mp4"
          className="w-full h-full object-cover transition-transform duration-[10s] ease-out hover:scale-105"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      

      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out delay-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="animate-bounce">
          <div className="relative">
            <ArrowDown className="h-6 w-6 text-white relative z-10" />
            <div className="absolute inset-0 bg-white/20 rounded-full animate-ping" />
          </div>
        </div>
      </div>
    </section>
  )
}
