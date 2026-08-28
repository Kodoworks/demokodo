import type { Metadata } from "next";
import ContactHeroBanner from "@/components/sections/ContactHeroBanner";
import ContactCategoryForm from "@/components/sections/ContactCategoryForm";
import ContactDetails from "@/components/sections/ContactDetails";

export const metadata: Metadata = {
  title: "Contact Us | KodoWorks",
  description:
    "Get in touch with KodoWorks to learn more about our Fellowship Programs, partnerships, or hiring from Kodo.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHeroBanner />
      <ContactCategoryForm />
      <ContactDetails />
    </main>
  );
}
