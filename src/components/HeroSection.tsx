import Link from "next/link";
import { SectionWrapper } from "./SectionWrapper";

interface HeroSectionProps {
  heading?: string;
  subheading?: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
}

export function HeroSection({
  heading = "Douglas PC: Technology & Digital Marketing Agency",
  subheading = "We help growing businesses automate workflows, secure infrastructure, activate their data, and drive measurable revenue with AI, automation, and full‑funnel marketing.",
  primaryCta = { href: "/contact", label: "Request a Strategy Call" },
  secondaryCta = { href: "/automation-workflows", label: "View Core Services" },
}: HeroSectionProps) {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.25),transparent_60%)]" />
      <SectionWrapper className="text-center relative">
        <h1 className="text-balance text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight bg-gradient-to-br from-indigo-300 via-white to-indigo-200 bg-clip-text text-transparent">
          {heading}
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
          {subheading}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryCta.href}
            className="inline-flex items-center justify-center rounded-md bg-indigo-500 hover:bg-indigo-400 text-white px-6 py-3 text-base font-medium transition-colors shadow-sm"
          >
            {primaryCta.label}
          </Link>
          <Link
            href={secondaryCta.href}
            className="inline-flex items-center justify-center rounded-md bg-white/10 hover:bg-white/20 text-white px-6 py-3 text-base font-medium transition-colors"
          >
            {secondaryCta.label}
          </Link>
        </div>
      </SectionWrapper>
    </div>
  );
}
