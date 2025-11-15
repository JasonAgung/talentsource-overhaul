"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play, Zap, Cpu, Network } from "lucide-react"
import RotatingText from "./RotatingText"

const ArrowRight = () => (
  <svg
    className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "/modern-educational-campus-aerial-view.jpg",
      title: "We help companies build new Learning & Development strategies",
      subtitle: "Adopting Talent Re- & Upskilling Initiatives with deep understanding of Indonesian companies",
      icon: <Zap className="h-8 w-8" />,
      badge: "Future Ready",
      rotatingTexts: ["Growth", "Innovation", "Efficiency", "Success", "Performance"]
    },
    {
      image: "/placeholder-bknhi.png",
      title: "Addressing scarcity of skilled talent in Indonesia",
      subtitle:
        "Not just consulting — offering integrated talent development, consulting services, and hands-on projects",
      icon: <Cpu className="h-8 w-8" />,
      badge: "Talent Development",
      rotatingTexts: ["Skills", "Talent", "Careers", "Opportunities", "Potential"]
    },
    {
      image: "/professional-development-workshop.png",
      title: "Programs are fully customized, systematic, measurable",
      subtitle:
        "24/7 digital coaching, mentoring, and collaboration with balanced mix of idealism and business discipline",
      icon: <Network className="h-8 w-8" />,
      badge: "Customized Programs",
      rotatingTexts: ["Results", "Impact", "Value", "Growth", "ROI"]
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
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Background Image with Futuristic Overlay */}
      <div className="absolute inset-0">
        <img
          src={slides[currentSlide].image || "/placeholder.svg"}
          alt="Hero background"
          className="w-full h-full object-cover opacity-10 transition-opacity duration-1000"
          key={slides[currentSlide].image}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-card/60" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in-hero">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-foreground/10 backdrop-blur-md border border-border text-foreground text-sm font-medium mb-8 mt-12 animate-fade-in-badge">
            <span className="w-2 h-2 bg-foreground/60 rounded-full mr-2 animate-pulse"></span>
            {slides[currentSlide].badge}
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6 animate-fade-in-heading">
            <span className="text-foreground">{slides[currentSlide].title}</span>
            <br />
            <span className="inline-flex items-center justify-center flex-wrap gap-2 mt-4 sm:mt-6 md:mt-8">
              <RotatingText
                texts={slides[currentSlide].rotatingTexts}
                mainClassName="px-2 sm:px-2 md:px-3 bg-foreground text-background overflow-hidden py-1 sm:py-1 md:py-2 justify-center rounded-lg shadow-lg"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-1 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-xl md:text-2xl text-foreground text-balance max-w-sm sm:max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4 sm:px-0 animate-fade-in-subheading font-light">
            {slides[currentSlide].subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 sm:mb-16 animate-fade-in-buttons">
            <Button
              size="lg"
              className="bg-foreground text-background rounded-full px-8 py-4 text-lg font-medium transition-all duration-300 hover:bg-accent hover:scale-105 hover:shadow-lg group cursor-pointer relative overflow-hidden"
            >
              Explore Our Services
              <ArrowRight />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-4 text-lg font-medium border-border hover:bg-accent transition-all duration-200 hover:scale-105 group bg-transparent cursor-pointer"
            >
              <Play />
              Free Consultation
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-foreground/10 backdrop-blur-md border border-border hover:bg-foreground/20 transition-all duration-300"
      >
        <ChevronLeft className="h-6 w-6 text-foreground" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-foreground/10 backdrop-blur-md border border-border hover:bg-foreground/20 transition-all duration-300"
      >
        <ChevronRight className="h-6 w-6 text-foreground" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-foreground scale-125"
                : "bg-foreground/50 hover:bg-foreground"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
