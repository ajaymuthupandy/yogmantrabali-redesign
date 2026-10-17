"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon } from "@/components/BrandIcons";
import { contact } from "@/data/site";

/** Floating WhatsApp button; fades out once the footer scrolls into view so it never sits on top of it. */
export default function WhatsAppFab() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("body > footer");
    if (!footer) return;
    const observer = new IntersectionObserver(([entry]) => setHidden(entry.isIntersecting));
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={contact.whatsapp}
      aria-label="Chat on WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
      aria-hidden={hidden}
      tabIndex={hidden ? -1 : undefined}
      className={`fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-[#25d366] text-white shadow-lg shadow-black/20 transition hover:scale-105 ${hidden ? "pointer-events-none translate-y-4 opacity-0" : ""}`}
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
