import { HeroSection, FeatureList, FAQSection, CTASection, SocialProofSection, ProblemSolutionSection, UseCasesSection, TestimonialsSection } from "@/components";
import { faqPageSchema, serviceSchema } from "@/lib/schema";
import Script from "next/script";

export default function Home() {
  const faqEntries = [
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
  ];

  const services = [
    { name: 'Workflow Automation', description: 'Design and implement resilient automation pipelines across GTM and operations.' },
    { name: 'AI Enablement', description: 'Identify and operationalize pragmatic AI use cases with measurable ROI.' },
    { name: 'Data Activation', description: 'Turn raw data into governed, analytics-ready and activation-ready assets.' },
  ];

  return (
    <>
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
  <FeatureList />
        <UseCasesSection
          cases={[
            { title: 'Onboarding Automation', summary: 'Reduce new customer activation time with coordinated multi-channel sequencing.' },
            { title: 'Support Deflection', summary: 'Deploy AI triage and knowledge retrieval to cut ticket volume & improve CSAT.' },
            { title: 'Revenue Ops Alignment', summary: 'Centralize lifecycle data and automate handoffs to accelerate pipeline velocity.' },
          ]}
        />
        <TestimonialsSection />
        <FAQSection faqs={faqEntries} />
        <CTASection />
      </main>
      {/* Structured data for homepage FAQ */}
      <Script id="faq-schema" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqPageSchema(faqEntries, 'https://douglaspc.com/')),
      }} />
      {/* Structured data for key services (aggregate) */}
      {services.map((s, i) => (
        <Script key={i} id={`service-schema-${i}`} type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema({
            name: s.name,
            description: s.description,
            url: `https://douglaspc.com/#service-${i + 1}`,
            providerName: 'Douglas PC',
            serviceType: s.name,
          })),
        }} />
      ))}
    </>
  );
}
