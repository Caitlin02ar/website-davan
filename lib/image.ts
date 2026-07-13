import { createImageUrlBuilder } from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

const builder = createImageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

export function sanityImage(
  src: string,
  width: number,
  height?: number,
  quality = 75
): string {
  if (!src) {
    return "";
  }

  if (src.startsWith("/")) {
    return src;
  }

  if (src.toLowerCase().endsWith(".svg")) {
    return src;
  }

  let chain = urlFor(src)
    .width(width)
    .quality(quality)
    .format("webp");

  if (height) {
    chain = chain.height(height);
  }

  const url: string = chain.url();

  return url;
}