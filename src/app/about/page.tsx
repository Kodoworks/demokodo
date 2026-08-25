import type { Metadata } from "next";
import PageIntro from "@/components/ui/PageIntro";
import CompanyProfile from "@/components/sections/CompanyProfile";
import DifferentiatorLedger from "@/components/sections/DifferentiatorLedger";
import Mentors from "@/components/sections/Mentors";
import PlacementPathway from "@/components/sections/PlacementPathway";
import FinalCta from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "About KodoWorks",
  description:
    "KodoWorks is a technology-driven learning and workforce transformation company bridging the gap between academia and industry with practical, project-based training.",
};

export default function AboutPage() {
  return (
    <main>
      <PageIntro
        eyebrow="About KodoWorks"
        title={
          <>
            <span className="text-navy-950">A technology company,</span>{" "}
            <span className="text-navy-300">not a training brand.</span>
          </>
        }
        subtitle="KodoWorks is a technology-driven learning and workforce transformation company dedicated to bridging the gap between academia and industry. We equip students, graduates and working professionals with practical, project-based training aligned with real-world business requirements, preparing them for successful careers in today's digital economy."
      />
      <CompanyProfile />
      <DifferentiatorLedger />
      <Mentors />
      <PlacementPathway />
      <FinalCta />
    </main>
  );
}
