// File: components/case-studies.tsx

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Landmark, Shield, TowerControl, Database, Factory, Wifi } from "lucide-react"

export default function CaseStudies() {
  // Section 1: Track Record (from "joan")
  const caseStudies = [
    {
      icon: Building2,
      client: "BCA Automation Centre of Excellence (BCA ACE)",
      description:
        "End-to-end Automation Diagnosis & Upgrade: Designed the BCA ACE in three major milestones (2021, 2022, and 2024) to support an aggressive process automation upscaling journey, ensuring BCA remains dominant and competitive.",
      tags: ["Automation", "RPA", "Banking"],
      results: "Multi-year automation roadmap",
    },
    {
      icon: Landmark,
      client: "Pegadaian Outlets",
      description:
        "Inventory Management System & Process Automation: Designed and developed a PoC for an Inventory Management System to create a more secure and efficient environment. Additionally, automated 14 major work processes in HC, Finance, and G&A.",
      tags: ["Inventory Management", "RPA", "Digital Transformation"],
      results: "14 processes automated & PoC delivered",
    },
    {
      icon: Shield,
      client: "Peruri Digital Business Development",
      description:
        "New Digital Business Development and Coaching: Setting up a new team, developing new digital products, and coaching on partnerships, business planning, and market access, culminating in the launch of the Peruri Digital SBU.",
      tags: ["Business Development", "Digital Strategy", "Team Building"],
      results: "Launched Peruri Digital SBU",
    },
    {
      icon: TowerControl,
      client: "Tower Bersama Group (TBG)",
      description:
        "Annual Executive Industry Review: Presented comprehensive research and projections on the cellular tower industry, covering the business and competition landscape, opportunities, and impactful technology trends.",
      tags: ["Industry Analysis", "Strategic Planning", "Research"],
      results: "Strategic industry insights delivered",
    },
    {
      icon: Database,
      client: "Agit Business Analysis",
      description:
        "Business Analysis and Consulting: Supported Agit in identifying new business portfolios (Network, Device, Data Center) by presenting detailed business analysis for each to guide their final strategic decisions.",
      tags: ["Business Analysis", "Portfolio Development", "Strategy"],
      results: "3 new business portfolios identified",
    },
    {
      icon: Factory,
      client: "INKA Multi Service",
      description:
        "Digital Factory & Business Process Transformation: Transformed factory processes to digital workflows, coached the core team on adapting to the new culture, and helped identify new products and services for future growth.",
      tags: ["Digital Transformation", "Process Optimization", "Culture Change"],
      results: "Complete digital workflow transformation",
    },
    {
      icon: Wifi,
      client: "Telkomsel",
      description:
        "Various Human Capital & Business Programs: Provided a wide range of consultancy and training services including HCM Roadmap, GPDP VP & GM Level Training, Executive Bizplan, and various Manager Trainings.",
      tags: ["HCM Roadmap", "Leadership Training", "Business Planning"],
      results: "Multiple successful training programs",
    },
  ]

  // Section 2: Downloadable Case Studies (from "main")
  const caseStudiesData = [
    {
      title: "Case Study: Fraud Detection System - Mobile & Internet Banking",
      content: [
        { type: "paragraph", text: "Menggunakan metode gabungan dari Rule Based dan Unsupervised Learning" },
        {
          type: "list",
          items: ["Unsupervised Learning", "Customer spending behavior", "Customer profiling analysis", "Geographical locations"],
        },
        { type: "paragraph", text: "Download study case to read more..." },
      ],
      downloadLink: "/path/to/fraud-detection-case-study.pdf",
    },
    {
      title: "Data analytics: Students' social economic grouping",
      content: [
        {
          type: "paragraph",
          text:
            "During covid19 pandemic, a school plan to allocate support to students that really need it and at the same time skip the physical on-site survey and interview.",
        },
        { type: "paragraph", text: "Avoid misallocation by analyzing parents/family data (school)." },
      ],
      downloadLink: "/path/to/student-grouping-case-study.pdf",
    },
    {
      title:
        "Data analytics: Finding the right strategy to increase fee-based income of cellular 'pulsa' retailer",
      content: [
        {
          type: "paragraph",
          text:
            "A bank which is also offering cellular minutes/data quota top-up retail intend to find an effective strategy and program which can increase the purchase volume of customers by analyzing the customer behavior and polite data (bank).",
        },
      ],
      downloadLink: "/path/to/pulsa-retailer-case-study.pdf",
    },
    {
      title: "Machine Learning : Insurance claim checking automation",
      content: [
        {
          type: "paragraph",
          text:
            "Claim checking is tedious manual task which can be automated using machine learning model to reduce checking manual process cost more than 50% and maintaining the total lost to very minimum level. (insurance company).",
        },
        { type: "paragraph", text: "Download study case to read more..." },
      ],
      downloadLink: "/path/to/insurance-claim-case-study.pdf",
    },
    {
      title: "Case Study Work Process Streamlining & Automation",
      content: [
        { type: "paragraph", text: "A study case of reviewing business processes, perform BPI/BPR and automate processes in leading financial industry..." },
        { type: "paragraph", text: "Download study case to read more..." },
      ],
      downloadLink: "/path/to/process-streamlining-case-study.pdf",
    },
    {
      title: "Application User-Friendliness and Smartness (Knowledge Management Function)",
      content: [
        { type: "paragraph", text: "This case is about internal essential application used by the call center agents and involves a knowledge management system." },
        { type: "paragraph", text: "Download study case to read more..." },
      ],
      downloadLink: "/path/to/knowledge-management-case-study.pdf",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section A — Our Track Record */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-balance">Our Track Record</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Highlights from multi-year programs and executive engagements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study, index) => {
            const Icon = study.icon
            return (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mr-3">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <CardTitle className="text-lg leading-tight">{study.client}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-pretty">{study.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="pt-3 border-t">
                    <p className="text-sm font-medium text-foreground">Result: {study.results}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Divider */}
        <div className="border-t mb-10" />

        {/* Section B — Downloadable Case Studies */}
        <div className="text-center mb-10 md:mb-14">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 text-balance">Downloadable Case Studies</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Read detailed write-ups and technical notes from recent projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudiesData.map((study, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-lg p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow"
            >
              <h4 className="text-xl font-bold text-gray-900 mb-4">{study.title}</h4>

              <div className="flex-grow text-gray-700 space-y-3 text-sm">
                {study.content.map((block: any, blockIndex: number) => {
                  if (block.type === "paragraph") {
                    return <p key={blockIndex}>{block.text}</p>
                  }
                  if (block.type === "list") {
                    return (
                      <ul key={blockIndex} className="list-disc list-inside space-y-1 pl-2">
                        {block.items?.map((item: string, itemIndex: number) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    )
                  }
                  return null
                })}
              </div>

              <div className="mt-6">
                <Link
                  href={study.downloadLink}
                  className="inline-block w-full text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-md transition-colors"
                >
                  Download Case Study
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}