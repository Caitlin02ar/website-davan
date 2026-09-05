"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";

export default function GoogleAds() {
  const pathname = usePathname();

  const isWhiteLabel = pathname.startsWith("/whitelabel");

  if (isWhiteLabel) {
    return null;
  }

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-18411391809"
        strategy="afterInteractive"
      />

      <Script id="google-ads-tag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18411391809');
        `}
      </Script>
    </>
  );
}