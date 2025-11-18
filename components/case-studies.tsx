"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Download, ArrowRight } from 'lucide-react'
import { DownloadCaseStudyModal } from "./download-case-study-modal"
import { motion } from "framer-motion"

const caseStudiesData = [
  {
    title: "Fraud Detection System - Mobile & Internet Banking",
    excerpt: "Menggunakan metode gabungan dari Rule Based dan Unsupervised Learning dengan customer profiling analysis dan geographical locations",
    methods: ["Unsupervised Learning", "Customer spending behavior", "Customer profiling analysis", "Geographical locations"],
    category: "Machine Learning",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Data Analytics: Students' Social Economic Grouping",
    excerpt: "During covid19 pandemic, a school planned to allocate support to students that really need it and at the same time skip physical on-site survey and interview.",
    methods: ["Family data analysis", "Economic grouping", "Allocation strategy", "Social profiling"],
    category: "Data Analytics",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Data Analytics: Cellular Pulsa Retailer Strategy",
    excerpt: "A bank offering cellular minutes/data quota top-up retail analyzed customer behavior to increase purchase volume and revenue.",
    methods: ["Customer behavior analysis", "Revenue optimization", "Purchase pattern analysis", "Strategic planning"],
    category: "Data Analytics",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Machine Learning: Insurance Claim Checking Automation",
    excerpt: "Automated claim checking using machine learning to reduce manual process cost by more than 50% while maintaining minimal loss levels.",
    methods: ["ML automation", "Cost reduction", "Quality assurance", "Loss minimization"],
    category: "Automation",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Work Process Streamlining & Automation (RPA)",
    excerpt: "A comprehensive study case of reviewing business processes, performing BPI/BPR and automating processes in leading financial industry.",
    methods: ["Process review", "BPI/BPR", "RPA implementation", "Financial industry"],
    category: "RPA",
    color: "from-indigo-500 to-violet-500",
  },
  {
    title: "Application User-Friendliness and Knowledge Management",
    excerpt: "Internal essential application redesign for call center agents with integrated knowledge management system for improved efficiency.",
    methods: ["UX improvement", "Knowledge management", "Agent efficiency", "System integration"],
    category: "Application Development",
    color: "from-cyan-500 to-blue-500",
  },
]

export default function CaseStudies() {
  const [selectedStudy, setSelectedStudy] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleDownload = (title: string) => {
    setSelectedStudy(title)
    setIsModalOpen(true)
  }

  const handleModalSubmit = (formData: any) => {
    // Here you would typically send the form data to your backend
    console.log("Download form submitted:", formData, "for case study:", selectedStudy)
    // Trigger actual download after form submission
  }

  return (
    <>
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {caseStudiesData.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group h-full p-6 hover:shadow-xl transition-all duration-300 border-primary/10 hover:border-primary/30 bg-card/50 backdrop-blur overflow-hidden relative">
                  {/* Gradient Background */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className={`absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br ${study.color} opacity-5 blur-3xl`} />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Category Tag */}
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-gradient-to-r ${study.color} text-white opacity-90`}>
                      {study.category}
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{study.title}</h3>
                    <p className="text-muted-foreground mb-5 text-sm leading-relaxed">{study.excerpt}</p>

                    {/* Methods */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.methods.slice(0, 3).map((method, i) => (
                        <span key={i} className="text-xs bg-primary/10 text-primary px-2.5 py-1.5 rounded-full font-medium">
                          {method}
                        </span>
                      ))}
                      {study.methods.length > 3 && (
                        <span className="text-xs bg-muted text-muted-foreground px-2.5 py-1.5 rounded-full font-medium">
                          +{study.methods.length - 3} more
                        </span>
                      )}
                    </div>

                    <Button
                      onClick={() => handleDownload(study.title)}
                      className="w-full bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold gap-2 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <Download className="h-4 w-4" />
                      Download Case Study
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <DownloadCaseStudyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleModalSubmit}
        caseStudyTitle={selectedStudy || ""}
      />
    </>
  )
}
