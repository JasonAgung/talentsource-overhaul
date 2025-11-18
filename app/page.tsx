import { HeroSection } from "@/components/hero-section"
import { ValueProposition } from "@/components/value-proposition"
import { ServicesGrid } from "@/components/services-grid"
import { ClientsSection } from "@/components/clients-section"
import { ContactSection } from "@/components/contact-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <main className="min-h-screen relative overflow-hidden">
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
