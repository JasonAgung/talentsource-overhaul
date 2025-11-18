import CaseStudies from "@/components/case-studies";
import { PageWrapper } from "@/components/page-wrapper";

export default function Page() {
  return (
    <PageWrapper>
      <div className="text-center mb-12 mt-16">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 backdrop-blur-md border border-primary/20 text-primary text-sm font-semibold mb-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
          Real Success Stories
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-4">
          Our Case Studies
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Discover how we've helped organizations achieve digital transformation and business growth through innovative solutions
        </p>
      </div>
      <CaseStudies />
    </PageWrapper>
  );
}
