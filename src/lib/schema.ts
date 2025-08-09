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

// Individual service / offering schema
export interface ServiceSchemaOptions {
  name: string;
  description: string;
  url: string;
  areaServed?: string | string[];
  providerName?: string;
  serviceType?: string;
}

export function serviceSchema(opts: ServiceSchemaOptions) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    areaServed: opts.areaServed,
    provider: opts.providerName ? {
      '@type': 'Organization',
      name: opts.providerName,
    } : undefined,
    serviceType: opts.serviceType,
  };
}

// Simple breadcrumb list helper
export interface BreadcrumbItem { name: string; url: string }
export function breadcrumbList(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
