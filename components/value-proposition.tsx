import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Award, TrendingUp } from "lucide-react"

export function ValueProposition() {
  const values = [
    {
      icon: Users,
      number: "01",
      title: "Expert Guidance",
      description:
        "Accompany organizations through their transformation journey with sustainable and durable practices.",
    },
    {
      icon: Target,
      number: "02",
      title: "Strategic Innovation",
      description:
        "Enhance innovation through strategic projects, positioning your organization as a leader in your field.",
    },
    {
      icon: Award,
      number: "03",
      title: "Excellence Standards",
      description: "Implement world-class standards and best practices to ensure consistent quality and performance.",
    },
    {
      icon: TrendingUp,
      number: "04",
      title: "Measurable Growth",
      description: "Drive sustainable growth through data-driven strategies and continuous improvement methodologies.",
    },
  ]

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Our Core Values</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We believe in empowering organizations and individuals through innovative solutions that drive sustainable
            growth and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <span className="text-4xl font-bold text-muted-foreground/30">{value.number}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">{value.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
