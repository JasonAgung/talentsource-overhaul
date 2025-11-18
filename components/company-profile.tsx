import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { CheckCircle, Lightbulb, Target, Users } from 'lucide-react'

export default function CompanyProfilePage() {
  const countries = ["Afghanistan", "Indonesia", "Malaysia", "Singapore", "United States", "United Kingdom"]

  const values = [
    { icon: Target, title: "Mission-Driven", description: "Focused on transforming Indonesian organizations through digital innovation" },
    { icon: Users, title: "Collaborative", description: "Partnering with clients to achieve sustainable digital transformation" },
    { icon: Lightbulb, title: "Innovative", description: "Leveraging cutting-edge techniques and industry best practices" },
  ]

  return (
    <>
      {/* Section 1: Hero with image and intro */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="aspect-video overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/company-profile.jpg"
                  alt="Company event at Telkomsel"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                TalentSource is a truly Indonesian Consulting and Solution company that comprises experienced and highly knowledgeable partners with hands-on experience and the most recent techniques, ready to help companies/organizations in Indonesia in their digital transformation journey.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-foreground">Our Core Values</h2>
              <div className="space-y-4">
                {values.map((value, idx) => {
                  const Icon = value.icon
                  return (
                    <div key={idx} className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-primary/10 hover:border-primary/30 transition-colors duration-300">
                      <Icon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{value.title}</h3>
                        <p className="text-sm text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Company stats and highlights */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 rounded-3xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <Card className="text-center p-8 border-primary/10 bg-card/50 backdrop-blur">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <p className="text-muted-foreground">Years of Experience</p>
            </Card>
            <Card className="text-center p-8 border-primary/10 bg-card/50 backdrop-blur">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-muted-foreground">Corporate Clients</p>
            </Card>
            <Card className="text-center p-8 border-primary/10 bg-card/50 backdrop-blur">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Expertise areas */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Expertise</h2>
            <p className="text-lg text-muted-foreground">Comprehensive solutions across multiple domains</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["RPA & Process Automation", "Data Science & AI", "Digital Transformation", "Talent Development"].map((expertise, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Card className="p-6 text-center border-primary/10 hover:border-primary/30 transition-colors duration-300 bg-card/50 backdrop-blur h-full group">
                  <CheckCircle className="h-8 w-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <p className="font-semibold text-foreground">{expertise}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Download form */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-transparent via-primary/3 to-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-primary/20 bg-card/50 backdrop-blur p-8 md:p-10">
              <h2 className="text-2xl font-bold text-foreground mb-2">Get Our Company Profile</h2>
              <p className="text-muted-foreground mb-8">Fill out the form below to download our comprehensive company profile document.</p>
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="first-name" className="text-foreground font-medium">
                      First name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      type="text"
                      id="first-name"
                      placeholder="John"
                      className="bg-background/50 border-border text-foreground"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name" className="text-foreground font-medium">
                      Last name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      type="text"
                      id="last-name"
                      placeholder="Doe"
                      className="bg-background/50 border-border text-foreground"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="company" className="text-foreground font-medium">
                    Company/Organization <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    type="text"
                    id="company"
                    placeholder="Your company name"
                    className="bg-background/50 border-border text-foreground"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="work-email" className="text-foreground font-medium">
                    Work email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    type="email"
                    id="work-email"
                    placeholder="you@company.com"
                    className="bg-background/50 border-border text-foreground"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="country" className="text-foreground font-medium">
                    Select Country <span className="text-destructive">*</span>
                  </Label>
                  <Select>
                    <SelectTrigger className="w-full bg-background/50 border-border text-foreground">
                      <SelectValue placeholder="Select a country" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border text-foreground">
                      {countries.map((country) => (
                        <SelectItem key={country} value={country}>
                          {country}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="pt-4">
                  <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-accent text-white font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                    Download Profile
                  </Button>
                </div>
              </form>
            </Card>
          </motion.div>
        </div>
      </section>
    </>
  )
}
