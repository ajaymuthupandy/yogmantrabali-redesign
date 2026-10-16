import Image from "next/image";
import { CalendarDays, Check, Gift } from "lucide-react";
import { WhatsAppIcon } from "@/components/BrandIcons";
import { perks, type Course } from "@/data/courses";
import { whatsappBook } from "@/data/site";

export default function Booking({ course }: { course: Course }) {
  const single = course.rooms.length === 1;
  return (
    <section id="book" className="scroll-mt-24 bg-mist pb-10 pt-10 lg:pb-14 lg:pt-12">
      <div className="container-x">
        <h2 className="mb-6 text-center font-heading text-4xl text-ink lg:text-5xl">Reserve Your Spot</h2>

        <div className="grid gap-3 lg:grid-cols-3 lg:gap-4">
          <div className="grid content-start gap-3 lg:col-span-2 lg:gap-4">
            <div className={`grid gap-3 lg:gap-4 ${single ? "" : "sm:grid-cols-2"}`}>
              {course.rooms.map((r) => (
                <article key={r.name} className={`overflow-hidden rounded-lg bg-white shadow-sm ${single ? "sm:grid sm:grid-cols-2" : ""}`}>
                  <div className={`relative ${single ? "aspect-[4/3] sm:aspect-auto" : "aspect-[4/3]"}`}>
                    <Image src={r.image} alt={r.name} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
                  </div>
                  <div className="flex flex-col p-5">
                    <h3 className="text-lg font-bold text-ink">{r.name}</h3>
                    <p className="mt-2 flex items-baseline gap-2">
                      <span className="font-heading text-4xl text-orange">{r.price}</span>
                      <span className="text-sm text-muted">USD</span>
                      <s className="text-muted">{r.was}</s>
                    </p>
                    <p className="text-sm text-muted">Reserve now for just {r.deposit} (15% deposit)</p>
                    <a
                      href={whatsappBook(`${course.title} (${r.name})`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-sage px-5 py-3 font-bold text-white transition hover:bg-sage-dark"
                    >
                      <WhatsAppIcon className="size-5" /> Book via WhatsApp
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className="rounded-lg bg-orange p-6 text-white">
              <h3 className="mb-3 flex items-center gap-2 text-lg font-bold">
                <Gift className="size-5" /> Included perks
              </h3>
              <ul className="grid gap-x-6 gap-y-1.5 sm:grid-cols-2">
                {perks.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <Check className="mt-0.5 size-4 shrink-0" /> {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-lg bg-white p-5 shadow-sm">
            <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-ink">
              <CalendarDays className="size-5 text-sage" /> Dates 2026 / 2027
            </h3>
            <ul className="divide-y divide-black/5">
              {course.dates.map(([range, n]) => (
                <li key={range} className="flex items-center justify-between gap-3 py-2">
                  <span className="text-ink">{range}</span>
                  <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-bold ${n <= 1 ? "bg-coral/15 text-coral" : "bg-sage/20 text-sage-dark"}`}>
                    {n} {n === 1 ? "slot" : "slots"} left
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
