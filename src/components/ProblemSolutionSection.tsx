import { SectionWrapper } from "./SectionWrapper";

interface ProblemPoint { problem: string; solution: string }
interface ProblemSolutionSectionProps {
  heading?: string;
  items: ProblemPoint[];
  intro?: string;
}

export function ProblemSolutionSection({
  heading = "From Bottlenecks to Leverage",
  items,
  intro = "We identify compounding constraints across operations, marketing, and product—and replace them with durable, automated systems.",
}: ProblemSolutionSectionProps) {
  return (
    <SectionWrapper id="problems" ariaLabel={heading}>
      <div className="mx-auto max-w-3xl text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
          {heading}
        </h2>
        <p className="mt-4 text-white/70 text-base leading-relaxed">{intro}</p>
      </div>
      <ul className="space-y-8 max-w-4xl mx-auto">
        {items.map((p) => (
          <li
            key={p.problem}
            className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
          >
            <p className="text-sm font-medium text-white mb-2">
              <span className="text-white/50">Problem:</span> {p.problem}
            </p>
            <p className="text-sm text-white/70 leading-relaxed">
              <span className="text-white/50 font-medium">Solution:</span> {p.solution}
            </p>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
