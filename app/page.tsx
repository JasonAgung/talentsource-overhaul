"use client"

import { useTheme } from "next-themes"
import { HeroSection } from "@/components/hero-section"
import { ValueProposition } from "@/components/value-proposition"
import { ServicesGrid } from "@/components/services-grid"
import { FeaturesBenefits } from "@/components/features-benefits"
import { HowItWorks } from "@/components/how-it-works"
import { ClientsSection } from "@/components/clients-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import Aurora from "@/components/Aurora"

export default function HomePage() {
  const { theme } = useTheme()

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <main className="min-h-screen relative overflow-hidden">
        {theme === "dark" && (
          <div className="fixed inset-0 w-full h-full">
            <Aurora colorStops={["#475569", "#64748b", "#475569"]} amplitude={1.2} blend={0.6} speed={0.8} />
          </div>
        )}
        <div className="relative z-10">
          <HeroSection />
          <ValueProposition />
          <ServicesGrid />
          <FeaturesBenefits />
          <HowItWorks />
          <ClientsSection />
          <FAQSection />
          <ContactSection />
        </div>
      </main>
    </div>
  )
}
