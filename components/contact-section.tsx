"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, ArrowRight } from "lucide-react"

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // A real application would handle form submission here
    console.log("Form submitted:", formData)
    // Reset form after submission
    setFormData({ name: "", email: "", organization: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-24">
      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
            Let's Build the Future Together
          </h2>
          <p className="text-lg text-muted-foreground">
            Have a project in mind or just want to learn more? We'd love to hear from you.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Card className="glass-effect border border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Get in Touch</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="e.g. Budi Santoso"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="e.g. budi.santoso@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="organization">Organization (Optional)</Label>
                  <Input
                    id="organization"
                    name="organization"
                    placeholder="e.g. PT Maju Mundur"
                    value={formData.organization}
                    onChange={handleChange}
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project, goals, or any questions you have..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-background/50"
                  />
                </div>
                
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-base py-6">
                    Send Message <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div className="text-center mt-12 text-muted-foreground" variants={itemVariants}>
          <p className="mb-2">You can also reach us directly:</p>
          <div className="flex items-center justify-center gap-6">
            <a href="mailto:contact@talentsource.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="h-4 w-4" />
              contact@talentsource.com
            </a>
            <a href="tel:+621234567890" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              +62 123 456 7890
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}