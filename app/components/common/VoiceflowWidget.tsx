"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export default function VoiceflowWidget() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (shouldLoad) return;

    const trigger = () => setShouldLoad(true);

    const events = ["scroll", "mousemove", "touchstart", "keydown", "click"];
    events.forEach((e) =>
      window.addEventListener(e, trigger, { once: true, passive: true })
    );

    const timer = setTimeout(trigger, 2000);

    return () => {
      events.forEach((e) => window.removeEventListener(e, trigger));
      clearTimeout(timer);
    };
  }, [shouldLoad]);

  if (!shouldLoad) return null;

  return (
    <Script id="voiceflow-widget" strategy="afterInteractive">
      {`
        (function(d, t) {
          var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
          v.onload = function() {
            window.voiceflow.chat.load({
              verify: { projectID: '6a55fa11759739118a02a905' },
              url: 'https://general-runtime.voiceflow.com',
              voice: {
                url: "https://runtime-api.voiceflow.com"
              }
            });
          }
          v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
          v.type = "text/javascript";
          s.parentNode.insertBefore(v, s);
        })(document, 'script');
      `}
    </Script>
  );
}