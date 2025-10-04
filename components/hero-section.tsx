"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play, Zap, Cpu, Network } from "lucide-react"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "/modern-educational-campus-aerial-view.jpg",
      title: "We help companies build new Learning & Development strategies for the digital economy",
      subtitle: "Adopting Talent Re- & Upskilling Initiatives with deep understanding of Indonesian companies",
      icon: <Zap className="h-8 w-8" />,
    },
    {
      image: "/placeholder-bknhi.png",
      title: "Addressing scarcity of skilled talent in Indonesia",
      subtitle:
        "Not just consulting — offering integrated talent development, consulting services, and hands-on projects",
      icon: <Cpu className="h-8 w-8" />,
    },
    {
      image: "/professional-development-workshop.png",
      title: "Programs are fully customized, systematic, measurable",
      subtitle:
        "24/7 digital coaching, mentoring, and collaboration with balanced mix of idealism and business discipline",
      icon: <Network className="h-8 w-8" />,
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-screen min-h-[800px] overflow-hidden cyber-grid">
      {/* Background Image with Futuristic Overlay */}
      <div className="absolute inset-0">
        <img
          src={slides[currentSlide].image || "/placeholder.svg"}
          alt="Hero background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-card/60" />
        <div className="absolute inset-0 hologram-effect opacity-20" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 float-animation">
        <div className="w-4 h-4 bg-accent rounded-full glow-effect opacity-60"></div>
      </div>
      <div className="absolute top-40 right-20 float-animation" style={{ animationDelay: "2s" }}>
        <div className="w-6 h-6 bg-primary rounded-full glow-effect opacity-40"></div>
      </div>
      <div className="absolute bottom-40 left-20 float-animation" style={{ animationDelay: "4s" }}>
        <div className="w-3 h-3 bg-accent rounded-full glow-effect opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-5xl">
          <div className="flex items-center mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent glow-effect mr-4">
              {slides[currentSlide].icon}
            </div>
            <span className="text-accent font-mono text-sm tracking-wider uppercase">Future Ready</span>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold text-foreground mb-8 leading-tight text-balance">
            <span className="shimmer-text">{slides[currentSlide].title}</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed text-pretty max-w-4xl">
            {slides[currentSlide].subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <Button size="lg" className="btn-futuristic glow-effect text-lg px-8 py-4 h-auto">
              <Zap className="mr-2 h-5 w-5" />
              Explore Our Services
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="neon-border glass-effect text-lg px-8 py-4 h-auto hover:bg-accent/10 bg-transparent"
            >
              <Play className="mr-2 h-5 w-5" />
              Free Consultation
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full glass-effect neon-border hover:bg-accent/10 transition-all duration-300"
      >
        <ChevronLeft className="h-6 w-6 text-foreground" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full glass-effect neon-border hover:bg-accent/10 transition-all duration-300"
      >
        <ChevronRight className="h-6 w-6 text-foreground" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-accent glow-effect scale-125"
                : "bg-muted-foreground/50 hover:bg-muted-foreground"
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-muted/20">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent glow-effect transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </section>
  )
}
