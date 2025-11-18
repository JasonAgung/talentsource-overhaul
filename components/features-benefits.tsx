"use client"

import { motion } from "framer-motion"
import { BarChart3, Zap, Users, TrendingUp, Award, Target } from 'lucide-react'
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: Zap,
    title: "Rapid Implementation",
    description: "Deploy talent solutions within weeks, not months. Our proven frameworks accelerate time-to-value.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: TrendingUp,
    title: "Measurable ROI",
    description: "Track improvements in employee performance, retention, and organizational productivity with real metrics.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Users,
    title: "Team Alignment",
    description: "Bring teams together with aligned goals, shared vision, and collaborative execution frameworks.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: BarChart3,
    title: "Data-Driven Insights",
    description: "Leverage analytics and assessments to understand skills gaps and create targeted development paths.",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Work with award-winning consultants who understand Indonesia's business landscape and digital transformation.",
    gradient: "from-indigo-500 to-violet-500"
  },
  {
    icon: Target,
    title: "Customized Solutions",
    description: "Every program is tailored to your organization's unique challenges, culture, and strategic objectives.",
    gradient: "from-cyan-500 to-blue-500"
  },
]

export function FeaturesBenefits() {
  return (
    <section id="features" className="relative py-20 lg:py-28 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Why Choose TalentSource?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We deliver transformative talent development solutions that drive measurable business impact and sustainable growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group relative h-full p-8 hover:shadow-xl transition-all duration-300 border-primary/10 hover:border-primary/30 overflow-hidden bg-card/50 backdrop-blur">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className={`absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br ${feature.gradient} opacity-10 blur-3xl`} />
                  </div>

                  <div className="relative z-10">
                    <div className={`inline-block p-3 rounded-lg bg-gradient-to-br ${feature.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
