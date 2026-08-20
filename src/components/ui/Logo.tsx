import Image from "next/image";

export default function Logo({
  dark = false,
  height = 26,
  className = "",
}: {
  dark?: boolean;
  height?: number;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <Image
        src="/kodoworks-icon.png"
        alt=""
        width={264}
        height={264}
        priority
        className="shrink-0"
        style={{ height, width: "auto" }}
      />
      <span
        className="font-display font-bold tracking-tight lowercase"
        style={{ fontSize: height * 0.72, color: dark ? "#ffffff" : "#26272d" }}
      >
        kodoworks
      </span>
    </span>
  );
}
