"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { ArrowRight, Calendar, FileText } from 'lucide-react'
import { motion } from "framer-motion"

const opEdData = [
  {
    date: "December 17, 2021",
    title: "e-IDR, Uang Digital Bank Indonesia?",
    excerpt: "Judul diatas bukan dari Bank Indonesia (BI) tetapi dari angan-angan saya yang muncul setelah menyadari bahwa di tahun 2020 sudah ada 60 negara, atau 80% lebih bank sentral di dunia yang sudah mulai setuju, menyiapkan atau melakukan uang digital yang di terbitkan oleh...",
    link: "https://bandungtalentsource.com/2021/12/17/e-idr-uang-digital-bank-indonesia/",
    category: "Digital Economy",
  },
  {
    date: "December 17, 2021",
    title: "Benci Produk Asing, Cinta Produk Lokal? (Sebuah renungan Hari Kebangkitan Nasional)",
    excerpt: "Slogan ini sudah digaungkan setiap rejim, dari Sukarno sampai Jokowi, sudah seumur Republik ini. Pada hari Kebangkitan Nasional 2021, tajuk rumit ini kembali di-curhat-kan oleh Menko Luhut Panjaitan yang menyampaikan dari APBN 1300 triliun rupiah setidaknya ada 300 triliun yang bisa dibelanjakan...",
    link: "https://bandungtalentsource.com/2021/12/17/benci-produk-asing-cinta-produk-lokal/",
    category: "Local Economy",
  },
  {
    date: "December 17, 2021",
    title: "Pendidikan formal RI memasuki era ekonomi digital",
    excerpt: "Menjelang akhir tahun 2017, Mendikbud baru, Apa yang akan dilakukan Nadiem? Dia menghadapi dua sisi yang mandek yaitu birokrasi di kementriannya dan Institusi Pendidikan yang juga sudah sangat baku pakemnya. Kemandekan birokrasi yang kronis perlu segera reorientasi. Biasanya pemimpin berupaya...",
    link: "https://bandungtalentsource.com/2021/12/17/pendidikan-formal-ri-memasuki-era-ekonomi-digital/",
    category: "Education",
  },
  {
    date: "December 17, 2021",
    title: "Bencana Peradaban : Sosial Media Gratis",
    excerpt: "'Gratis adalah model bisnis yang paling mahal yang dibayar oleh kemanusiaan' Tristan Haris pernah bekerja sebagai 'design ethicist' di Google dan kemudian menjadi penyebar paham bahwa revolusi digital melalui social media yang semula terasa mengembangkan pikiran kini sudah...",
    link: "https://bandungtalentsource.com/2021/12/17/bencana-peradaban-sosial-media-gratis/",
    category: "Technology & Society",
  },
  {
    date: "August 3, 2019",
    title: "Transformasi Peradaban Digital Mulai 2020",
    excerpt: "Transformasi Peradaban Digital Mulai 2020. (KOMPAS, 18 Desember 2018) Suryatin Setiawan Senior Digital Consultant and Coach – Komisaris TelkomTelstra Tahun 2020 adalah batu-kilometer yang penting yang menjadi awal masuknya manusia dan peradabannya ke era peradaban dan ekonomi digital tahap lanjut. Itu terjadi setelah dalam 15 tahun terakhir banyak sekali...",
    link: "https://bandungtalentsource.com/2019/08/03/transformasi-peradaban-digital-mulai-2020/",
    category: "Digital Transformation",
  },
  {
    date: "August 1, 2019",
    title: "Digitalisasi Layanan Pemerintah",
    excerpt: "Digitalisasi Layanan Pemerintah (KOMPAS 25 April 2019) Suryatin Setiawan Senior Digital Consultant and Coach – Advisory Board PCU PT Pegadaian Ada kesegelisahan yang membesarkan hati dari Debat Capres keempat Sabtu 30 Maret 2019 yang lalu. Kedua capres menyatakan akan menggunakan Teknologi Digital untuk menjalankan layanan pemerintahan RI. Jokowi menyebut Dilan...",
    link: "https://bandungtalentsource.com/2019/08/01/digitalisasi-layanan-pemerintah/",
    category: "Government",
  },
  {
    date: "July 30, 2019",
    title: "Guru, Murid, dan Pendidikan Era Digital RI",
    excerpt: "Suryatin Setiawan Senior Digital Consultant and Coach – Komisaris TelkomTelstra Salah satu hal paling positif dari majunya peradaban digital yang sudah jadi gaya hidup adalah soal penyebaran ilmu dan pengetahuan. Ketika era pra-internet ilmu dan pengetahuan sangat dibatasi di ruang2 kuliah, lab, perpustakaan dan buku pribadi. Hari ini ilmu di-demokratisasi,...",
    link: "https://bandungtalentsource.com/2019/07/30/guru-murid-dan-pendidikan-era-digital-ri/",
    category: "Education",
  },
  {
    date: "February 22, 2019",
    title: "Cellular 2.0",
    excerpt: "Suryatin Setiawan - Bandung TalentSource [Saya tulis di 27 Feb 2015 dan menjadi realita pada 2018 ] Setelah 20 tahun industri selular beroperasi di Indonesia, sampailah industri ke tahap jenuh, menari pertumbuhan top line 2 digit adalah tugas yg tak mudah, pertumbuhan jumlah pelanggan sudah praktis selesai. Masa emas industri...",
    link: "https://bandungtalentsource.com/2019/02/22/cellular-2-o/",
    category: "Telecommunications",
  },
  {
    date: "November 18, 2017",
    title: "Why Indonesia company can and should leapfrog in digitalization?",
    excerpt: "Let me start by sharing my observation on the attributes of Indonesia enterprises in general and this is mostly about the medium-large companies , state-owned, or private in Indonesia. In terms of the chance to adopt digital technologies , those Indonesia companies have the following advantages : they operate in ...",
    link: "https://bandungtalentsource.com/2017/11/18/why-indonesia-company-can-and-should-leapfrog-in-digitalization/",
    category: "Business Strategy",
  },
  {
    date: "November 12, 2017",
    title: "Why enterprise digitalization matters ?",
    excerpt: "Established running companies these days at least facing two potential real challenges one is, competition including from product substitution, maybe completely un-expectable and coming out in totally different format, and two, is its opex basis If a company think that its products or services will never be replaceable, think deeper ...",
    link: "https://bandungtalentsource.com/2017/11/12/why-enterprise-digitalization-matters/",
    category: "Enterprise Digital",
  },
  {
    date: "November 11, 2017",
    title: "The uncovered potential of Indonesia companies",
    excerpt: "I find many companies in Indonesia, whether they are at the first tier or lower, have an incredible potential to grow and become a big regional player in this gigantic growing ASEAN market as we all can see. But it is very common to see that these potentially great companies ...",
    link: "https://bandungtalentsource.com/2017/11/11/the-uncovered-potential-of-indonesia-companies/",
    category: "Growth Strategy",
  },
  {
    date: "November 10, 2017",
    title: "Pengantar Data Science dan Aplikasinya bagi Pemula",
    excerpt: "Pengantar Data Science dan Aplikasinya bagi Pemula. Bagi mayoritas orang, terlebih lagi yang belum berkecimpung di dunia kerja, barangkali data dianggap tidak penting. Data bisa jadi dianggap berkonotasi dengan \"tumpukan\" angka-angka yang membosankan dan \"meaningless\". Data dianggap menjadi urusan perusahaan atau pemerintah, sehingga merupakan hal yang \"jauh\" dari kehidupan sehari-hari ...",
    link: "https://bandungtalentsource.com/2017/11/10/pengantar-data-science-dan-aplikasinya-bagi-pemula/",
    category: "Data Science",
  },
  {
    date: "November 10, 2017",
    title: "Digitalize your company, find your digital products",
    excerpt: "If you're a company in Indonesia facing digitalization challenges, not really sure how to deal with potential disruptions by the digitalization wave , my team and I are potentially the right partner to help you. Regardless of your business size , a private, public or State owned enterprise we will ...",
    link: "https://bandungtalentsource.com/2017/11/10/digitalize-your-company-find-your-digital-products/",
    category: "Digitalization",
  },
]

