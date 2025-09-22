import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ApproachSection() {
  const approaches = [
    {
      image: "/professional-handshake-partnership.jpg",
      title: "Strategic Partnerships",
      description: "Building lasting relationships that drive mutual success and sustainable growth.",
    },
    {
      image: "/modern-staircase-upward-progress.jpg",
      title: "Progressive Development",
      description: "Step-by-step advancement through structured learning and continuous improvement.",
    },
    {
      image: "/crystal-clear-water-reflection.jpg",
      title: "Transparent Process",
      description: "Clear communication and measurable outcomes throughout every engagement.",
    },
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            A Global Approach for Tomorrow's Success
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Our methodology combines proven strategies with innovative thinking to create sustainable solutions that
            adapt to an ever-changing world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {approaches.map((approach, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={approach.image || "/placeholder.svg"}
                  alt={approach.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">{approach.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">{approach.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-6 max-w-3xl mx-auto text-pretty">
            TalentSource serves as a catalyst for transformation in the educational sector. We propose sustainable
            solutions to organizations seeking to enhance their impact and achieve lasting success in their respective
            domains.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Discover Our Methodology
          </Button>
        </div>
      </div>
    </section>
  )
}
