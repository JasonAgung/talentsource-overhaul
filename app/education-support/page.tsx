"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { PageWrapper } from "@/components/page-wrapper"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { RefreshCw, ArrowRightLeft, Users, Building, UserCheck, GraduationCap } from "lucide-react"

const focusOptions = [
    "Transformasi digital organisasi",
    "Digitalisasi dan otomasi proses kerja administratif yang menjadi beban besar",
    "Memperbaiki / membangun sistem manajemen dan tatkelola baru di lembaga pendidikan",
    "Menghadapi dan menyelesaikan tantangan tantangan operasional yang besar",
    "Menyegarkan dan mengisi Pengurus Yayasan dengan orientasi baru dan modern",
    "Memahami ancaman era digital maju terhadap keberlangsungan lembaga pendidikan",
];

const reasonOptions = [
    "Kami perlu pengetahuan dan wawasan awal",
    "Kami sedang mencari cara memulai digitalisasi lembaga pendidikan",
    "Kami sedang mencari mitra konsultan/ bantuan yang bisa cocok membantu kami",
    "Topik yang kami butuhkan itu sedang jadi bahasan di dalam lembaga pendidikan kami",
    "Kami sedang mulai belajar dan mengembangkan diri",
];

const ideaOptions = [
    "Pengurus Yayasan",
    "Staff di kantor yayasan",
    "Ekesekutif Unit Pendidikan",
    "Orang tua/ wali murid / mahasiswa",
];

const benefits = [
  {
    icon: RefreshCw,
    title: "Modern Management Systems",
    description: "Refreshing the management and governance systems and practices of schools/universities.",
  },
  {
    icon: ArrowRightLeft,
    title: "Digital Era Adaptation",
    description: "Aligning school and university work processes with new techniques commonly used in organizations entering the digital economy era.",
  },
  {
    icon: Users,
    title: "Next Generation Relevance",
    description: "Preparing schools/universities to continue their journey and remain relevant in the digital lifestyle, so they stay relevant to Gen Z, Alpha, Beta, and beyond.",
  },
];

const programTargets = [
    {
        icon: Building,
        title: "Education Foundations",
        description: "Trustees of Education Foundations, especially private ones.",
    },
    {
        icon: UserCheck,
        title: "Foundation Staff",
        description: "Staff of Education Foundation offices.",
    },
    {
        icon: GraduationCap,
        title: "School Management",
        description: "Executives/management of schools/universities (Principals, Deans, Rectors, etc.).",
    },
]

export default function EducationSupportPage() {
  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 mt-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 backdrop-blur-md border border-primary/20 text-primary text-sm font-semibold mb-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
                Community Development
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-4">
                Education Support
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A social and community development program for educational institutions in Indonesia.
            </p>
        </div>

        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Program Purpose</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programTargets.map((target) => (
              <Card key={target.title} className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <target.icon className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle>{target.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{target.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <Card key={benefit.title}>
                <CardHeader className="flex flex-row items-center gap-4">
                  <benefit.icon className="h-8 w-8 text-primary" />
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div 
            className="mt-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
        >
            <Card className="bg-card/80 border-border/50">
                <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-bold text-foreground">Request for Education Support</CardTitle>
                    <CardDescription className="max-w-2xl mx-auto">
                        TS will provide the necessary guidance, experience, and advice for educational institutions to refresh their systems and prepare for the advanced digital era.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="space-y-6 mt-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">Applicant's Name <span className="text-destructive">*</span></Label>
                                <Input id="name" required className="bg-background/50" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="position">Current Position <span className="text-destructive">*</span></Label>
                                <Input id="position" required className="bg-background/50" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="institution">Foundation/School/University <span className="text-destructive">*</span></Label>
                            <Input id="institution" required className="bg-background/50" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="address">Full Address of Institution <span className="text-destructive">*</span></Label>
                            <Textarea id="address" required className="bg-background/50" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="contact">WhatsApp & Email <span className="text-destructive">*</span></Label>
                            <Input id="contact" required placeholder="+62 812-3456-7890 / name@example.com" className="bg-background/50" />
                        </div>

                        {[
                            { label: "1. Focus of interest for the institution (Select one or more)", options: focusOptions, id: "focus" },
                            { label: "2. Reason for needing this topic (Select one or more)", options: reasonOptions, id: "reason" },
                            { label: "3. Where did the idea for refreshment come from? (Select one or more)", options: ideaOptions, id: "idea" }
                        ].map(field => (
                            <div key={field.id} className="space-y-4 rounded-lg border border-border/50 p-4">
                                <Label className="font-semibold">{field.label} <span className="text-destructive">*</span></Label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {field.options.map(item => (
                                        <div key={item} className="flex items-center space-x-3">
                                            <Checkbox id={`${field.id}-${item}`} />
                                            <Label htmlFor={`${field.id}-${item}`} className="font-normal text-muted-foreground">{item}</Label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}

                        <div className="space-y-4 rounded-lg border border-border/50 p-4">
                            <Label htmlFor="meeting-date" className="font-semibold">4. When can an initial virtual meeting be held? <span className="text-destructive">*</span></Label>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Input type="date" id="meeting-date" className="flex-1 bg-background/50" />
                                <Input type="time" id="meeting-time" className="flex-1 bg-background/50" />
                            </div>
                        </div>

                        <div className="pt-4">
                            <Button type="submit" size="lg" className="w-full">Submit Request</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </motion.div>
      </div>
    </PageWrapper>
  )
}
