import Link from "next/link";
import { SectionWrapper } from "./SectionWrapper";

interface CTASectionProps {
  heading?: string;
  subheading?: string;
  primaryCta?: { href: string; label: string };
}

export function CTASection({
  heading = "Let’s Build Your Intelligent Operations Roadmap",
  subheading = "Get a tailored action plan for automation, AI integration, and measurable ROI—without the fluff.",
  primaryCta = { href: "/contact", label: "Request Strategy Call" },
}: CTASectionProps) {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 via-indigo-400/20 to-transparent blur-3xl pointer-events-none" />
      <SectionWrapper className="relative text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight bg-gradient-to-br from-white to-indigo-200 bg-clip-text text-transparent">
          {heading}
        </h2>
        <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
          {subheading}
        </p>
        <div className="mt-10">
          <Link
            href={primaryCta.href}
            className="inline-flex items-center justify-center rounded-md bg-indigo-500 hover:bg-indigo-400 text-white px-8 py-3 text-base font-medium transition-colors shadow-sm"
          >
            {primaryCta.label}
          </Link>
        </div>
      </SectionWrapper>
    </div>
  );
}