const ITEMS_PER_PAGE = 9

export default function OpEd() {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(opEdData.length / ITEMS_PER_PAGE)
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE
  const currentItems = opEdData.slice(indexOfFirstItem, indexOfLastItem)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Digital Economy": "from-blue-500 to-cyan-500",
      "Local Economy": "from-purple-500 to-pink-500",
      "Education": "from-green-500 to-emerald-500",
      "Technology & Society": "from-orange-500 to-red-500",
      "Digital Transformation": "from-indigo-500 to-violet-500",
      "Government": "from-cyan-500 to-blue-500",
      "Telecommunications": "from-pink-500 to-rose-500",
      "Business Strategy": "from-amber-500 to-yellow-500",
      "Enterprise Digital": "from-lime-500 to-green-500",
      "Growth Strategy": "from-teal-500 to-cyan-500",
      "Data Science": "from-sky-500 to-blue-500",
      "Digitalization": "from-violet-500 to-purple-500",
    }
    return colors[category] || "from-primary to-accent"
  }

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {currentItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group h-full p-6 hover:shadow-xl transition-all duration-300 border-primary/10 hover:border-primary/30 bg-card/50 backdrop-blur flex flex-col overflow-hidden relative">
                {/* Gradient Background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className={`absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br ${getCategoryColor(item.category)} opacity-5 blur-3xl`} />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Category & Date */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getCategoryColor(item.category)} opacity-90`}>
                      {item.category}
                    </span>
                    <div className="flex items-center text-xs text-muted-foreground gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {item.date}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">{item.title}</h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">{item.excerpt}</p>

                  {/* Read More Link */}
                  <Link href={item.link}>
                    <Button variant="outline" className="w-full gap-2 text-primary hover:bg-primary/10 border-primary/20 hover:border-primary/50">
                      <FileText className="h-4 w-4" />
                      Read Full Article
                      <ArrowRight className="h-4 w-4 ml-auto group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-16 flex justify-center items-center space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <motion.button
              key={number}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => paginate(number)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                currentPage === number
                  ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg"
                  : "bg-card border border-primary/10 text-foreground hover:bg-primary/10 hover:border-primary/30"
              }`}
            >
              {number}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
