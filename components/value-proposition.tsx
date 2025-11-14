"use client";

import { Home, Users, Target, Clock, Scale } from "lucide-react";

const propositions = [
  {
    icon: Home,
    title: "Deep Local Understanding",
    description: "Born, grown, and living as Indonesians, we understand the anatomy and behavior of local companies better than any global competitor.",
  },
  {
    icon: Users,
    title: "Integrated Talent Development",
    description: "We combine talent development, consulting, and hands-on projects to ensure your team is ready to drive your company's digitalization agenda.",
  },
  {
    icon: Target,
    title: "Fully Customized Programs",
    description: "Our programs are always tailored to your needs, with systematic, measurable objectives that address real-world challenges.",
  },
  {
    icon: Clock,
    title: "24/7 Digital Mentoring",
    description: "Our experienced team provides continuous digital coaching and mentoring, working collaboratively with participants around the clock.",
  },
  {
    icon: Scale,
    title: "Balanced Idealism & Discipline",
    description: "We maintain the right mix of idealism and business discipline, operating as a high-standard commercial company with strong corporate citizenship.",
  },
];

export function ValueProposition() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
            Why TalentSource?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our distinct value proposition is the foundation of our client's success.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {propositions.map((prop, index) => {
            const Icon = prop.icon;
            return (
              <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{prop.title}</h3>
                  <p className="text-muted-foreground mt-1">{prop.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
