"use client";

import { FormEvent, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  ChevronRight,
  CheckCircle2,
  FileText,
  GraduationCap,
  Rocket,
  LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

type FieldType = "text" | "email" | "tel" | "select" | "textarea";
type FormField = {
  name: string;
  label: string;
  placeholder?: string;
  type: FieldType;
  width: "half" | "full";
  options?: string[];
  required?: boolean;
};

type Theme = {
  cardBg: string;
  cardHover: string;
  chipBg: string;
  chipText: string;
  focusRing: string;
  dot: string;
  button: string;
  buttonText: string;
  /** Soft pastel fill — same pattern as #ffd4dcb8 */
  cardStyle: { backgroundColor: string; borderRadius: string };
};

type Category = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  theme: Theme;
  image: { src: string; alt: string };
  form: { heading: string; subheading: string; buttonLabel: string; fields: FormField[] };
};

// Soft pastel card hues matching the reference: light red, yellow, green, blue.
const categories: Category[] = [
  {
    id: "corporate",
    title: "Corporate Enquiry",
    description: "Explore hiring pipelines, upskilling programs, or partnerships for your organization.",
    icon: FileText,
    theme: {
      cardBg: "",
      cardHover: "hover:brightness-[0.97]",
      chipBg: "bg-[#ffd4dc]",
      chipText: "text-[#E05A4F]",
      focusRing: "focus:border-[#E05A4F]/50 focus:ring-[#E05A4F]/15",
      dot: "bg-[#E05A4F]",
      button: "bg-[#E05A4F] hover:bg-[#C94A40]",
      buttonText: "text-white",
      cardStyle: { backgroundColor: "#ffd4dcb8", borderRadius: "20px" },
    },
    image: { src: "/contact/corporate.webp", alt: "Corporate partnerships at KodoWorks" },
    form: {
      heading: "Contact Corporate Partnerships",
      subheading:
        "Let's explore how we can build hiring pipelines, corporate upskilling, or campus programs together.",
      buttonLabel: "Submit",
      fields: [
        { name: "firstName", label: "First Name", placeholder: "Your First Name", type: "text", width: "half", required: true },
        { name: "lastName", label: "Last Name", placeholder: "Your Last Name", type: "text", width: "half", required: true },
        { name: "jobTitle", label: "Job Title", placeholder: "Your Job Title", type: "text", width: "half" },
        { name: "companyName", label: "Company Name", placeholder: "Your Company", type: "text", width: "half", required: true },
        { name: "email", label: "Email", placeholder: "Your Email", type: "email", width: "half", required: true },
        { name: "phone", label: "Phone", placeholder: "Your Phone Number", type: "tel", width: "half", required: true },
        {
          name: "reason",
          label: "Reason for Contact",
          type: "select",
          width: "full",
          options: ["Hiring Partnership", "Corporate Upskilling", "Sponsorship", "Other"],
          required: true,
        },
        { name: "message", label: "Additional Information", placeholder: "Type your message...", type: "textarea", width: "full" },
      ],
    },
  },
  {
    id: "college",
    title: "College Enquiry",
    description: "Explore curriculum collaborations, training partnerships, or campus programs for your institution.",
    icon: GraduationCap,
    theme: {
      cardBg: "",
      cardHover: "hover:brightness-[0.97]",
      chipBg: "bg-[#ffe8b0]",
      chipText: "text-[#D97706]",
      focusRing: "focus:border-[#D97706]/50 focus:ring-[#D97706]/15",
      dot: "bg-[#D97706]",
      button: "bg-[#D97706] hover:bg-[#B45309]",
      buttonText: "text-white",
      cardStyle: { backgroundColor: "#ffe8b0b8", borderRadius: "20px" },
    },
    image: { src: "/contact/collage.webp", alt: "Institutional partnerships at KodoWorks" },
    form: {
      heading: "Contact Institutional Partnerships",
      subheading: "Let's explore how KodoWorks can collaborate with your institution.",
      buttonLabel: "Submit",
      fields: [
        { name: "firstName", label: "First Name", placeholder: "Your First Name", type: "text", width: "half", required: true },
        { name: "lastName", label: "Last Name", placeholder: "Your Last Name", type: "text", width: "half", required: true },
        { name: "designation", label: "Designation", placeholder: "Your Designation", type: "text", width: "half" },
        { name: "institutionName", label: "Institution Name", placeholder: "Your Institution", type: "text", width: "half", required: true },
        { name: "email", label: "Email", placeholder: "Your Email", type: "email", width: "half", required: true },
        { name: "phone", label: "Phone", placeholder: "Your Phone Number", type: "tel", width: "half", required: true },
        {
          name: "reason",
          label: "Reason for Contact",
          type: "select",
          width: "full",
          options: ["Curriculum Collaboration", "Training Partnership", "Guest Sessions", "Other"],
          required: true,
        },
        { name: "message", label: "Additional Information", placeholder: "Type your message...", type: "textarea", width: "full" },
      ],
    },
  },
  {
    id: "program",
    title: "I'm interested in a Kodo Fellowship Program",
    description: "I want to know more about enrolling in one of KodoWorks' fellowship programs.",
    icon: Rocket,
    theme: {
      cardBg: "",
      cardHover: "hover:brightness-[0.97]",
      chipBg: "bg-[#c5f0d8]",
      chipText: "text-[#2F9E6A]",
      focusRing: "focus:border-[#2F9E6A]/50 focus:ring-[#2F9E6A]/15",
      dot: "bg-[#2F9E6A]",
      button: "bg-[#2F9E6A] hover:bg-[#258555]",
      buttonText: "text-white",
      cardStyle: { backgroundColor: "#c5f0d8b8", borderRadius: "20px" },
    },
    image: { src: "/contact/fellowship.webp", alt: "Kodo Fellowship Programs" },
    form: {
      heading: "Enquire About a Kodo Fellowship Program",
      subheading: "Tell us which program you're interested in, and our team will call you back within 24 hours.",
      buttonLabel: "Send Request",
      fields: [
        { name: "fullName", label: "Full Name", placeholder: "Your Name", type: "text", width: "half", required: true },
        { name: "email", label: "Email", placeholder: "Your Mail ID", type: "email", width: "half", required: true },
        { name: "phone", label: "Phone Number", placeholder: "Phone Number", type: "tel", width: "half", required: true },
        { name: "city", label: "City", placeholder: "Your City", type: "text", width: "half" },
        {
          name: "programOfInterest",
          label: "Program of Interest",
          type: "select",
          width: "full",
          options: [
            "AI Engineering & Machine Learning",
            "NextGen Data Science & Analytics",
            "Cybersecurity & Ethical Hacking",
            "ServiceNow & Enterprise Platform Engineering",
            "Cloud Engineering & DevOps",
            "Full-Stack Development with AI",
            "Generative AI for Professionals",
          ],
          required: true,
        },
        { name: "message", label: "Message", placeholder: "How can we help you?", type: "textarea", width: "full" },
      ],
    },
  },
  {
    id: "job",
    title: "I'm looking for a job",
    description: "I want to explore career opportunities at KodoWorks or through its hiring network.",
    icon: Briefcase,
    theme: {
      cardBg: "",
      cardHover: "hover:brightness-[0.97]",
      chipBg: "bg-[#c8e4f8]",
      chipText: "text-[#3B82B5]",
      focusRing: "focus:border-[#3B82B5]/50 focus:ring-[#3B82B5]/15",
      dot: "bg-[#3B82B5]",
      button: "bg-[#3B82B5] hover:bg-[#2F6A96]",
      buttonText: "text-white",
      cardStyle: { backgroundColor: "#c8e4f8b8", borderRadius: "20px" },
    },
    image: { src: "/contact/job.webp", alt: "Career opportunities at KodoWorks" },
    form: {
      heading: "Explore Career Opportunities",
      subheading: "Tell us a bit about yourself, and our team will get in touch regarding relevant opportunities.",
      buttonLabel: "Submit",
      fields: [
        { name: "firstName", label: "First Name", placeholder: "Your First Name", type: "text", width: "half", required: true },
        { name: "lastName", label: "Last Name", placeholder: "Your Last Name", type: "text", width: "half", required: true },
        { name: "email", label: "Email", placeholder: "Your Email", type: "email", width: "half", required: true },
        { name: "phone", label: "Phone", placeholder: "Your Phone Number", type: "tel", width: "half", required: true },
        {
          name: "areaOfInterest",
          label: "Area of Interest",
          type: "select",
          width: "half",
          options: [
            "AI & Machine Learning",
            "Data Science & Analytics",
            "Cybersecurity",
            "ServiceNow",
            "Cloud & DevOps",
            "Full-Stack Development",
            "Other",
          ],
          required: true,
        },
        { name: "resumeLink", label: "Resume/Portfolio Link", placeholder: "LinkedIn, GitHub, or Resume Link", type: "text", width: "half" },
        {
          name: "message",
          label: "Additional Information",
          placeholder: "Tell us about your experience or what you're looking for...",
          type: "textarea",
          width: "full",
        },
      ],
    },
  },
];

