import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Cog, Brain, Smartphone, Users, Globe, TrendingUp } from "lucide-react"

export function ServicesGrid() {
  const services = [
    {
      icon: Cog,
      title: "Work Process Streamlining & Automation (RPA)",
      description:
        "End-to-end diagnosis and automation workflow upgrades to increase efficiency and reduce manual processes.",
      image: "/placeholder-est5x.png",
    },
    {
      icon: Brain,
      title: "Data Science, Machine Learning & AI Solutions",
      description:
        "Advanced analytics and AI implementations to drive data-driven decision making and business intelligence.",
      image: "/business-leadership-training-session.jpg",
    },
    {
      icon: Smartphone,
      title: "Mobile Application Design & Development",
      description:
        "Custom mobile solutions designed to enhance customer experience and streamline business operations.",
      image: "/educational-curriculum-planning.jpg",
    },
    {
      icon: Users,
      title: "Talent Re- & Upskilling for Digital Challenges",
      description: "Comprehensive programs to prepare your workforce for digital transformation and future challenges.",
      image: "/professional-development-workshop.png",
    },
    {
      icon: Globe,
      title: "Strategic & Domain-Specific Digitalization",
      description:
        "Expert consultation services for digital transformation strategies tailored to your industry needs.",
      image: "/international-education-collaboration.jpg",
    },
    {
      icon: TrendingUp,
      title: "Business Development & Consulting",
      description: "Strategic business analysis, planning, and development services to identify growth opportunities.",
      image: "/innovation-lab-with-modern-technology.jpg",
    },
  ]

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">TS Services Menu</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Providing unique professional services to telco, cellular, and IT service companies in Indonesia with
            integrated talent development and consulting solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mr-3">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-pretty">{service.description}</p>
                  <Button variant="ghost" className="p-0 h-auto text-accent hover:text-accent/80">
                    Learn more →
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
