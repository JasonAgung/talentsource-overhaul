"use client" // This page contains a form, so it needs to be a client component

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"

export default function RequestSeminarPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Permintaan Webinar TS Gratis
            </h1>
          </div>

          <div className="max-w-none mx-auto text-center mb-12">
            <p className="text-muted-foreground">
              TS memberikan layanan free webinar untuk tiga topik berikut:
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

            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              Korporasi/organisasi peminat dapat mengisi form Permintaan Free Webinar. Sebelum pelaksanaan free webinar, TS akan mengontak Anda untuk mempertajam kebutuhan Anda agar TS dapat memenuhinya sesuai permintaan, termasuk waktu yang dimintakan.
            </p>
          </div>
          
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-foreground">Formulir Permintaan</h2>
            <p className="text-muted-foreground mt-2 max-w-3xl mx-auto">
              Organisasi / korporasi dapat meminta consultant / coach TS (TalentSource) untuk memberikan free webinar dua jam dengan mengisi formulir ini. Sebelum memenuhi permintaan, TS akan hubungi anda untuk mempertajam kebutuhan agar kami dapat memenuhinya sesuai permintaan, termasuk waktu yang dimintakan.
            </p>
            <p className="text-muted-foreground mt-2">Kami akan berusaha sebaik mungkin memenuhi permintaan dan membantu anda.</p>
          </div>

          <form className="space-y-8">
            <div className="space-y-2">
              <Label htmlFor="name">Nama Pemohon <span className="text-destructive">*</span></Label>
              <Input id="name" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="organization">Bisnis/ Lembaga/ Organisasi yang memohon seminar TS <span className="text-destructive">*</span></Label>
              <Input id="organization" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="position">Pekerjaan/ posisi pemohon <span className="text-destructive">*</span></Label>
              <Input id="position" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Alamat lengkap organisasi/ korporasi pemohon <span className="text-destructive">*</span></Label>
              <Textarea id="address" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact">No kontak WA dan email pemohon <span className="text-destructive">*</span></Label>
              <Input id="contact" required />
            </div>

            <div className="space-y-4">
              <Label>1. Topik/tema webinar yang diminta (pilih salah satu) <span className="text-destructive">*</span></Label>
              <RadioGroup className="space-y-2">
                {["Transformasi digital organisasi (Bisnis , Lembaga, Sekolah, Perguruan Tinggi)", "Digitalisasi dan otomasi proses kerja", "RPA (Robotic Process Automation)", "Konsep Re and Upskilling dalam organisasi era Digital", "Data analytics, Machine Learning dan Artificial Intelligence"].map(item => (
                  <div key={item} className="flex items-center space-x-2">
                    <RadioGroupItem value={item} id={`topic-${item}`} />
                    <Label htmlFor={`topic-${item}`} className="font-normal">{item}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-4">
              <Label>2. Alasan mengapa topik tersebut diperlukan di organisasi pemohon (boleh pilih lebih dari satu) <span className="text-destructive">*</span></Label>
              <div className="space-y-2">
                {["Kami perlu pengetahuan dan wawasan awal", "Kami sedang mencari cara memulai digitalisasi organisasi", "Kami sedang mencari mitra konsultan yang bisa cocok membantu kami", "Topik yang kami butuhkan itu sedang jadi bahasan di dalam organisasi kami", "Kami sedang mulai belajar dan mengembangkan diri"].map(item => (
                  <div key={item} className="flex items-center space-x-2">
                    <Checkbox id={`reason-${item}`} />
                    <Label htmlFor={`reason-${item}`} className="font-normal">{item}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <Label>3. Deskripsi singkat profil peserta webinar (boleh pilih lebih dari satu) <span className="text-destructive">*</span></Label>
              <div className="space-y-2">
                {["Tingkat manajemen/ eksekutif - pengambil keputusan", "Tingkat manajemen menengah - bisa mengusulkan program", "Staff pelaksana", "Rata-rata masih awam terhadap topik"].map(item => (
                  <div key={item} className="flex items-center space-x-2">
                    <Checkbox id={`profile-${item}`} />
                    <Label htmlFor={`profile-${item}`} className="font-normal">{item}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <Label>4. Perkiraan jumlah peserta webinar <span className="text-destructive">*</span></Label>
              <RadioGroup className="space-y-2">
                {["Di bawah 20 orang", "Antara 20 sampai 40 orang", "Antara 40 sampai 80 orang", "Lebih dari 80 orang"].map(item => (
                  <div key={item} className="flex items-center space-x-2">
                    <RadioGroupItem value={item} id={`participants-${item}`} />
                    <Label htmlFor={`participants-${item}`} className="font-normal">{item}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label>5. Tuliskan ancar-ancar tanggal pelaksanaan webinar yang diusulkan <span className="text-destructive">*</span></Label>
              <div className="flex flex-col sm:flex-row gap-4">
                <Input type="date" id="meeting-date" className="flex-1" />
                <Input type="time" id="meeting-time" className="flex-1" />
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full md:w-auto glow-effect">Send Request</Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}