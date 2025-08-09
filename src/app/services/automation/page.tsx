import { serviceSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components";
import Script from "next/script";

export const metadata = {
  title: "Workflow Automation Services | Douglas PC",
  description: "Design, implement, and optimize resilient workflow automations that eliminate manual effort and accelerate cycle times across operations, revenue, and customer success.",
};

const bullets = [
  "Process mapping & constraint analysis",
  "Workflow orchestration & event-driven design",
  "Data enrichment & validation automation",
  "Human-in-the-loop review patterns",
  "Runbook codification & monitoring",
];

export default function AutomationServicePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 relative">
      <div className="pointer-events-none absolute -inset-x-40 -top-40 h-80 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.07),transparent_70%)]" />
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/#features' },
        { label: 'Workflow Automation', href: '/services/automation' },
      ]} />
      <header className="mb-12 relative">
        <h1 className="headline-md glow-text mb-4">Workflow Automation</h1>
        <p className="text-white/70 text-lg max-w-2xl leading-relaxed">We engineer durable, observable automations that remove toil and free teams to focus on high-leverage work.</p>
      </header>
      <section className="mb-12">
        <h2 className="text-white font-semibold tracking-wide mb-4 text-sm uppercase opacity-70">Core Capabilities</h2>
        <ul className="grid sm:grid-cols-2 gap-4">
          {bullets.map(b => <li key={b} className="glass card-glow rounded-lg px-4 py-3 text-sm text-white/75">{b}</li>)}
        </ul>
      </section>
      <section className="mb-12">
        <h2 className="text-white font-semibold tracking-wide mb-4 text-sm uppercase opacity-70">Engagement Outcomes</h2>
        <p className="text-sm text-white/70 leading-relaxed max-w-2xl">Clients typically realize 30–60% reduction in manual processing time within the first 90 days, alongside lower error rates and improved data latency.</p>
      </section>
      <Script id="service-schema-automation" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(serviceSchema({
          name: 'Workflow Automation',
          description: 'Design and implement resilient automation pipelines across GTM and operations.',
          url: 'https://douglaspc.com/services/automation',
          providerName: 'Douglas PC',
          serviceType: 'Workflow Automation'
        }))
      }} />
    </main>
  );
}
