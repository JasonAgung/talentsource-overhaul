"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { PageWrapper } from "@/components/page-wrapper"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

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

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export default function EducationSupportPage() {
  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-4 shimmer-text">
                Education Support
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A social and community development program for educational institutions in Indonesia.
            </p>
        </div>

        <motion.article 
            className="prose prose-invert prose-lg max-w-none mx-auto text-muted-foreground space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
        >
            <div>
                <h3 className="text-foreground font-semibold">Program Purpose</h3>
                <p>This program is aimed at:</p>
                <ul>
                    <li>Trustees of Education Foundations, especially private ones</li>
                    <li>Staff of Education Foundation offices</li>
                    <li>Executives/management of schools/universities (Principals, Deans, Rectors, etc.)</li>
                </ul>
            </div>
            <div>
                <p>This is not a fundraising program, but rather TS's assistance in the form of sharing and coaching with the aim of:</p>
                <ul>
                    <li>Refreshing the management and governance systems and practices of schools/universities</li>
                    <li>Aligning school and university work processes with new techniques commonly used in organizations entering the digital economy era</li>
                    <li>Preparing schools/universities to continue their journey and remain relevant in the digital lifestyle, so they stay relevant to Gen Z, Alpha, Beta, and beyond</li>
                </ul>
            </div>
        </motion.article>

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
                            <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Submit Request</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </motion.div>
      </div>
    </PageWrapper>
  )
}
