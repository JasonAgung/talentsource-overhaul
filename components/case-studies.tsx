import Link from "next/link"
import Aurora from "./Aurora"
import { Button } from "./ui/button"

const caseStudiesData = [
  {
    title: "Case Study: Fraud Detection System - Mobile & Internet Banking",
    content: [
      { type: "paragraph", text: "Menggunakan metode gabungan dari Rule Based dan Unsupervised Learning" },
      {
        type: "list",
        items: ["Unsupervised Learning", "Customer spending behavior", "Customer profiling analysis", "Geographical locations"],
      },
      { type: "paragraph", text: "Download study case to read more..." },
    ],
    downloadLink: "/path/to/fraud-detection-case-study.pdf",
  },
  {
    title: "Data analytics: Students' social economic grouping",
    content: [
      {
        type: "paragraph",
        text: "During covid19 pandemic, a school plan to allocate support to students that really need it and at the same time skip the physical on-site survey and interview.",
      },
      { type: "paragraph", text: "Avoid misallocation by analyzing parents/family data (school)." },
    ],
    downloadLink: "/path/to/student-grouping-case-study.pdf",
  },
  {
    title: "Data analytics: Finding the right strategy to increase fee-based income of cellular 'pulsa' retailer",
    content: [
      {
        type: "paragraph",
        text: "A bank which is also offering cellular minutes/data quota top-up retail intend to find an effective strategy and program which can increase the purchase volume of customers by analyzing the customer behavior and polite data (bank).",
      },
    ],
    downloadLink: "/path/to/pulsa-retailer-case-study.pdf",
  },
  {
    title: "Machine Learning : Insurance claim checking automation",
    content: [
      {
        type: "paragraph",
        text: "Claim checking is tedious manual task which can be automated using machine learning model to reduce checking manual process cost more than 50% and maintaining the total lost to very minimum level. (insurance company).",
      },
      { type: "paragraph", text: "Download study case to read more..." },
    ],
    downloadLink: "/path/to/insurance-claim-case-study.pdf",
  },
  {
    title: "Case Study Work Process Streamlining & Automation",
    content: [
      {
        type: "paragraph",
        text: "A study case of reviewing business processes, perform BPI/BPR and automate processes in leading financial industry...",
      },
      { type: "paragraph", text: "Download study case to read more..." },
    ],
    downloadLink: "/path/to/process-streamlining-case-study.pdf",
  },
  {
    title: "Application User-Friendliness and Smartness (Knowledge Management Function)",
    content: [
      {
        type: "paragraph",
        text: "This case is about internal essential application used by the call center agents and involves a knowledge management system.",
      },
      { type: "paragraph", text: "Download study case to read more..." },
    ],
    downloadLink: "/path/to/knowledge-management-case-study.pdf",
  },
]

export default function CaseStudies() {
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
                Our Work
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">Case Studies</h1>
            </div>
          </section>

          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {caseStudiesData.map((study, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-6 flex flex-col shadow-sm hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-bold text-foreground mb-4">{study.title}</h3>
                    <div className="flex-grow text-muted-foreground space-y-3 text-sm">
                      {study.content.map((block, blockIndex) => {
                        if (block.type === "paragraph") {
                          return <p key={blockIndex}>{block.text}</p>
                        }
                        if (block.type === "list") {
                          return (
                            <ul key={blockIndex} className="list-disc list-inside space-y-1 pl-2">
                              {block.items?.map((item, itemIndex) => <li key={itemIndex}>{item}</li>)}
                            </ul>
                          )
                        }
                        return null
                      })}
                    </div>
                    <div className="mt-6">
                      <Link href={study.downloadLink}>
                        <Button className="w-full">Download Case Study</Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}