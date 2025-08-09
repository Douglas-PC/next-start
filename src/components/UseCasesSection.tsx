import { SectionWrapper } from "./SectionWrapper";

interface UseCase { title: string; summary: string }
interface UseCasesSectionProps {
  heading?: string;
  cases: UseCase[];
}

export function UseCasesSection({
  heading = "High-Impact Use Cases",
  cases,
}: UseCasesSectionProps) {
  return (
    <SectionWrapper id="use-cases" ariaLabel={heading}>
      <div className="mx-auto text-center mb-14 max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
          {heading}
        </h2>
      </div>
      <ul className="grid gap-10 md:grid-cols-3">
        {cases.map((c) => (
          <li
            key={c.title}
            className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.07] transition-colors backdrop-blur-sm"
          >
            <h3 className="text-lg font-medium text-white mb-2 tracking-tight">
              {c.title}
            </h3>
            <p className="text-sm leading-relaxed text-white/70">{c.summary}</p>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
