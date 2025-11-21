import Image from "next/image"
import { Check, Target, Lightbulb, Zap } from 'lucide-react'
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

export function CorporatePartners() {
  const partnershipCriteria = [
    { icon: Target, title: "Strategic Alignment", text: "Can complement TS in order to achieve its vision statement" },
    { icon: Zap, title: "Local Presence", text: "Located in Indonesia, most preferably in Bandung" },
    { icon: Lightbulb, title: "Innovation-Focused", text: "Young and vibrant company or startup" },
    { icon: Check, title: "Mission Alignment", text: "Believe and fully aligned to TS mission statement" },
  ]

  const partners = [
    {
      name: "Strategic Partner (2019)",
      logo: "/corporate-partners.png", 
      description: "In December 2019, TS sealed a strategic long-term partnership agreement with a vibrant high-performing digital service start-up in Bandung, combining complementary resources of both companies."
    },
    {
      name: "PT Iotera Sinergi Digital",
      logo: "/Iotera-logo.png", 
      description: "A strategic partner focused on IoT integration and digital synergy, strengthening our technological ecosystem and service capabilities."
    }
  ]

  return (
    <>
      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Partnership Criteria</h2>
              <p className="text-lg text-muted-foreground">
                TS has standing partnership agreements with companies that meet our strategic criteria for long-term collaboration and mutual growth.
              </p>
              <div className="space-y-4">
                {partnershipCriteria.map((criteria, index) => {
                  const Icon = criteria.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-primary/10 hover:border-primary/30 transition-colors duration-300"
                    >
                      <Icon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{criteria.title}</h3>
                        <p className="text-sm text-muted-foreground">{criteria.text}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            <div className="space-y-6">
              <motion.h3 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="text-2xl font-bold text-foreground mb-4"
              >
                Our Strategic Partners
              </motion.h3>

              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                  className="relative"
                >
                  <Card className="p-8 text-center border-primary/20 bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur hover:shadow-lg transition-all duration-300">
                    <div className="flex justify-center mb-6 h-24 items-center">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={300}
                        height={100}
                        className="object-contain max-w-full max-h-full"
                      />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{partner.name}</h4>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {partner.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 rounded-3xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Partnership Benefits</h2>
            <p className="text-lg text-muted-foreground">What we offer our corporate partners</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Shared Expertise", description: "Access to our team's 15+ years of combined experience in digital transformation" },
              { title: "Market Access", description: "Expand your market reach through our established network and client relationships" },
              { title: "Innovation", description: "Collaborate on cutting-edge solutions that drive industry innovation" },
              { title: "Resource Sharing", description: "Leverage complementary resources for mutual growth and efficiency" },
              { title: "Knowledge Exchange", description: "Continuous learning and skill development through partnership" },
              { title: "Long-term Growth", description: "Build sustainable business relationships with clear strategic alignment" },
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="p-6 border-primary/10 hover:border-primary/30 transition-colors duration-300 bg-card/50 backdrop-blur h-full">
                  <h3 className="font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Card className="p-8 md:p-12 border-primary/20 bg-gradient-to-b from-primary/10 to-accent/10 backdrop-blur">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Ready to Partner With Us?</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We're always looking for innovative companies that share our vision for digital transformation in Indonesia. Let's discuss how we can grow together.
              </p>
              <a href="/contact" className="inline-block bg-gradient-to-r from-primary to-accent text-white font-semibold px-8 py-3 rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                Get in Touch
              </a>
            </Card>
          </motion.div>
        </div>
      </section>
    </>
  )
}