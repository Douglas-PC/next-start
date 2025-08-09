// Lightweight helpers to produce JSON-LD objects for structured data.
// Keep data minimal & valid; consumer can stringify in a script tag.

export interface OrganizationSchemaOptions {
  name: string;
  url: string;
  logo?: string;
  sameAs?: string[];
  description?: string;
  email?: string;
  telephone?: string;
}

export function organizationSchema(opts: OrganizationSchemaOptions) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: opts.name,
    url: opts.url,
    logo: opts.logo,
    sameAs: opts.sameAs,
    description: opts.description,
    contactPoint: opts.email || opts.telephone ? [
      {
        '@type': 'ContactPoint',
        email: opts.email,
        telephone: opts.telephone,
        contactType: 'customer support'
      }
    ] : undefined,
  };
}

export interface FAQEntry { question: string; answer: string }
export function faqPageSchema(entries: FAQEntry[], pageUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: entries.map((e) => ({
      '@type': 'Question',
      name: e.question,
      acceptedAnswer: { '@type': 'Answer', text: e.answer },
    })),
    url: pageUrl,
  };
}
