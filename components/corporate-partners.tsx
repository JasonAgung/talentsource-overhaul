"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from 'lucide-react'

const partnershipCriteria = [
  "Can complement TS in order to achieve its vision statement",
  "Located in Indonesia, most preferably in Bandung",
  "A young and vibrant company or startup",
  "Believe in and are fully aligned with the TS mission statement",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export function CorporatePartners() {
  return (
    <motion.div 
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="space-y-8" variants={itemVariants}>
        <h2 className="text-3xl font-bold text-foreground">
          Our Partnership Criteria
        </h2>
        <ul className="space-y-5">
          {partnershipCriteria.map((criteria, index) => (
            <motion.li 
              key={index} 
              className="flex items-start gap-4"
              custom={index}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: (i) => ({
                  opacity: 1,
                  x: 0,
                  transition: { delay: i * 0.1, ease: 'easeOut' }
                })
              }}
            >
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <span className="text-lg text-muted-foreground">{criteria}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="bg-card/80 border-border/50">
          <CardContent className="p-8 text-center">
            <div className="flex justify-center mb-6">
              <Image
                src="/corporate-partners.png"
                alt="Corporate Partners"
                width={300}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="prose prose-invert prose-lg max-w-none mx-auto text-muted-foreground">
              <p>
                In December 2019, TS sealed a strategic long-term
                partnership agreement with a vibrant, high-performing digital
                service start-up in Bandung, strategically combining
                the complementing resources of the two companies.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
