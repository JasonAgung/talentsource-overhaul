"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowDownToLine } from 'lucide-react'

const countries = [
  "Afghanistan", "Indonesia", "Malaysia", "Singapore", "United States", "United Kingdom",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export default function CompanyProfilePage() {
  return (
    <div className="space-y-16 sm:space-y-24">
      {/* === Main Content Section === */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="lg:col-span-3 space-y-6" variants={itemVariants}>
          <div className="aspect-video overflow-hidden rounded-2xl border border-border/50 shadow-lg">
            <Image
              src="/company-profile.jpg"
              alt="Company event at Telkomsel"
              width={800}
              height={450}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="prose prose-invert prose-lg max-w-none text-muted-foreground">
            <p>
              TalentSource is a truly Indonesian Consulting and Solution company which
              comprises the Indonesian experienced and highly knowledgeable
              partners with hands-on experience and most recent techniques, ready to
              help companies/organizations in Indonesia in their digital
              transformation journey.
            </p>
          </div>
        </motion.div>

        <motion.div className="lg:col-span-2" variants={itemVariants}>
          <Card className="bg-card/80 border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Download Company Profile</CardTitle>
              <CardDescription>Get the complete overview of our services and capabilities.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input id="first-name" placeholder="Budi" className="bg-background/50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" placeholder="Santoso" className="bg-background/50" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company/Organization</Label>
                  <Input id="company" placeholder="PT Maju Mundur" className="bg-background/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="work-email">Work email</Label>
                  <Input id="work-email" type="email" placeholder="budi@example.com" className="bg-background/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Select>
                    <SelectTrigger id="country" className="bg-background/50">
                      <SelectValue placeholder="Select a country" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country} value={country.toLowerCase().replace(" ", "-")}>
                          {country}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="pt-2">
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <ArrowDownToLine className="mr-2 h-5 w-5" />
                    Download
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}
