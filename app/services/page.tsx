"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Zap, BarChart3, Smartphone, Users, Lightbulb, Download } from 'lucide-react'
import Link from "next/link"

const rpaServices = [
  { title: "Free Webinar: RPA Introduction", icon: "📹" },
  { title: "Live Coaching/Workshop: Make Your First Robots", icon: "🎯" },
  { title: "Proof of Concept (PoC) – Trial Case", icon: "✨" },
  { title: "Consulting: Discovering the Right Strategy to Start RPA", icon: "🎓" },
  { title: "RPA Design & Development for Your Organization", icon: "⚙️" },
  { title: "Consulting: The Invisible Reality Behind Process Automation", icon: "🔍" },
]

const mainServices = [
  {
    id: 1,
    title: "Work Process Streamlining & Automation (RPA)",
    description: "Indonesia's hands-on experts in Process Automation / RPA",
    icon: Zap,
    color: "from-blue-500 to-cyan-500",
    details: "We are Indonesia's hands-on experts in Process Automation / RPA, offering six service packages to streamline and automate your business processes.",
    highlights: rpaServices,
    buttonText: "Download Brochure"
  },
  {
    id: 2,
    title: "Data Science, Machine Learning & AI Solutions",
    description: "Transform big data into strategic assets",
    icon: BarChart3,
    color: "from-purple-500 to-pink-500",
    details: "Our data science team supports organizations to transform big data into strategic assets, build analytics, machine learning, and AI capabilities, and become an insight-driven organization.",
    highlights: [
      "Transform big data into strategic assets",
      "Build analytics, machine learning, and AI capabilities",
      "Become an insight-driven organization",
      "Advanced predictive modeling",
      "Real-time data processing and insights"
    ]
  },
  {
    id: 3,
    title: "Mobile Application Design & Development",
    description: "Modern mobile solutions for your business",
    icon: Smartphone,
    color: "from-green-500 to-emerald-500",
    details: "Design and develop new mobile apps, review and upgrade existing apps, create internal dashboards, add ML/AI capabilities, and redesign existing apps with improved UI/UX and stronger security.",
    highlights: [
      "Design and develop new mobile apps",
      "Review and upgrade existing applications",
      "Create internal dashboards for operational monitoring",
      "Add ML/AI capabilities to existing apps",
      "Redesign with improved UI/UX and security"
    ]
  },
  {
    id: 4,
    title: "Talent Re- and Upskilling – Meeting Digital Challenges",
    description: "Develop your team for the digital era",
    icon: Users,
    color: "from-orange-500 to-red-500",
    details: "We help companies adopt modern Talent Re-/Upskilling strategies with coaching, mentoring systems, helping talent adapt to digital work styles, and remote coaching for specialized areas.",
    highlights: [
      "Coaching and mentoring systems",
      "Helping talent adapt to digital work styles",
      "Remote coaching for RPA, data science, and process streamlining",
      "Digital transformation readiness programs",
      "Continuous learning and skill development"
    ]
  },
  {
    id: 5,
    title: "Strategic & Domain-Specific Digitalization Consultation",
    description: "Near turnkey consulting & development services",
    icon: Lightbulb,
    color: "from-indigo-500 to-violet-500",
    details: "Near turnkey consulting + development services for corporate digital transformation initiatives, digital product development, internal process digitalization, and customer-facing process digitalization.",
    highlights: [
      "Corporate digital transformation initiatives",
      "Digital product development",
      "Internal process digitalization/automation",
      "Customer-facing process digitalization",
      "Strategy to implementation support"
    ]
  }
]

const processSteps = [
  {
    step: "Assessment",
    description: "Comprehensive evaluation of your current processes and digital maturity",
    icon: "📊"
  },
  {
    step: "Strategy Development",
    description: "Create tailored solutions aligned with your business goals",
    icon: "📋"
  },
  {
    step: "Implementation",
    description: "Execute with full support, training, and change management",
    icon: "🚀"
  },
  {
    step: "Optimization & Support",
    description: "Continuous monitoring and improvement for sustained success",
    icon: "📈"
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-transparent">
      <main className="relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-28 px-4">
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 backdrop-blur-md border border-primary/20 text-primary text-sm font-semibold mb-8">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
                Our Solutions
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
                Transformative Solutions for Your Digital Future
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                TS resources, the partners, and the engineering team understand the expertise needed to deliver high-standard digital transformation services. These are the most essential solutions for corporate and organizational digitalization.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-accent text-white rounded-full px-8 py-6 text-base font-semibold hover:shadow-lg hover:-translate-y-1"
                  asChild
                >
                  <Link href="/webinar-live/live-stream-consultation">Schedule a Consultation</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 py-6 text-base font-semibold"
                  asChild
                >
                  <a href="#core-services">Learn More</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Services Section */}
        <section id="core-services" className="relative py-20 lg:py-28 px-4">
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Core Services</h2>
              <p className="text-lg text-muted-foreground">Essential solutions for corporate and organizational digitalization</p>
            </motion.div>

            <div className="space-y-12">
              {mainServices.map((service, index) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-primary/10 bg-card/50 backdrop-blur">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 lg:p-10">
                        {/* Left Content */}
                        <div className="lg:col-span-2">
                          <div className="flex items-start gap-4 mb-4">
                            <div className={`p-3 rounded-lg bg-gradient-to-br ${service.color} text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                              <Icon className="h-6 w-6" />
                            </div>
                            <div>
                              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-1">{service.title}</h3>
                              <p className="text-primary font-semibold">{service.description}</p>
                            </div>
                          </div>

                          <p className="text-muted-foreground mb-6 leading-relaxed">{service.details}</p>

                          <div className="space-y-3 mb-8">
                            <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide">Key Offerings:</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {service.highlights.map((highlight, i) => (
                                <div key={i} className="flex items-start gap-2">
                                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                  <span className="text-sm text-muted-foreground">{typeof highlight === 'object' ? highlight.title : highlight}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {service.buttonText && (
                            <Button className="bg-gradient-to-r from-primary to-accent text-white rounded-lg px-6 font-semibold gap-2">
                              <Download className="h-4 w-4" />
                              {service.buttonText}
                            </Button>
                          )}
                        </div>

                        {/* Right Visual */}
                        <div className="hidden lg:flex items-center justify-center">
                          <div className={`w-full h-64 rounded-lg bg-gradient-to-br ${service.color} opacity-60 group-hover:opacity-80 transition-all duration-300 flex items-center justify-center text-4xl`}>
                            {service.id === 1 && "⚙️"}
                            {service.id === 2 && "📊"}
                            {service.id === 3 && "📱"}
                            {service.id === 4 && "👥"}
                            {service.id === 5 && "💡"}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="relative py-20 lg:py-28 px-4 bg-gradient-to-b from-transparent via-primary/3 to-transparent">
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Implementation Process</h2>
              <p className="text-lg text-muted-foreground">A proven methodology that ensures successful delivery and measurable results</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <Card className="p-6 h-full text-center border-primary/10 bg-card/50 backdrop-blur">
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <div className="text-4xl">{item.icon}</div>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">{item.step}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </Card>                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/3 -right-3 w-6 h-1 bg-gradient-to-r from-primary to-accent" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 lg:py-28 px-4">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Ready to Transform Your Organization?
              </h2>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                Let's discuss how our comprehensive digital solutions can drive sustainable growth and business impact for your organization.
              </p>

              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent text-white rounded-full px-10 py-6 text-base font-semibold hover:shadow-lg hover:-translate-y-1"
                asChild
              >
                <Link href="/contact">Get Started Today</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}
