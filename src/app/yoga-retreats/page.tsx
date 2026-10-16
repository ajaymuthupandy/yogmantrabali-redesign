import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, MapPin } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Schedule from "@/components/ui/Schedule";
import Testimonials from "@/components/Testimonials";
import { RetreatsIndexEnding } from "@/components/endings/RetreatEndings";
import { inclusions, retreatList, retreatSchedule } from "@/data/retreats";

export const metadata: Metadata = {
  title: "Yoga Retreats in Bali 2026/2027 | Yogmantra Bali",
  description: "3, 6, 8 and 12 day yoga retreats in Bali with daily yoga, excursions, free massage and deluxe private rooms.",
};

export default function RetreatsIndex() {
  return (
    <>
      <PageHero title="Yoga Retreats in Bali" subtitle="Restore yourself with yoga, nature and Balinese culture." image="/images/gallery/yoga-retreat/14.jpg" />

      <section className="section-y bg-mist">
        <div className="container-x">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            {retreatList.map((r) => (
              <Link key={r.slug} href={`/yoga-retreats/${r.slug}`} className="group flex flex-col overflow-hidden rounded-lg bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={r.heroImage} alt={r.title} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <span className="absolute bottom-3 left-4 text-white">
                    <span className="font-heading text-5xl leading-none">{r.days}</span>
                    <span className="ml-1 font-bold">days</span>
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h2 className="text-lg font-bold text-ink">{r.title}</h2>
                  <p className="mt-1 flex flex-1 items-start gap-1.5 text-sm text-muted">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-sage" />
                    {r.itinerary.slice(1, 4).map((d) => d[0]).join(", ")}
                  </p>
                  <div className="mt-4 flex items-center justify-between border-t border-black/5 pt-4">
                    <span className="font-heading text-3xl text-orange">{r.price}</span>
                    <span className="inline-flex items-center gap-1.5 font-bold text-sage-dark group-hover:text-orange">
                      Details <ArrowRight className="size-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 rounded-lg bg-sage px-6 py-4 text-white lg:mt-4">
            <span className="font-bold">Every retreat includes:</span>
            {inclusions.map((x) => (
              <span key={x} className="flex items-center gap-1.5 text-sm"><Check className="size-4" />{x}</span>
            ))}
          </div>
        </div>
      </section>

      <Schedule rows={retreatSchedule} image="/images/gallery/pool-with-sea-view/20210102_114551.jpg" />
      <Testimonials />
      <RetreatsIndexEnding />
    </>
  );
}
