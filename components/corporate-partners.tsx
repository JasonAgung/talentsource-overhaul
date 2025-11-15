import Image from "next/image"
import { Check } from "lucide-react"
import Aurora from "./Aurora"

export function CorporatePartners() {
  const partnershipCriteria = [
    "Can complement TS in order to achieve its vision statement",
    "Located in Indonesia, most preferably in Bandung",
    "Young and vibrant company or startup",
    "Believe and fully aligned to TS mission statement",
  ]

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <main className="min-h-screen relative overflow-hidden">
        <div className="fixed inset-0 w-full h-full">
          <Aurora colorStops={["#475569", "#64748b", "#475569"]} amplitude={1.2} blend={0.6} speed={0.8} />
        </div>

        <div className="relative z-10">
          <section className="min-h-[60vh] flex items-center justify-center px-4 pt-16 md:pt-24 pb-12 relative">
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-foreground/10 backdrop-blur-md border border-foreground/20 text-foreground text-sm font-medium mb-8 mt-8 md:mt-12 animate-fade-in-badge">
                <span className="w-2 h-2 bg-foreground/60 rounded-full mr-2 animate-pulse"></span>
                Strategic Alliances
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">Corporate Partners</h1>
            </div>
          </section>

          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-foreground">
                    TS has standing partnership agreement with companies which:
                  </h2>
                  <ul className="space-y-4">
                    {partnershipCriteria.map((criteria, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mr-3 mt-1">
                          <Check className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-muted-foreground leading-relaxed">{criteria}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-card p-8 rounded-lg border border-border text-center">
                  <div className="flex justify-center mb-6">
                    <Image
                      src="/corporate-partners.png"
                      alt="corporate-partners"
                      width={300}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-left">
                    In December 2019, TS sealed-in a strategic long-term partnership agreement with a vibrant
                    high-performing digital service start-up in Bandung which strategically combine the complementing
                    resources of the two companies
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}