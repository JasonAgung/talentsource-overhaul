"use client"

import { Home, Users, Target, Clock, Scale } from 'lucide-react'
import { motion } from "framer-motion"

export function ValueProposition() {
  const propositions = [
    {
      icon: Home,
      title: "Deep Local Expertise",
      text: "Born, grow and live as Indonesian, we understand the anatomy and behavior of Indonesian companies more than any big global consulting companies.",
    },
    {
      icon: Users,
      title: "Complete Talent Ecosystem",
      text: "We know that skilled, knowledgeable, high-performing talent is in scarcity in Indonesia. We design and deliver a program that combines talent development, consulting service and hands-on projects.",
    },
    {
      icon: Target,
      title: "Customized & Measurable",
      text: "Our program is always fully customized to the client's need and situation. Systematic, with measurable objectives and work on the real issues of customer.",
    },
    {
      icon: Clock,
      title: "24/7 Digital Support",
      text: "We are an experienced and advanced coach and mentor team and attend digitally, virtually 7/24 program participants and work a lot in collaborative mode with the participants.",
    },
    {
      icon: Scale,
      title: "Idealism & Business Discipline",
      text: "At TS we created and hold up consistently the right mix of idealism and the discipline of a business entity, a high standard commercial company with a strong corporate citizenship.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="about" className="py-16 md:py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-background to-background dark:from-blue-950/10 dark:via-background dark:to-background" />
      <div className="absolute top-40 left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-semibold text-primary">Why Choose Us</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 md:mb-6 text-balance">
            Our Distinct Value Proposition
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We maintain strongly our distinct value proposition through local expertise, complete solutions, and unwavering commitment to client success
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {propositions.map((prop, index) => {
            const Icon = prop.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                {/* Card background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Card content */}
                <div className="relative bg-card/70 dark:bg-card/40 border border-primary/10 hover:border-primary/30 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {prop.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base text-pretty">
                    {prop.text}
                  </p>

                  {/* Decorative line */}
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full w-0 group-hover:w-full transition-all duration-500" />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
