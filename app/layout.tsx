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
  title: "DAVAN Digital",
  description: "DAVAN Digital",
  metadataBase: new URL("https://www.davan.digital"),
  openGraph: {
    title: "DAVAN Digital",
    description: "DAVAN Digital",
    url: "https://www.davan.digital",
    siteName: "DAVAN Digital",
    images: [
      {
        url: "/images/davan-og-image.png",
        width: 1200,
        height: 630,
        alt:"DAVAN Digital",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DAVAN Digital",
    description: "DAVAN Digital",
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
    "name": "DAVAN Digital",
    "url": "https://www.davan.digital",
    "logo": "https://www.davan.digital/images/davan-og-image.png",
    "sameAs": [
      "https://www.facebook.com/davan.digital",
      "https://www.instagram.com/davan.digital",
      "https://www.linkedin.com/company/davan-digital"
    ]
  }

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
      lang="en"
      className={`${sequel.variable} ${poppins.variable} ${sequelSubheading.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <LenisProvider>
          <Navbar />
          {children}
          <Footer data={footerData} />
        </LenisProvider>
      </body>
    </html>
  );
}