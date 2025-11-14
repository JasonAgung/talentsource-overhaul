"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PageWrapper } from "@/components/page-wrapper"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Download, Mail, MessageCircle } from "lucide-react"

const topics = [
    "Process automation / RPA",
    "Data analytics, Machine Learning dan AI",
    "Corporate digital transformation",
];

const stages = [
    "Deciding to implement in the organization/corporation",
    "Currently in the implementation stage",
    "Already quite advanced in implementation",
];

const flyers = [
    {
        imgSrc: "https://bandungtalentsource.com/wp-content/uploads/2022/01/flyer1.png",
        downloadLink: "/placeholder-flyer-en.pdf",
    },
    {
        imgSrc: "https://bandungtalentsource.com/wp-content/uploads/2022/01/flyer24.png",
        downloadLink: "/placeholder-flyer-id.pdf",
    }
]

export default function LiveStreamPage() {
  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-4 shimmer-text">
                Live Stream Consultation
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A unique service that adopts the consultation session model of independent professionals like doctors, architects, and lawyers.
            </p>
        </div>

        <motion.article
            className="prose max-w-none mx-auto text-muted-foreground space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
        >
            <p>The major differences of our livestream consultation with those consultation model are:</p>
            <ul>
                <li>Appointment is made a lot easier and interactive</li>
                <li>Our session is more structured with clear points</li>
                <li>Will be limited to two-hour session segments</li>
                <li>Can be a team of TS consultants for up to 15 participants</li>
                <li>Dedicated sessions dealing with your own issues and concerns only</li>
            </ul>
            <p>TS provides live stream consultation services for the following topics:</p>
            <ul>
                {topics.map(topic => <li key={topic}>{topic}</li>)}
            </ul>
            <p>This consultation service is tailored to the needs of the inquirer depending on their current position on each of the three topics above:</p>
            <ul>
                {stages.map(stage => <li key={stage}>{stage}</li>)}
            </ul>
            <p>This program also partly supports the free internship program of TS.</p>
        </motion.article>

        <motion.div 
            className="mt-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
        >
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Download Our Flyers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {flyers.map((flyer, index) => (
                    <Card key={index} className="bg-card border shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                        <CardContent className="p-0 relative aspect-[1/1.414]">
                            <Image 
                                src={flyer.imgSrc} 
                                alt={`Flyer ${index + 1}`}
                                layout="fill"
                                objectFit="cover"
                            />
                        </CardContent>
                        <div className="p-4">
                            <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                                <a href={flyer.downloadLink} download>
                                    <Download className="mr-2 h-4 w-4" />
                                    Download Flyer 
                                </a>
                            </Button>
                        </div>
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
            <Card className="bg-card border shadow-sm">
                <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-bold text-foreground">Express Your Interest</CardTitle>
                    <CardDescription>
                        Interested corporations or organizations can contact us via:
                    </CardDescription>
                </CardHeader>
                <CardContent className="text-center flex flex-col sm:flex-row justify-center items-center gap-6">
                    <Button asChild variant="outline" size="lg">
                        <a href="mailto:contact@bandungtalentsource.com">
                            <Mail className="mr-2 h-5 w-5" />
                            Email Us
                        </a>
                    </Button>
                    <Button asChild size="lg">
                        <a href="https://wa.me/628122101938" target="_blank" rel="noopener noreferrer">
                            <MessageCircle className="mr-2 h-5 w-5" />
                            WhatsApp
                        </a>
                    </Button>
                </CardContent>
            </Card>
        </motion.div>
      </div>
    </PageWrapper>
  )
}