import { serviceSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components";
import Script from "next/script";

export const metadata = {
  title: "Data Activation Services | Douglas PC",
  description: "Transform fragmented data into governed, analytics-ready and activation-ready assets for personalization and decisioning.",
};

const pillars = [
  "Unified data model & semantic layer",
  "Ingestion & quality monitoring",
  "Warehouse modeling & performance tuning",
  "Reverse ETL & activation orchestration",
  "Measurement & experimentation foundation",
];

export default function DataActivationServicePage() {
  return (
    <main className="prose prose-invert max-w-3xl mx-auto px-4 py-16">
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/#features' },
        { label: 'Data Activation', href: '/services/data-activation' },
      ]} />
      <h1 className="mb-4">Data Activation</h1>
      <p className="lead">We make data trustworthy, timely, and usable in the tools where revenue and retention decisions happen.</p>
      <h2>Core Pillars</h2>
      <ul>
        {pillars.map(p => <li key={p}>{p}</li>)}
      </ul>
      <h2>Outcomes</h2>
      <p>Teams gain faster experimentation cycles, improved attribution confidence, and actionable segmentation for lifecycle programs.</p>
      <Script id="service-schema-data" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(serviceSchema({
          name: 'Data Activation',
          description: 'Turn raw data into governed, analytics-ready and activation-ready assets.',
          url: 'https://douglaspc.com/services/data-activation',
          providerName: 'Douglas PC',
          serviceType: 'Data Activation'
        }))
      }} />
    </main>
  );
}
