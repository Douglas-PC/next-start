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
    <main className="prose prose-invert max-w-3xl mx-auto px-4 py-16">
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/#features' },
        { label: 'Workflow Automation', href: '/services/automation' },
      ]} />
      <h1 className="mb-4">Workflow Automation</h1>
      <p className="lead">We engineer durable, observable automations that remove toil and free teams to focus on high-leverage work.</p>
      <h2>Core Capabilities</h2>
      <ul>
        {bullets.map(b => <li key={b}>{b}</li>)}
      </ul>
      <h2>Engagement Outcomes</h2>
      <p>Clients typically realize 30–60% reduction in manual processing time within the first 90 days, alongside lower error rates and improved data latency.</p>
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
