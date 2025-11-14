"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const clients = [
  { name: "Bank BCA", logo: "/bca-bank-logo.jpg" },
  { name: "Telkomsel", logo: "/telkomsel-logo.png" },
  { name: "Telkom Indonesia", logo: "/telkom-indonesia-logo.jpg" },
  { name: "Pegadaian", logo: "/pegadaian-logo.jpg" },
  { name: "Tower Bersama", logo: "/tower-bersama-logo.jpg" },
  { name: "Peruri", logo: "/peruri-logo.jpg" },
  { name: "INKA", logo: "/inka-logo.jpg" },
  { name: "Astra Infra", logo: "/astra-infra-logo.jpg" },
  { name: "Nestle", logo: "/generic-bird-nest-logo.png" },
  { name: "Infomedia", logo: "/infomedia-logo.jpg" },
  { name: "Unpar", logo: "/unpar-university-logo.jpg" },
  { name: "Cibavision", logo: "/cibavision-logo.jpg" },
]

// Duplicate the array to create a seamless loop
const duplicatedClients = [...clients, ...clients];

const Marquee = ({ direction = "left" }: { direction?: "left" | "right" }) => {
  const marqueeVariants = {
    animate: {
      x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    },
  }

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="flex gap-16 py-4"
        variants={marqueeVariants}
        animate="animate"
      >
        {duplicatedClients.map((client, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0"
            whileHover={{ scale: 1.1, zIndex: 10 }}
          >
            <img
              src={client.logo}
              alt={`${client.name} logo`}
              className="h-12 max-w-[150px] object-contain grayscale transition-all duration-300 hover:grayscale-0"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export function ClientsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We've partnered with major Indonesian companies to drive digital transformation and talent development.
          </p>
        </motion.div>

        <div className="space-y-8">
          <Marquee direction="left" />
          <Marquee direction="right" />
        </div>

        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/case-studies" passHref>
            <Button size="lg" variant="outline" className="bg-transparent hover:bg-accent/10 hover:text-foreground rounded-full px-8 py-6 text-base">
              Explore Our Case Studies
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}