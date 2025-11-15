"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import Aurora from "@/components/Aurora"

export default function InternshipPage() {
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
                Start Your Career
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">Free Internship Program</h1>
            </div>
          </section>

          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
              <article className="prose dark:prose-invert max-w-none mx-auto mt-12 text-muted-foreground space-y-6">
                <div className="space-y-6">
                  <p>
                    TalentSource offers internship and on-the-job experience programs designed for students and young
                    professionals. This program serves as an ideal 'on-boarding' experience, preparing participants
                    for real-world career challenges.
                  </p>
                  <p>
                    Interns will be assigned to real digital projects with tangible targets, guided by experienced
                    mentors. This hands-on approach ensures that participants gain unique and valuable real-life
                    experience.
                  </p>
                
                  <div>
                    <h3 className="text-foreground font-semibold">Grow Through Us Program</h3>
                    <p>
                      Our 'Grow Through Us' program offers opportunities across various professional areas, from
                      specific skills to managerial roles, all focused on digital knowledge and capabilities. These
                      include:
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Human resource management</li>
                      <li>Marketing and commerce</li>
                      <li>Data science</li>
                      <li>Process automation</li>
                      <li>Build and grow start-up business</li>
                      <li>Software development lifecycle (software engineering)</li>
                    </ul>
                  </div>
                
                  <p>
                    This unique TalentSource program empowers participants to develop their professional strengths
                    and maximize their potential in an honest and supportive environment. Participants have the
                    freedom to pursue other opportunities after the program, or they are welcome to join the
                    TalentSource group business if they perform well and choose to do so.
                  </p>
                  <p>
                    To ensure the highest quality mentorship, TalentSource will engage experienced senior volunteers
                    from various industries, including those from global companies in Indonesia, to provide guidance
                    and support, especially if there is a high volume of participant interest.
                  </p>
                  </div>
                  <div className="mt-12 pt-8 border-t border-border">
                    <h2 className="text-2xl font-bold text-foreground text-center mb-8">Why Join Our Internship Program?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-card p-6 rounded-lg shadow-md border border-border">
                        <h3 className="text-xl font-semibold text-foreground mb-2">Real-World Projects</h3>
                        <p className="text-muted-foreground">Work on actual digital projects with clear targets, gaining practical experience that matters.</p>
                      </div>
                      <div className="bg-card p-6 rounded-lg shadow-md border border-border">
                        <h3 className="text-xl font-semibold text-foreground mb-2">Expert Mentorship</h3>
                        <p className="text-muted-foreground">Learn from experienced mentors who provide guidance and insights into the industry.</p>
                      </div>
                      <div className="bg-card p-6 rounded-lg shadow-md border border-border">
                        <h3 className="text-xl font-semibold text-foreground mb-2">Skill Development</h3>
                        <p className="text-muted-foreground">Develop professional strengths and digital skills across various domains.</p>
                      </div>
                      <div className="bg-card p-6 rounded-lg shadow-md border border-border">
                        <h3 className="text-xl font-semibold text-foreground mb-2">Career Flexibility</h3>
                        <p className="text-muted-foreground">Gain valuable experience without commitment, with opportunities to join TalentSource if you excel.</p>
                      </div>
                    </div>
                  </div>
                </article>

              <div className="mt-16 border-t border-border pt-12">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-foreground">Formulir Aplikasi Internship</h2>
                  <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                    Manfaatkan kesempatan magang ini untuk mengenal dunia kerja digital, didampingi coach berpengalaman
                    dari TalentSource. Kami mencari individu dengan komitmen tinggi untuk belajar dan berkembang.
                  </p>                </div>
                <form className="space-y-8">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-muted-foreground">
                      Nama Pemohon <span className="text-destructive">*</span>
                    </Label>
                    <Input id="name" required className="bg-input border-border text-foreground" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="whatsapp" className="text-muted-foreground">
                      No kontak WA <span className="text-destructive">*</span>
                    </Label>
                    <Input id="whatsapp" required className="bg-input border-border text-foreground" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="institution" className="text-muted-foreground">
                      Lembaga Pendidikan Formal atau tempat bekerja anda sekarang <span className="text-destructive">*</span>
                    </Label>
                    <Input id="institution" required className="bg-input border-border text-foreground" />
                  </div>

                  <div className="space-y-4">
                    <Label className="text-muted-foreground">
                      Status studi anda sekarang <span className="text-destructive">*</span>
                    </Label>
                    <RadioGroup className="space-y-2">
                      {[
                        "Mahasiswa semester 3 atau 4",
                        "Mahasiswa tahun terakhir dg beban kuliah minimal",
                        "Sedang mengerjakan Tugas Akhir",
                        "Menunggu sidang akhir dan/ atau wisuda",
                        "Sudah mulai bekerja",
                      ].map((item) => (
                        <div key={item} className="flex items-center space-x-2">
                          <RadioGroupItem value={item} id={item} />
                          <Label htmlFor={item} className="text-muted-foreground">
                            {item}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="start-month" className="text-muted-foreground">
                      Bulan apa anda siap untuk mengikuti program Free internship TS ini{" "}
                      <span className="text-destructive">*</span>
                    </Label>
                    <Input id="start-month" required className="bg-input border-border text-foreground" />
                  </div>

                  <div className="space-y-4">
                    <Label className="text-muted-foreground">
                      Rencana anda sekarang tentang pekerjaan yang anda akan lakukan dalam waktu dekat{" "}
                      <span className="text-destructive">*</span>
                    </Label>
                    <RadioGroup className="space-y-2">
                      {[
                        "Wirausaha / entrepreneur",
                        "Bekerja lepas / free lancer",
                        "Menjadi karyawan perusahaan besar",
                        "Mengelola / melanjutkan bisnis ortu/ keluarga",
                        "Meneruskan studi",
                        "Menjadi konsultan",
                      ].map((item) => (
                        <div key={item} className="flex items-center space-x-2">
                          <RadioGroupItem value={item} id={item} />
                          <Label htmlFor={item} className="text-muted-foreground">
                            {item}
                          </Label>
                        </div>
                      ))}
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Other" id="other-plan" />
                        <Label htmlFor="other-plan" className="mr-2 text-muted-foreground">
                          Other:
                        </Label>
                        <Input
                          id="other-plan-text"
                          className="max-w-sm bg-input border-border text-foreground"
                        />
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-4">
                    <Label className="text-muted-foreground">
                      Bidang Internship yang dipilih (pilih salah satu) <span className="text-destructive">*</span>
                    </Label>
                    <RadioGroup className="space-y-2">
                      {[
                        "Human Resource Management",
                        "Marketing and Commerce",
                        "Data Science / Data Analytics",
                        "Work Process automation",
                        "Build and grow start-up business",
                        "Software development lifecycle (software engineering)",
                      ].map((item) => (
                        <div key={item} className="flex items-center space-x-2">
                          <RadioGroupItem value={item} id={item} />
                          <Label htmlFor={item} className="text-muted-foreground">
                            {item}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div className="space-y-4">
                    <Label className="text-muted-foreground">
                      Harapan/ekspektasi anda terhadap program (boleh pilih lebih dari satu){" "}
                      <span className="text-destructive">*</span>
                    </Label>
                    <div className="space-y-2">
                      {[
                        "Mendapat pengalaman kerja nyata",
                        "Mendapatkan ilmu dan pengetahuan yang tidak diberikan di pendidikan formal",
                        "Memahami bagaimana bisnis dijalankan",
                        "Melatih kemandirian dan kesiapan mandiri",
                        "Mendapat kemungkinan untuk segera bisa bekerja",
                      ].map((item) => (
                        <div key={item} className="flex items-center space-x-2">
                          <Checkbox id={item} />
                          <Label htmlFor={item} className="font-normal text-muted-foreground">
                            {item}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Label className="text-muted-foreground">
                      Pilihan kota tempat saya akan bekerja dalam waktu dekat <span className="text-destructive">*</span>
                    </Label>
                    <RadioGroup className="space-y-2">
                      {["Bandung", "Jakarta", "Botabek", "Masih belum menentukan pilihan"].map((item) => (
                        <div key={item} className="flex items-center space-x-2">
                          <RadioGroupItem value={item} id={item} />
                          <Label htmlFor={item} className="text-muted-foreground">
                            {item}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div className="space-y-4">
                    <Label className="text-muted-foreground">
                      Pilihan pelaksanaan program internship ini <span className="text-destructive">*</span>
                    </Label>
                    <RadioGroup className="space-y-2">
                      {["Sendiri", "Berdua dengan teman kuliah", "Bertiga dengan teman kuliah"].map((item) => (
                        <div key={item} className="flex items-center space-x-2">
                          <RadioGroupItem value={item} id={item} />
                          <Label htmlFor={item} className="text-muted-foreground">
                            {item}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <Button type="submit" size="lg" className="w-full md:w-auto">
                    Kirim Aplikasi
                  </Button>
                </form>

                <p className="mt-12 text-lg font-semibold text-foreground italic text-center">
                  "Let TalentSource be your reliable support to get into the real journey of your life!"
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}