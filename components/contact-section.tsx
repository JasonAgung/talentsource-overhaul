"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, Phone, Mail, MapPin, Send } from 'lucide-react'
import { motion } from "framer-motion"

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ firstName: "", lastName: "", email: "", organization: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "Live Chat Support",
      description: "Available 24/7 for immediate assistance",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Phone,
      title: "Phone Consultation",
      description: "Schedule a call with our experts",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "contact@talentsource.com",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: MapPin,
      title: "Global Presence",
      description: "Serving clients worldwide",
      color: "from-purple-500 to-blue-500"
    },
  ]

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-blue-50/30 dark:to-blue-950/10" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-semibold text-primary">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Let's Discuss Your Transformation Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ready to elevate your organization? Our team is here to understand your challenges and craft tailored solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Methods */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Get in Touch</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className={`relative bg-card/50 dark:bg-card/50 border border-primary/10 hover:border-primary/30 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full`}>
                      {/* Icon container */}
                      <div className={`bg-gradient-to-br ${method.color} p-3 rounded-lg text-white w-fit mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <Icon className="h-5 w-5" strokeWidth={2} />
                      </div>

                      {/* Content */}
                      <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {method.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {method.description}
                      </p>

                      {/* Decorative line */}
                      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent w-0 group-hover:w-full transition-all duration-500 rounded-b-lg" />
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 dark:bg-card/50 border-primary/10 backdrop-blur-sm shadow-xl">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl text-foreground">Start Your Journey</CardTitle>
                  <p className="text-sm text-muted-foreground mt-2">Tell us about your organization and goals</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">First Name</label>
                        <Input
                          name="firstName"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="bg-background border-primary/20 text-foreground placeholder:text-muted-foreground focus-ring-blue transition-colors duration-300"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Last Name</label>
                        <Input
                          name="lastName"
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="bg-background border-primary/20 text-foreground placeholder:text-muted-foreground focus-ring-blue transition-colors duration-300"
                        />
                      </div>
                    </div>

                    {/* Email field */}
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Email Address</label>
                      <Input
                        name="email"
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-background border-primary/20 text-foreground placeholder:text-muted-foreground focus-ring-blue transition-colors duration-300"
                      />
                    </div>

                    {/* Organization field */}
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Organization</label>
                      <Input
                        name="organization"
                        placeholder="Your Company"
                        value={formData.organization}
                        onChange={handleChange}
                        className="bg-background border-primary/20 text-foreground placeholder:text-muted-foreground focus-ring-blue transition-colors duration-300"
                      />
                    </div>

                    {/* Message field */}
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                      <Textarea
                        name="message"
                        placeholder="Tell us about your project and goals..."
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="bg-background border-primary/20 text-foreground placeholder:text-muted-foreground focus-ring-blue transition-colors duration-300 resize-none"
                      />
                    </div>

                    {/* Submit button */}
                    <Button
                      type="submit"
                      disabled={submitted}
                      size="lg"
                      className="w-full bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 disabled:opacity-75"
                    >
                      {submitted ? (
                        <>
                          <span className="inline-block animate-spin mr-2">✓</span>
                          Message Sent!
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
