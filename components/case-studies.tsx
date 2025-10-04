import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Landmark, Shield, TowerControl, Database, Factory, Wifi } from "lucide-react"

export function CaseStudies() {
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

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Our Track Record
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
    </section>
  )
}
