"use client"

import { Button } from "@/components/ui/button"
import { Cog, Brain, Smartphone, Users, Globe, ChevronRight, ArrowUpRight } from 'lucide-react'
import { useState } from "react"

export function ServicesGrid() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const services = [
    {
      icon: Cog,
      title: "Work Process Streamlining & Automation (RPA)",
      description: "Indonesian expertise in Process Automation / RPA with comprehensive service packages",
      points: [
        "Free webinar RPA introduction",
        "Live coaching/ workshop on 'Make your very first robots'",
        "Proof of Concept (PoC) process automation trial case",
        "Consulting Service: 'Discovering the Right Strategy to start RPA'",
        "Process automation / RPA design and development for your organization",
        "Consulting service: 'The Invisible Reality Behind Process Automation'",
      ],
      hasBrochure: true,
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Brain,
      title: "Data Science, Machine Learning and AI Solutions",
      description:
        "Transform your data into strategic assets with advanced analytics and AI capabilities",
      points: [
        "Leverage your sleeping big data into strategic business assets",
        "Developing data analytics, machine learning and AI capabilities for your organization",
        "Help your corporation to become an insight-driven organization",
      ],
      color: "from-purple-500 to-blue-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Application Design & Development",
      description: "Comprehensive m-app services from creation to enhancement and optimization",
      points: [
        "Design and develop new m-app",
        "Review your current m-app, upgrade its features and capabilities",
        "Develop internal dashboard for the m-app operational monitoring",
        "Adding machine learning and AI capabilities to the m-app",
        "Redesign existing m-app, with better UI/UX and robust security",
      ],
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Users,
      title: "Talent Re- & Upskilling for Digital Challenges",
      description:
        "Modern learning strategies for talent development in the digital economy",
      points: [
        "Coaching and mentoring system to develop talents",
        "Help talents to engage and catch up the needs of digital work style",
        "TS provides remote coaching services to upskill companies' talents in area of process automation, data science, and work process streamlining",
      ],
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Globe,
      title: "Strategic & Domain-Specific Digitalization",
      description:
        "Near turn-key digitalization services for corporate digital transformation",
      points: [
        "Strategic domain: Corporate digital transformation initiative",
        "Specific focus: digital product and service development, digitalization and automation of internal processes, digitalization of customer-facing processes",
      ],
      color: "from-blue-600 to-blue-700"
    },
  ]

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-blue-50/30 dark:to-blue-950/10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-semibold text-primary">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            TS combines deep expertise in Indonesian business with cutting-edge technology to deliver integrated talent development, consulting, and hands-on solutions across all areas of digital transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon
            const isExpanded = expandedIndex === index

            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Card background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                />

                {/* Card content */}
                <div
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  className="relative bg-card dark:bg-card border border-primary/10 hover:border-primary/30 rounded-2xl p-8 transition-all duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-1 group/card h-full flex flex-col"
                >
                  {/* Icon container */}
                  <div className="mb-6 inline-flex">
                    <div className={`bg-gradient-to-br ${service.color} p-4 rounded-xl text-white shadow-lg group-hover/card:shadow-xl group-hover/card:scale-110 transition-all duration-300`}>
                      <Icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 text-balance group-hover/card:text-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Points - shown when expanded */}
                  {isExpanded && (
                    <div className="space-y-3 mb-6 animate-fade-in">
                      {service.points?.slice(0, 3).map((point, pointIndex) => (
                        <div key={pointIndex} className="flex items-start gap-3">
                          <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{point}</span>
                        </div>
                      ))}
                      {service.points && service.points.length > 3 && (
                        <p className="text-sm text-primary font-medium">+{service.points.length - 3} more benefits</p>
                      )}
                    </div>
                  )}

                  {/* Action button */}
                  <div className="flex items-center justify-between pt-4 border-t border-primary/10 group-hover/card:border-primary/20 transition-colors">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                      {isExpanded ? "Show Less" : "Learn More"}
                    </span>
                    <ArrowUpRight className={`w-4 h-4 text-primary group-hover/card:translate-x-1 group-hover/card:-translate-y-1 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Call to action section */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-12 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Get Started?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can drive your organization's digital transformation journey
          </p>
          <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-white rounded-full px-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}
