import { serviceSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components";
import Script from "next/script";

export const metadata = {
  title: "AI Enablement Services | Douglas PC",
  description: "Prioritize, prototype, and productionize pragmatic AI use cases that deliver measurable ROI—not hype.",
};

const steps = [
  "Use case discovery & value sizing",
  "Data readiness & risk assessment",
  "Proof-of-concept & validation",
  "Model / vendor selection & integration",
  "Deployment, monitoring & iteration",
];

export default function AIEnablementServicePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 relative">
      <div className="pointer-events-none absolute -inset-x-40 -top-40 h-80 bg-[radial-gradient(circle_at_60%_40%,rgba(255,255,255,0.07),transparent_70%)]" />
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/#features' },
        { label: 'AI Enablement', href: '/services/ai-enablement' },
      ]} />
      <header className="mb-12 relative">
        <h1 className="headline-md glow-text mb-4">AI Enablement</h1>
        <p className="text-white/70 text-lg max-w-2xl leading-relaxed">We turn scattered experimentation into an accountable roadmap that compounds value across the business.</p>
      </header>
      <section className="mb-12">
        <h2 className="text-white font-semibold tracking-wide mb-4 text-sm uppercase opacity-70">Engagement Framework</h2>
        <ol className="space-y-3">
          {steps.map(s => <li key={s} className="glass card-glow rounded-lg px-4 py-3 text-sm text-white/75">{s}</li>)}
        </ol>
      </section>
      <section className="mb-12">
        <h2 className="text-white font-semibold tracking-wide mb-4 text-sm uppercase opacity-70">Governance & Safety</h2>
        <p className="text-sm text-white/70 leading-relaxed max-w-2xl">We implement usage policies, data handling controls, and monitoring to ensure responsible deployment.</p>
      </section>
      <Script id="service-schema-ai" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(serviceSchema({
          name: 'AI Enablement',
          description: 'Identify and operationalize pragmatic AI use cases with measurable ROI.',
          url: 'https://douglaspc.com/services/ai-enablement',
          providerName: 'Douglas PC',
          serviceType: 'AI Enablement'
        }))
      }} />
    </main>
  );
}
