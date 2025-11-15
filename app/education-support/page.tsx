"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import Aurora from "@/components/Aurora"

export default function EducationSupportPage() {
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
                Community Development
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">Education Support</h1>
            </div>
          </section>

          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
              <article className="prose dark:prose-invert max-w-none mx-auto mt-12 text-muted-foreground space-y-6">
                <div>
                  <h3 className="text-foreground font-semibold">Program Pengembangan Sosial dan Komunitas</h3>
                  <p>Program ini ditujukan untuk:</p>
                  <ul>
                    <li>Pengurus Yayasan Pendidikan, khususnya swasta</li>
                    <li>Tim kantor Yayasan Pendidikan</li>
                    <li>
                      Ekesekutif/ manajemen sekolah/ universitas (Kepala sekolah dan para wakasek, Ketua sekolah tinggi
                      dan para wakil ketua, Rektor dan para wakil rektor)
                    </li>
                  </ul>
                </div>
                <div>
                  <p>
                    Program ini bukan program ‘fund raising’, melainkan bantuan TS dalam bentuk sharing dan coaching
                    dengan tujuan:
                  </p>
                  <ul>
                    <li>Menyegarkan sistem dan praktek manajemen dan governance sekolah/ universitas</li>
                    <li>
                      Menyelaraskan proses kerja sekolah dan universitas dengan teknik/cara baru yang sudah jamak
                      digunakan pada organisasi yang masuk ke era ekonomi digital
                    </li>
                    <li>
                      Menyiapkan sekolah/universitas untuk melanjutkan perjalanan dan tetap relevan dengan gaya-hidup
                      digital, sehingga sekolah/universitas tetap relevan di mata Gen Z, Alpha, Beta dst
                    </li>
                  </ul>
                </div>
              </article>

              <div className="mt-16 border-t border-border pt-12">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-foreground">Permintaan Layanan Dukungan (Edu Support)</h2>
                  <p className="text-muted-foreground mt-2 max-w-3xl mx-auto">
                    TS akan membantu memberikan tuntunan, pengalaman, dan saran yang diperlukan lembaga pendidikan
                    untuk menyegarkan sistem dan siap memasuki era digital maju. Kami akan berusaha sebaik mungkin
                    memenuhi permintaan dan membantu Anda.
                  </p>
                </div>

                <form className="space-y-8">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-muted-foreground">
                      Nama Pemohon <span className="text-destructive">*</span>
                    </Label>
                    <Input id="name" required className="bg-input border-border text-foreground" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="institution" className="text-muted-foreground">
                      Yayasan/ Sekolah/ Universitas/ Lembaga Pendidikan lainnya <span className="text-destructive">*</span>
                    </Label>
                    <Input id="institution" required className="bg-input border-border text-foreground" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="position" className="text-muted-foreground">
                      Pekerjaan saat ini/ posisi pemohon <span className="text-destructive">*</span>
                    </Label>
                    <Input id="position" required className="bg-input border-border text-foreground" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address" className="text-muted-foreground">
                      Alamat lengkap Lembaga Pendidikan pemohon <span className="text-destructive">*</span>
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
                      1. Interes atau fokus yang dituju oleh lembaga pendidikan saat ini (Boleh memilih lebih dari
                      satu) <span className="text-destructive">*</span>
                    </Label>
                    <div className="space-y-2">
                      {[
                        "Transformasi digital organisasi",
                        "Digitalisasi dan otomasi proses kerja administratif yang menjadi beban besar",
                        "Memperbaiki / membangun sistem manajemen dan tatkelola baru di lembaga pendidikan",
                        "Menghadapi dan menyelesaikan tantangan tantangan operasional yang besar",
                        "Menyegarkan dan mengisi Pengurus Yayasan dengan orientasi baru dan modern",
                        "Memahami ancaman era digital maju terhadap keberlangsungan lembaga pendidikan",
                      ].map((item) => (
                        <div key={item} className="flex items-center space-x-2">
                          <Checkbox id={`focus-${item}`} />
                          <Label htmlFor={`focus-${item}`} className="font-normal text-muted-foreground">
                            {item}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Label className="text-muted-foreground">
                      2. Alasan mengapa topik tersebut diperlukan di organisasi pemohon (Boleh memilih lebih dari
                      satu) <span className="text-destructive">*</span>
                    </Label>
                    <div className="space-y-2">
                      {[
                        "Kami perlu pengetahuan dan wawasan awal",
                        "Kami sedang mencari cara memulai digitalisasi lembaga pendidikan",
                        "Kami sedang mencari mitra konsultan/ bantuan yang bisa cocok membantu kami",
                        "Topik yang kami butuhkan itu sedang jadi bahasan di dalam lembaga pendidikan kami",
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
                      3. Ide menyegarkan diri muncul dari mana? (Boleh memilih lebih dari satu){" "}
                      <span className="text-destructive">*</span>
                    </Label>
                    <div className="space-y-2">
                      {["Pengurus Yayasan", "Staff di kantor yayasan", "Ekesekutif Unit Pendidikan", "Orang tua/ wali murid / mahasiswa"].map(
                        (item) => (
                          <div key={item} className="flex items-center space-x-2">
                            <Checkbox id={`idea-${item}`} />
                            <Label htmlFor={`idea-${item}`} className="font-normal text-muted-foreground">
                              {item}
                            </Label>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-muted-foreground">
                      4. Kapan sebaiknya pertemuan awal antara TS dan Lembaga Pendidikan bisa dilakukan secara
                      virtual? <span className="text-destructive">*</span>
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
                    Kirim Permintaan
                  </Button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}