import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Cog, Brain, Smartphone, Users, Globe, TrendingUp } from "lucide-react"

export function ServicesGrid() {
  const services = [
    {
      icon: Cog,
      title: "Work Process Streamlining & Automation (RPA)",
      description: "We are the Indonesian Process Automation / RPA hands-on expert with six packages of services:",
      points: [
        "Free webinar RPA introduction",
        "Live coaching/ workshop on ‘Make your very first robots’",
        "Proof of Concept (PoC) process automation trial case",
        "Consulting Service : ‘Discovering the Right Strategy to start RPA ‘",
        "Process automation / RPA design and development for your organization",
        "Consulting service : ‘The Invisible Reality Behind Process Automation’",
      ],
      image: "/placeholder-est5x.png",
    },
    {
      icon: Brain,
      title: "Data Science, Machine Learning & AI Solutions",
      description:
        "Accelerate your organization initiative to engage Data analytics and Data science and our data scientist team is ready to support:",
      points: [
        "Leverage your sleeping big data into strategic business assets",
        "Developing data analytics, machine learning and AI capabilities for your organization",
        "Help your corporation to become an insight driven organization",
      ],
      image: "/business-leadership-training-session.jpg",
    },
    {
      icon: Smartphone,
      title: "Mobile Application Design & Development",
      description: "We offer comprehensive mobile application services, from creation to enhancement:",
      points: [
        "Design and develop new m-app",
        "Review your current m-app, upgrade its features and capabilities",
        "Develop internal dashboard for the m-app operational monitoring",
        "Adding machine learning and AI capabilities to the m-app",
        "Redesign existing m-app, with better UI/UX and robust security",
      ],
      image: "/educational-curriculum-planning.jpg",
    },
    {
      icon: Users,
      title: "Talent Re- & Upskilling for Digital Challenges",
      description:
        "We help companies to build a new Learning & Development strategy by moving away from traditional classroom training and adopting Talent Re and Upskilling strategy:",
      points: [
        "Coaching and mentoring system to develop talents",
        "Help talents to engage and catch up the needs of digital work style",
        "TS provides remote coaching services to upskill companies’ talents in area of process automation, data science, and work process streamlining",
      ],
      image: "/professional-development-workshop.png",
    },
    {
      icon: Globe,
      title: "Strategic & Domain-Specific Digitalization",
      description:
        "TS provides near turn-key service comprises both consulting and solution development to help Indonesian corporations benefiting the progress of digital technology and culture:",
      points: [
        "Strategic domain: Corporate digital transformation initiative",
        "Specific focus: digital product and service development, digitalization and automation of internal processes, digitalization of customer facing processes",
      ],
      image: "/international-education-collaboration.jpg",
    }
  ]

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">TS Services Menu</h2>
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
                  <div className="text-muted-foreground mb-4 leading-relaxed text-pretty">
                    <p>{service.description}</p>
                    {service.points && (
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        {service.points.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <Button variant="ghost" className="p-0 h-auto text-accent hover:text-accent/80 mt-auto">
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
