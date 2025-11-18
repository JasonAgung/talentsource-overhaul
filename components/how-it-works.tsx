"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { ArrowRight, Lightbulb, Rocket, CheckCircle, TrendingUp } from 'lucide-react'

const steps = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Discovery & Assessment",
    description: "We conduct a thorough assessment of your organization's current capabilities, challenges, and strategic objectives. Understanding your unique context is the foundation for success.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    number: "02",
    icon: Rocket,
    title: "Strategy & Design",
    description: "Based on our findings, we design a customized talent development strategy that aligns with your business goals. Every program is tailored to your organization's specific needs.",
    color: "from-purple-500 to-pink-500"
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "Implementation & Execution",
    description: "We execute the program with full support, ongoing coaching, and real-time adjustments. Our team ensures smooth implementation and maximum engagement.",
    color: "from-green-500 to-emerald-500"
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Measurement & Optimization",
    description: "We track results through comprehensive metrics and analytics. Regular reviews ensure continuous improvement and sustained business impact.",
    color: "from-orange-500 to-red-500"
  },
]

export function HowItWorks() {
  return (
    <section className="relative py-20 lg:py-28 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-primary/5 pointer-events-none" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Our Proven Process
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A structured approach designed to deliver measurable results and sustainable transformation.
          </p>
        </motion.div>

        <div className="space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
                  {/* Content */}
                  <div className="flex-1">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <span className="text-6xl font-bold text-primary/20">{step.number}</span>
                        <div>
                          <h3 className="text-2xl lg:text-3xl font-bold text-foreground">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Icon Card */}
                  <div className="flex-1 flex justify-center lg:justify-start">
                    <div className={`relative w-48 h-48 lg:w-56 lg:h-56`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-3xl opacity-10 blur-xl`} />
                      <Card className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${step.color} text-white border-0 shadow-xl`}>
                        <Icon className="h-24 w-24 lg:h-32 lg:w-32 opacity-90" />
                      </Card>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
                    className="flex justify-center my-8 lg:my-12"
                  >
                    <div className="lg:hidden">
                      <ArrowRight className="h-8 w-8 text-primary/40 rotate-90" />
                    </div>
                    <div className="hidden lg:block">
                      <ArrowRight className="h-8 w-8 text-primary/40" />
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
