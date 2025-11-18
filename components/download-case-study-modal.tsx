"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"

interface DownloadModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (formData: FormData) => void
  caseStudyTitle: string
}

interface FormData {
  firstName: string
  lastName: string
  company: string
  email: string
  country: string
}

export function DownloadCaseStudyModal({ isOpen, onClose, onSubmit, caseStudyTitle }: DownloadModalProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    country: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const countries = [
    "Indonesia",
    "Malaysia",
    "Singapore",
    "Thailand",
    "Philippines",
    "Vietnam",
    "United States",
    "United Kingdom",
    "Australia",
    "Other"
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    onSubmit(formData)
    setIsSubmitting(false)
    
    // Reset form and close
    setFormData({
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      country: "",
    })
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4"
          >
            <div className="bg-card border border-primary/20 rounded-2xl shadow-2xl p-8 relative">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 hover:bg-primary/10 rounded-lg transition-colors duration-200"
              >
                <X className="h-5 w-5 text-muted-foreground hover:text-foreground" />
              </button>

              {/* Header */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">Fill the form to download the Case Study</h2>
                <p className="text-sm text-muted-foreground">{caseStudyTitle}</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* First Name */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your first name"
                    className="w-full px-4 py-2.5 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your last name"
                    className="w-full px-4 py-2.5 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Company/Organization *</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    placeholder="Enter your company name"
                    className="w-full px-4 py-2.5 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Work Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your work email"
                    className="w-full px-4 py-2.5 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
                  />
                </div>

                {/* Country */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Country *</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
                  >
                    <option value="">Select a country</option>
                    {countries.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-accent text-white rounded-lg py-2.5 font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Downloading..." : "Download Case Study"}
                  </Button>
                </div>

                {/* Required Note */}
                <p className="text-xs text-muted-foreground text-center pt-2">* All fields are required</p>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
