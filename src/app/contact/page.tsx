import type { Metadata } from "next";
import PageIntro from "@/components/ui/PageIntro";
import ContactChannels from "@/components/sections/ContactChannels";
import ContactHub from "@/components/sections/ContactHub";

export const metadata: Metadata = {
  title: "Talk to KodoWorks",
  description:
    "Tell us where you are and where you want to go — a working engineer will map the right KodoWorks program for you, no obligation.",
};

export default function ContactPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Get in Touch"
        title={
          <>
            <span className="text-navy-950">Talk to</span> <span className="text-navy-300">KodoWorks.</span>
          </>
        }
        subtitle="Tell us where you are and where you want to go — a working engineer will map the right path for you, no obligation."
      />
      <ContactChannels />
      <ContactHub />
    </main>
  );
}
