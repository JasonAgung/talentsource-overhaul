"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"

export default function EducationSupportPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
            Education Support
          </h1>

          <article className="prose prose-invert max-w-none mx-auto mt-12 text-muted-foreground space-y-6">
            <div>
              <h3 className="text-foreground font-semibold">Program Pengembangan Sosial dan Komunitas</h3>
              <p>Program ini ditujukan untuk:</p>
              <ul>
                <li>Pengurus Yayasan Pendidikan, khususnya swasta</li>
                <li>Tim kantor Yayasan Pendidikan</li>
                <li>Ekesekutif/ manajemen sekolah/ universitas (Kepala sekolah dan para wakasek, Ketua sekolah tinggi dan para wakil ketua, Rektor dan para wakil rektor)</li>
              </ul>
            </div>
            <div>
              <p>Program ini bukan program ‘fund raising’, melainkan bantuan TS dalam bentuk sharing dan coaching dengan tujuan:</p>
              <ul>
                <li>Menyegarkan sistem dan praktek manajemen dan governance sekolah/ universitas</li>
                <li>Menyelaraskan proses kerja sekolah dan universitas dengan teknik/cara baru yang sudah jamak digunakan pada organisasi yang masuk ke era ekonomi digital</li>
                <li>Menyiapkan sekolah/universitas untuk melanjutkan perjalanan dan tetap relevan dengan gaya-hidup digital, sehingga sekolah/universitas tetap relevan di mata Gen Z, Alpha, Beta dst</li>
              </ul>
            </div>
          </article>

          <div className="mt-16 border-t border-border/50 pt-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground">Permintaan Layanan Dukungan (Edu Support)</h2>
              <p className="text-muted-foreground mt-2 max-w-3xl mx-auto">TS akan membantu memberikan tuntunan, pengalaman, dan saran yang diperlukan lembaga pendidikan untuk menyegarkan sistem dan siap memasuki era digital maju. Kami akan berusaha sebaik mungkin memenuhi permintaan dan membantu Anda.</p>
            </div>

            <form className="space-y-8">
              <div className="space-y-2">
                <Label htmlFor="name">Nama Pemohon <span className="text-destructive">*</span></Label>
                <Input id="name" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="institution">Yayasan/ Sekolah/ Universitas/ Lembaga Pendidikan lainnya <span className="text-destructive">*</span></Label>
                <Input id="institution" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="position">Pekerjaan saat ini/ posisi pemohon <span className="text-destructive">*</span></Label>
                <Input id="position" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Alamat lengkap Lembaga Pendidikan pemohon <span className="text-destructive">*</span></Label>
                <Textarea id="address" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact">No kontak WA dan email pemohon <span className="text-destructive">*</span></Label>
                <Input id="contact" required />
              </div>

              <div className="space-y-4">
                <Label>1. Interes atau fokus yang dituju oleh lembaga pendidikan saat ini (Boleh memilih lebih dari satu) <span className="text-destructive">*</span></Label>
                <div className="space-y-2">
                  {["Transformasi digital organisasi", "Digitalisasi dan otomasi proses kerja administratif yang menjadi beban besar", "Memperbaiki / membangun sistem manajemen dan tatkelola baru di lembaga pendidikan", "Menghadapi dan menyelesaikan tantangan tantangan operasional yang besar", "Menyegarkan dan mengisi Pengurus Yayasan dengan orientasi baru dan modern", "Memahami ancaman era digital maju terhadap keberlangsungan lembaga pendidikan"].map(item => (
                    <div key={item} className="flex items-center space-x-2">
                      <Checkbox id={`focus-${item}`} />
                      <Label htmlFor={`focus-${item}`} className="font-normal">{item}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <Label>2. Alasan mengapa topik tersebut diperlukan di organisasi pemohon (Boleh memilih lebih dari satu) <span className="text-destructive">*</span></Label>
                <div className="space-y-2">
                  {["Kami perlu pengetahuan dan wawasan awal", "Kami sedang mencari cara memulai digitalisasi lembaga pendidikan", "Kami sedang mencari mitra konsultan/ bantuan yang bisa cocok membantu kami", "Topik yang kami butuhkan itu sedang jadi bahasan di dalam lembaga pendidikan kami", "Kami sedang mulai belajar dan mengembangkan diri"].map(item => (
                    <div key={item} className="flex items-center space-x-2">
                      <Checkbox id={`reason-${item}`} />
                      <Label htmlFor={`reason-${item}`} className="font-normal">{item}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <Label>3. Ide menyegarkan diri muncul dari mana? (Boleh memilih lebih dari satu) <span className="text-destructive">*</span></Label>
                <div className="space-y-2">
                  {["Pengurus Yayasan", "Staff di kantor yayasan", "Ekesekutif Unit Pendidikan", "Orang tua/ wali murid / mahasiswa"].map(item => (
                    <div key={item} className="flex items-center space-x-2">
                      <Checkbox id={`idea-${item}`} />
                      <Label htmlFor={`idea-${item}`} className="font-normal">{item}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label>4. Kapan sebaiknya pertemuan awal antara TS dan Lembaga Pendidikan bisa dilakukan secara virtual? <span className="text-destructive">*</span></Label>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input type="date" id="meeting-date" className="flex-1" />
                  <Input type="time" id="meeting-time" className="flex-1" />
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full md:w-auto glow-effect">Kirim Permintaan</Button>
            </form>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}