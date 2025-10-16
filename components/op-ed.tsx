"use client";

import { useState } from 'react';
import Link from 'next/link';

// Data Dummy untuk semua artikel Op-ed.
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
  {
    date: "August 3, 2019",
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

const ITEMS_PER_PAGE = 8; 

export default function OpEd() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(opEdData.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = opEdData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      {/* === Title Bar Section === */}
      <section className="bg-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-wider">
            OP-ED
          </h1>
          <div className="text-sm">
            <span>Home</span> / <span className="font-semibold">Op-ed</span>
          </div>
        </div>
      </section>

      {/* === Articles Grid Section === */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentItems.map((item, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-6 flex flex-col text-sm">
                <p className="text-gray-500 mb-2">{item.date}</p>
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex-grow">{item.title}</h3>
                <p className="text-gray-600 mb-6">{item.excerpt}</p>
                <div className="mt-auto">
                  <Link 
                    href={item.link} 
                    className="inline-block w-full text-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition-colors"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* === Pagination Section === */}
          <div className="mt-16 flex justify-center items-center space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={`px-4 py-2 rounded-md font-medium ${currentPage === number ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              >
                {number}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}