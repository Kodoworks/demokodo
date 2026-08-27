import Image from "next/image";

/**
 * Right-side visual for the For Colleges statement section — the actual
 * KodoWorks completion certificate, since this section is specifically
 * about what students walk away with from the partnership.
 */
export default function CertificateVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[460px] lg:mx-0 lg:ml-auto">
      <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] card-shadow-lg">
        <Image
          src="/certificatekodo.png"
          alt="A KodoWorks certificate of completion"
          fill
          sizes="460px"
          className="object-cover"
        />
      </div>

      <div className="absolute -bottom-4 -left-3 hidden items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[11px] font-semibold uppercase tracking-wide text-navy-800 card-shadow-lg sm:flex">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-70" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
        </span>
        Verifiable Credential ID
      </div>
    </div>
  );
}
