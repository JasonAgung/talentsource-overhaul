"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ClientDetailsModal } from "./client-details-modal"

interface Client {
  name: string
  logo: string
  description: string
  featured?: boolean // Jika true, muncul di Grid atas. Jika false/kosong, hanya di carousel bawah.
}

const clients: Client[] = [
  { name: "Bank BCA", logo: "/bca-bank-logo.png",featured: true, description: "Bank Central Asia (BCA) is one of the largest private banks in Indonesia, offering a wide range of financial services." },
  { name: "Telkomsel", logo: "/telkomsel-logo.png", featured: true, description: "Telkomsel is the largest cellular telecommunications services provider in Indonesia." },
  { name: "Trikomsel", logo: "/trikomsel.png", featured: false, description: "" },
  { name: "Agit", logo: "/agit.png", featured: false, description: "" },
  { name: "Bumi Menara Internusa-logo", logo: "/Bumi Menara Internusa-logo.jpg", featured: true, description: "Otomasi penyiapan dokumentasi export menggunakan RPA \n Dokumen yang melibatkan beberapa bagian/ divisi \n Menyangkut juga akses ke beberapa web otoritas export \n Meliputi dokumen pre dan post shipment" },
  { name: "BSI Syariah", logo: "/BSI Syariah.png", featured: true, description: "Desain dan implementasi sistem Smart Vault untuk Bullion Bank (Bank Emas) \n Sistem yang dikembangkan meliputi hardware dan software \n Salah satu bentuk penerapan IoT pada proses bisnis \n " },
  { name: "Telkom Indonesia", logo: "/telkom-indonesia-logo.png", featured: true, description: "Telkom Indonesia is a state-owned telecommunication company and the largest in the country." },
  { name: "Pegadaian", logo: "/pegadaian-logo.png", featured: true, description: "Pegadaian is a state-owned company in Indonesia providing pawn services and other financial solutions." },
  { name: "Tower Bersama", logo: "/tower-bersama-logo.png", featured: true, description: "Tower Bersama Infrastructure is a leading independent telecommunication tower provider in Indonesia." },
  { name: "Peruri", logo: "/peruri-logo.png", featured: true, description: "Peruri is the state-owned company responsible for printing the Indonesian rupiah currency and other security documents." },
  { name: "Yayasan Pendidikan Warga", logo: "/yayasan-pendidikan-warga.png", featured: false, description: "" },
  { name: "INKA", logo: "/inka-logo.png", featured: true, description: "INKA (Industri Kereta Api) is a state-owned rolling stock manufacturer in Indonesia." },
  { name: "Astra Infra", logo: "/astra-infra-logo.png", featured: true, description: "Astra Infra is a leading investor and operator in the Indonesian infrastructure sector, focusing on toll roads and ports." },
  { name: "Nestle", logo: "/generic-bird-nest-logo.png", featured: true, description: "Nestlé is a Swiss multinational food and drink processing conglomerate corporation headquartered in Vevey, Vaud, Switzerland." },
  { name: "Infomedia", logo: "/infomedia-logo.png", featured: true, description: "Infomedia Nusantara is a subsidiary of Telkom Indonesia, focusing on business process management and contact center services." },
  { name: "Unpar", logo: "/unpar-university-logo.jpg", featured: true, description: "Parahyangan Catholic University (Unpar) is one of the oldest and most prestigious private universities in Indonesia." },
  { name: "Cibavision", logo: "/cibavision-logo.png", featured: true, description: "CIBA Vision was a manufacturer of contact lenses and lens care products, now part of Alcon." },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
}

export function ClientsSection() {
  const [selectedClient, setSelectedClient] = useState<Client | null>(null)

  return (
    <>
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-background to-background dark:from-blue-950/10 dark:via-background dark:to-background" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="text-sm font-semibold text-primary">Trusted Partners</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Trusted by Leading Organizations
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
              We've partnered with major Indonesian companies across telecommunications, banking, manufacturing, and education sectors to drive digital transformation
            </p>
          </div>

          {/* 3. GRID UTAMA: Hanya menampilkan yang FEATURED */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {clients
              .filter((client) => client.featured === true) 
              .map((client) => (
                <motion.div 
                  key={client.name} 
                  variants={itemVariants} 
                  onClick={() => setSelectedClient(client)}
                  className="cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedClient(client);
                    }
                  }}
                >
                  <Card className="bg-white/50 dark:bg-card/30 border-primary/10 hover:border-primary/30 hover:bg-white dark:hover:bg-card/60 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 backdrop-blur-sm group h-full">
                    <CardContent className="p-6 flex items-center justify-center h-24">
                      <img
                        src={client.logo || "/placeholder.svg"}
                        alt={`${client.name} logo`}
                        className="max-w-full h-18 object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-110"
                      />
                    </CardContent>
                  </Card>
                </motion.div>
            ))}
          </motion.div>

          {/* 4. CAROUSEL: Menampilkan SEMUA data (Tanpa Filter) */}
          <div className="text-center mb-40">
            <h3 className="text-2xl font-bold text-foreground mb-8">Our Clients</h3>
            <div className="relative w-full overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
              
              <div className="flex animate-scroll-right-to-left">
                {[...clients, ...clients].map((client, index) => (
                  <div 
                    key={`${client.name}-${index}`} // Key unik gabungan nama & index
                    className="flex-shrink-0 w-48 mx-4 cursor-pointer hover:opacity-80 transition-opacity"
                    // onClick={() => setSelectedClient(client)} // Bisa diklik juga untuk lihat detail
                  >
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="max-w-full h-16 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Case studies section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 backdrop-blur-sm">
              <CardContent className="p-8 md:p-12">
                <h3 className="text-2xl font-bold text-foreground mb-2">Recent Success Stories</h3>
                <p className="text-muted-foreground mb-8">
                  Driving measurable impact through innovation and strategic partnerships
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      title: "Advanced Fraud Detection",
                      description: "AI-powered system implementation reducing fraudulent transactions by 87%",
                      metric: "87%"
                    },
                    {
                      title: "Educational Analytics",
                      description: "Data-driven insights for student success and institutional improvement",
                      metric: "92%"
                    },
                    {
                      title: "Revenue Optimization",
                      description: "Analytics-driven strategy increasing retailer revenue by significant margins",
                      metric: "156%"
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="bg-card/50 dark:bg-background/50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="text-3xl font-bold text-primary mb-2">{item.metric}</div>
                      <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
      <ClientDetailsModal client={selectedClient} onClose={() => setSelectedClient(null)} />
    </>
  )
}