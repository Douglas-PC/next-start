import { SectionWrapper } from "./SectionWrapper";

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
  features,
  columns = 3,
  id = "features",
  ariaLabel,
}: FeatureListProps) {
  const colClass = columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2";
  return (
    <SectionWrapper id={id} ariaLabel={ariaLabel || heading}>
      <div className="mx-auto text-center mb-14 max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
          {heading}
        </h2>
      </div>
      <ul className={`grid gap-10 sm:gap-12 ${colClass}`}>
        {features.map((f) => (
          <li
            key={f.title}
            className="relative group rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:bg-white/[0.07] transition-colors"
          >
            <div className="flex flex-col h-full text-left">
              <h3 className="text-lg font-medium text-white mb-2 tracking-tight">
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/70">
                {f.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
