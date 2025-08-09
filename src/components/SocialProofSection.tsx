import { SectionWrapper } from "./SectionWrapper";

interface SocialProofSectionProps {
  heading?: string;
  blurb?: string;
  subheading?: string;
}


export function SocialProofSection({
  heading = "Automation, Data & AI Impact Across Industries",
  subheading = "Industries served include SaaS, Healthcare, Fintech, Marketplaces, Logistics.",
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
      <div className="text-center text-white/40 text-sm italic">
        {blurb}
      </div>
    </SectionWrapper>
  );
}
