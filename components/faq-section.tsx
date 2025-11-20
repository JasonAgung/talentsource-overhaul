"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: "What makes TalentSource different from other talent development firms?",
    answer: "We combine strategic consulting with hands-on implementation, digital-first delivery models, and deep expertise in Indonesia's business landscape. Our approach is customized, measurable, and focused on sustainable transformation."
  },
  {
    question: "How long does a typical talent development program take?",
    answer: "Programs typically range from 3-12 months depending on scope and organizational size. We structure engagements in phases with clear milestones, allowing for flexibility and optimization based on progress."
  },
  {
    question: "Can you work with organizations of any size?",
    answer: "Yes, we work with startups, SMEs, and large enterprises. Our solutions are scalable and can be customized to fit any organizational structure, culture, and budget."
  },
  {
    question: "What does your pricing model look like?",
    answer: "We offer flexible engagement models including fixed-scope projects, retainer-based partnerships, and performance-based arrangements. We'll discuss pricing during our initial consultation based on your specific needs."
  },
  {
    question: "How do you measure the success of your programs?",
    answer: "We establish clear KPIs at the beginning of each engagement and track progress through surveys, assessments, performance metrics, and business outcome analysis. Regular reporting ensures transparency and accountability."
  },
  {
    question: "Do you offer online or only in-person programs?",
    answer: "We offer both online and hybrid models. Our digital-first approach includes live sessions, self-paced learning, 24/7 coaching access, and interactive tools designed for maximum engagement and impact."
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="relative py-20 lg:py-28 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our services and approach.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="border-primary/10 bg-card/50 backdrop-blur overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 hover:bg-primary/5 transition-colors duration-300 text-left cursor-pointer"
                >
                  <h3 className="font-semibold text-foreground text-lg pr-4">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="h-5 w-5 text-primary" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto", transition: { duration: 0.3, ease: "easeOut" } }}
                      exit={{ opacity: 0, height: 0, transition: { duration: 0.3, ease: "easeIn" } }}
                      className="border-t border-primary/10"
                    >
                      <div className="p-6 pt-4 text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Still have questions? We'd love to hear from you.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center text-primary font-semibold hover:underline transition-all"
          >
            Get in touch with our team
            <span className="ml-2">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
