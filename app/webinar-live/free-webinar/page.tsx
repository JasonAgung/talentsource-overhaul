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
import { Zap, BrainCircuit, Building } from 'lucide-react'

const webinarTopics = [
    { icon: Building, title: "Process automation / RPA", description: "Streamline your business processes with Robotic Process Automation" },
    { icon: BrainCircuit, title: "Data analytics, Machine Learning & AI", description: "Transform data into actionable intelligence" },
    { icon: Zap, title: "Corporate digital transformation", description: "Lead your organization through digital evolution" },
];

const topicOptions = ["Transformasi digital organisasi (Bisnis , Lembaga, Sekolah, Perguruan Tinggi)", "Digitalisasi dan otomasi proses kerja", "RPA (Robotic Process Automation)", "Konsep Re and Upskilling dalam organisasi era Digital", "Data analytics, Machine Learning dan Artificial Intelligence"];
const reasonOptions = ["Kami perlu pengetahuan dan wawasan awal", "Kami sedang mencari cara memulai digitalisasi organisasi", "Kami sedang mencari mitra konsultan yang bisa cocok membantu kami", "Topik yang kami butuhkan itu sedang jadi bahasan di dalam organisasi kami", "Kami sedang mulai belajar dan mengembangkan diri"];
const profileOptions = ["Tingkat manajemen/ eksekutif - pengambil keputusan", "Tingkat manajemen menengah - bisa mengusulkan program", "Staff pelaksana", "Rata-rata masih awam terhadap topik"];
const participantOptions = ["Di bawah 20 orang", "Antara 20 sampai 40 orang", "Antara 40 sampai 80 orang", "Lebih dari 80 orang"];

export default function RequestSeminarPage() {
  return (
    <PageWrapper>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 mt-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 backdrop-blur-md border border-primary/20 text-primary text-sm font-semibold mb-8 animate-fade-in-badge transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
            Future Ready
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-4">
            Free Webinar Request
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            TS provides free webinar services tailored to your organization's needs across three key topics.
          </p>
        </div>

        <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 my-16"
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
                    <Card className="h-full text-center glass-effect border-border/50 hover:border-primary/30 transition-colors duration-300 bg-card/50 backdrop-blur group">
                        <CardContent className="p-6 flex flex-col items-center justify-center">
                            <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-accent text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                              <topic.icon className="h-8 w-8" />
                            </div>
                            <p className="font-semibold text-foreground mb-2">{topic.title}</p>
                            <p className="text-sm text-muted-foreground">{topic.description}</p>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </motion.div>

        <motion.div
          className="text-center text-muted-foreground max-w-3xl mx-auto mb-16 bg-primary/5 p-6 rounded-lg border border-primary/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
            <p className="leading-relaxed">
                Interested corporations and organizations can fill out the request form below. Before the webinar, TS will contact you to refine your needs so that we can meet your requirements, including your preferred time and schedule.
            </p>
        </motion.div>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
        >
          <Card className="bg-card/50 border-border/50 backdrop-blur">
            <CardHeader className="text-center border-b border-border/50">
              <CardTitle className="text-3xl font-bold text-foreground">Request Form</CardTitle>
              <CardDescription className="text-base max-w-2xl mx-auto">
                We will do our best to fulfill your request and provide valuable insights for your organization.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form className="space-y-8 mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="name">Applicant's Name <span className="text-destructive">*</span></Label>
                        <Input id="name" placeholder="Your name" required className="bg-background/50" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="position">Position <span className="text-destructive">*</span></Label>
                        <Input id="position" placeholder="Your position" required className="bg-background/50" />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="organization">Business/Institution/Organization <span className="text-destructive">*</span></Label>
                    <Input id="organization" placeholder="Your organization" required className="bg-background/50" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="address">Full Address of Organization <span className="text-destructive">*</span></Label>
                    <Textarea id="address" placeholder="Complete organization address" required className="bg-background/50" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="contact">WhatsApp & Email <span className="text-destructive">*</span></Label>
                    <Input id="contact" placeholder="e.g., +62812XXXXXXXX / email@company.com" required className="bg-background/50" />
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
                    <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-accent text-white font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">Send Request</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </PageWrapper>
  )
}
