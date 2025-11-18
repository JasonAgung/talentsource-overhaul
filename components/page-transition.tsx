"use client"

import type React from "react"

import { usePathname } from 'next/navigation'
import { useEffect, useState } from "react"

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    setIsAnimating(true)
    const timer = setTimeout(() => {
      setIsAnimating(false)
    }, 50)

    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <div className={`transition-opacity duration-500 ease-in-out ${isAnimating ? "opacity-0" : "opacity-100"}`}>
      {children}
    </div>
  )
}
