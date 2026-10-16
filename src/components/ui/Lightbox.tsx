"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export type LightboxImage = { src: string; alt: string };

type Props = {
  images: LightboxImage[];
  /** Tailwind classes for the grid wrapper. */
  className?: string;
  /** Tailwind classes for each thumbnail tile. */
  tileClassName?: string;
  sizes?: string;
  contain?: boolean;
};

/** Thumbnail grid that opens a full-screen viewer with keyboard, arrow-button and swipe navigation. */
export default function Lightbox({ images, className = "", tileClassName = "aspect-square", sizes = "33vw", contain }: Props) {
  const [index, setIndex] = useState<number | null>(null);
  const close = useCallback(() => setIndex(null), []);
  const step = useCallback((d: number) => setIndex((i) => (i === null ? i : (i + d + images.length) % images.length)), [images.length]);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchX = useRef<number | null>(null);
  const open = index !== null;

  // Move focus into the viewer when it opens and hand it back to the thumbnail when it closes.
  useEffect(() => {
    if (!open) return;
    const trigger = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    return () => trigger?.focus({ preventScroll: true });
  }, [open]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      // Keep Tab cycling inside the viewer's three buttons.
      if (e.key === "Tab") {
        const buttons = [...document.querySelectorAll<HTMLElement>("[data-lightbox] button")];
        const i = buttons.indexOf(document.activeElement as HTMLElement);
        const next = e.shiftKey ? (i <= 0 ? buttons.length - 1 : i - 1) : (i + 1) % buttons.length;
        e.preventDefault();
        buttons[next]?.focus();
      }
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, step]);

  return (
    <>
      <div className={className}>
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setIndex(i)}
            className={`group relative block w-full overflow-hidden rounded-lg ${tileClassName}`}
            aria-label={`Open ${img.alt}`}
          >
            <Image src={img.src} alt={img.alt} fill sizes={sizes} className={`${contain ? "object-contain" : "object-cover"} transition duration-700 group-hover:scale-105`} />
          </button>
        ))}
      </div>

      {index !== null && (
        <div
          data-lightbox
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            touchX.current = null;
            if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
          }}
        >
          <button ref={closeRef} type="button" onClick={close} aria-label="Close" className="absolute right-4 top-4 grid size-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20">
            <X className="size-6" />
          </button>
          <button type="button" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous" className="absolute left-2 grid size-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-6">
            <ChevronLeft className="size-6" />
          </button>
          <div className="relative h-[85vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image src={images[index].src} alt={images[index].alt} fill sizes="100vw" className="object-contain" />
          </div>
          <button type="button" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next" className="absolute right-2 grid size-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-6">
            <ChevronRight className="size-6" />
          </button>
          <p className="absolute bottom-4 text-sm text-white/70">
            {images[index].alt} · {index + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  );
}
