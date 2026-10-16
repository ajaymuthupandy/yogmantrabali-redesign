import Image from "next/image";
import type { ScheduleRow } from "@/data/courses";

const meals = /breakfast|lunch|dinner|break$|wake|lights/i;

type Props = { title?: string; rows: ScheduleRow[]; image: string; note?: string };

/** Two-column daily timeline beside a photo. */
export default function Schedule({ title = "Daily Schedule", rows, image, note = "Schedule may change with the seasons." }: Props) {
  return (
    <section className="grid bg-sage-deep text-white lg:grid-cols-5">
      <div className="relative min-h-64 lg:col-span-2">
        <Image src={image} alt="" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
      </div>
      <div className="p-8 sm:p-10 lg:col-span-3 lg:p-12">
        <h2 className="mb-5 font-heading text-4xl lg:text-5xl">{title}</h2>
        <ol className="grid gap-x-8 sm:grid-cols-2">
          {rows.map(([time, activity]) => (
            <li key={time + activity} className="flex items-center gap-4 border-b border-white/10 py-2.5">
              <span className="w-14 shrink-0 font-bold text-peach">{time}</span>
              <span className={meals.test(activity) ? "text-white/60" : ""}>{activity}</span>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-sm text-white/60">{note}</p>
      </div>
    </section>
  );
}
