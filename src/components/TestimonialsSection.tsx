import { SectionWrapper } from "./SectionWrapper";

interface Testimonial { quote: string; author: string; role?: string }
interface TestimonialsSectionProps {
  heading?: string;
  testimonials?: Testimonial[];
}

export function TestimonialsSection({
  heading = "Client Outcomes",
  testimonials = [
    {
      quote: "Douglas PC helped us eliminate hours of manual reconciliation every week—our cycle time dropped 40% in two months.",
      author: "VP Operations",
      role: "B2B SaaS",
    },
    {
      quote: "Their data activation and funnel instrumentation uncovered leakage we didn't know existed—pipeline velocity is up 23%.",
      author: "Head of Revenue Ops",
      role: "Fintech",
    },
    {
      quote: "We went from scattered AI experimentation to a prioritized roadmap with production automations delivering real ROI.",
      author: "CTO",
      role: "Healthcare Platform",
    },
  ],
}: TestimonialsSectionProps) {
  return (
    <SectionWrapper id="testimonials" ariaLabel={heading}>
      <div className="mx-auto text-center mb-14 max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
          {heading}
        </h2>
        {testimonials.length === 0 && (
          <p className="mt-4 text-sm text-white/50 italic">(Add testimonials)</p>
        )}
      </div>
      {testimonials.length > 0 && (
        <ul className="grid gap-10 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <li
              key={i}
              className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <blockquote className="text-sm text-white/80 leading-relaxed">
                “{t.quote}”
              </blockquote>
              <p className="mt-4 text-xs font-medium text-white/60">
                — {t.author}{t.role ? `, ${t.role}` : ""}
              </p>
            </li>
          ))}
        </ul>
      )}
    </SectionWrapper>
  );
}
