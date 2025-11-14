"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { ArrowRight } from 'lucide-react';

const opEdData = [
    {
        date: "December 17, 2021",
        title: "e-IDR, Uang Digital Bank Indonesia?",
        excerpt: "Judul diatas bukan dari Bank Indonesia (BI) tetapi dari angan-angan saya yang muncul setelah menyadari bahwa di tahun 2020 sudah ada 60 negara, atau 80% lebih bank sentral di dunia yang sudah mulai setuju, menyiapkan atau melakukan uang digital yang di terbitkan oleh...",
        link: "/op-ed/e-idr-uang-digital"
      },
      {
        date: "December 17, 2021",
        title: "Benci Produk Asing, Cinta Produk Lokal? (Sebuah renungan Hari Kebangkitan Nasional)",
        excerpt: "Slogan ini sudah digaungkan setiap rejim, dari Sukarno sampai Jokowi, sudah seumur Republik ini. Pada hari Kebangkitan Nasional 2021, tajuk rumit ini kembali di-curhat-kan oleh Menko Luhut Panjaitan yang menyampaikan dari APBN 1300 triliun rupiah setidaknya ada 300 triliun yang bisa dibelanjakan...",
        link: "/op-ed/benci-produk-asing"
      },
      {
        date: "December 17, 2021",
        title: "Pendidikan formal RI memasuki era ekonomi digital",
        excerpt: "Menjelang akhir tahun 2017, Mendikbud baru, Apa yang akan dilakukan Nadiem? Dia menghadapi dua sisi yang mandek yaitu birokrasi di kementriannya dan Institusi Pendidikan yang juga sudah sangat baku pakemnya. Kemandekan birokrasi yang kronis perlu segera reorientasi. Biasanya pemimpin berupaya...",
        link: "/op-ed/pendidikan-formal-ri"
      },
      {
        date: "December 17, 2021",
        title: "Bencana Peradaban : Sosial Media Gratis",
        excerpt: "'Gratis adalah model bisnis yang paling mahal yang dibayar oleh kemanusiaan' Tristan Haris pernah bekerja sebagai ‘design ethicist’ di Google dan kemudian menjadi penyebar paham bahwa revolusi digital melalui social media yang semula terasa mengembangkan pikiran kini sudah...",
        link: "/op-ed/bencana-peradaban"
      },
      { date: "August 3, 2019", 
        title: "Transformasi Peradaban Digital Mulai 2020", 
        excerpt: "Transformasi Peradaban Digital Mulai 2020. (KOMPAS, 18 Desember 2018) Suryatin Setiawan Senior Digital Consultant and Coach – Komisaris TelkomTelstra[download id=”2448″] Tahun 2020 adalah batu-kilometer yang penting yang menjadi awal masuknya manusia dan peradabannya ke era peradaban dan ekonomi digital tahap lanjut. Itu terjadi setelah dalam 15 tahun terakhir banyak sekali...", 
        link: "/op-ed/transformasi-peradaban" 
      },
      { date: "August 1, 2019", 
        title: "Digitalisasi Layanan Pemerintah", 
        excerpt: "Digitalisasi Layanan Pemerintah (KOMPAS 25 April 2019) Suryatin Setiawan Senior Digital Consultant and Coach – Advisory Board PCU PT Pegadaian Ada kesegelisahan yang membesarkan hati dari Debat Capres keempat Sabtu 30 Maret 2019 yang lalu. Kedua capres menyatakan akan menggunakan Teknologi Digital untuk menjalankan layanan pemerintahan RI. Jokowi menyebut Dilan...", 
        link: "/op-ed/digitalisasi-layanan" 
      },
      { date: "July 30, 2019", 
        title: "Guru, Murid, dan Pendidikan Era Digital RI", 
        excerpt: "Suryatin Setiawan Senior Digital Consultant and Coach – Komisaris TelkomTelstra Salah satu hal paling positif dari majunya peradaban digital yang sudah jadi gaya hidup adalah soal penyebaran ilmu dan pengetahuan. Ketika era pra-internet ilmu dan pengetahuan sangat dibatasi di ruang2 kuliah, lab, perpustakaan dan buku pribadi. Hari ini ilmu di-demokratisasi,...", 
        link: "/op-ed/guru-murid-pendidikan" 
      },
      { date: "February 22, 2019", 
        title: "Cellular 2.0", 
        excerpt: "Suryatin Setiawan - Bandung TalentSource [Saya tulis di 27 Feb 2015 dan menjadi realita pada 2018 ] Setelah 20 tahun industri selular beroperasi di Indonesia, sampailah industri ke tahap jenuh, menari pertumbuhan top line 2 digit adalah tugas yg tak mudah, pertumbuhan jumlah pelanggan sudah praktis selesai. Masa emas industri...", 
        link: "/op-ed/cellular-2.0" 
      },
      { date: "November 18, 2017", 
        title: "Why Indonesia company can and should leapfrog in digitalization?", 
        excerpt: "Let me start by sharing my observation on the attributes of Indonesia enterprises in general and this is mostly about the medium-large companies , state-owned, or private in Indonesia. In terms of the chance to adopt digital technologies , those Indonesia companies have the following advantages : they operate in ...", 
        link: "/op-ed/Why Indonesia company" 
      },
      { date: "November 12, 2017", 
        title: "Why enterprise digitalization matters ?", 
        excerpt: "Established running companies these days at least facing two potential real challenges one is, competition including from product substitution, maybe completely un-expectable and coming out in totally different format, and two, is its opex basis If a company think that its products or services will never be replaceable, think deeper ...", 
        link: "/op-ed/Why enterprise digitalization matters" 
      },
      { date: "November 11, 2017", 
        title: "The uncovered potential of Indonesia companies", 
        excerpt: "I find many companies in Indonesia, whether they are at the first tier or lower, have an incredible potential to grow and become a big regional player in this gigantic growing ASEAN market as we all can see. But it is very common to see that these potentially great companies ...", 
        link: "/op-ed/The uncovered potential of Indonesia companies" 
      },
      { date: "November 10, 2017", 
        title: "Pengantar Data Science dan Aplikasinya bagi Pemula", 
        excerpt: "Pengantar Data Science dan Aplikasinya bagi Pemula. Bagi mayoritas orang, terlebih lagi yang belum berkecimpung di dunia kerja, barangkali data dianggap tidak penting. Data bisa jadi dianggap berkonotasi dengan “tumpukan” angka-angka yang membosankan dan “meaningless”. Data dianggap menjadi urusan perusahaan atau pemerintah, sehingga merupakan hal yang “jauh” dari kehidupan sehari-hari ...", 
        link: "/op-ed/Pengantar Data Science dan Aplikasinya bagi Pemula" 
      },
      { date: "November 10, 2017", 
        title: "Digitalize your company, find your digital products", 
        excerpt: "If you're a company in Indonesia facing digitalization challenges, not really sure how to deal with potential disruptions by the digitalization wave , my team and I are potentially the right partner to help you. Regardless of your business size , a private, public or State owned enterprise we will ...", 
        link: "/op-ed/Digitalize your company" },
];

const ITEMS_PER_PAGE = 6;

const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
};

export default function OpEd() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(opEdData.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = opEdData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        key={currentPage} // Re-trigger animation on page change
        variants={gridContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {currentItems.map((item, index) => (
          <motion.div 
            key={index}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="h-full flex flex-col bg-card border shadow-sm hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardDescription>{item.date}</CardDescription>
                <CardTitle className="text-xl font-bold text-foreground">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground line-clamp-4">{item.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="p-0 text-primary hover:text-primary/80">
                  <Link href={item.link}>
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-16">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                href="#" 
                onClick={(e) => { e.preventDefault(); handlePageChange(currentPage - 1); }}
                className={currentPage === 1 ? 'pointer-events-none opacity-50' : undefined}
              />
            </PaginationItem>
            {[...Array(totalPages)].map((_, i) => (
              <PaginationItem key={i}>
                <PaginationLink 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); handlePageChange(i + 1); }}
                  isActive={currentPage === i + 1}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext 
                href="#" 
                onClick={(e) => { e.preventDefault(); handlePageChange(currentPage + 1); }}
                className={currentPage === totalPages ? 'pointer-events-none opacity-50' : undefined}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
}
