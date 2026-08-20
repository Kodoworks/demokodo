import Link from "next/link";
import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost" | "outline-light" | "outline-dark" | "dark";
type Size = "md" | "lg" | "sm";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[14px] font-semibold transition-all duration-200 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-500 text-white shadow-[0_8px_20px_-6px_rgba(0,206,104,0.55)] hover:bg-brand-600 hover:-translate-y-0.5",
  secondary:
    "bg-white text-navy-950 border border-navy-900/12 hover:border-navy-900/25 hover:-translate-y-0.5 card-shadow",
  ghost: "text-navy-700 hover:text-brand-600",
  "outline-light":
    "border border-white/25 text-white hover:bg-white/10 hover:border-white/40",
  "outline-dark":
    "border border-navy-900/15 text-navy-900 hover:border-navy-900/30 hover:bg-navy-900/[0.03]",
  dark: "bg-navy-950 text-white hover:bg-navy-800 hover:-translate-y-0.5",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-[13px]",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-[15px]",
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  icon = false,
  className = "",
  onClick,
  type,
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {children}
      {icon && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
          strokeWidth={2.25}
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`group ${cls}`}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} onClick={onClick} className={`group ${cls}`}>
      {content}
    </button>
  );
}
