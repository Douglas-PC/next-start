import { SectionWrapper } from "./SectionWrapper";
import Image from "next/image";

interface SocialProofSectionProps {
  heading?: string;
  logos?: { src: string; alt: string }[];
  blurb?: string;
  subheading?: string;
}

const DEFAULT_LOGOS: { src: string; alt: string }[] = [
  { src: "/logos/company1.svg", alt: "SaaS Platform" },
  { src: "/logos/company2.svg", alt: "Healthcare Ops" },
  { src: "/logos/company3.svg", alt: "B2B Marketplace" },
  { src: "/logos/company4.svg", alt: "Fintech Growth" },
  { src: "/logos/company5.svg", alt: "Logistics Network" },
];

export function SocialProofSection({
  heading = "Trusted by teams scaling with automation, data & AI",
  subheading = "Representative industries we support: SaaS, Healthcare, Fintech, B2B Marketplaces, Logistics.",
  logos = DEFAULT_LOGOS,
  blurb = "Partner and certification badges coming soon.",
}: SocialProofSectionProps) {
  return (
    <SectionWrapper id="social-proof" ariaLabel={heading} className="pt-10 pb-10">
      <div className="text-center mb-8 max-w-2xl mx-auto">
        <p className="text-sm uppercase tracking-wider text-white/50 font-medium mb-3">
          {heading}
        </p>
        {subheading && (
          <p className="text-xs text-white/50 leading-relaxed">{subheading}</p>
        )}
      </div>
      {logos.length === 0 ? (
        <p className="text-center text-white/40 text-sm italic">{blurb}</p>
      ) : (
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 opacity-90 max-w-5xl mx-auto">
          {logos.map((l) => (
            <li key={l.alt} className="h-10 flex items-center">
              <Image
                src={l.src}
                alt={l.alt}
                width={140}
                height={40}
                loading="lazy"
                className="w-auto h-10 object-contain opacity-75 hover:opacity-100 transition-opacity"
              />
            </li>
          ))}
        </ul>
      )}
    </SectionWrapper>
  );
}
