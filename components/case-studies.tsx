import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Cog, TrendingUp, Users, Database, Factory } from "lucide-react"

export function CaseStudies() {
  const caseStudies = [
    {
      icon: Building2,
      client: "BCA Automation Centre of Excellence (BCA ACE)",
      title: "End-to-end Automation Workflow Upgrades",
      description:
        "Designed milestones (2021, 2022, 2024) for large-scale automation ensuring BCA remains dominant and competitive.",
      tags: ["Automation", "RPA", "Banking"],
      results: "Large-scale automation implementation",
    },
    {
      icon: Cog,
      client: "Pegadaian Outlets",
      title: "Inventory Management System & Process Automation",
      description:
        "Designed & developed comprehensive system increasing efficiency, security, and customer experience with 14 major processes automated.",
      tags: ["Inventory Management", "RPA", "Digital Transformation"],
      results: "14 processes automated, improved efficiency",
    },
    {
      icon: TrendingUp,
      client: "Peruri Digital Business Development",
      title: "Digital Strategic Business Unit Launch",
      description:
        "Set up new team for digital products, coached on partnerships, business planning, and market access strategies.",
      tags: ["Business Development", "Digital Strategy", "Team Building"],
      results: "Launched Peruri Digital SBU",
    },
    {
      icon: Users,
      client: "Tower Bersama Group (TBG)",
      title: "Annual Executive Industry Review",
      description:
        "Presented comprehensive research on cellular tower industry covering competition landscape, opportunities, and future tech trends.",
      tags: ["Industry Analysis", "Strategic Planning", "Research"],
      results: "Strategic industry insights delivered",
    },
    {
      icon: Database,
      client: "Agit Business Analysis",
      title: "Business Portfolio Expansion",
      description:
        "Identified 3 new business portfolios and delivered comprehensive business analysis to guide strategic decisions.",
      tags: ["Business Analysis", "Portfolio Development", "Strategy"],
      results: "3 new business portfolios identified",
    },
    {
      icon: Factory,
      client: "INKA Multi Service",
      title: "Digital Factory Transformation",
      description:
        "Transformed factory processes to digital workflows, coached team on adapting new culture, and identified new growth products.",
      tags: ["Digital Transformation", "Process Optimization", "Culture Change"],
      results: "Complete digital workflow transformation",
    },
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Track Record & Case Studies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Proven success with major Indonesian companies across various industries, delivering measurable results and
            sustainable digital transformation.
          </p>
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
                    <div className="flex-1">
                      <p className="text-sm font-medium text-accent">{study.client}</p>
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight">{study.title}</CardTitle>
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
