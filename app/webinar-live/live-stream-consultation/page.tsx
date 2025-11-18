"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PageWrapper } from "@/components/page-wrapper"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Download, Mail, MessageCircle, CheckCircle } from 'lucide-react'

const topics = [
    { icon: "⚙️", title: "Process automation / RPA", description: "Optimize your business processes with automation" },
    { icon: "📊", title: "Data analytics, Machine Learning & AI", description: "Transform data into strategic insights" },
    { icon: "🚀", title: "Corporate digital transformation", description: "Lead your digital journey" },
];

const stages = [
    { title: "Starting Phase", description: "Deciding to implement in the organization/corporation" },
    { title: "Implementation Phase", description: "Currently in the implementation stage" },
    { title: "Advanced Phase", description: "Already quite advanced in implementation" },
];

const flyers = [
    {
        imgSrc: "https://bandungtalentsource.com/wp-content/uploads/2022/01/flyer1.png",
        downloadLink: "/placeholder-flyer-en.pdf",
        title: "English Version"
    },
    {
        imgSrc: "https://bandungtalentsource.com/wp-content/uploads/2022/01/flyer24.png",
        downloadLink: "/placeholder-flyer-id.pdf",
        title: "Indonesian Version"
    }
]

export default function LiveStreamPage() {
  return (
    <PageWrapper>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 mt-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 backdrop-blur-md border border-primary/20 text-primary text-sm font-semibold mb-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
              Expert Consultation
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-4">
                Live Stream Consultation
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A unique professional consultation service that brings industry expertise directly to your organization.
            </p>
        </div>

        {/* Overview */}
        <motion.section
            className="mb-16 p-8 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
        >
            <h2 className="text-2xl font-bold text-foreground mb-4">What Sets Us Apart</h2>
            <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Appointment booking made simple and interactive</span>
                </li>
                <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Highly structured sessions with clear objectives</span>
                </li>
                <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Limited to two-hour focused sessions</span>
                </li>
                <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Dedicated team of consultants for up to 15 participants</span>
                </li>
                <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Fully customized to address your specific concerns</span>
                </li>
            </ul>
        </motion.section>

        {/* Topics Grid */}
        <motion.div 
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
        >
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Consultation Topics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {topics.map((topic, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    >
                        <Card className="h-full bg-card/50 border-border/50 hover:border-primary/30 transition-colors duration-300 text-center p-6">
                            <div className="text-4xl mb-4">{topic.icon}</div>
                            <h3 className="font-bold text-foreground mb-2">{topic.title}</h3>
                            <p className="text-sm text-muted-foreground">{topic.description}</p>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </motion.div>

        {/* Implementation Stages */}
        <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Tailored to Your Stage</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stages.map((stage, index) => (
                    <Card key={index} className="p-6 bg-card/50 border-primary/10">
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent text-white font-bold text-sm mb-4">
                            {index + 1}
                        </div>
                        <h3 className="font-bold text-foreground mb-2">{stage.title}</h3>
                        <p className="text-sm text-muted-foreground">{stage.description}</p>
                    </Card>
                ))}
            </div>
        </motion.div>

        {/* Flyers */}
        <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Download Our Materials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {flyers.map((flyer, index) => (
                    <Card key={index} className="overflow-hidden border-border/50 hover:shadow-lg transition-shadow duration-300 bg-card/50 backdrop-blur">
                        <CardContent className="p-0 relative aspect-[1/1.414]">
                            <Image 
                                src={flyer.imgSrc || "/placeholder.svg"} 
                                alt={flyer.title}
                                fill
                                className="object-cover"
                            />
                        </CardContent>
                        <div className="p-4 space-y-2">
                            <p className="font-semibold text-foreground">{flyer.title}</p>
                            <Button asChild className="w-full bg-gradient-to-r from-primary to-accent text-white">
                                <a href={flyer.downloadLink} download>
                                    <Download className="mr-2 h-4 w-4" />
                                    Download
                                </a>
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>
        </motion.div>

        {/* CTA */}
        <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 p-8 md:p-12">
                <CardTitle className="text-2xl md:text-3xl font-bold text-foreground mb-4">Ready to Consult?</CardTitle>
                <CardDescription className="text-base mb-8">
                    Get in touch with us today to schedule your live stream consultation session.
                </CardDescription>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                        <a href="mailto:contact@bandungtalentsource.com">
                            <Mail className="mr-2 h-5 w-5" />
                            Email Us
                        </a>
                    </Button>
                    <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent text-white">
                        <a href="https://wa.me/628122101938" target="_blank" rel="noopener noreferrer">
                            <MessageCircle className="mr-2 h-5 w-5" />
                            WhatsApp Us
                        </a>
                    </Button>
                </div>
            </Card>
        </motion.div>
      </div>
    </PageWrapper>
  )
}
