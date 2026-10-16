import Image from "next/image";
import { BadgeCheck, Ban } from "lucide-react";
import { discipline } from "@/data/courses";
import { reasons } from "@/data/site";

type Props = { overview: string; badge?: string; image?: string };

/** Overview text beside a grid of reasons to train with us. */
export default function Reasons({ overview, badge, image = "/images/teachers.jpg" }: Props) {
  return (
    <section className="section-y bg-white">
      <div className="container-x grid gap-3 lg:grid-cols-3 lg:gap-4">
        <div className="relative flex min-h-72 flex-col justify-end overflow-hidden rounded-lg text-white">
          <Image src={image} alt="Yogmantra Bali students and teachers" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
          <div className="relative p-6">
            {badge && <Image src={badge} alt="Yoga Alliance Registered Yoga School" width={80} height={80} className="mb-3 size-16 rounded-full bg-white p-1" />}
            <h2 className="font-heading text-3xl">Why Train With Us</h2>
            <p className="mt-2 text-white/85">{overview}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 lg:col-span-2 lg:gap-4">
          {reasons.map((r) => (
            <div key={r} className="flex items-center gap-2.5 rounded-lg bg-mist p-3 text-sm sm:gap-3 sm:p-4 sm:text-base">
              <BadgeCheck className="size-5 shrink-0 text-sage-dark sm:size-6" />
              <span className="text-ink">{r}</span>
            </div>
          ))}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 rounded-lg bg-peach-light p-4 col-span-2">
            <span className="font-bold text-ink">Discipline at our centre:</span>
            {discipline.map((d) => (
              <span key={d} className="flex items-center gap-1.5 text-sm text-muted">
                <Ban className="size-4 text-coral" /> {d}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
