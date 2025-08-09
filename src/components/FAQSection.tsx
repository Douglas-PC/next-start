import { SectionWrapper } from "./SectionWrapper";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  heading?: string;
  faqs: FAQItem[];
}

export function FAQSection({ heading = "Frequently Asked Questions", faqs }: FAQSectionProps) {
  return (
    <SectionWrapper id="faqs" ariaLabel={heading}>
      <div className="mx-auto text-center mb-12 max-w-3xl relative">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.07),transparent_70%)]" />
        <h2 className="headline-md glow-text">{heading}</h2>
      </div>
      <ul className="grid gap-6 sm:grid-cols-2 max-w-5xl mx-auto items-stretch">
        {faqs.map((item) => (
          <li key={item.question} className="group p-6 glass card-glow rounded-xl relative overflow-hidden list-none flex flex-col">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_25%_30%,rgba(255,255,255,0.14),transparent_70%)]" />
            <p className="relative font-medium text-white text-base mb-2 tracking-wide">
              {item.question}
            </p>
            <p className="relative text-sm leading-relaxed text-white/70 flex-grow">{item.answer}</p>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
