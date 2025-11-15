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
              <article className="prose dark:prose-invert max-w-none mx-auto mt-12 text-muted-foreground">
                <p>
                  Livestream consultation is our unique service that adopts the consultation session with independent
                  professional like doctor, architect, lawyer and others.
                </p>
                <p>The major differences of our livestream consultation with those consultation model are:</p>
                <ul>
                  <li>Appointment is made a lot easier and interactive</li>
                  <li>Our session is more structured with clear points</li>
                  <li>Will be limited to two hours session segment</li>
                  <li>Can be team of TS consultants on max 15 participants</li>
                  <li>Dedicated sessions dealing your own issues and concerns only</li>
                </ul>
                <p>TS memberikan layanan live stream consultation service untuk tiga topik berikut:</p>
                <ul>
                  <li>Process automation / RPA</li>
                  <li>Data analytics, Machine Learning dan AI</li>
                  <li>Corporate digital transformation</li>
                </ul>
                <p>
                  Consultation service ini disesuaikan dengan kebutuhan peminat tergantung posisinya saat ini pada
                  masing masing ketiga topik diatas:
                </p>
                <ul>
                  <li>Sedang akan memutuskan untuk menerapkan di organisasi / korporasi</li>
                  <li>Saat tahap implementasi</li>
                  <li>Sudah cukup advanced dalam implementasi</li>
                </ul>
                <p>Program ini Sebagian juga untuk mendukung free internship program TS.</p>
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