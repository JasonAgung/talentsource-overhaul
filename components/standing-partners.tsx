import Image from "next/image"
import Aurora from "./Aurora"

const partnersData = [
  {
    name: "Suryatin Setiawan",
    imageSrc: "/Suryatin Setiawan.png",
    content: [
      {
        type: "paragraph",
        text: "Hands-on senior business and management consultant. Experienced Business Leader with a demonstrated history of working in the Indonesia telecommunications and IT industry. He is well-known as a senior reputable expert and mentor in the industry.",
      },
      {
        type: "paragraph",
        text: "Started with various experience in Mobile Service Business and Telco and has transformed his area of focus to Organization Transformation especially in the effort in digitalizing the organization and business to survive the new advance digital wave which impact everyone. Strong community and social service sense, specifically in education industry, long serving professional in Indonesia with the recent position as board of commissioner member of TelkomTelstra a joint venture of Telkom Indonesia and Telstra Australia representing Telstra.",
      },
    ],
  },
  {
    name: "Bambang Lusmiadi",
    imageSrc: "/Bambang Lusmiadi.png",
    content: [
      {
        type: "paragraph",
        text: "His long professional service in the telecommunication industry has been a rich and exhaustive professional life across various milestones ranging from being a multimedia engineer until right to top management and leadership positions. Bambang has been dealing with various industries, telecommunication at the start of his career when telephony moved to multimedia communication, content media industry, digital and cloud based service industry and health care service domain at his end of corporate life career as the CEO of Telkomedika a subsidiary of Telkom. As senior partner consultant Bambang has all range of experience and knowledge in leadership, management, business and technology.",
      },
    ],
  },
  {
    name: "Benawi Santosa",
    imageSrc: "/Benawi Santosa.png",
    content: [
      {
        type: "paragraph",
        text: "Starting his career in the telecommunication industry Benawi was involved in various roles in the industry from the production process, deployment of telecommunication equipment and networks covering microwave transmission networks, satellite communication systems and telephone exchanges and telecommunication system operations. Then Benawi focused on development of hardware and software in instrumentation industries especially  on Programmable Logic Controller (PLC) and embedded controllers.",
      },
      {
        type: "paragraph",
        text: "With experiences in instrumentation devices and systems both in production processes involving sensors and actuators as well as remote monitoring and control with SCADA (Supervisory Control and Data Acquisition) systems, in the last 5 years Benawi has also been involved in designing and delivering Internet of Things systems and devices for various purposes and industries.",
      },
    ],
  },
  {
    name: "Joe Lian Min",
    imageSrc: "/Joe Lian Min.png",
    content: [
      {
        type: "paragraph",
        text: "A Master of Information & Computer Science from Toyohashi University of Technology  with long experience in developing various software solutions  among others are :",
      },
      {
        type: "list",
        items: [
          "Commercial Digital Map web-based application",
          "Smart Dealer Management System (SDMS)",
          "Porting application from desktop application (foxpro) into web application ",
        ],
      },
      {
        type: "paragraph",
        text: "In all the projects he took the role as system designer, development supervision and quality control while applying the Software Engineering  Life Cycle and adopting the latest techniques on scrum and agile software engineering",
      },
    ],
  },
  {
    name: "Tata Wirasasmita",
    imageSrc: "/Tata Wirasasmita.png",
    content: [
      {
        type: "paragraph",
        text: "Having a background of master of management and statistics Tata has been working on projects that needs data analytics in the area of human capital management in various industries, among others agro business, Jakarta Stock Exchange, banking and education sector.",
      },
      {
        type: "paragraph",
        text: "This unique skill sets combination has made him mastering both the knowledge of human capital management and data analytics",
      },
    ],
  },
  {
    name: "Anastasia Sherin",
    imageSrc: "/Anastasia Sherin.png",
    content: [
      {
        type: "paragraph",
        text: "Holder of several profession certificates, Anas has been focusing on Data Analytics, Data Science, Statistics and Mathematics Modeling, and Financial Mathematics and perform the project management role.  Her projects cover various industry needs such as:",
      },
      {
        type: "list",
        items: [
          "Develop an intelligent search engine linked to existing m-app, using the NLP (Natural Language Processing) algorithm, allowing misspelled words and synonyms in Bahasa Indonesia, while still providing relevant article search results (Telco)",
          "Develop a real time fraud detection system for mobile banking transactions and equipped with a monitoring dashboard (Banking)",
          "Built a machine learning model to sort out anomalous health insurance claims, with satisfactory accuracy and precision (insurance industry)",
        ],
      },
    ],
  },
  {
    name: "Indra Rachmat",
    imageSrc: "/Indra Rachmat.png",
    content: [
      {
        type: "paragraph",
        text: "Starting his career as software developer, Indra is an expert in software development and software technology with deep knowledge and experience in Java programming and lately he is dedicated his focus to process automation / RPA and reaching his level as senior solution architect encompassing process analyst, RPA development and testing which has made him at the top of the rank in process automation/ RPA community. ",
      },
      {
        type: "paragraph",
        text: "Most of his projects are abroad and since process automation has been getting its momentum in the last couple of years, Indra has been playing an instrumental role in bringing process automation in many clients’ operation ranging from Japanese motors industry, steel, retail and finance. ",
      },
    ],
  },
]

export default function StandingPartners() {
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
                Our Core Strength
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">Standing Partners</h1>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
              <div className="relative aspect-[3/4] md:col-span-1">
                <Image
                  src="/standing-partners.png"
                  alt="Bandung Talent Source Office"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="space-y-6 text-muted-foreground md:col-span-2">
                <p>
                  The core strength and uniqueness of TS is in fact the experienced individuals who have faced and gone
                  through many actual challenges in leadership, and management of businesses and organizations in
                  Indonesia, big, medium or small, throughout their professional career, who are the standing partners
                  of TS.
                </p>
                <p className="border-l-4 border-primary pl-4 font-semibold text-foreground">
                  TS is a house of collective highly experienced, knowledgeable and proven professionals that embody
                  the company’s Vision and Mission. Actualizing concept, theory, knowledge into reality and always
                  using the most recent approaches.
                </p>
                <p>
                  Moreover, TS partners are all maintaining a great deal of interests in social services that will
                  always be useful to further build various communities, institutions and organizations.
                </p>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                {partnersData.map((partner) => (
                  <div key={partner.name} className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <Image
                        src={partner.imageSrc}
                        alt={`Profile of ${partner.name}`}
                        width={100}
                        height={100}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{partner.name}</h3>
                      <div className="mt-2 text-muted-foreground leading-relaxed space-y-4">
                        {partner.content.map((block, index) => {
                          if (block.type === "paragraph") {
                            return <p key={index}>{block.text}</p>
                          }
                          if (block.type === "list") {
                            return (
                              <ul key={index} className="list-disc list-inside space-y-2 pl-2">
                                {block.items && block.items.map((item, itemIndex) => <li key={itemIndex}>{item}</li>)}
                              </ul>
                            )
                          }
                          return null
                        })}
                      </div>
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