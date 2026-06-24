import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import LenisProvider from "./components/common/LenisProvider";
import Navbar from "./components/common/Navbar";
import CTA from "./components/common/CTA";
import Footer from "./components/common/Footer";


const sequel = localFont({
  src: "./fonts/Sequel100Black-75.ttf",
  variable: "--font-sequel",
});

const sequelSubheading = localFont({
  src:"./fonts/Sequel100Black-45.ttf",
  variable:"--font-subheading"
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "DAVAN Digital",
  description: "DAVAN Digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sequel.variable} ${poppins.variable} ${sequelSubheading.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LenisProvider>
          <Navbar/>
          {children}
          <CTA/>
          <Footer/>
        </LenisProvider>
      </body>
    </html>
  );
}
