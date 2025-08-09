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
      <div className="mx-auto text-center mb-14 max-w-3xl relative">
        <div className="pointer-events-none absolute -inset-x-20 -top-14 h-52 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.08),transparent_70%)]" />
        <h2 className="headline-md glow-text">{heading}</h2>
        {testimonials.length === 0 && (
          <p className="mt-4 text-sm text-white/50 italic">(Add testimonials)</p>
        )}
      </div>
      {testimonials.length > 0 && (
    <ul className="grid gap-8 md:grid-cols-2 items-stretch">
          {testimonials.map((t, i) => (
            <li
              key={i}
      className="group glass card-glow rounded-xl p-6 relative overflow-hidden flex flex-col"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.15),transparent_70%)]" />
      <blockquote className="relative text-sm text-white/80 leading-relaxed flex-grow">
                “{t.quote}”
              </blockquote>
              <p className="relative mt-4 text-xs font-medium text-white/60">
                — {t.author}{t.role ? `, ${t.role}` : ""}
              </p>
            </li>
          ))}
        </ul>
      )}
    </SectionWrapper>
  );
}
