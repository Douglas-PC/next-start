import { SectionWrapper } from "./SectionWrapper";
import Image from "next/image";

interface SocialProofSectionProps {
  heading?: string;
  logos?: { src: string; alt: string }[];
  blurb?: string;
}

export function SocialProofSection({
  heading = "Trusted by teams implementing intelligent automation",
  logos = [],
  blurb = "TODO: Add client logos or credibility markers (certifications, partnerships).",
}: SocialProofSectionProps) {
  return (
    <SectionWrapper id="social-proof" ariaLabel={heading} className="pt-10 pb-10">
      <div className="text-center mb-8">
        <p className="text-sm uppercase tracking-wider text-white/50 font-medium">
          {heading}
        </p>
      </div>
      {logos.length === 0 ? (
        <p className="text-center text-white/40 text-sm italic">{blurb}</p>
      ) : (
        <ul className="flex flex-wrap items-center justify-center gap-8 opacity-90">
          {logos.map((l) => (
            <li key={l.alt} className="h-10 flex items-center">
              <Image
                src={l.src}
                alt={l.alt}
                width={140}
                height={40}
                className="w-auto h-10 object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </li>
          ))}
        </ul>
      )}
    </SectionWrapper>
  );
}
