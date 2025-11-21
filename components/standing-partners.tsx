import Image from "next/image"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

const partnersData = [
  {
    name: "Suryatin Setiawan",
    imageSrc: "/Suryatin Setiawan.png",
    role: "Senior Digital Consultant & Coach",
    expertise: ["Digital Transformation", "Business Leadership", "Telco Industry"],
    content: [
      {
        type: "paragraph",
        text: "Hands-on senior business and management consultant. Experienced Business Leader with a demonstrated history of working in the Indonesia telecommunications and IT industry. He is well-known as a senior reputable expert and mentor in the industry.",
      },
      {
        type: "paragraph",
        text: "Started with various experience in Mobile Service Business and Telco and has transformed his area of focus to Organization Transformation especially in the effort in digitalizing the organization and business to survive the new advance digital wave which impact everyone.",
      },
    ],
  },
  {
    name: "Bambang Lusmiadi",
    imageSrc: "/Bambang Lusmiadi.png",
    role: "Senior Technology & Leadership Consultant",
    expertise: ["Telco Industry", "Cloud Services", "Healthcare IT"],
    content: [
      {
        type: "paragraph",
        text: "His long professional service in the telecommunication industry has been a rich and exhaustive professional life across various milestones ranging from being a multimedia engineer until right to top management and leadership positions.",
      },
      {
        type: "paragraph",
        text: "Experienced across various industries, from telecommunications, content media, digital and cloud-based services, to healthcare. Former CEO of Telkomedika, a Telkom subsidiary.",
      },
    ],
  },
  {
    name: "Benawi Santosa",
    imageSrc: "/Benawi Santosa.png",
    role: "IoT & Systems Integration Expert",
    expertise: ["Hardware/Software", "IoT Systems", "Industrial Automation"],
    content: [
      {
        type: "paragraph",
        text: "Starting his career in the telecommunication industry Benawi was involved in various roles from production processes to deployment of telecommunication equipment and networks.",
      },
      {
        type: "paragraph",
        text: "In recent years, he has been involved in designing and delivering Internet of Things systems and devices for various purposes and industries with expertise in SCADA systems and remote monitoring.",
      },
    ],
  },
  {
    name: "Joe Lian Min",
    imageSrc: "/Joe Lian Min.png",
    role: "Software Development & Architecture Expert",
    expertise: ["Web Applications", "Software Engineering", "System Design"],
    content: [
      {
        type: "paragraph",
        text: "Master of Information & Computer Science from Toyohashi University of Technology with long experience in developing various software solutions and system architectures.",
      },
      {
        type: "paragraph",
        text: "Expert in applying Software Engineering Life Cycle, Scrum, and Agile methodologies while maintaining high quality standards across all projects.",
      },
    ],
  },
  // {
  //   name: "Tata Wirasasmita",
  //   imageSrc: "/Tata Wirasasmita.png",
  //   role: "Data Analytics & HR Management Expert",
  //   expertise: ["Data Analytics", "Human Capital", "Statistical Analysis"],
  //   content: [
  //     {
  //       type: "paragraph",
  //       text: "Master of Management and Statistics with extensive experience in data analytics projects across multiple industries including agro-business, finance, and education.",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "Combines unique skillsets of human capital management with advanced data analytics to drive strategic organizational decisions.",
  //     },
  //   ],
  // },
  {
    name: "Anastasia Sherin",
    imageSrc: "/Anastasia Sherin.png",
    role: "Data Science & ML Solutions Expert",
    expertise: ["Machine Learning", "Data Science", "Financial Analytics"],
    content: [
      {
        type: "paragraph",
        text: "Holder of several professional certifications, focusing on Data Analytics, Data Science, Statistics, and Mathematical Modeling with proven project management expertise.",
      },
      {
        type: "paragraph",
        text: "Successfully delivered projects in fraud detection, anomaly detection, and intelligent search systems across banking, telco, and insurance industries.",
      },
    ],
  },
  {
    name: "Indra Rachmat",
    imageSrc: "/Indra Rachmat.png",
    role: "RPA & Process Automation Architect",
    expertise: ["RPA Development", "Process Automation", "Solution Architecture"],
    content: [
      {
        type: "paragraph",
        text: "Starting as a software developer, Indra is now an expert in process automation/RPA with deep knowledge and experience reaching the level of senior solution architect.",
      },
      {
        type: "paragraph",
        text: "Led multiple successful RPA implementations across various industries including automotive, steel, retail, and finance sectors with proven track record of delivering measurable business impact.",
      },
    ],
  },
]

export default function StandingPartners() {
  return (
    <>
      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
          >
            <div className="relative aspect-[3/4]">
              <Image
                src="/standing-partners.png"
                alt="Bandung Talent Source Office"
                layout="fill"
                objectFit="cover"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Founding Partners</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The core strength and uniqueness of TS is in fact the experienced individuals who have faced and gone through many actual challenges in leadership and management of businesses and organizations in Indonesia.
              </p>
              <div className="space-y-4 bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg border border-primary/20">
                <p className="font-semibold text-foreground">
                  TS is a house of collective highly experienced, knowledgeable and proven professionals that embody the company's Vision and Mission.
                </p>
                <p className="text-sm text-muted-foreground">
                  We transform concepts and theories into reality by leveraging the most recent approaches and industry best practices.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-transparent via-primary/3 to-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground">Expert professionals with proven track records across industries</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnersData.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-primary/10 hover:border-primary/30 transition-colors duration-300 bg-card/50 backdrop-blur h-full group">
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="relative w-16 h-16 flex-shrink-0">
                        <Image
                          src={partner.imageSrc || "/placeholder.svg"}
                          alt={`Profile of ${partner.name}`}
                          fill
                          className="rounded-lg object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-foreground">{partner.name}</h3>
                        <p className="text-sm text-primary font-semibold">{partner.role}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {partner.expertise.map((skill) => (
                        <span key={skill} className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                      {partner.content.map((block, idx) => {
                        if (block.type === "paragraph") {
                          return <p key={idx}>{block.text}</p>
                        }
                        return null
                      })}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