function FieldInput({ field, theme }: { field: FormField; theme: Theme }) {
  const id = `contact-${field.name}`;
  // text-base (16px), not text-[14px]: a focused input under 16px makes iOS
  // Safari auto-zoom the whole page in.
  const cls = `w-full rounded-xl border border-navy-900/10 bg-white px-4 py-3 text-base text-navy-950 placeholder:text-navy-400 focus:outline-none focus:ring-2 sm:text-[14px] ${theme.focusRing}`;

  return (
    <div className={field.width === "full" ? "sm:col-span-2" : "sm:col-span-1"}>
      <label htmlFor={id} className="mb-1.5 block text-[13px] font-medium text-navy-700">
        {field.label}
      </label>
      {field.type === "select" ? (
        <select id={id} name={field.name} required={field.required} defaultValue="" className={`${cls} appearance-none`}>
          <option value="" disabled>
            Select an option
          </option>
          {field.options?.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : field.type === "textarea" ? (
        <textarea id={id} name={field.name} required={field.required} placeholder={field.placeholder} rows={4} className={cls} />
      ) : (
        <input
          id={id}
          name={field.name}
          required={field.required}
          type={field.type}
          placeholder={field.placeholder}
          className={cls}
        />
      )}
    </div>
  );
}

export default function ContactCategoryForm() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const active = categories.find((c) => c.id === activeId) ?? null;

  function selectCategory(id: string) {
    setActiveId(id);
    setSubmitted(false);
    requestAnimationFrame(() => panelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
  }

  function goBack() {
    setActiveId(null);
    setSubmitted(false);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="scroll-mt-24 py-6 sm:py-10">
      <Container>
        <div ref={panelRef} className="scroll-mt-24 rounded-[1.5rem] bg-[#F3F0FA] p-4 sm:rounded-[2rem] sm:p-8 lg:p-10">
          {!active ? (
            <div className="grid grid-cols-1 items-stretch gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10">
              {/* Left: heading + colored category cards */}
              <div className="flex flex-col justify-center">
                <Reveal>
                  <h2 className="font-display text-[1.75rem] font-semibold leading-tight tracking-tight text-navy-950 sm:text-3xl lg:text-[2.75rem]">
                    Get in Touch
                  </h2>
                </Reveal>
                <Reveal delay={60}>
                  <p className="mt-2.5 max-w-md text-[14px] leading-relaxed text-navy-500 sm:mt-3 sm:text-[15px]">
                    Tell us who you are, and we&apos;ll route you to the right team.
                  </p>
                </Reveal>

                <div className="mt-6 grid grid-cols-1 gap-2.5 sm:mt-8 sm:gap-3">
                  {categories.map((cat, i) => {
                    const Icon = cat.icon;
                    return (
                      <Reveal key={cat.id} delay={i * 60}>
                        <button
                          type="button"
                          onClick={() => selectCategory(cat.id)}
                          style={cat.theme.cardStyle}
                          className={`group flex w-full items-center gap-3.5 px-4 py-4 text-left transition-all duration-300 hover:-translate-y-0.5 sm:gap-4 sm:px-5 sm:py-[1.125rem] ${cat.theme.cardHover}`}
                        >
                          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-[0_1px_3px_rgba(15,23,42,0.08)] transition-transform duration-300 group-hover:scale-105">
                            <Icon className={`h-[22px] w-[22px] ${cat.theme.chipText}`} strokeWidth={2} />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block text-[15px] font-semibold leading-snug text-navy-950">
                              {cat.title}
                            </span>
                            <span className="mt-1 block text-[13px] leading-[1.45] text-navy-500">
                              {cat.description}
                            </span>
                          </span>
                          <ChevronRight
                            className="h-4 w-4 shrink-0 text-navy-400/80 transition-transform duration-300 group-hover:translate-x-1"
                            strokeWidth={2.25}
                          />
                        </button>
                      </Reveal>
                    );
                  })}
                </div>
              </div>

              {/* Right: 2×2 photo collage — desktop only via .contact-photo-grid */}
              <div className="contact-photo-grid">
                {categories.map((cat, i) => (
                  <Reveal key={cat.id} delay={i * 60} className="h-full min-h-0">
                    <button
                      type="button"
                      onClick={() => selectCategory(cat.id)}
                      className="relative block h-full min-h-[220px] w-full overflow-hidden rounded-[1.25rem]"
                      aria-label={cat.title}
                    >
                      <Image
                        src={cat.image.src}
                        alt={cat.image.alt}
                        fill
                        sizes="22vw"
                        className="object-cover object-center"
                      />
                    </button>
                  </Reveal>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <button
                type="button"
                onClick={goBack}
                className="inline-flex items-center gap-1.5 rounded-[14px] bg-navy-950 px-4 py-2.5 text-[13px] font-semibold text-white transition-all duration-200 hover:bg-black"
              >
                <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2.25} />
                Back to Get in Touch options
              </button>

              <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
                {/* Photo panel — a fixed-height card that stays sticky alongside
                    the form on desktop (forms run longer than the photo is tall),
                    instead of either stretching the photo into a bad crop or
                    leaving blank space below a short, static one. */}
                <div>
                  <div className="relative h-[320px] overflow-hidden rounded-[20px] bg-white card-shadow-lg lg:sticky lg:top-24 lg:h-[440px]">
                    <Image
                      src={active.image.src}
                      alt={active.image.alt}
                      width={544}
                      height={747}
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="h-full w-full object-cover object-center"
                      priority
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 p-5 sm:p-6 lg:p-8">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm sm:h-12 sm:w-12">
                        <active.icon className={`h-5 w-5 ${active.theme.chipText}`} strokeWidth={2} />
                      </span>
                      <span className="font-display text-[16px] font-semibold leading-snug text-white sm:text-[19px]">
                        {active.title}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Form panel — same pastel bg as the selected left card */}
                <div
                  className="rounded-[20px] p-6 sm:p-8 lg:p-10 card-shadow-lg"
                  style={{ backgroundColor: active.theme.cardStyle.backgroundColor }}
                >
                  <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-navy-500">
                    <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${active.theme.dot}`} />
                    {active.title}
                  </span>
                  <h3 className="font-display mt-3 text-[1.35rem] font-semibold leading-tight text-navy-950 sm:text-[1.55rem]">
                    {active.form.heading}
                  </h3>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-navy-500">{active.form.subheading}</p>

                  {submitted ? (
                    <div className="mt-8 flex flex-col items-center justify-center rounded-[20px] bg-white/70 py-10 text-center">
                      <div className={`flex h-14 w-14 items-center justify-center rounded-full ${active.theme.chipBg}`}>
                        <CheckCircle2 className={`h-7 w-7 ${active.theme.chipText}`} strokeWidth={2} />
                      </div>
                      <h4 className="font-display mt-4 text-[16px] font-semibold text-navy-950">
                        Our Team will contact you soon. Kindly wait.
                      </h4>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {active.form.fields.map((field) => (
                        <FieldInput key={field.name} field={field} theme={active.theme} />
                      ))}
                      <div className="sm:col-span-2">
                        <button
                          type="submit"
                          className="group inline-flex w-full items-center justify-center gap-2 rounded-[14px] bg-navy-950 px-6 py-3.5 text-[15px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-black sm:w-auto"
                        >
                          {active.form.buttonLabel}
                          <ArrowRight
                            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                            strokeWidth={2.25}
                          />
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
