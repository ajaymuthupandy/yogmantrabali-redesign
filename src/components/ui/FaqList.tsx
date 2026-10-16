import { Plus } from "lucide-react";
import type { Faq } from "@/data/faq";

/** Accordion built on <details>, so it works without JavaScript. */
export default function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="grid content-start gap-2">
      {items.map((f) => (
        <details key={f.q} className="group rounded-lg bg-white shadow-sm open:shadow-md">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-bold text-ink [&::-webkit-details-marker]:hidden">
            {f.q}
            <Plus className="size-5 shrink-0 text-orange transition-transform group-open:rotate-45" />
          </summary>
          <div className="px-5 pb-4 text-muted">
            {f.a && <p>{f.a}</p>}
            {f.list && (
              <ul className="mt-1 grid gap-x-6 gap-y-1 sm:grid-cols-2">
                {f.list.map((l) => (
                  <li key={l} className="flex gap-2 before:mt-2 before:size-1.5 before:shrink-0 before:rounded-full before:bg-sage">
                    {l}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </details>
      ))}
    </div>
  );
}
