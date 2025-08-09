import type { Metadata } from 'next';

interface BuildMetadataOptions {
  title: string;
  description: string;
  path?: string; // path after domain
  siteName?: string;
  ogImage?: string;
}

const DEFAULT_SITE = 'Douglas PC';
const BASE_URL = 'https://douglaspc.com';

export function buildMetadata(opts: BuildMetadataOptions): Metadata {
  const {
    title,
    description,
    path = '/',
    siteName = DEFAULT_SITE,
    ogImage = '/og-image.png',
  } = opts;
  const url = new URL(path, BASE_URL).toString();

  return {
    title: `${title} | ${siteName}`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName,
      images: [ogImage],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}
