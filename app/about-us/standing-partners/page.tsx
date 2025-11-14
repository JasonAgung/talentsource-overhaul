import StandingPartners from "@/components/standing-partners";
import { PageWrapper } from "@/components/page-wrapper";

export default function Page() {
  return (
    <PageWrapper>
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-4 shimmer-text">
          Standing Partners
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Meet the experienced individuals who form the core strength of TalentSource.
        </p>
      </div>
      <StandingPartners />
    </PageWrapper>
  );
}
