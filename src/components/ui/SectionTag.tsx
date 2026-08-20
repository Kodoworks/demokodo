export default function SectionTag({
  label,
  variant = "plain",
}: {
  label: string;
  variant?: "plain" | "pill";
}) {
  if (variant === "pill") {
    return (
      <span className="inline-flex items-center gap-2 rounded-full border border-navy-900/10 bg-white px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-navy-700 card-shadow">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
        {label}
      </span>
    );
  }

  return (
    <span className="block text-[12px] font-bold uppercase tracking-[0.16em] text-brand-500">
      {label}
    </span>
  );
}
