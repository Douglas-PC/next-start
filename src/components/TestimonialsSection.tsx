import { SectionWrapper } from "./SectionWrapper";

interface Testimonial { quote: string; author: string; role?: string }
interface TestimonialsSectionProps {
  heading?: string;
  testimonials?: Testimonial[];
}

export function TestimonialsSection({
  heading = "Client Outcomes",
  testimonials = [],
}: TestimonialsSectionProps) {
  return (
    <SectionWrapper id="testimonials" ariaLabel={heading}>
      <div className="mx-auto text-center mb-14 max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
          {heading}
        </h2>
        {testimonials.length === 0 && (
          <p className="mt-4 text-sm text-white/50 italic">
            TODO: Replace with real client testimonials / quantified outcomes.
          </p>
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
