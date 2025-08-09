import { SectionWrapper } from "./SectionWrapper";
import Image from "next/image";

export interface FeatureItem {
  title: string;
  description: string;
  icon?: string; // Placeholder for future icon system
}

interface FeatureListProps {
  heading?: string;
  features: FeatureItem[];
  columns?: 2 | 3;
  id?: string;
  ariaLabel?: string;
}

  export function FeatureList({
      heading = "Core Outcomes We Deliver",
      columns = 3,
      id = "features",
      ariaLabel,
    }: Omit<FeatureListProps, 'features'>) {
    const colClass = columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2";
    const featuresList = [
      {
        title: "Autonomous Ops",
        description:
          "Orchestrate cross-stack workflows & agentic processes—latency-aware, observable, resilient.",
        icon: "/window.svg",
      },
      {
        title: "Zero-Trust Fabric",
        description:
          "Adaptive hardening + telemetry streams that continuously validate identities & intent.",
        icon: "/globe.svg",
      },
      {
        title: "Live Data Mesh",
        description:
          "Unified event spine & activation layer powering real-time personalization loops.",
        icon: "/vercel.svg",
      },
      {
        title: "AI Growth Engine",
        description:
          "Predictive creative + reinforcement feedback optimizes spend & conversion autonomously.",
        icon: "/next.svg",
      },
    ];
    return (
      <SectionWrapper id={id} ariaLabel={ariaLabel || heading}>
        <div className="mx-auto text-center mb-14 max-w-3xl">
          <h2 className="headline-md glow-text">Core Systems Stack</h2>
          <p className="mt-4 text-white/65 text-lg">
            Interlocking capability layers engineered to amplify each other.
          </p>
        </div>
        <ul className={`grid gap-8 sm:gap-10 ${colClass} items-stretch`}>
          {featuresList.map((f) => (
            <li
              key={f.title}
              className="relative group glass card-glow rounded-xl p-6 overflow-hidden flex flex-col h-full"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-15 transition pointer-events-none bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.35),transparent_60%)]" />
              <div className="flex flex-col h-full text-left">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/15 text-cyan-300 mb-4">
                  <Image src={f.icon} alt="" width={32} height={32} className="opacity-80" />
                </div>
                <h3 className="text-base font-medium text-white mb-2 tracking-wide group-hover:text-white/90">
                  {f.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed flex-grow">
                  {f.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </SectionWrapper>
    );
}
