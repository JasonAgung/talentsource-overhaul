"use client"

import { motion } from "framer-motion"
import { Cog, Brain, Smartphone, Users, Globe, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    icon: Cog,
    title: "Work Process Automation (RPA)",
    description: "Streamlining business processes with Robotic Process Automation for maximum efficiency.",
    href: "/services/rpa",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning Solutions",
    description: "Leveraging data science to build intelligent solutions that drive business growth.",
    href: "/services/ai-ml",
  },
  {
    icon: Smartphone,
    title: "Mobile Application Development",
    description: "Designing and developing intuitive and powerful mobile apps for iOS and Android.",
    href: "/services/mobile-apps",
  },
  {
    icon: Users,
    title: "Talent Re- & Upskilling",
    description: "Future-proofing your workforce with customized digital skill development programs.",
    href: "/services/talent-upskilling",
  },
  {
    icon: Globe,
    title: "Strategic Digitalization",
    description: "Guiding corporate digital transformation initiatives from concept to implementation.",
    href: "/services/digitalization",
  },
  {
    icon: Users,
    title: "Education Support",
    description: "Partnering with educational institutions to integrate modern technology and curriculum.",
    href: "/education-support",
  },
]

// Simplified variant for the whole grid container
const gridContainerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export function ServicesGrid() {
  return (
    <section id="services" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
            Our Core Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We provide a suite of services designed to empower your organization's digital transformation and talent development journey.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="h-full p-8 rounded-2xl bg-card border overflow-hidden relative flex flex-col shadow-sm"
              whileHover={{ scale: 1.03, y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.05)" }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex-shrink-0 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </div>
              <div className="mt-6">
                <Link href={service.href} passHref>
                  <Button variant="link" className="p-0 text-primary hover:text-primary/80">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}