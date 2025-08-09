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
    <main className="prose prose-invert max-w-3xl mx-auto px-4 py-16">
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/#features' },
        { label: 'AI Enablement', href: '/services/ai-enablement' },
      ]} />
      <h1 className="mb-4">AI Enablement</h1>
      <p className="lead">We turn scattered experimentation into an accountable roadmap that compounds value across the business.</p>
      <h2>Engagement Framework</h2>
      <ol>
        {steps.map(s => <li key={s}>{s}</li>)}
      </ol>
      <h2>Governance & Safety</h2>
      <p>We implement usage policies, data handling controls, and monitoring to ensure responsible deployment.</p>
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
