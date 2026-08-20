import TickerBar from "@/components/layout/TickerBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import Hero from "@/components/sections/Hero";
import Audiences from "@/components/sections/Audiences";
import StatsBar from "@/components/sections/StatsBar";
import ContactFormSection from "@/components/sections/ContactFormSection";
import ComparisonTable from "@/components/sections/ComparisonTable";
import ValueProps from "@/components/sections/ValueProps";
import Mentors from "@/components/sections/Mentors";
import Programs from "@/components/sections/Programs";
import CertificateSection from "@/components/sections/CertificateSection";
import CertificationsRow from "@/components/sections/CertificationsRow";
import PlacementPathway from "@/components/sections/PlacementPathway";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import FinalCta from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <TickerBar />
      <Navbar />
      <main>
        <Hero />
        <Audiences />
        <StatsBar />
        <ContactFormSection />
        <ComparisonTable />
        <ValueProps />
        <Programs />
        <CertificateSection />
        <CertificationsRow />
        <PlacementPathway />
        <Testimonials />
        <FAQ />
        <FinalCta />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
