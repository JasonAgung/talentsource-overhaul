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
                <div className="space-y-4">
                  <h3 className="text-foreground font-semibold text-xl">Program Pengembangan Sosial dan Komunitas</h3>
                  <p>Program ini dirancang khusus untuk mendukung:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Pengurus Yayasan Pendidikan (khususnya swasta)</li>
                    <li>Tim Kantor Yayasan Pendidikan</li>
                    <li>
                      Eksekutif/Manajemen Sekolah/Universitas (Kepala Sekolah, Wakil Kepala Sekolah, Ketua Sekolah
                      Tinggi, Wakil Ketua, Rektor, dan Wakil Rektor)
                    </li>
                  </ul>
                </div><div className="space-y-4">
  <p>
    Fokus utama program ini adalah berbagi pengetahuan dan coaching, bukan penggalangan dana. Kami
    bertujuan untuk:
  </p>
  <ul className="list-disc list-inside ml-4 space-y-1">
    <li>Menyegarkan sistem dan praktik manajemen serta tata kelola sekolah/universitas.</li>
    <li>
      Menyelaraskan proses kerja dengan teknik dan metode yang relevan di era ekonomi digital.
    </li>
    <li>
      Mempersiapkan sekolah/universitas agar tetap relevan dan adaptif terhadap gaya hidup digital
      generasi mendatang (Gen Z, Alpha, Beta, dll.).
    </li>
  </ul>
</div>
                            </article>
              
                            <div className="mt-12 pt-8 border-t border-border">
                              <h2 className="text-2xl font-bold text-foreground text-center mb-8">Manfaat Dukungan Pendidikan Kami</h2>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-card p-6 rounded-lg shadow-md border border-border text-center">
                                  <h3 className="text-xl font-semibold text-foreground mb-2">Sistem Manajemen Modern</h3>
                                  <p className="text-muted-foreground">Penyegaran sistem dan praktik manajemen serta tata kelola yang relevan dengan era digital.</p>
                                </div>
                                <div className="bg-card p-6 rounded-lg shadow-md border border-border text-center">
                                  <h3 className="text-xl font-semibold text-foreground mb-2">Adaptasi Era Digital</h3>
                                  <p className="text-muted-foreground">Penyelarasan proses kerja dengan teknik dan cara baru yang sesuai dengan ekonomi digital.</p>
                                </div>
                                <div className="bg-card p-6 rounded-lg shadow-md border border-border text-center">
                                  <h3 className="text-xl font-semibold text-foreground mb-2">Relevansi Generasi Mendatang</h3>
                                  <p className="text-muted-foreground">Mempersiapkan lembaga pendidikan agar tetap relevan di mata Gen Z, Alpha, Beta, dan generasi selanjutnya.</p>
                                </div>
                              </div>
                            </div>
              
                            <div className="mt-16 border-t border-border pt-12">
                              <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-foreground">Permintaan Layanan Dukungan (Edu Support)</h2>
                                <p className="text-muted-foreground mt-2 max-w-3xl mx-auto">
                                  TalentSource siap memberikan panduan, pengalaman, dan saran untuk membantu lembaga pendidikan Anda
                                  menyegarkan sistem dan beradaptasi dengan era digital. Kami berkomitmen untuk mendukung kebutuhan
                                  Anda.
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