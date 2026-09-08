export function getLinkHref(href: string) {
  if (!href) return "#";

  if (
    href.startsWith("mailto:") ||
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("/") ||
    href.startsWith("#")
  ) {
    return href;
  }

  // Kalau isinya email
  if (href.includes("@")) {
    return `mailto:${href}`;
  }

  return href;
}