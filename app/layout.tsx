// app/layout.tsx

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import localFont from "next/font/local";

import LenisProvider from "./components/common/LenisProvider";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/lib/image";

const sequel = localFont({
  src: "./fonts/Sequel100Black-75.ttf",
  variable: "--font-sequel",
});

const sequelSubheading = localFont({
  src: "./fonts/Sequel100Black-45.ttf",
  variable: "--font-subheading",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://website-davan.vercel.app";

const SITE_SETTINGS_QUERY = `
  *[_type == "siteSettings"][0]{
    siteTitle,
    titleTemplate,
    siteName,
    description,
    keywords,
    allowIndexing,
    ogImage,
    "ogImageAlt": ogImage.alt,
    socialLinks[]{ platform, url },
    organizationName,
    organizationLogo,
    organizationDescription,
    areaServed
  }
`;

// ── FALLBACKS ──
const FALLBACK = {
  siteTitle: "DAVAN Digital | Digital Transformation & Integration Services",
  titleTemplate: "%s | DAVAN Digital",
  siteName: "DAVAN Digital",
  description:
    "DAVAN Digital helps organisations close digital gaps through system integration, automation, and digital transformation services.",
  keywords: [
    "digital transformation",
    "system integration",
    "automation",
    "digital agency",
    "DAVAN Digital",
    "Perth",
  ],
  ogImage: "/photos/davan-og-image.png",
};

export async function generateMetadata(): Promise<Metadata> {
  const settings = await client.fetch(SITE_SETTINGS_QUERY);

  const title = settings?.siteTitle ?? FALLBACK.siteTitle;
  const description = settings?.description ?? FALLBACK.description;
  const siteName = settings?.siteName ?? FALLBACK.siteName;
  const ogImageAlt = settings?.ogImageAlt ?? siteName;

  const ogImageUrl = settings?.ogImage
    ? urlFor(settings.ogImage).width(1200).height(630).fit("crop").url()
    : FALLBACK.ogImage;

  const shouldIndex = settings?.allowIndexing ?? true;

  return {
    title: {
      default: title,
      template: settings?.titleTemplate ?? FALLBACK.titleTemplate,
    },

    description,

    metadataBase: new URL(SITE_URL),

    alternates: {
      canonical: "/",
    },

    keywords: settings?.keywords?.length ? settings.keywords : FALLBACK.keywords,

    robots: {
      index: shouldIndex,
      follow: shouldIndex,
    },

    openGraph: {
      title,
      description,
      url: SITE_URL,
      siteName,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: ogImageAlt,
        },
      ],
      locale: "en_AU",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [settings, footerData] = await Promise.all([
    client.fetch(SITE_SETTINGS_QUERY),
    client.fetch(`
      *[
        _type == "footerContent"
        ][0]{
          copyright,
          "footerLogo": footerLogo.asset->url,
          information[]{
            "icon": icon.asset->url,
            text
          }
        }
    `),
  ]);

  const orgLogoUrl = settings?.organizationLogo
    ? urlFor(settings.organizationLogo).width(512).url()
    : `${SITE_URL}/images/logo.png`;

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: settings?.organizationName ?? FALLBACK.siteName,
    url: SITE_URL,
    logo: orgLogoUrl,
    description:
      settings?.organizationDescription ??
      settings?.description ??
      FALLBACK.description,
    areaServed: settings?.areaServed ?? "AU",
    sameAs:
      settings?.socialLinks?.map((s: { url: string }) => s.url) ?? [
        "https://www.instagram.com/davandigital/",
      ],
  };

  return (
    <html
      lang="en-AU" data-scroll-behavior="smooth"
      className={`${sequel.variable} ${poppins.variable} ${sequelSubheading.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <LenisProvider>
          <Navbar />
          {children}
          <Footer data={footerData} />
        </LenisProvider>
      </body>
    </html>
  );
}