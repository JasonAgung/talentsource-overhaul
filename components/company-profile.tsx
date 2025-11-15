import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Aurora from "./Aurora"

export default function CompanyProfilePage() {
  const countries = ["Afghanistan", "Indonesia", "Malaysia", "Singapore", "United States", "United Kingdom"]

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
                About TalentSource
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">Company Profile</h1>
            </div>
          </section>

          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
                <div className="space-y-6">
                  <div className="aspect-video overflow-hidden rounded-lg shadow-md">
                    <Image
                      src="/company-profile.jpg"
                      alt="Company event at Telkomsel"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    TalentSource is a truly Indonesian Consulting and Solution company that comprises Indonesian
                    experienced and highly knowledgeable partners with hands-on experience and the most recent
                    techniques, ready to help companies/organizations in Indonesia in their digital transformation
                    journey.
                  </p>
                </div>

                <div className="bg-card p-8 rounded-lg border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Get the TS Company Profile</h2>
                  <form className="space-y-5">
                    <div>
                      <Label htmlFor="first-name" className="text-muted-foreground">
                        First name
                      </Label>
                      <Input
                        type="text"
                        id="first-name"
                        className="bg-input border-border text-foreground"
                      />
                    </div>
                    <div>
                      <Label htmlFor="last-name" className="text-muted-foreground">
                        Last name
                      </Label>
                      <Input
                        type="text"
                        id="last-name"
                        className="bg-input border-border text-foreground"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company" className="text-muted-foreground">
                        Company/Organization
                      </Label>
                      <Input
                        type="text"
                        id="company"
                        className="bg-input border-border text-foreground"
                      />
                    </div>
                    <div>
                      <Label htmlFor="work-email" className="text-muted-foreground">
                        Work email
                      </Label>
                      <Input
                        type="email"
                        id="work-email"
                        className="bg-input border-border text-foreground"
                      />
                    </div>
                    <div>
                      <Label htmlFor="country" className="text-muted-foreground">
                        Select Country
                      </Label>
                      <Select>
                        <SelectTrigger className="w-full bg-input border-border text-foreground">
                          <SelectValue placeholder="Select a country" />
                        </SelectTrigger>
                        <SelectContent className="bg-card border-border text-foreground">
                          {countries.map((country) => (
                            <SelectItem key={country} value={country}>
                              {country}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="pt-2">
                      <Button type="submit" className="w-auto">
                        Download
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}