import type { ReactNode } from "react";

interface HighlightPart {
  text: string;
  className?: string;
  render?: (text: string) => ReactNode;
}

export function renderMultiHighlight(fullText: string, parts: HighlightPart[]) {
  let result: ReactNode[] = [];
  let remaining = fullText;
  let key = 0;

  while (remaining.length > 0) {
    // cari highlight yang match di posisi awal remaining text
    const match = parts.find((p) => remaining.startsWith(p.text));

    if (match) {
      if (match.render) {
        // pakai komponen custom kalau disediakan (misal GlowWord)
        result.push(<span key={key++}>{match.render(match.text)}</span>);
      } else {
        result.push(
          <span key={key++} className={match.className}>
            {match.text}
          </span>
        );
      }
      remaining = remaining.slice(match.text.length);
    } else {
      // ambil 1 karakter, lanjut cek karakter berikutnya
      result.push(remaining[0]);
      remaining = remaining.slice(1);
    }
  }

  return result;
}