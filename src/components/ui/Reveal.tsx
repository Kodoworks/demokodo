"use client";

import { ReactNode, useEffect, useState } from "react";

/**
 * Fades content in shortly after mount (not on scroll-into-view).
 * A scroll-triggered observer would leave long pages mostly at
 * opacity:0 whenever content never enters the viewport before capture
 * (fast scroll, print/screenshot tools, JS-disabled) — mounting once
 * keeps every section reliably visible while still giving the page a
 * soft staggered entrance on first paint.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      className={`${visible ? "reveal-in" : "reveal"} ${className}`}
      style={{ animationDelay: visible ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  );
}
