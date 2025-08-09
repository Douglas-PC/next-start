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
      <div className="mx-auto max-w-3xl text-center mb-14 relative">
        <div className="pointer-events-none absolute -inset-x-20 -top-10 h-40 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.08),transparent_70%)]" />
        <h2 className="headline-md glow-text">{heading}</h2>
        <p className="mt-4 text-white/65 text-base leading-relaxed">{intro}</p>
      </div>
      <ul className="grid gap-6 sm:grid-cols-2 max-w-5xl mx-auto items-stretch">
        {items.map((p) => (
          <li
            key={p.problem}
            className="group glass card-glow rounded-xl p-6 relative overflow-hidden flex flex-col"
          >
            <div className="absolute inset-px rounded-[inherit] opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.16),transparent_65%)]" />
            <div className="relative flex flex-col h-full">
              <p className="text-sm font-medium text-white mb-2 tracking-wide">
                <span className="text-white/40 mr-1">Problem:</span>{p.problem}
              </p>
              <p className="text-sm text-white/70 leading-relaxed flex-grow">
                <span className="text-white/40 font-medium mr-1">Solution:</span>{p.solution}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
