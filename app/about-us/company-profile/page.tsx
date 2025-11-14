import CompanyProfilePage from "@/components/company-profile";
import { PageWrapper } from "@/components/page-wrapper";

export default function Page() {
  return (
    <PageWrapper>
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-4 shimmer-text">
          Company Profile
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Learn more about our mission, vision, and the core values that drive us.
        </p>
      </div>
      <CompanyProfilePage />
    </PageWrapper>
  );
}
