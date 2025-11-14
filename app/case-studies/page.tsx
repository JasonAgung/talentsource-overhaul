import CaseStudies from "@/components/case-studies";
import { PageWrapper } from "@/components/page-wrapper";

export default function Page() {
  return (
    <PageWrapper>
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-4 shimmer-text">
          Case Studies
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Explore how we've helped leading organizations overcome their challenges and achieve their goals.
        </p>
      </div>
      <CaseStudies />
    </PageWrapper>
  );
}
