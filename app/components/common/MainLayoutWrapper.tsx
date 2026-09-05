"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import VoiceflowWidget from "./VoiceflowWidget";

export default function MainLayoutWrapper({
  children,
  footerData,
}: {
  children: React.ReactNode;
  footerData: any;
}) {
  const pathname = usePathname();

  const isWhiteLabel = pathname.startsWith("/whitelabel");

  if (isWhiteLabel) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      {children}
      <Footer data={footerData} />
      <VoiceflowWidget />
    </>
  );
}