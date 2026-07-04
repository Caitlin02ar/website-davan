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
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

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
      className={`${sequel.variable} ${poppins.variable} ${sequelSubheading.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        <LenisProvider>

          <Navbar />

          {children}

          <Footer data={footerData} />

        </LenisProvider>

      </body>
    </html>
  );
}