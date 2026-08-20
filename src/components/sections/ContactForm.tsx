"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";
import { programs } from "@/lib/data";

const fieldCls =
  "w-full rounded-xl border border-navy-900/10 bg-white px-4 py-3 text-[14px] text-navy-950 placeholder:text-navy-400 focus:border-brand-500/50 focus:outline-none";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-500/15">
          <CheckCircle2 className="h-7 w-7 text-brand-600" strokeWidth={2} />
        </div>
        <h3 className="font-display mt-4 text-[18px] font-semibold text-navy-950">
          Thanks{name ? `, ${name.split(" ")[0]}` : ""}!
        </h3>
        <p className="mt-2 max-w-[280px] text-[13.5px] leading-relaxed text-navy-500">
          A working engineer will reach out shortly to map your path.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-[13px] font-medium text-navy-700">Full name</label>
          <input
            required
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={fieldCls}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-[13px] font-medium text-navy-700">Email</label>
          <input required type="email" placeholder="you@email.com" className={fieldCls} />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-[13px] font-medium text-navy-700">Phone</label>
        <input required type="tel" placeholder="+91 00000 00000" className={fieldCls} />
      </div>

      <div>
        <label className="mb-1.5 block text-[13px] font-medium text-navy-700">Program / area of interest</label>
        <select required defaultValue="" className={`${fieldCls} appearance-none`}>
          <option value="" disabled>
            Select a program
          </option>
          {programs.map((p) => (
            <option key={p.slug} value={p.slug}>
              {p.shortName}
            </option>
          ))}
        </select>
      </div>

      <Button type="submit" size="lg" className="mt-1 w-full">
        Talk to Us
      </Button>
    </form>
  );
}
