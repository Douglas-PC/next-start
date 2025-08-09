import { ReactNode } from "react";

export interface SectionWrapperProps {
  id?: string;
  ariaLabel?: string;
  className?: string;
  children: ReactNode;
}

// Generic semantic wrapper for page sections to keep layout consistent.
export function SectionWrapper({ id, ariaLabel, className = "", children }: SectionWrapperProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`w-full max-w-5xl mx-auto px-6 py-20 ${className}`.trim()}
    >
      {children}
    </section>
  );
}
