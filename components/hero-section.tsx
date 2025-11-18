"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play, Zap, Cpu, Network, ArrowRight } from 'lucide-react'
import RotatingText from "./RotatingText"

const HeroArrow = () => (
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
      title: "Transform Your Organization",
      subtitle: "Building skilled teams ready for Indonesia's digital future through customized learning & development",
      icon: <Zap className="h-8 w-8" />,
      badge: "Future Ready",
      rotatingTexts: ["Growth", "Innovation", "Efficiency", "Success", "Performance"]
    },
    {
      image: "/placeholder-bknhi.png",
      title: "Addressing Indonesia's Skilled Talent Gap",
      subtitle: "Integrated talent development, strategic consulting, and hands-on implementation for real-world impact",
      icon: <Cpu className="h-8 w-8" />,
      badge: "Talent Development",
      rotatingTexts: ["Skills", "Talent", "Careers", "Opportunities", "Potential"]
    },
    {
      image: "/professional-development-workshop.png",
      title: "Customized, Systematic, Measurable Programs",
      subtitle: "24/7 digital coaching combining idealism with business discipline and collaborative execution",
      icon: <Network className="h-8 w-8" />,
      badge: "Customized Solutions",
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
    <section className="relative h-screen flex items-center justify-center px-4 py-8 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-background to-blue-100 dark:from-blue-950/30 dark:via-background dark:to-blue-900/20" />
        <img
          src={slides[currentSlide].image || "/placeholder.svg"}
          alt="Hero background"
          className="w-full h-full object-cover opacity-5 transition-opacity duration-1000"
          key={slides[currentSlide].image}
        />
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in-hero">
        <div className="max-w-4xl">
          {/* Badge with enhanced styling */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 backdrop-blur-md border border-primary/20 text-primary text-sm font-semibold mb-8 mt-12 animate-fade-in-badge transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
            {slides[currentSlide].badge}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance mb-6 animate-fade-in-heading leading-tight text-foreground">
            {slides[currentSlide].title}
            <br />
            <span className="inline-flex items-center justify-center flex-wrap gap-2 mt-6 sm:mt-8 md:mt-10">
              <RotatingText
                texts={slides[currentSlide].rotatingTexts}
                mainClassName="px-3 sm:px-4 md:px-5 bg-gradient-to-r from-primary to-accent text-white overflow-hidden py-2 sm:py-2 md:py-3 justify-center rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-1 sm:pb-1 md:pb-2"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-balance max-w-2xl sm:max-w-3xl mx-auto mb-10 sm:mb-14 leading-relaxed px-4 sm:px-0 animate-fade-in-subheading font-light">
            {slides[currentSlide].subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 sm:mb-16 animate-fade-in-buttons">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent text-white rounded-full px-8 py-6 text-base font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer relative overflow-hidden border-0"
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-6 text-base font-semibold border-primary/30 hover:bg-primary/5 hover:border-primary/60 transition-all duration-300 hover:-translate-y-1 group bg-white dark:bg-background cursor-pointer"
            >
              <Play className="h-4 w-4" />
              Free Consultation
            </Button>
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/80 dark:bg-background/80 backdrop-blur-md border border-primary/20 hover:bg-white dark:hover:bg-background/95 hover:border-primary/40 transition-all duration-300 hover:scale-110 hover:shadow-lg group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/80 dark:bg-background/80 backdrop-blur-md border border-primary/20 hover:bg-white dark:hover:bg-background/95 hover:border-primary/40 transition-all duration-300 hover:scale-110 hover:shadow-lg group"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3 bg-white/50 dark:bg-background/50 px-4 py-3 rounded-full backdrop-blur-md border border-primary/10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "bg-primary w-8 h-3 shadow-lg"
                : "bg-primary/40 w-3 h-3 hover:bg-primary/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
