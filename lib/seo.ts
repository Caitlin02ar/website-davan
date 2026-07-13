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
