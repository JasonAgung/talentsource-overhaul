
import { HeroSection } from "@/components/hero-section"
import { ValueProposition } from "@/components/value-proposition"
import { ServicesGrid } from "@/components/services-grid"
import { ClientsSection } from "@/components/clients-section"
import { ContactSection } from "@/components/contact-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ValueProposition />
      <ServicesGrid />
      <ClientsSection />
      <ContactSection />
    </>
  )
}