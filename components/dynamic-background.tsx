"use client"

import { useTheme } from "next-themes"
import Aurora from "@/components/Aurora"
import { useEffect, useState } from "react"

export function DynamicBackground() {
  const { theme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      {theme === "dark" && (
        <div className="fixed inset-0 w-full h-full -z-10">
          <Aurora colorStops={["#475569", "#64748b", "#475569"]} amplitude={1.2} blend={0.6} speed={0.8} />
        </div>
      )}
    </>
  )
}
