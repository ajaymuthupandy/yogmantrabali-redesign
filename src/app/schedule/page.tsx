import type { Metadata } from "next";
import Image from "next/image";
import { Clock } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Lightbox from "@/components/ui/Lightbox";
import { ttc300Schedule, ttcSchedule, type ScheduleRow } from "@/data/courses";
import { retreatSchedule } from "@/data/retreats";
import { ScheduleEnding } from "@/components/endings/PageEndings";
import gallery from "@/content/gallery.json";

export const metadata: Metadata = {
  title: "Daily Yoga TTC Schedule | Yogmantra Bali",
  description: "A typical day at Yogmantra Bali's yoga teacher training and retreats, from sunrise pranayama to evening meditation.",
};

const meals = /breakfast|lunch|dinner|break$|wake|lights/i;

type Plan = { title: string; note: string; rows: ScheduleRow[]; accent: string };

const plans: Plan[] = [
  { title: "100 & 200 Hour TTC", note: "Intense, practical learning", rows: ttcSchedule, accent: "bg-orange" },
  { title: "300 Hour TTC", note: "Advanced training day", rows: ttc300Schedule, accent: "bg-sage-dark" },
  { title: "Yoga Retreats", note: "Yoga, excursions & massage", rows: retreatSchedule, accent: "bg-coral" },
];

const photos = [...gallery["Meditation Class"].slice(0, 3), ...gallery["Kirtan on Saturday Nights"].slice(0, 3)].map((src, i) => ({
  src,
  alt: i < 3 ? "Meditation class" : "Kirtan on Saturday nights",
}));

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <article className="overflow-hidden rounded-lg bg-white shadow-sm">
      <header className={`${plan.accent} px-5 py-4 text-white`}>
        <h2 className="text-xl font-bold">{plan.title}</h2>
        <p className="text-sm text-white/85">{plan.note}</p>
      </header>
      <ol className="divide-y divide-black/5 px-5 py-2">
        {plan.rows.map(([time, activity]) => (
          <li key={time + activity} className="flex items-center gap-4 py-2">
            <span className="flex w-16 shrink-0 items-center gap-1.5 font-bold text-ink">
              <Clock className="size-3.5 text-sage" /> {time}
            </span>
            <span className={meals.test(activity) ? "text-muted" : "text-ink"}>{activity}</span>
          </li>
        ))}
      </ol>
    </article>
  );
}

export default function SchedulePage() {
  const [ttc, ttc300, retreat] = plans;
  return (
    <>
      <PageHero title="Daily Schedule" subtitle="From sunrise pranayama to evening meditation." image="/images/gallery/meditation-class/20210102_122058.jpg" />

      <section className="section-y bg-mist">
        <div className="container-x grid gap-3 lg:grid-cols-3 lg:gap-4">
          <PlanCard plan={ttc} />
          <PlanCard plan={ttc300} />
          <div className="flex flex-col gap-3 lg:gap-4">
            <PlanCard plan={retreat} />
            <div className="relative min-h-56 flex-1 overflow-hidden rounded-lg">
              <Image src="/images/gallery/pool-with-sea-view/20210102_114551.jpg" alt="Pool with sea view" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
              <p className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-5 text-sm text-white">
                Schedules may change with the seasons.
              </p>
            </div>
          </div>
        </div>
        <div className="container-x mt-3 lg:mt-4">
          <Lightbox images={photos} className="grid grid-cols-3 gap-3 lg:grid-cols-6 lg:gap-4" tileClassName="aspect-square shadow-sm" sizes="(min-width: 1280px) 200px, (min-width: 1024px) 16vw, 33vw" />
        </div>
      </section>
      <ScheduleEnding />
    </>
  );
}
