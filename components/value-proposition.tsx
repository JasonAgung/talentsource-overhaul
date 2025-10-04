import { Home, Users, Target, Clock, Scale } from "lucide-react"

export function ValueProposition() {
  const propositions = [
    {
      icon: Home,
      text: "Born, grow and live as Indonesian, we understand the anatomy and behavior of Indonesian companies more than any big global consulting companies.",
    },
    {
      icon: Users,
      text: "We know that skilled, knowledgeable, high-performing talent is in scarcity in Indonesia. We design and deliver a program that combines talent development, consulting service and hands-on projects. This will ensure that our clients, by the end of our program, will have a team that is ready to push forward the digitalization agenda for the company.",
    },
    {
      icon: Target,
      text: "Our program is always fully customized to the client’s need and situation. Systematic, with measurable objectives and work on the real issues of customer.",
    },
    {
      icon: Clock,
      text: "We are an experienced and advanced coach and mentor team and attend digitally, virtually 7/24 program participants and work a lot in collaborative mode with the participants.",
    },
    {
      icon: Scale,
      text: "At TS we created and hold up consistently the right mix of idealism and the discipline of a business entity, a high standard commercial company with a strong corporate citizenship.",
    },
  ]

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Value Proposition</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We maintain strongly our distinct value proposition:
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-10">
          {propositions.map((prop, index) => {
            const Icon = prop.icon
            return (
              <div key={index} className="flex flex-col sm:flex-row items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center">
                  <Icon className="h-7 w-7 text-accent" />
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                  {prop.text}
                </p>
              </div>
            )
          })}
        </div>
      </div>
      </div>
    </section>
  )
}
