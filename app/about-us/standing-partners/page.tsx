"use client";

import StandingPartners from "@/components/standing-partners";
import { PageWrapper } from "@/components/page-wrapper";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <PageWrapper>
      <div className="text-center mb-12 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 backdrop-blur-md border border-primary/20 text-primary text-sm font-semibold mb-6"
        >
          <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
          About Us
        </motion.div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-4">
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
