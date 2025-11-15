import { Button } from "@/components/ui/button"
import { Cog, Brain, Smartphone, Users, Globe, ChevronRight } from "lucide-react"

export function ServicesGrid() {
  const services = [
    {
      icon: Cog,
      title: "Work Process Streamlining & Automation (RPA)",
      description: "We are the Indonesian Process Automation / RPA hands-on expert with six packages of services:",
      points: [
        "Free webinar RPA introduction",
        "Live coaching/ workshop on 'Make your very first robots'",
        "Proof of Concept (PoC) process automation trial case",
        "Consulting Service: 'Discovering the Right Strategy to start RPA'",
        "Process automation / RPA design and development for your organization",
        "Consulting service: 'The Invisible Reality Behind Process Automation'",
      ],
      hasBrochure: true,
    },
    {
      icon: Brain,
      title: "Data Science, Machine Learning and AI Solutions",
      description:
        "Accelerate your organization initiative to engage Data analytics and Data science and our data scientist team is ready to support:",
      points: [
        "Leverage your sleeping big data into strategic business assets",
        "Developing data analytics, machine learning and AI capabilities for your organization",
        "Help your corporation to become an insight-driven organization",
      ],
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
    },
    {
      icon: Users,
      title: "Talent Re- & Upskilling for Digital Challenges",
      description:
        "We help companies to build a new Learning & Development strategy by moving away from traditional classroom training and adopting Talent Re and Upskilling strategy:",
      points: [
        "Coaching and mentoring system to develop talents",
        "Help talents to engage and catch up the needs of digital work style",
        "TS provides remote coaching services to upskill companies' talents in area of process automation, data science, and work process streamlining",
      ],
    },
    {
      icon: Globe,
      title: "Strategic & Domain-Specific Digitalization",
      description:
        "TS provides near turn-key service comprising both consulting and solution development to help Indonesian corporations benefit from the progress of digital technology and culture:",
      points: [
        "Strategic domain: Corporate digital transformation initiative",
        "Specific focus: digital product and service development, digitalization and automation of internal processes, digitalization of customer-facing processes",
      ],
    },
  ]

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">TS Services Menu</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            TS resources, the partners and the engineering team, comprehend the set of expertise needed for TS to
            perform its mission and deliver its services with high standard. These are the most needed services when it
            comes to corporate/ organization digitalization:
          </p>
        </div>

        <div className="space-y-20">
          {services.map((service, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
              <div className="bg-card p-8 rounded-xl flex flex-col items-center justify-center text-center h-full">
                <service.icon className="w-20 h-20 text-primary" strokeWidth={1.5} />
                <h3 className="mt-5 text-xl font-semibold text-foreground">{service.title}</h3>
              </div>

              <div className="md:col-span-2">
                <p className="text-xl font-semibold text-foreground mb-6">{service.description}</p>

                {service.points?.length ? (
                  <ul className="space-y-4">
                    {service.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start">
                        <ChevronRight className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {service.hasBrochure ? (
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Button>Download Brochure</Button>
                    <Button variant="outline">Learn more</Button>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}