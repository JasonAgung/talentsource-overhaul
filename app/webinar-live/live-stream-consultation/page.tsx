"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Aurora from "@/components/Aurora"

export default function LiveStreamPage() {
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
                Interactive Sessions
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">Live Stream Consultation</h1>
            </div>
          </section>

          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
              <article className="prose dark:prose-invert max-w-none mx-auto mt-12 text-muted-foreground space-y-8">
                <div>
                  <h3 className="text-foreground font-semibold text-xl mb-2">What is Live Stream Consultation?</h3>
                  <p>
                    Our Live Stream Consultation is a unique service that adapts the traditional consultation model
                    (like those with doctors, architects, or lawyers) to a dynamic digital format.
                  </p>
                </div>
              
                <div>
                  <h3 className="text-foreground font-semibold text-xl mb-2">Key Differentiators</h3>
                  <p>Compared to conventional consultation models, our live stream sessions offer:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Easier and more interactive appointment scheduling.</li>
                    <li>Structured sessions with clear objectives and outcomes.</li>
                    <li>Each session is limited to a two-hour segment for focused discussion.</li>
                    <li>Engage with a team of TalentSource consultants, accommodating up to 15 participants.</li>
                    <li>Dedicated sessions tailored to address your specific issues and concerns.</li>
                  </ul>
                </div>
              
                <div>
                  <h3 className="text-foreground font-semibold text-xl mb-2">Consultation Topics</h3>
                  <p>TalentSource provides live stream consultation services across three key topics:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Process Automation / Robotic Process Automation (RPA)</li>
                    <li>Data Analytics, Machine Learning, and Artificial Intelligence (AI)</li>
                    <li>Corporate Digital Transformation</li>
                  </ul>
                </div>
              
                <div>
                  <h3 className="text-foreground font-semibold text-xl mb-2">Tailored to Your Needs</h3>
                  <p>Our consultation service is customized based on your current stage and needs for each topic:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>For those deciding whether to implement in their organization/corporation.</li>
                    <li>For those currently in the implementation phase.</li>
                    <li>For those already advanced in implementation and seeking further optimization.</li>
                  </ul>
                </div>
              
                <div>
                  <p>This program also partially supports the TalentSource Free Internship Program.</p>
                </div>
              </article>
              <div className="mt-16 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-8">Download Our Flyers</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col items-center p-6 bg-card border border-border rounded-lg">
                    <img src="https://bandungtalentsource.com/wp-content/uploads/2022/01/flyer1.png" />
                    <Button asChild className="w-full max-w-xs mt-4">
                      <a href="/placeholder-flyer-en.pdf" download>
                        <Download className="mr-2 h-4 w-4" />
                        Download Flyer
                      </a>
                    </Button>
                  </div>
                  <div className="flex flex-col items-center p-6 bg-card border border-border rounded-lg">
                    <img src="https://bandungtalentsource.com/wp-content/uploads/2022/01/flyer24.png" />
                    <Button asChild className="w-full max-w-xs mt-4">
                      <a href="/placeholder-flyer-id.pdf" download>
                        <Download className="mr-2 h-4 w-4" />
                        Download Flyer
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-card border border-border rounded-lg text-center">
                <p className="text-lg font-medium text-foreground mb-2">Nyatakan Minat Anda</p>
                <p className="text-muted-foreground">Korporasi atau organisasi peminat dapat menghubungi kami melalui:</p>
                <p className="mt-4 text-lg">
                  <a href="mailto:contact@bandungtalentsource.com" className="text-primary hover:underline font-semibold">
                    contact@bandungtalentsource.com
                  </a>
                  <br />
                  atau WhatsApp di{" "}
                  <a
                    href="https://wa.me/628122101938"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-semibold"
                  >
                    +62 812-210-1938
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}