"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { PageWrapper } from "@/components/page-wrapper"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Zap, BrainCircuit, Building } from "lucide-react"

const webinarTopics = [
    { icon: Building, title: "Process automation / RPA" },
    { icon: BrainCircuit, title: "Data analytics, Machine Learning & AI" },
    { icon: Zap, title: "Corporate digital transformation" },
];

const topicOptions = ["Transformasi digital organisasi (Bisnis , Lembaga, Sekolah, Perguruan Tinggi)", "Digitalisasi dan otomasi proses kerja", "RPA (Robotic Process Automation)", "Konsep Re and Upskilling dalam organisasi era Digital", "Data analytics, Machine Learning dan Artificial Intelligence"];
const reasonOptions = ["Kami perlu pengetahuan dan wawasan awal", "Kami sedang mencari cara memulai digitalisasi organisasi", "Kami sedang mencari mitra konsultan yang bisa cocok membantu kami", "Topik yang kami butuhkan itu sedang jadi bahasan di dalam organisasi kami", "Kami sedang mulai belajar dan mengembangkan diri"];
const profileOptions = ["Tingkat manajemen/ eksekutif - pengambil keputusan", "Tingkat manajemen menengah - bisa mengusulkan program", "Staff pelaksana", "Rata-rata masih awam terhadap topik"];
const participantOptions = ["Di bawah 20 orang", "Antara 20 sampai 40 orang", "Antara 40 sampai 80 orang", "Lebih dari 80 orang"];

export default function RequestSeminarPage() {
  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-4 shimmer-text">
            Free Webinar Request
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            TS provides free webinar services for the following three topics.
          </p>
        </div>

        <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            {webinarTopics.map((topic, index) => (
                <motion.div
                    key={topic.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                    <Card className="h-full text-center glass-effect border-border/50">
                        <CardContent className="p-6 flex flex-col items-center justify-center">
                            <topic.icon className="h-10 w-10 text-primary mb-4" />
                            <p className="font-semibold text-foreground">{topic.title}</p>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </motion.div>

        <motion.div
          className="text-center text-muted-foreground max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
            <p>
                Interested corporations/organizations can fill out the Free Webinar Request form. Before the webinar, TS will contact you to refine your needs so that TS can meet them as requested, including the requested time.
            </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
        >
          <Card className="bg-card/80 border-border/50">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-foreground">Request Form</CardTitle>
              <CardDescription className="max-w-2xl mx-auto">
                We will do our best to fulfill your request and assist you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-8 mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="name">Applicant's Name <span className="text-destructive">*</span></Label>
                        <Input id="name" required className="bg-background/50" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="position">Position <span className="text-destructive">*</span></Label>
                        <Input id="position" required className="bg-background/50" />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="organization">Business/Institution/Organization <span className="text-destructive">*</span></Label>
                    <Input id="organization" required className="bg-background/50" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="address">Full Address of Organization <span className="text-destructive">*</span></Label>
                    <Textarea id="address" required className="bg-background/50" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="contact">WhatsApp & Email <span className="text-destructive">*</span></Label>
                    <Input id="contact" required className="bg-background/50" />
                </div>

                {[
                    { label: "1. Requested webinar topic/theme (select one)", options: topicOptions, id: "topic", type: "radio" },
                    { label: "2. Reason for needing this topic (select one or more)", options: reasonOptions, id: "reason", type: "checkbox" },
                    { label: "3. Brief description of webinar participant profile (select one or more)", options: profileOptions, id: "profile", type: "checkbox" },
                    { label: "4. Estimated number of webinar participants", options: participantOptions, id: "participants", type: "radio" },
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

                <div className="space-y-4 rounded-lg border border-border/50 p-4">
                    <Label htmlFor="meeting-date" className="font-semibold">5. Proposed date for the webinar <span className="text-destructive">*</span></Label>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Input type="date" id="meeting-date" className="flex-1 bg-background/50" />
                        <Input type="time" id="meeting-time" className="flex-1 bg-background/50" />
                    </div>
                </div>

                <div className="pt-4">
                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Send Request</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </PageWrapper>
  )
}
