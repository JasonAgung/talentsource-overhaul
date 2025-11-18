"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export function ClientsSection() {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  }

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-background to-background dark:from-blue-950/10 dark:via-background dark:to-background" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-semibold text-primary">Trusted Partners</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Trusted by Leading Organizations
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            We've partnered with major Indonesian companies across telecommunications, banking, manufacturing, and education sectors to drive digital transformation
          </p>
        </div>

        {/* Client logos grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {clients.map((client, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-white/50 dark:bg-card/30 border-primary/10 hover:border-primary/30 hover:bg-white dark:hover:bg-card/60 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 backdrop-blur-sm group">
                <CardContent className="p-6 flex items-center justify-center h-24">
                  <img
                    src={client.logo || "/placeholder.svg"}
                    alt={`${client.name} logo`}
                    className="max-w-full h-12 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-110"
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Case studies section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-foreground mb-2">Recent Success Stories</h3>
              <p className="text-muted-foreground mb-8">
                Driving measurable impact through innovation and strategic partnerships
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Advanced Fraud Detection",
                    description: "AI-powered system implementation reducing fraudulent transactions by 87%",
                    metric: "87%"
                  },
                  {
                    title: "Educational Analytics",
                    description: "Data-driven insights for student success and institutional improvement",
                    metric: "92%"
                  },
                  {
                    title: "Revenue Optimization",
                    description: "Analytics-driven strategy increasing retailer revenue by significant margins",
                    metric: "156%"
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-card/50 dark:bg-background/50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="text-3xl font-bold text-primary mb-2">{item.metric}</div>
                    <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
