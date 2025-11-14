"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { ArrowDownToLine } from 'lucide-react'

const caseStudiesData = [
    {
      title: "Fraud Detection System - Mobile & Internet Banking",
      description: "Utilizing a hybrid method of Rule-Based and Unsupervised Learning.",
      tags: ["AI/ML", "Banking", "Security"],
      downloadLink: "/path/to/fraud-detection-case-study.pdf"
    },
    {
      title: "Data Analytics: Students' Social Economic Grouping",
      description: "Avoiding misallocation of student aid by analyzing parental/family data without physical surveys during the pandemic.",
      tags: ["Data Analytics", "Education"],
      downloadLink: "/path/to/student-grouping-case-study.pdf"
    },
    {
      title: "Data Analytics: Strategy for Fee-Based Income of Cellular Retailers",
      description: "Analyzing customer behavior to develop effective strategies for increasing purchase volume.",
      tags: ["Data Analytics", "Retail", "Banking"],
      downloadLink: "/path/to/pulsa-retailer-case-study.pdf"
    },
    {
      title: "Machine Learning: Insurance Claim Checking Automation",
      description: "Automating the tedious manual task of claim checking to reduce costs by over 50% while maintaining minimal loss.",
      tags: ["AI/ML", "Insurance", "Automation"],
      downloadLink: "/path/to/insurance-claim-case-study.pdf"
    },
    {
      title: "Work Process Streamlining & Automation",
      description: "A case study on reviewing business processes, performing BPI/BPR, and automating processes in a leading financial institution.",
      tags: ["RPA", "Finance", "BPR"],
      downloadLink: "/path/to/process-streamlining-case-study.pdf"
    },
    {
      title: "Application User-Friendliness and Smartness",
      description: "Improving a call center's essential internal application by integrating a smart knowledge management system.",
      tags: ["UX/UI", "Knowledge Management"],
      downloadLink: "/path/to/knowledge-management-case-study.pdf"
    },
];

const gridContainerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
}

export default function CaseStudies() {
  return (
    <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={gridContainerVariants}
        initial="hidden"
        // The "animate" prop is changed to "whileInView" to trigger animation on scroll
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
    >
      {caseStudiesData.map((study, index) => (
        <motion.div 
            key={index}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
        >
            <Card className="h-full flex flex-col bg-card border shadow-sm hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                    <CardTitle className="text-xl font-bold text-foreground">{study.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 pt-2">
                        {study.tags.map(tag => (
                            <div key={tag} className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-primary/10 text-primary rounded-full">
                                {tag}
                            </div>
                        ))}
                    </div>
                </CardHeader>
                <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{study.description}</p>
                </CardContent>
                <CardFooter>
                    <Button asChild size="sm" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                        <Link href={study.downloadLink}>
                            <ArrowDownToLine className="mr-2 h-4 w-4" />
                            Download
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}