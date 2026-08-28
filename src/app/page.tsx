import Hero from "@/components/sections/Hero";
import Audiences from "@/components/sections/Audiences";
import ContactFormSection from "@/components/sections/ContactFormSection";
import ComparisonTable from "@/components/sections/ComparisonTable";
import ValueProps from "@/components/sections/ValueProps";
import Mentors from "@/components/sections/Mentors";
import Programs from "@/components/sections/Programs";
import CertificateSection from "@/components/sections/CertificateSection";
import CertificationsRow from "@/components/sections/CertificationsRow";
import PlacementPathway from "@/components/sections/PlacementPathway";
import Testimonials from "@/components/sections/Testimonials";
import PlacedStudents from "@/components/sections/PlacedStudents";
import FAQ from "@/components/sections/FAQ";
import FinalCta from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <main>
      <Hero />
      <Audiences />
      <ContactFormSection />
      <ComparisonTable />
      <ValueProps />
      <Mentors />
      <Programs />
      <CertificateSection />
      <CertificationsRow />
      <PlacementPathway />
      <Testimonials />
      <PlacedStudents />
      <FAQ />
      <FinalCta />
    </main>
  );
}
