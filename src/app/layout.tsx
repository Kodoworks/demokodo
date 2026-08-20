import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, Space_Grotesk } from "next/font/google";
import "./globals.css";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "KodoWorks — Build the Career Your Engineering Skills Deserve",
  description:
    "KodoWorks is a technology company connecting engineering practice with structured hiring outcomes — real client-modeled project work, engineer-led mentorship, and score-based placement across today's most in-demand domains.",
};

// viewportFit: "cover" lets iOS Safari extend the page under the notch /
// home-indicator so `env(safe-area-inset-*)` resolves to real values —
// used by the fixed floating buttons and sticky header so they stay clear
// of the notch/home-indicator on edge-to-edge phones instead of guessing
// a fixed offset.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f4f3ef",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${hanken.variable} ${spaceGrotesk.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full bg-[var(--background)] text-navy-950">
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important;}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
