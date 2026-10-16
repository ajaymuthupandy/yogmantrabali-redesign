"use client";

import { useState } from "react";
import Lightbox from "@/components/ui/Lightbox";

/** Category filter pills above a lightbox grid. */
export default function GalleryTabs({ groups }: { groups: Record<string, string[]> }) {
  const names = Object.keys(groups);
  const [active, setActive] = useState<string>("All");
  const images = (active === "All" ? names : [active]).flatMap((n) => groups[n].map((src) => ({ src, alt: n })));

  return (
    <>
      <div className="mb-5 flex flex-wrap justify-center gap-2">
        {["All", ...names].map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => setActive(n)}
            aria-pressed={active === n}
            className={`rounded-full px-4 py-2 text-sm transition ${active === n ? "bg-orange text-white" : "bg-white text-ink hover:bg-peach-light"}`}
          >
            {n}
            <span className="ml-1.5 opacity-60">{n === "All" ? names.reduce((s, k) => s + groups[k].length, 0) : groups[n].length}</span>
          </button>
        ))}
      </div>
      <Lightbox
        key={active}
        images={images}
        className="flex flex-wrap gap-2 lg:gap-3"
        // Tiles grow to fill the last row, so any photo count leaves no empty cells.
        tileClassName="h-36 grow basis-[45%] sm:h-44 sm:basis-[30%] lg:h-52 lg:basis-[23%]"
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
      />
    </>
  );
}
