// Lokasi: components/case-studies.tsx

import Link from 'next/link';

// Data untuk semua studi kasus, agar mudah dikelola
const caseStudiesData = [
  {
    title: "Case Study: Fraud Detection System - Mobile & Internet Banking",
    content: [
      { type: 'paragraph', text: 'Menggunakan metode gabungan dari Rule Based dan Unsupervised Learning' },
      { type: 'list', items: [
          "Unsupervised Learning",
          "Customer spending behavior",
          "Customer profiling analysis",
          "Geographical locations"
      ]},
      { type: 'paragraph', text: 'Download study case to read more...' }
    ],
    downloadLink: "/path/to/fraud-detection-case-study.pdf"
  },
  {
    title: "Data analytics: Students' social economic grouping",
    content: [
      { type: 'paragraph', text: 'During covid19 pandemic, a school plan to allocate support to students that really need it and at the same time skip the physical on-site survey and interview.' },
      { type: 'paragraph', text: 'Avoid misallocation by analyzing parents/family data (school).' }
    ],
    downloadLink: "/path/to/student-grouping-case-study.pdf"
  },
  {
    title: "Data analytics: Finding the right strategy to increase fee-based income of cellular 'pulsa' retailer",
    content: [
      { type: 'paragraph', text: 'A bank which is also offering cellular minutes/data quota top-up retail intend to find an effective strategy and program which can increase the purchase volume of customers by analyzing the customer behavior and polite data (bank).' }
    ],
    downloadLink: "/path/to/pulsa-retailer-case-study.pdf"
  },
  {
    title: "Machine Learning : Insurance claim checking automation",
    content: [
      { type: 'paragraph', text: 'Claim checking is tedious manual task which can be automated using machine learning model to reduce checking manual process cost more than 50% and maintaining the total lost to very minimum level. (insurance company).' },
      { type: 'paragraph', text: 'Download study case to read more...' }
    ],
    downloadLink: "/path/to/insurance-claim-case-study.pdf"
  },
  {
    title: "Case Study Work Process Streamlining & Automation",
    content: [
      { type: 'paragraph', text: 'A study case of reviewing business processes, perform BPI/BPR and automate processes in leading financial industry...' },
      { type: 'paragraph', text: 'Download study case to read more...' }
    ],
    downloadLink: "/path/to/process-streamlining-case-study.pdf"
  },
  {
    title: "Application User-Friendliness and Smartness (Knowledge Management Function)",
    content: [
      { type: 'paragraph', text: 'This case is about internal essential application used by the call center agents and involves a knowledge management system.' },
      { type: 'paragraph', text: 'Download study case to read more...' }
    ],
    downloadLink: "/path/to/knowledge-management-case-study.pdf"
  },
];

export default function CaseStudies() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid untuk semua kartu studi kasus */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudiesData.map((study, index) => (
            <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow">
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{study.title}</h3>

              {/* Konten dinamis (paragraf/list) */}
              <div className="flex-grow text-gray-600 space-y-3 text-sm">
                {study.content.map((block, blockIndex) => {
                  if (block.type === 'paragraph') {
                    return <p key={blockIndex}>{block.text}</p>;
                  }
                  if (block.type === 'list') {
                    return (
                      <ul key={blockIndex} className="list-disc list-inside space-y-1 pl-2">
                        {block.items?.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    );
                  }
                  return null;
                })}
              </div>

              {/* Tombol Download */}
              <div className="mt-6">
                <Link 
                  href={study.downloadLink} 
                  className="inline-block w-full text-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-md transition-colors"
                >
                  Download Case Study
                </Link>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}