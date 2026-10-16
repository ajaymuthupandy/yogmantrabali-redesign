import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { bookHref, retreats, ttc } from "@/data/site";

const retreatImages = ["/images/g7.jpg", "/images/g8.jpg", "/images/g2.jpg", "/images/g5.jpg"];

export default function Courses() {
  return (
    <section className="section-y bg-white">
      <div className="container-x">
        <h2 className="mb-6 text-center font-heading text-4xl text-ink lg:text-5xl">Courses &amp; Retreats</h2>

        <div className="grid gap-3 lg:grid-cols-3 lg:gap-4">
          <article className="relative flex min-h-72 flex-col justify-end overflow-hidden rounded-lg text-white lg:row-span-2">
            <Image src="/images/g6.jpg" alt="Sea-view room at Yogmantra Bali" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="relative p-6 lg:p-8">
              <p className="text-sm uppercase tracking-widest text-peach">Luxurious stay from</p>
              <p className="font-heading text-6xl leading-none">$700</p>
              <p className="mt-3 text-sm text-white/85 sm:text-base">The only five star rated property in Bali offering TTC, with a sea-view AC yogashala.</p>
              <Link href={bookHref} className="mt-5 inline-flex items-center gap-2 rounded-full bg-sage px-6 py-3 font-bold transition hover:bg-sage-dark">
                Book Now <ArrowRight className="size-4" />
              </Link>
            </div>
          </article>

          <div className="grid grid-cols-3 gap-3 lg:col-span-2 lg:gap-4">
            {ttc.map((c, i) => (
              <Link
                key={c.hours}
                href={c.href}
                className={`group flex flex-col justify-between rounded-lg p-4 transition sm:p-6 hover:-translate-y-0.5 hover:shadow-lg ${
                  i === 1 ? "bg-orange text-white" : "bg-peach-light text-ink"
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className="font-heading text-4xl leading-none sm:text-6xl">{c.hours}</span>
                  <ArrowUpRight className="hidden size-5 sm:block opacity-60 transition group-hover:opacity-100" />
                </div>
                <div className="mt-3 sm:mt-6">
                  <h3 className="text-sm font-bold leading-tight sm:text-lg">{c.label}</h3>
                  <p className={`hidden text-sm sm:block ${i === 1 ? "text-white/85" : "text-muted"}`}>from {c.from} · {c.note}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:col-span-2 lg:gap-4">
            {retreats.map((r, i) => (
              <Link key={r.days} href={r.href} className="group relative flex aspect-square items-end overflow-hidden rounded-lg text-white sm:aspect-auto sm:min-h-52">
                <Image src={retreatImages[i]} alt={r.label} fill sizes="(min-width: 1024px) 16vw, (min-width: 640px) 25vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                <div className="relative p-4">
                  <span className="font-heading text-4xl leading-none">{r.days}</span>
                  <span className="block font-bold">Day Retreat</span>
                  <span className="text-sm text-white/85">{r.price} USD</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
