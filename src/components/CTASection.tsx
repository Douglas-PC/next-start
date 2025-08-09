import Link from "next/link";
import { SectionWrapper } from "./SectionWrapper";

interface CTASectionProps {
  heading?: string;
  subheading?: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
}

export function CTASection({
  heading = "Ready To Compound?",
  subheading = "Deploy an adaptive growth stack that self-optimizes across acquisition, activation, and retention.",
  primaryCta = { href: "/contact", label: "Design My Growth Stack" },
  secondaryCta = { href: "/services/ai-enablement", label: "See AI Enablement" },
}: CTASectionProps) {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-transparent to-transparent blur-3xl pointer-events-none" />
      <SectionWrapper className="relative text-center">
        <div className="absolute -inset-x-20 -top-24 -bottom-24 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.09),transparent_70%)]" />
        <h2 className="headline-md glow-text">{heading}</h2>
        <p className="mt-5 text-lg text-white/65 max-w-2xl mx-auto leading-relaxed">{subheading}</p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryCta.href}
            className="btn-primary inline-flex items-center justify-center"
          >
            {primaryCta.label}
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="btn-outline inline-flex items-center justify-center"
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </SectionWrapper>
    </div>
  );
}
