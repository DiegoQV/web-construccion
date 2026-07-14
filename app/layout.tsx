import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site-config";
import { FloatingCTA } from "@/components/ui/FloatingCTA";

// ── Fonts ─────────────────────────────────────────────────────────────────
// Self-hosted automatically by next/font — no Google Fonts requests at runtime.

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  preload: true,
});

// ── Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.siteName,
    template: `%s | ${siteConfig.businessName}`,
  },
  description: siteConfig.metaDescription,
  keywords: [
    "constructor viviendas",
    "maestro de obra",
    "construcción residencial",
    siteConfig.city,
    siteConfig.region,
    siteConfig.country,
  ],
  authors: [{ name: siteConfig.ownerName }],
  creator: siteConfig.ownerName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: siteConfig.siteUrl,
    siteName: siteConfig.siteName,
    title: siteConfig.siteName,
    description: siteConfig.metaDescription,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.siteName,
    description: siteConfig.metaDescription,
    images: [siteConfig.ogImage],
  },
  // Geo meta for local SEO
  other: {
    "geo.region": siteConfig.geoRegion,
    "geo.placename": siteConfig.city,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#17130e",
};

// ── Root Layout ───────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${inter.variable}`}
    >
      <body>
        {/* Skip link for keyboard accessibility */}
        <a href="#main-content" className="sr-only focusable">
          Saltar al contenido principal
        </a>

        {children}

        {/* Floating WhatsApp CTA — mobile only */}
        <FloatingCTA />
      </body>
    </html>
  );
}
