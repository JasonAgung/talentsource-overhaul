import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { Header } from "@/components/header" 
import { Footer } from "@/components/footer" 
import { PageTransition } from "@/components/page-transition"

export const metadata: Metadata = {
  title: "TalentSource - Future of Talent Development",
  description:
    "Transforming Indonesian companies through innovative Learning & Development strategies for the digital economy",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} bg-background`}>
        <Header /> 
        <main>
          <Suspense fallback={null}>
            <PageTransition>{children}</PageTransition>
          </Suspense>
        </main>
        <Footer /> 
        <Analytics />
      </body>
    </html>
  )
}
