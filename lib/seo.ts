import { client } from "@/sanity/lib/client";
import { urlFor } from "@/lib/image";
import type { Metadata } from "next";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://website-davan.vercel.app";

export const SITE_NAME = "DAVAN Digital";

export const DEFAULT_OG_IMAGE = "/photos/davan-og-image.png";

export function pageOpenGraph({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: SITE_NAME,
        },
      ],
      locale: "en_AU",
      type: "website" as const,
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

// ── Metadata per halaman: ambil dari CMS (pageSeo + siteSettings), fallback ke default ──
export async function getPageMeta({
  page,
  path,
  fallbackTitle,
  fallbackDescription,
}: {
  page: string;
  path: string;
  fallbackTitle: string;
  fallbackDescription: string;
}): Promise<Metadata> {
  const data = await client.fetch(
    `{
      "seo": *[_type == "pageSeo" && page == $page][0]{
        metaTitle,
        metaDescription,
        ogImage
      },
      "settings": *[_id == "siteSettings"][0]{
        siteName
      }
    }`,
    { page }
  );

  const seo = data?.seo;
  const siteName = data?.settings?.siteName || SITE_NAME;

  const title = seo?.metaTitle || fallbackTitle;
  const description = seo?.metaDescription || fallbackDescription;

  const ogImageUrl = seo?.ogImage
    ? urlFor(seo.ogImage).width(1200).height(630).fit("crop").url()
    : DEFAULT_OG_IMAGE;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName,
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: siteName }],
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