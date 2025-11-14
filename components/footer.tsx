"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Zap, ArrowRight } from "lucide-react"

const footerSections = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about-us/company-profile" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Contact", href: "/#contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Work Process Automation", href: "/services/rpa" },
      { name: "AI & ML Solutions", href: "/services/ai-ml" },
      { name: "Mobile App Development", href: "/services/mobile-apps" },
      { name: "Talent Upskilling", href: "/services/talent-upskilling" },
      { name: "Strategic Digitalization", href: "/services/digitalization" },
    ],
  },
  {
    title: "Community",
    links: [
      { name: "Free Webinar", href: "/webinar-live/free-webinar" },
      { name: "Live Consultation", href: "/webinar-live/live-stream-consultation" },
      { name: "Free Internship", href: "/free-internship" },
      { name: "Op-Ed", href: "/op-ed" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/legal/privacy" },
      { name: "Terms of Service", href: "/legal/terms" },
    ],
  },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export function Footer() {
  return (
    <footer className="bg-card/30 border-t border-border/50">
      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Newsletter Section */}
        <motion.div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12" variants={itemVariants}>
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-foreground">Stay Ahead of the Curve</h3>
            <p className="text-muted-foreground mt-2">
              Subscribe to our newsletter for the latest insights on digital transformation and talent development.
            </p>
          </div>
          <div className="lg:col-span-2 flex items-center">
            <form className="flex w-full max-w-md gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background/50 flex-grow"
              />
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button type="submit" size="icon" className="bg-primary text-primary-foreground h-10 w-10">
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </motion.div>
            </form>
          </div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Separator className="bg-border/50" />
        </motion.div>

        {/* Main Footer Content */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 my-12" variants={itemVariants}>
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
                <Zap className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">TalentSource</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering Indonesia's digital future through strategic talent development and innovative solutions.
            </p>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants}>
          <Separator className="bg-border/50" />
        </motion.div>

        {/* Bottom Section */}
        <motion.div className="flex flex-col md:flex-row justify-between items-center pt-8" variants={itemVariants}>
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} TalentSource. All rights reserved.
          </div>

          <div className="flex items-center space-x-2">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-accent/10 transition-colors"
                  whileHover={{ y: -2, scale: 1.1 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              )
            })}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}