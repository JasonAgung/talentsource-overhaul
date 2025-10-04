"use client" // This page contains a form, so it needs to be a client component
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function LiveStreamPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
            Live Stream Consultation Service
          </h1>

          <div className="max-w-none mx-auto text-center mb-12">
            <p className="text-muted-foreground">
              TS memberikan layanan live stream consultation untuk tiga topik berikut:
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-stretch gap-4 my-6">
              <div className="flex-1 p-4 bg-muted/50 border border-border rounded-lg flex items-center justify-center">
                <p className="font-medium text-foreground">Process automation / RPA</p>
              </div>
              <div className="flex-1 p-4 bg-muted/50 border border-border rounded-lg flex items-center justify-center">
                <p className="font-medium text-foreground">Data analytics, Machine Learning & AI</p>
              </div>
              <div className="flex-1 p-4 bg-muted/50 border border-border rounded-lg flex items-center justify-center">
                <p className="font-medium text-foreground">Corporate digital transformation</p>
              </div>
            </div>

            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Korporasi/organisasi peminat dapat mengisi form Permintaan Live Stream Consultation. Sebelum pelaksanaan live stream consultation, TS akan mengontak Anda untuk mempertajam kebutuhan Anda agar TS dapat memenuhinya sesuai permintaan, termasuk waktu yang dimintakan.
            </p>
          </div>

          <p className="text-muted-foreground text-lg mb-12 text-center">
            Permintaan Live Stream Consultation TS
          </p>
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input id="name" placeholder="John Doe" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Your Email</Label>
                <Input id="email" type="email" placeholder="john.doe@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Your Phone Number</Label>
                <Input id="phone" placeholder="+62 812 3456 7890" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Your Company Name</Label>
                <Input id="company" placeholder="Example Corp" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="position">Your Position</Label>
                <Input id="position" placeholder="Manager" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="participants">Number of Participants</Label>
                <Input id="participants" type="number" placeholder="e.g., 50" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="Topic you are interested in" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Your Message</Label>
              <Textarea id="message" placeholder="Tell us more about your needs..." rows={5} />
            </div>

            <Button type="submit" size="lg" className="w-full md:w-auto">Send Request</Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}