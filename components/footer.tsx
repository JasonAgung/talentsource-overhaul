"use client"
import type React from "react"
import type { ComponentProps, ReactNode } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon, Mail, Phone, MapPin } from 'lucide-react'
import Image from "next/image"

interface FooterLink {
  title: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
}

interface FooterSection {
  label: string
  links: FooterLink[]
}

const footerLinks: FooterSection[] = [
  {
    label: "Services",
    links: [
      { title: "Talent Development", href: "/services" },
      { title: "Executive Coaching", href: "/services" },
      { title: "Organizational Consulting", href: "/services" },
      { title: "Digital Skills Training", href: "/services" },
    ],
  },
  {
    label: "Company",
    links: [
      { title: "About Us", href: "/about-us/company-profile" },
      { title: "Standing Partners", href: "/about-us/standing-partners" },
      { title: "Case Studies", href: "/case-studies" },
      { title: "Blog & Resources", href: "/op-ed" },
    ],
  },
  {
    label: "Resources",
    links: [
      { title: "Free Webinars", href: "/webinar-live/free-webinar" },
      { title: "Live Consultation", href: "/webinar-live/live-stream-consultation" },
      { title: "Free Internship", href: "/free-internship" },
      { title: "Education Support", href: "/education-support" },
    ],
  },
  {
    label: "Follow Us",
    links: [
      { title: "LinkedIn", href: "https://www.linkedin.com/in/bdgtalentsource/", icon: LinkedinIcon },
      { title: "Instagram", href: "https://www.linkedin.com/in/bdgtalentsource/", icon: InstagramIcon },
      { title: "Facebook", href: "https://www.linkedin.com/in/bdgtalentsource/", icon: FacebookIcon },
      { title: "YouTube", href: "https://www.linkedin.com/in/bdgtalentsource/", icon: YoutubeIcon },
    ],
  },
]

export function Footer() {
  return (
    <footer className="relative w-full bg-background border-t border-primary/10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/2 to-accent/2 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        {/* Main footer content */}
        <div className="grid w-full gap-12 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand section */}
          <AnimatedContainer className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <img src="/ts-logo.png" alt="TalentSource Logo" className="h-10 w-auto" />
              <div>
                <p className="font-bold text-foreground">TalentSource</p>
                <p className="text-xs text-muted-foreground">Talent Development</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transforming Indonesian organizations through innovative talent development and digital solutions for sustainable growth.
            </p>
            <div className="flex gap-3 pt-4">
              <a href="tel:+6281770237849" className="p-2 bg-primary/10 hover:bg-primary/20 rounded-lg text-primary transition-colors duration-300 hover:scale-110">
                <Phone className="h-4 w-4" />
              </a>
              <a href="mailto:contact@bandungtalentsource.com" className="p-2 bg-primary/10 hover:bg-primary/20 rounded-lg text-primary transition-colors duration-300 hover:scale-110">
                <Mail className="h-4 w-4" />
              </a>
              <a href="https://share.google/Ug9tfNglWW3ZWokFz" className="p-2 bg-primary/10 hover:bg-primary/20 rounded-lg text-primary transition-colors duration-300 hover:scale-110">
                <MapPin className="h-4 w-4" />
              </a>
            </div>
          </AnimatedContainer>

          {/* Links sections */}
          {footerLinks.map((section, index) => (
            <AnimatedContainer key={section.label} delay={0.05 + index * 0.05}>
              <div>
                <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">{section.label}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-primary text-sm inline-flex items-center transition-all duration-300 hover:translate-x-1 group"
                      >
                        {link.icon && <link.icon className="mr-2 h-4 w-4" />}
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <AnimatedContainer className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} TalentSource. All rights reserved. | Innovating Talent Development in Indonesia
            </p>
          </AnimatedContainer>

          <AnimatedContainer className="flex items-center gap-6">
            <a href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              Privacy Policy
            </a>
            <span className="w-px h-4 bg-primary/20" />
            <a href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              Terms of Service
            </a>
          </AnimatedContainer>
        </div>
      </div>
    </footer>
  )
}

type ViewAnimationProps = {
  delay?: number
  className?: ComponentProps<typeof motion.div>["className"]
  children: ReactNode
}

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return children
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
