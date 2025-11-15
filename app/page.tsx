import { HeroSection } from "@/components/hero-section"
import { ValueProposition } from "@/components/value-proposition"
import { ServicesGrid } from "@/components/services-grid"
import { ClientsSection } from "@/components/clients-section"
import { ContactSection } from "@/components/contact-section"
import Aurora from "@/components/Aurora"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <main className="min-h-screen relative overflow-hidden">
        <div className="fixed inset-0 w-full h-full">
          <Aurora colorStops={["#475569", "#64748b", "#475569"]} amplitude={1.2} blend={0.6} speed={0.8} />
        </div>
        <div className="relative z-10">
          <HeroSection />
          <ValueProposition />
          <ServicesGrid />
          <ClientsSection />
          <ContactSection />
        </div>
      </main>
    </div>
  )
}