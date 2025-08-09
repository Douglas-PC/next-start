import Link from "next/link";
import { SectionWrapper } from "./SectionWrapper";

interface HeroSectionProps {
  heading?: string;
  subheading?: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
}

export function HeroSection({
  heading = "Douglas PC: Futuristic AI & Digital Presence Engineering",
  subheading = "We architect intelligent brand systems that merge automation, adaptive advertising, and realtime data activation—compounding growth while you sleep.",
  primaryCta = { href: "/contact", label: "Launch Your AI Presence" },
  secondaryCta = { href: "/services/automation", label: "Explore Capabilities" },
}: HeroSectionProps) {
  return (
    <div className="relative overflow-hidden">
      {/* Layered ambient gradients */}
      <div className="pointer-events-none absolute inset-0 mix-blend-screen opacity-60">
        <div className="absolute -top-32 -left-32 w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-[#5d5fee55] to-[#8b5df555] blur-[120px]" />
        <div className="absolute top-1/3 -right-40 w-[32rem] h-[32rem] rounded-full bg-gradient-to-tr from-[#3dd9ff44] to-[#ff72d244] blur-[110px]" />
      </div>
      {/* Subtle grid overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.06),transparent_60%)]" />
      <SectionWrapper className="text-center relative">
        <h1 className="headline-xl font-semibold tracking-tight glow-text float-slow">
          {heading}
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-white/65 max-w-3xl mx-auto leading-relaxed">
          {subheading}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryCta.href}
            className="btn-primary inline-flex items-center justify-center"
          >
            {primaryCta.label}
          </Link>
          <Link
            href={secondaryCta.href}
            className="btn-outline inline-flex items-center justify-center"
          >
            {secondaryCta.label}
          </Link>
        </div>
        <div className="mt-14 max-w-4xl mx-auto grid sm:grid-cols-3 gap-6 text-left">
          {[
            { k: 'Automation', v: 'Operational orchestration & no‑fluff AI agents' },
            { k: 'Advertising', v: 'Adaptive creative + predictive funnel telemetry' },
            { k: 'Activation', v: 'Realtime data → personalized revenue loops' },
          ].map(stat => (
            <div key={stat.k} className="glass card-glow rounded-xl p-5">
              <p className="text-xs uppercase tracking-wider text-white/45 mb-2">{stat.k}</p>
              <p className="text-sm text-white/80 leading-relaxed">{stat.v}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
