import OpEd from "@/components/op-ed";
import { PageWrapper } from "@/components/page-wrapper";

export default function Page() {
  return (
    <PageWrapper>
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-4 shimmer-text">
          Op-Ed
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Explore our thoughts and insights on the digital economy, education, and technology in Indonesia.
        </p>
      </div>
      <OpEd />
    </PageWrapper>
  );
}
