"use client";

import { useEffect } from "react";

/** Publishes the footer's live height as --footer-h so closing sections can fill the screen above it. */
export default function FooterHeight() {
  useEffect(() => {
    const footer = document.querySelector("body > footer");
    if (!footer) return;
    const root = document.documentElement;
    const observer = new ResizeObserver(([entry]) => root.style.setProperty("--footer-h", `${entry.borderBoxSize[0].blockSize}px`));
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);
  return null;
}
