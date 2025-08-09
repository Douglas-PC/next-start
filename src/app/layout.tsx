import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { organizationSchema } from "@/lib/schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Douglas PC – Technology & Digital Marketing Agency",
    template: "%s | Douglas PC",
  },
  description:
    "Douglas PC is a technology and digital marketing agency helping businesses automate workflows, strengthen cybersecurity, activate their data, and accelerate growth through AI, automation, and revenue-first marketing.",
  metadataBase: new URL("https://douglaspc.com"),
  openGraph: {
    title: "Douglas PC – Technology & Digital Marketing Agency",
    description:
      "Automation, AI enablement, cybersecurity, data activation, and digital growth services for SMB & mid‑market teams.",
    url: "https://douglaspc.com",
    siteName: "Douglas PC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Douglas PC – Technology & Digital Marketing Agency",
    description:
      "Automation, AI enablement, cybersecurity, data activation, and digital growth services for SMB & mid‑market teams.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#05060a] text-white selection:bg-indigo-500/40`}
      >
        <a href="#main" className="skip-link">Skip to content</a>
        {children}
        {/* Structured Data: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              organizationSchema({
                name: "Douglas PC",
                url: "https://douglaspc.com",
                logo: "https://douglaspc.com/logo.svg", // TODO: replace with production logo asset
                sameAs: [
                  "https://www.linkedin.com/company/douglaspc", // TODO verify
                  "https://twitter.com/douglaspctech",
                ],
                description: "Technology & digital marketing agency: automation, AI enablement, cybersecurity, data activation, and growth optimization.",
              })
            ),
          }}
        />
        {/* Structured Data: WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Douglas PC',
              url: 'https://douglaspc.com',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://douglaspc.com/search?q={search_term_string}',
                'query-input': 'required name=search_term_string'
              }
            })
          }}
        />
      </body>
    </html>
  );
}
