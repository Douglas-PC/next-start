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
    <main className="max-w-4xl mx-auto px-6 py-20 relative">
      <div className="pointer-events-none absolute -inset-x-40 -top-40 h-80 bg-[radial-gradient(circle_at_45%_45%,rgba(255,255,255,0.07),transparent_70%)]" />
      <Breadcrumbs items={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/#features' },
        { label: 'Data Activation', href: '/services/data-activation' },
      ]} />
      <header className="mb-12 relative">
        <h1 className="headline-md glow-text mb-4">Data Activation</h1>
        <p className="text-white/70 text-lg max-w-2xl leading-relaxed">We make data trustworthy, timely, and usable in the tools where revenue and retention decisions happen.</p>
      </header>
      <section className="mb-12">
        <h2 className="text-white font-semibold tracking-wide mb-4 text-sm uppercase opacity-70">Core Pillars</h2>
        <ul className="grid sm:grid-cols-2 gap-4">
          {pillars.map(p => <li key={p} className="glass card-glow rounded-lg px-4 py-3 text-sm text-white/75">{p}</li>)}
        </ul>
      </section>
      <section className="mb-12">
        <h2 className="text-white font-semibold tracking-wide mb-4 text-sm uppercase opacity-70">Outcomes</h2>
        <p className="text-sm text-white/70 leading-relaxed max-w-2xl">Teams gain faster experimentation cycles, improved attribution confidence, and actionable segmentation for lifecycle programs.</p>
      </section>
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
