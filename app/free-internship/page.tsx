"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { PageWrapper } from "@/components/page-wrapper"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const studyStatusOptions = ["Mahasiswa semester 3 atau 4", "Mahasiswa tahun terakhir dg beban kuliah minimal", "Sedang mengerjakan Tugas Akhir", "Menunggu sidang akhir dan/ atau wisuda", "Sudah mulai bekerja"];
const futurePlanOptions = ["Wirausaha / entrepreneur", "Bekerja lepas / free lancer", "Menjadi karyawan perusahaan besar", "Mengelola / melanjutkan bisnis ortu/ keluarga", "Meneruskan studi", "Menjadi konsultan"];
const internshipFields = ["Human Resource Management", "Marketing and Commerce", "Data Science / Data Analytics", "Work Process automation", "Build and grow start-up business", "Software development lifecycle (software engineering)"];
const expectations = ["Mendapat pengalaman kerja nyata", "Mendapatkan ilmu dan pengetahuan yang tidak diberikan di pendidikan formal", "Memahami bagaimana bisnis dijalankan", "Melatih kemandirian dan kesiapan mandiri", "Mendapat kemungkinan untuk segera bisa bekerja"];
const cityOptions = ["Bandung", "Jakarta", "Botabek", "Masih belum menentukan pilihan"];
const teamOptions = ["Sendiri", "Berdua dengan teman kuliah", "Bertiga dengan teman kuliah"];

export default function InternshipPage() {
  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-4 shimmer-text">
            Free Internship Program
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            An ideal 'on-boarding' program for students and young professionals before joining any real activities and career in life.
          </p>
        </div>

        <motion.article
          className="prose prose-invert prose-lg max-w-none mx-auto text-muted-foreground space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p>TalentSource opens internship and on-the-job experience programs for students and young professionals. This is an ideal ‘on-boarding’ program for participants before joining any real activities and career in life. Participants will be assigned a real project with real targets; all will be done digitally and an experienced mentor where real-life experience will become a unique precious value.</p>
          
          <div>
            <h3 className="text-foreground font-semibold">Grow Through Us Program</h3>
            <p>Various professional areas, ranging from specific skill until more managerial, are available in this ‘Grow Through Us’ program which all related to digital knowledge and skill such as:</p>
            <ul>
              {internshipFields.map(field => <li key={field}>{field}</li>)}
            </ul>
          </div>

          <p>Participants can exercise its maximum capacity and develop its early stage of its professional strength through this honest and helpful no-nonsense program which is unique to TS. Participants maintain its full freedom not to join TS after the program and pursue its career in other opportunity. Those who perform and decide to joint TS group business are also welcome.</p>
          <p>Depending on the volume of participants’ interest, if required, TS will get more industry experienced senior volunteers, including those who work in global companies in Indonesia, to spare their time and energy to provide mentorship service to this program.</p>
        </motion.article>

        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
        >
          <Card className="glass-effect border-border/50">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-foreground">Internship Application Form</CardTitle>
              <CardDescription className="max-w-2xl mx-auto">
                Use this program to get to know the working world in the digital era with guidance from experienced coaches at TS.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-8 mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="name">Applicant's Name <span className="text-destructive">*</span></Label>
                        <Input id="name" required className="bg-background/50" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="whatsapp">WhatsApp Contact No. <span className="text-destructive">*</span></Label>
                        <Input id="whatsapp" required className="bg-background/50" />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="institution">Current Educational Institution/Workplace <span className="text-destructive">*</span></Label>
                    <Input id="institution" required className="bg-background/50" />
                </div>

                {[
                    { label: "Your current study status", options: studyStatusOptions, id: "study-status", type: "radio" },
                    { label: "Your current plan for your near-future career", options: futurePlanOptions, id: "future-plan", type: "radio", hasOther: true },
                    { label: "Chosen Internship Field (select one)", options: internshipFields, id: "internship-field", type: "radio" },
                    { label: "Your expectations for the program (select one or more)", options: expectations, id: "expectations", type: "checkbox" },
                    { label: "Preferred city to work in the near future", options: cityOptions, id: "city", type: "radio" },
                    { label: "Choice of internship implementation", options: teamOptions, id: "team", type: "radio" },
                ].map(field => (
                    <div key={field.id} className="space-y-4 rounded-lg border border-border/50 p-4">
                        <Label className="font-semibold">{field.label} <span className="text-destructive">*</span></Label>
                        {field.type === 'radio' ? (
                            <RadioGroup className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {field.options.map(item => (
                                    <div key={item} className="flex items-center space-x-3">
                                        <RadioGroupItem value={item} id={`${field.id}-${item}`} />
                                        <Label htmlFor={`${field.id}-${item}`} className="font-normal text-muted-foreground">{item}</Label>
                                    </div>
                                ))}
                                {field.hasOther && (
                                    <div className="flex items-center space-x-3">
                                        <RadioGroupItem value="Other" id={`${field.id}-other`} />
                                        <Label htmlFor={`${field.id}-other`} className="font-normal text-muted-foreground mr-2">Other:</Label>
                                        <Input id={`${field.id}-other-text`} className="max-w-sm bg-background/50" />
                                    </div>
                                )}
                            </RadioGroup>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {field.options.map(item => (
                                    <div key={item} className="flex items-center space-x-3">
                                        <Checkbox id={`${field.id}-${item}`} />
                                        <Label htmlFor={`${field.id}-${item}`} className="font-normal text-muted-foreground">{item}</Label>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
                
                <div className="space-y-2 rounded-lg border border-border/50 p-4">
                    <Label htmlFor="start-month" className="font-semibold">What month are you ready to start this program? <span className="text-destructive">*</span></Label>
                    <Input id="start-month" required placeholder="e.g., January 2025" className="bg-background/50" />
                </div>

                <div className="pt-4">
                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Submit Application</Button>
                </div>
              </form>
              <p className="mt-12 text-lg font-semibold text-primary italic text-center">"Let TalentSource be your reliable support to get into the real journey of your life!"</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </PageWrapper>
  )
}
