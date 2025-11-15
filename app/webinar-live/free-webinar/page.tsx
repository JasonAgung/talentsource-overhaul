"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import Aurora from "@/components/Aurora"

export default function RequestSeminarPage() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <main className="min-h-screen relative overflow-hidden">
        <div className="fixed inset-0 w-full h-full">
          <Aurora colorStops={["#475569", "#64748b", "#475569"]} amplitude={1.2} blend={0.6} speed={0.8} />
        </div>

        <div className="relative z-10">
          <section className="min-h-[60vh] flex items-center justify-center px-4 pt-16 md:pt-24 pb-12 relative">
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-foreground/10 backdrop-blur-md border border-foreground/20 text-foreground text-sm font-medium mb-8 mt-8 md:mt-12 animate-fade-in-badge">
                <span className="w-2 h-2 bg-foreground/60 rounded-full mr-2 animate-pulse"></span>
                Free Knowledge Sharing
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">Free Webinar Request</h1>
            </div>
          </section>

          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
              <div className="text-center mb-12">
                <p className="text-muted-foreground">TS memberikan layanan free webinar untuk tiga topik berikut:</p>

                <div className="flex flex-col sm:flex-row justify-center items-stretch gap-4 my-6">
                  <div className="flex-1 p-4 bg-card border border-border rounded-lg flex items-center justify-center">
                    <p className="font-medium text-foreground">Process automation / RPA</p>
                  </div>
                  <div className="flex-1 p-4 bg-card border border-border rounded-lg flex items-center justify-center">
                    <p className="font-medium text-foreground">Data analytics, Machine Learning & AI</p>
                  </div>
                  <div className="flex-1 p-4 bg-card border border-border rounded-lg flex items-center justify-center">
                    <p className="font-medium text-foreground">Corporate digital transformation</p>
                  </div>
                </div>

                <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
                  Korporasi/organisasi peminat dapat mengisi form Permintaan Free Webinar. Sebelum pelaksanaan free
                  webinar, TS akan mengontak Anda untuk mempertajam kebutuhan Anda agar TS dapat memenuhinya sesuai
                  permintaan, termasuk waktu yang dimintakan.
                </p>
              </div>

              <div className="mb-12 text-center">
                <h2 className="text-2xl font-bold text-foreground">Formulir Permintaan</h2>
                <p className="text-muted-foreground mt-2 max-w-3xl mx-auto">
                  Organisasi / korporasi dapat meminta consultant / coach TS (TalentSource) untuk memberikan free
                  webinar dua jam dengan mengisi formulir ini. Sebelum memenuhi permintaan, TS akan hubungi anda untuk
                  mempertajam kebutuhan agar kami dapat memenuhinya sesuai permintaan, termasuk waktu yang dimintakan.
                </p>
                <p className="text-muted-foreground mt-2">Kami akan berusaha sebaik mungkin memenuhi permintaan dan membantu anda.</p>
              </div>

              <form className="space-y-8">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-muted-foreground">
                    Nama Pemohon <span className="text-destructive">*</span>
                  </Label>
                  <Input id="name" required className="bg-input border-border text-foreground" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="organization" className="text-muted-foreground">
                    Bisnis/ Lembaga/ Organisasi yang memohon seminar TS <span className="text-destructive">*</span>
                  </Label>
                  <Input id="organization" required className="bg-input border-border text-foreground" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="position" className="text-muted-foreground">
                    Pekerjaan/ posisi pemohon <span className="text-destructive">*</span>
                  </Label>
                  <Input id="position" required className="bg-input border-border text-foreground" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address" className="text-muted-foreground">
                    Alamat lengkap organisasi/ korporasi pemohon <span className="text-destructive">*</span>
                  </Label>
                  <Textarea id="address" required className="bg-input border-border text-foreground" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact" className="text-muted-foreground">
                    No kontak WA dan email pemohon <span className="text-destructive">*</span>
                  </Label>
                  <Input id="contact" required className="bg-input border-border text-foreground" />
                </div>

                <div className="space-y-4">
                  <Label className="text-muted-foreground">
                    1. Topik/tema webinar yang diminta (pilih salah satu) <span className="text-destructive">*</span>
                  </Label>
                  <RadioGroup className="space-y-2">
                    {[
                      "Transformasi digital organisasi (Bisnis , Lembaga, Sekolah, Perguruan Tinggi)",
                      "Digitalisasi dan otomasi proses kerja",
                      "RPA (Robotic Process Automation)",
                      "Konsep Re and Upskilling dalam organisasi era Digital",
                      "Data analytics, Machine Learning dan Artificial Intelligence",
                    ].map((item) => (
                      <div key={item} className="flex items-center space-x-2">
                        <RadioGroupItem value={item} id={`topic-${item}`} />
                        <Label htmlFor={`topic-${item}`} className="font-normal text-muted-foreground">
                          {item}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div className="space-y-4">
                  <Label className="text-muted-foreground">
                    2. Alasan mengapa topik tersebut diperlukan di organisasi pemohon (boleh pilih lebih dari satu){" "}
                    <span className="text-destructive">*</span>
                  </Label>
                  <div className="space-y-2">
                    {[
                      "Kami perlu pengetahuan dan wawasan awal",
                      "Kami sedang mencari cara memulai digitalisasi organisasi",
                      "Kami sedang mencari mitra konsultan yang bisa cocok membantu kami",
                      "Topik yang kami butuhkan itu sedang jadi bahasan di dalam organisasi kami",
                      "Kami sedang mulai belajar dan mengembangkan diri",
                    ].map((item) => (
                      <div key={item} className="flex items-center space-x-2">
                        <Checkbox id={`reason-${item}`} />
                        <Label htmlFor={`reason-${item}`} className="font-normal text-muted-foreground">
                          {item}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <Label className="text-muted-foreground">
                    3. Deskripsi singkat profil peserta webinar (boleh pilih lebih dari satu){" "}
                    <span className="text-destructive">*</span>
                  </Label>
                  <div className="space-y-2">
                    {[
                      "Tingkat manajemen/ eksekutif - pengambil keputusan",
                      "Tingkat manajemen menengah - bisa mengusulkan program",
                      "Staff pelaksana",
                      "Rata-rata masih awam terhadap topik",
                    ].map((item) => (
                      <div key={item} className="flex items-center space-x-2">
                        <Checkbox id={`profile-${item}`} />
                        <Label htmlFor={`profile-${item}`} className="font-normal text-muted-foreground">
                          {item}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <Label className="text-muted-foreground">
                    4. Perkiraan jumlah peserta webinar <span className="text-destructive">*</span>
                  </Label>
                  <RadioGroup className="space-y-2">
                    {["Di bawah 20 orang", "Antara 20 sampai 40 orang", "Antara 40 sampai 80 orang", "Lebih dari 80 orang"].map(
                      (item) => (
                        <div key={item} className="flex items-center space-x-2">
                          <RadioGroupItem value={item} id={`participants-${item}`} />
                          <Label htmlFor={`participants-${item}`} className="font-normal text-muted-foreground">
                            {item}
                          </Label>
                        </div>
                      )
                    )}
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label className="text-muted-foreground">
                    5. Tuliskan ancar-ancar tanggal pelaksanaan webinar yang diusulkan{" "}
                    <span className="text-destructive">*</span>
                  </Label>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Input
                      type="date"
                      id="meeting-date"
                      className="flex-1 bg-input border-border text-foreground"
                    />
                    <Input
                      type="time"
                      id="meeting-time"
                      className="flex-1 bg-input border-border text-foreground"
                    />
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full md:w-auto">
                  Send Request
                </Button>
              </form>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}