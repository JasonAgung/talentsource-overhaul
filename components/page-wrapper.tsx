"use client"

// This component is now a simple layout wrapper.
// Page transition animations are handled by PageTransition in layout.tsx.
export function PageWrapper({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <main
      className={`container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 ${className}`}
    >
      {children}
    </main>
  )
}
