"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { PageWrapper } from "@/components/page-wrapper"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Briefcase, BarChart, Code, Cpu, Rocket, Users, Award, Lightbulb, Network, CheckCircle } from 'lucide-react'

const studyStatusOptions = ["Mahasiswa semester 3 atau 4", "Mahasiswa tahun terakhir dg beban kuliah minimal", "Sedang mengerjakan Tugas Akhir", "Menunggu sidang akhir dan/ atau wisuda", "Sudah mulai bekerja"];
const futurePlanOptions = ["Wirausaha / entrepreneur", "Bekerja lepas / free lancer", "Menjadi karyawan perusahaan besar", "Mengelola / melanjutkan bisnis ortu/ keluarga", "Meneruskan studi", "Menjadi konsultan"];
const internshipFields = [
  { name: "Human Resource Management", icon: Users },
  { name: "Marketing and Commerce", icon: BarChart },
  { name: "Data Science / Data Analytics", icon: Cpu },
  { name: "Work Process automation", icon: Rocket },
  { name: "Build and grow start-up business", icon: Briefcase },
  { name: "Software development lifecycle", icon: Code },
];
const expectations = ["Mendapat pengalaman kerja nyata", "Mendapatkan ilmu dan pengetahuan yang tidak diberikan di pendidikan formal", "Memahami bagaimana bisnis dijalankan", "Melatih kemandirian dan kesiapan mandiri", "Mendapat kemungkinan untuk segera bisa bekerja"];
const cityOptions = ["Bandung", "Jakarta", "Botabek", "Masih belum menentukan pilihan"];
const teamOptions = ["Sendiri", "Berdua dengan teman kuliah", "Bertiga dengan teman kuliah"];

const benefits = [
  {
    icon: Award,
    title: "Real-World Projects",
    description: "Work on actual digital projects with clear targets and measurable outcomes",
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "Learn from experienced mentors with proven industry track records",
  },
  {
    icon: Lightbulb,
    title: "Skill Development",
    description: "Build professional competencies across various digital domains",
  },
  {
    icon: Network,
    title: "Career Opportunities",
    description: "Potential to join TalentSource full-time if you excel in the program",
  },
];

export default function InternshipPage() {
  return (
    <PageWrapper>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 mt-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 backdrop-blur-md border border-primary/20 text-primary text-sm font-semibold mb-8 animate-fade-in-badge transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
            Career Launcher
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-4">
            Free Internship Program
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            An ideal on-boarding program for students and young professionals before entering the real world of work and career.
          </p>
        </div>

        {/* Overview */}
        <motion.article
          className="mb-16 p-8 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            TalentSource opens internship and on-the-job experience programs for students and young professionals. Participants will be assigned real projects with real targets, completed digitally with guidance from experienced mentors. This unique on-boarding experience provides practical skills and confidence before entering professional careers.
          </p>
        </motion.article>

        {/* Benefits */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Program Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="text-center bg-card/50 border-border/50 hover:border-primary/30 transition-colors duration-300 backdrop-blur">
                <CardContent className="p-6 flex flex-col items-center">
                  <benefit.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Internship Fields */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Internship Fields</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {internshipFields.map((field) => (
              <Card key={field.name} className="bg-card/50 border-border/50 hover:border-primary/30 transition-colors duration-300 backdrop-blur group">
                <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                  <field.icon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <p className="font-semibold text-foreground">{field.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Application Form */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-card/50 border-border/50 backdrop-blur">
            <CardHeader className="text-center border-b border-border/50">
              <CardTitle className="text-3xl font-bold text-foreground">Application Form</CardTitle>
              <CardDescription className="text-base max-w-2xl mx-auto">
                Apply now to join our internship program and kickstart your career journey!
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form className="space-y-8 mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="name">Your Name <span className="text-destructive">*</span></Label>
                        <Input id="name" placeholder="Full name" required className="bg-background/50" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="whatsapp">WhatsApp Contact <span className="text-destructive">*</span></Label>
                        <Input id="whatsapp" placeholder="+62812XXXXXXXX" required className="bg-background/50" />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="institution">Current School/Workplace <span className="text-destructive">*</span></Label>
                    <Input id="institution" placeholder="Name of institution" required className="bg-background/50" />
                </div>

                {[
                    { label: "Your current study status", options: studyStatusOptions, id: "study-status", type: "radio" },
                    { label: "Career plans for near future", options: futurePlanOptions, id: "future-plan", type: "radio", hasOther: true },
                    { label: "Choose Your Internship Field (select one)", options: internshipFields.map(f => f.name), id: "internship-field", type: "radio" },
                    { label: "Program expectations (select one or more)", options: expectations, id: "expectations", type: "checkbox" },
                    { label: "Preferred work city", options: cityOptions, id: "city", type: "radio" },
                    { label: "Internship implementation choice", options: teamOptions, id: "team", type: "radio" },
                ].map(field => (
                    <div key={field.id} className="space-y-4 rounded-lg border border-border/50 p-4">
                        <Label className="font-semibold">{field.label} <span className="text-destructive">*</span></Label>
                        {field.type === 'radio' ? (
                            <RadioGroup className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {field.options.map(item => (
                                    <div key={item} className="flex items-center space-x-3">
                                        <RadioGroupItem value={item} id={`${field.id}-${item}`} />
                                        <Label htmlFor={`${field.id}-${item}`} className="font-normal text-muted-foreground">{item}</Label>
                                    </div>
                                ))}
                                {field.hasOther && (
                                    <div className="flex items-center space-x-3">
                                        <RadioGroupItem value="Other" id={`${field.id}-other`} />
                                        <Label htmlFor={`${field.id}-other`} className="font-normal text-muted-foreground">Other</Label>
                                    </div>
                                )}
                            </RadioGroup>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {field.options.map(item => (
                                    <div key={item} className="flex items-center space-x-3">
                                        <Checkbox id={`${field.id}-${item}`} />
                                        <Label htmlFor={`${field.id}-${item}`} className="font-normal text-muted-foreground">{item}</Label>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
                
                <div className="space-y-2 rounded-lg border border-border/50 p-4">
                    <Label htmlFor="start-month" className="font-semibold">Ready to start (month/year) <span className="text-destructive">*</span></Label>
                    <Input id="start-month" placeholder="e.g., January 2025" required className="bg-background/50" />
                </div>

                <div className="pt-4">
                    <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-accent text-white font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                      Submit Application
                    </Button>
                </div>
              </form>
              <p className="mt-12 text-lg font-semibold text-center text-primary italic">"Let TalentSource be your reliable support to get into the real journey of your life!"</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </PageWrapper>
  )
}
