// app/layout.tsx

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import localFont from "next/font/local";

import LenisProvider from "./components/common/LenisProvider";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

import { client } from "@/sanity/lib/client";

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

export const metadata: Metadata = {
  title: {
    default: "DAVAN Digital | Digital Transformation & Integration Services",
    template: "%s | DAVAN Digital",
  },
  description:
    "DAVAN Digital helps organisations close digital gaps through system integration, automation, and digital transformation services.",
  metadataBase: new URL("https://www.davan.digital"),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "digital transformation",
    "system integration",
    "automation",
    "digital agency",
    "DAVAN Digital",
    "Perth",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "DAVAN Digital | Digital Transformation & Integration Services",
    description:
      "DAVAN Digital helps organisations close digital gaps through system integration, automation, and digital transformation services.",
    url: "https://www.davan.digital",
    siteName: "DAVAN Digital",
    images: [
      {
        url: "/photos/davan-og-image.png",
        width: 1200,
        height: 630,
        alt: "DAVAN Digital | Digital Transformation & Integration Services",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DAVAN Digital | Digital Transformation & Integration Services",
    description:
      "DAVAN Digital helps organisations close digital gaps through system integration, automation, and digital transformation services.",
    images: ["/images/davan-og-image.png"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DAVAN Digital",
    url: "https://www.davan.digital",
    logo: "https://www.davan.digital/images/logo.png",
    description:
      "DAVAN Digital helps organisations close digital gaps through system integration, automation, and digital transformation services.",
    areaServed: "AU",
    sameAs: [
      "https://www.instagram.com/davandigital/",
    ],
  };

  const footerData = await client.fetch(`
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
  `);

  return (
    <html
      lang="en-AU"
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