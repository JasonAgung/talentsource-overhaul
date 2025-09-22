import { Card, CardContent } from "@/components/ui/card"

export function ClientsSection() {
  const clients = [
    { name: "Bank BCA", logo: "/bca-bank-logo.jpg" },
    { name: "Telkomsel", logo: "/telkomsel-logo.png" },
    { name: "Telkom Indonesia", logo: "/telkom-indonesia-logo.jpg" },
    { name: "Pegadaian", logo: "/pegadaian-logo.jpg" },
    { name: "Tower Bersama", logo: "/tower-bersama-logo.jpg" },
    { name: "Peruri", logo: "/peruri-logo.jpg" },
    { name: "INKA", logo: "/inka-logo.jpg" },
    { name: "Astra Infra", logo: "/astra-infra-logo.jpg" },
    { name: "Nestle", logo: "/generic-bird-nest-logo.png" },
    { name: "Infomedia", logo: "/infomedia-logo.jpg" },
    { name: "Unpar", logo: "/unpar-university-logo.jpg" },
    { name: "Cibavision", logo: "/cibavision-logo.jpg" },
  ]

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Trusted by Leading Organizations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We've partnered with major Indonesian companies across telecommunications, banking, manufacturing, and
            education sectors to drive digital transformation and talent development.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <Card key={index} className="border-0 shadow-none hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6 flex items-center justify-center">
                <img
                  src={client.logo || "/placeholder.svg"}
                  alt={`${client.name} logo`}
                  className="max-w-full h-12 object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-accent/5 border-accent/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Recent Case Studies</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Fraud Detection System</h4>
                  <p className="text-sm text-muted-foreground">Advanced AI-powered fraud detection implementation</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">Students' Socioeconomic Grouping</h4>
                  <p className="text-sm text-muted-foreground">Data analytics for educational insights</p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">Cellular Retailer Fee-Based Income</h4>
                  <p className="text-sm text-muted-foreground">Data analytics to increase "pulsa" retailer revenue</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
