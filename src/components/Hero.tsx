import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BedDouble } from "lucide-react";
import { bookHref, nav } from "@/data/site";
import { LotusIcon, MeditationIcon, SeaSunIcon } from "@/components/BrandIcons";

const facts = [
  { icon: LotusIcon, title: "Yoga Alliance USA", text: "Certified School" },
  {
    icon: MeditationIcon,
    title: "Rishikesh Teachers",
    text: "Experienced Mentors",
  },
  {
    icon: SeaSunIcon,
    title: "Sea-view Yogashala",
    text: "Ocean Front Location",
  },
  { icon: BedDouble, title: "5 Star Stay", text: "Comfort & Serenity" },
];

export default function Hero() {
  return (
    // Photo + fact bar together fill exactly one screen below the header; the bar's lower half sits on the mist band.
    <section className="relative flex min-h-[calc(100svh-4.25rem)] flex-col overflow-hidden bg-ink lg:min-h-[calc(100svh-6.75rem)]">
      <Image
        src="/images/hero.jpg"
        alt="Yogmantra Bali yoga school building at dusk"
        fill
        preload
        sizes="100vw"
        className="object-cover object-[65%_center]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(0_0_0/0.82)_0%,rgb(0_0_0/0.72)_45%,rgb(0_0_0/0.2)_75%,transparent_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/55 to-transparent" />

      <div className="container-x relative flex flex-1 items-center py-12 text-white lg:py-16">
        <div className="max-w-2xl">
          <h1 className="font-heading text-[2.75rem] leading-[1.12] drop-shadow-lg sm:text-6xl lg:text-7xl">
            Relaxing Is Never <br className="hidden sm:block" />
            Easy On Your Own
          </h1>
          <p className="mt-4 font-serif text-xl text-white/90 drop-shadow sm:text-2xl lg:text-3xl">
            Come and discover your oasis in Bali
          </p>
          <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
            <Link
              href={nav[0].href}
              className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 text-sm font-bold transition hover:bg-white hover:text-ink sm:px-8 sm:py-3.5 sm:text-base"
            >
              View Courses <ArrowRight className="size-4" />
            </Link>
            <Link
              href={bookHref}
              className="inline-flex items-center gap-2 rounded-full border-2 border-sage bg-sage px-6 py-3 text-sm font-bold transition hover:border-sage-dark hover:bg-sage-dark sm:px-8 sm:py-3.5 sm:text-base"
            >
              Book Now <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="relative bg-[linear-gradient(to_bottom,transparent_50%,var(--color-mist)_50%)]">
        <div className="container-x">
          <ul className="grid grid-cols-2 rounded-xl bg-white shadow-xl shadow-black/15 lg:grid-cols-4 lg:py-2">
            {facts.map(({ icon: Icon, title, text }, i) => (
              <li
                key={title}
                className={`flex items-center gap-2.5 px-3 py-3.5 sm:gap-4 sm:p-5 lg:justify-center lg:px-6 ${i % 2 ? "" : "border-r"} ${i < 2 ? "border-b lg:border-b-0" : ""} border-black/10 lg:border-r lg:last:border-r-0`}
              >
                <Icon className="size-8 shrink-0 text-orange [stroke-width:1.5] sm:size-11" />
                <span className="leading-tight">
                  <span className="block text-sm font-bold text-ink sm:text-[1.05rem]">{title}</span>
                  <span className="hidden text-sm text-muted sm:inline">{text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
