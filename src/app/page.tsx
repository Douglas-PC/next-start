import { HeroSection, FeatureList, FAQSection, CTASection, SocialProofSection, ProblemSolutionSection, UseCasesSection, TestimonialsSection } from "@/components";

export default function Home() {
  return (
    <main id="main" className="flex flex-col">
      <HeroSection />
      <SocialProofSection />
      <ProblemSolutionSection
        items={[
          {
            problem: 'Manual processes slow delivery and create errors',
            solution: 'Map high-friction workflows and implement event-driven automation & AI assisted steps.',
          },
          {
            problem: 'Disconnected marketing + sales tooling limits attribution',
            solution: 'Unify tracking & implement source-of-truth activation layer for funnels and cohorts.',
          },
          {
            problem: 'Data captured but not operationalized',
            solution: 'Design warehouse → modeling → activation loop with governance and monitoring.',
          },
        ]}
      />
      <FeatureList
        features={[
          {
            title: "Workflow Automation",
            description:
              "Eliminate repetitive tasks across operations, sales, marketing, and support with resilient automation pipelines.",
          },
          {
            title: "AI Enablement",
            description:
              "Assess, prototype, and productionize AI use cases that deliver measurable ROI—not hype.",
          },
          {
            title: "Funnel Optimization",
            description:
              "Improve conversion across acquisition, onboarding, and retention with data-informed experimentation.",
          },
          {
            title: "Data Activation",
            description:
              "Turn fragmented data into usable intelligence for decisioning, personalization, and predictive models.",
          },
          {
            title: "Acquisition & Demand",
            description:
              "Modern organic + paid + partner strategies aligned to lifetime value and pipeline velocity.",
          },
          {
            title: "Retention & Expansion",
            description:
              "Lifecycle programs that reduce churn and unlock expansion through segmentation and triggered messaging.",
          },
        ]}
      />
      <UseCasesSection
        cases={[
          { title: 'Onboarding Automation', summary: 'Reduce new customer activation time with coordinated multi-channel sequencing.' },
          { title: 'Support Deflection', summary: 'Deploy AI triage and knowledge retrieval to cut ticket volume & improve CSAT.' },
          { title: 'Revenue Ops Alignment', summary: 'Centralize lifecycle data and automate handoffs to accelerate pipeline velocity.' },
        ]}
      />
      <TestimonialsSection />
      <FAQSection
        faqs={[
          {
            question: "How do we engage?",
            answer:
              "Typically a short assessment → roadmap → 60–90 day execution sprints with clear KPI alignment.",
          },
          {
            question: "Do you build or just advise?",
            answer:
              "Both. We handle strategy, architecture, implementation, and knowledge transfer depending on internal bandwidth.",
          },
          {
            question: "What size teams do you work with?",
            answer:
              "Seed to mid-market (and innovation groups in enterprise) where speed, leverage, and focus matter most.",
          },
        ]}
      />
      <CTASection />
    </main>
  );
}
