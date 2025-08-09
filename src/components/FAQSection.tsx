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
      <div className="mx-auto text-center mb-12 max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
          {heading}
        </h2>
      </div>
      <dl className="space-y-8 max-w-4xl mx-auto">
        {faqs.map((item) => (
          <div key={item.question} className="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/[0.07] transition-colors">
            <dt className="font-medium text-white text-base mb-2">
              {item.question}
            </dt>
            <dd className="text-sm leading-relaxed text-white/70">{item.answer}</dd>
          </div>
        ))}
      </dl>
    </SectionWrapper>
  );
}
