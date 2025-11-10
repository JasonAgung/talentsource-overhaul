"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"

export default function InternshipPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
            Free Internship Program
          </h1>

          <article className="prose prose-invert max-w-none mx-auto mt-12 text-muted-foreground space-y-6">
            <p>TalentSource opens internship and on-the-job experience programs for students and young professionals. This is an ideal ‘on-boarding’ program for participants before joining any real activities and career in life. Participants will be assigned a real project with real targets; all will be done digitally and an experienced mentor where real-life experience will become a unique precious value.</p>
            
            <div>
              <h3 className="text-foreground font-semibold">Grow Through Us Program</h3>
              <p>Various professional areas, ranging from specific skill until more managerial, are available in this ‘Grow Through Us’ program which all related to digital knowledge and skill such as:</p>
              <ul>
                <li>Human resource management</li>
                <li>Marketing and commerce</li>
                <li>Data science</li>
                <li>Process automation</li>
                <li>Build and grow start-up business</li>
                <li>Software development lifecycle (software engineering)</li>
              </ul>
            </div>

            <p>Participants can exercise its maximum capacity and develop its early stage of its professional strength through this honest and helpful no-nonsense program which is unique to TS. Participants maintain its full freedom not to join TS after the program and pursue its career in other opportunity. Those who perform and decide to joint TS group business are also welcome.</p>
            <p>Depending on the volume of participants’ interest, if required, TS will get more industry experienced senior volunteers, including those who work in global companies in Indonesia, to spare their time and energy to provide mentorship service to this program.</p>
          </article>
          
          <div className="mt-16 border-t border-border/50 pt-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground">Formulir Aplikasi Internship</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Manfaatkan program ini untuk mengenal dunia kerja di era digital dengan magang disertai bimbingan coach berpengalaman di TS. Anda memang harus punya komitmen belajar.</p>
            </div>
            <form className="space-y-8">
              <div className="space-y-2">
                <Label htmlFor="name">Nama Pemohon <span className="text-destructive">*</span></Label>
                <Input id="name" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="whatsapp">No kontak WA <span className="text-destructive">*</span></Label>
                <Input id="whatsapp" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="institution">Lembaga Pendidikan Formal atau tempat bekerja anda sekarang <span className="text-destructive">*</span></Label>
                <Input id="institution" required />
              </div>

              <div className="space-y-4">
                <Label>Status studi anda sekarang <span className="text-destructive">*</span></Label>
                <RadioGroup className="space-y-2">
                  {["Mahasiswa semester 3 atau 4", "Mahasiswa tahun terakhir dg beban kuliah minimal", "Sedang mengerjakan Tugas Akhir", "Menunggu sidang akhir dan/ atau wisuda", "Sudah mulai bekerja"].map(item => (
                    <div key={item} className="flex items-center space-x-2">
                      <RadioGroupItem value={item} id={item} />
                      <Label htmlFor={item}>{item}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="start-month">Bulan apa anda siap untuk mengikuti program Free internship TS ini <span className="text-destructive">*</span></Label>
                <Input id="start-month" required />
              </div>

              <div className="space-y-4">
                <Label>Rencana anda sekarang tentang pekerjaan yang anda akan lakukan dalam waktu dekat <span className="text-destructive">*</span></Label>
                <RadioGroup className="space-y-2">
                  {["Wirausaha / entrepreneur", "Bekerja lepas / free lancer", "Menjadi karyawan perusahaan besar", "Mengelola / melanjutkan bisnis ortu/ keluarga", "Meneruskan studi", "Menjadi konsultan"].map(item => (
                    <div key={item} className="flex items-center space-x-2">
                      <RadioGroupItem value={item} id={item} />
                      <Label htmlFor={item}>{item}</Label>
                    </div>
                  ))}
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Other" id="other-plan" />
                    <Label htmlFor="other-plan" className="mr-2">Other:</Label>
                    <Input id="other-plan-text" className="max-w-sm" />
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-4">
                <Label>Bidang Internship yang dipilih (pilih salah satu) <span className="text-destructive">*</span></Label>
                <RadioGroup className="space-y-2">
                  {["Human Resource Management", "Marketing and Commerce", "Data Science / Data Analytics", "Work Process automation", "Build and grow start-up business", "Software development lifecycle (software engineering)"].map(item => (
                    <div key={item} className="flex items-center space-x-2">
                      <RadioGroupItem value={item} id={item} />
                      <Label htmlFor={item}>{item}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="space-y-4">
                <Label>Harapan/ekspektasi anda terhadap program (boleh pilih lebih dari satu) <span className="text-destructive">*</span></Label>
                <div className="space-y-2">
                  {["Mendapat pengalaman kerja nyata", "Mendapatkan ilmu dan pengetahuan yang tidak diberikan di pendidikan formal", "Memahami bagaimana bisnis dijalankan", "Melatih kemandirian dan kesiapan mandiri", "Mendapat kemungkinan untuk segera bisa bekerja"].map(item => (
                    <div key={item} className="flex items-center space-x-2">
                      <Checkbox id={item} />
                      <Label htmlFor={item} className="font-normal">{item}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <Label>Pilihan kota tempat saya akan bekerja dalam waktu dekat <span className="text-destructive">*</span></Label>
                <RadioGroup className="space-y-2">
                  {["Bandung", "Jakarta", "Botabek", "Masih belum menentukan pilihan"].map(item => (
                    <div key={item} className="flex items-center space-x-2">
                      <RadioGroupItem value={item} id={item} />
                      <Label htmlFor={item}>{item}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="space-y-4">
                <Label>Pilihan pelaksanaan program internship ini <span className="text-destructive">*</span></Label>
                <RadioGroup className="space-y-2">
                  {["Sendiri", "Berdua dengan teman kuliah", "Bertiga dengan teman kuliah"].map(item => (
                    <div key={item} className="flex items-center space-x-2">
                      <RadioGroupItem value={item} id={item} />
                      <Label htmlFor={item}>{item}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <Button type="submit" size="lg" className="w-full md:w-auto glow-effect">Kirim Aplikasi</Button>
            </form>

            <p className="mt-12 text-lg font-semibold text-foreground italic text-center">"Let TalentSource be your reliable support to get into the real journey of your life!"</p>
          </div>
        </div>
      </main>
    </div>
  )
}