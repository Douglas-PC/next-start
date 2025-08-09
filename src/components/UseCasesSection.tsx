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
      <div className="mx-auto text-center mb-14 max-w-3xl relative">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.07),transparent_70%)]" />
        <h2 className="headline-md glow-text">{heading}</h2>
      </div>
  <ul className="grid gap-8 md:grid-cols-3 items-stretch">
        {cases.map((c) => (
          <li
            key={c.title}
    className="group glass card-glow rounded-xl p-6 relative overflow-hidden flex flex-col"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_65%_35%,rgba(255,255,255,0.14),transparent_70%)]" />
    <div className="relative flex flex-col h-full">
              <h3 className="text-base font-medium text-white mb-2 tracking-wide group-hover:text-white/90">
                {c.title}
              </h3>
      <p className="text-sm leading-relaxed text-white/65 flex-grow">{c.summary}</p>
            </div>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
