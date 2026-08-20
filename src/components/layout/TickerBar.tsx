import { contactInfo } from "@/lib/data";

const messages = [
  <span key="1">Now enrolling for the August 2026 batch, limited seats</span>,
  <span key="2">
    <span className="font-bold text-brand-400">95%</span> of fellows placed across
    leading product companies
  </span>,
  <span key="3">
    Feel free to reach out to us at{" "}
    <span className="font-semibold">{contactInfo.phones.join(" / ")}</span> and
    we&apos;ll get in touch with you shortly
  </span>,
];

export default function TickerBar() {
  const track = (
    <div className="flex shrink-0 items-center gap-8 pr-8">
      {messages.map((m, i) => (
        <span key={i} className="flex items-center gap-8 whitespace-nowrap text-[12.5px] text-white/85">
          {m}
          <span className="text-white/25">/</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="relative z-[60] overflow-hidden bg-navy-950 py-2.5">
      <div className="animate-marquee flex w-max">
        {track}
        {track}
      </div>
    </div>
  );
}
