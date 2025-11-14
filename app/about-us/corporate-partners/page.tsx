import { CorporatePartners } from "@/components/corporate-partners";
import { PageWrapper } from "@/components/page-wrapper";

export default function Page() {
  return (
    <PageWrapper>
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-4 shimmer-text">
          Corporate Partners
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          We collaborate with innovative companies that share our vision and values.
        </p>
      </div>
      <CorporatePartners />
    </PageWrapper>
  );
}
