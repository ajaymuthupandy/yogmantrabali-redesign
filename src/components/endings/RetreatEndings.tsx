import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { getRetreat, retreatList } from "@/data/retreats";
import { whatsappBook } from "@/data/site";
import { ContactButtons, photo } from "./shared";

/** /yoga-retreats: tall film strip of retreat photos above a sage booking band. */
export function RetreatsIndexEnding() {
  const strip = ["16.jpg", "IMG_20190311_132001.jpg", "WhatsApp-Image-2019-11-08-at-16.33.17.jpg", "IMG_20190328_120319.jpg", "IMG_20190402_104047.jpg"];
  return (
    <section className="end-fill flex flex-col">
      <div className="grid min-h-56 flex-1 grid-cols-3 sm:grid-cols-5">
        {strip.map((f, i) => (
          <div key={f} className={`relative ${i > 2 ? "hidden sm:block" : ""}`}>
            <Image src={photo("yoga-retreat", f)} alt="Yoga retreat day trip in Bali" fill sizes="(min-width: 640px) 20vw, 33vw" className="object-cover" />
          </div>
        ))}
      </div>
      <div className="bg-sage py-8 text-white">
        <div className="container-x flex flex-col items-center gap-5 text-center lg:flex-row lg:justify-between lg:text-left">
          <div>
            <h2 className="font-heading text-4xl lg:text-5xl">Your Bali Escape Awaits</h2>
            <p className="mt-1 text-white/90">Arrive any date. A daily massage is always included.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {retreatList.map((r) => (
              <Link key={r.slug} href={`/yoga-retreats/${r.slug}`} className="rounded-full bg-white px-4 py-2.5 text-ink transition hover:bg-orange hover:text-white">
                <span className="font-bold">{r.days} days</span> <span className="text-sm opacity-70">{r.price}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** 3 day: giant typographic number beside one big photo. */
function Ending3() {
  const r = getRetreat("3-day")!;
  return (
    <section className="end-fill grid lg:grid-cols-[1fr_1.4fr]">
      <div className="flex flex-col justify-center bg-peach-light p-8 sm:p-12 lg:p-14">
        <p className="font-heading text-[9rem] leading-[0.8] text-orange lg:text-[12rem]">3</p>
        <h2 className="mt-2 text-3xl font-bold text-ink">days to reset</h2>
        <p className="mt-2 text-muted">Yoga, temples and a massage every evening, for {r.price}.</p>
        <ContactButtons whatsapp={whatsappBook(r.title)} label="Book via WhatsApp" tone="orange" email={false} className="mt-7" />
        <Link href="/yoga-retreats/6-day" className="mt-4 inline-flex w-fit items-center gap-1.5 font-bold text-sage-dark hover:text-orange">
          Stay longer with 6 days <ArrowRight className="size-4" />
        </Link>
      </div>
      <div className="relative min-h-80">
        <Image src={photo("yoga-retreat", "14.jpg")} alt="Yoga retreat in Bali" fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover object-[center_80%]" />
        <p className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
          {r.itinerary.map(([place]) => (
            <span key={place} className="flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-sm text-ink backdrop-blur">
              <MapPin className="size-3.5 text-orange" /> {place}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}

/** 6 day: three tilted polaroids on mist. */
function Ending6() {
  const r = getRetreat("6-day")!;
  const shots = [
    { file: "WhatsApp-Image-2019-11-08-at-16.26.43.jpg", place: r.itinerary[3][0], tilt: "-rotate-3" },
    { file: "13.jpg", place: r.itinerary[2][0], tilt: "rotate-2 lg:-translate-y-4" },
    { file: "WhatsApp-Image-2019-11-08-at-16.35.39.jpg", place: r.itinerary[4][0], tilt: "-rotate-1" },
  ];
  return (
    <section className="end-fill flex flex-col justify-center bg-mist py-10">
      <div className="container-x flex flex-1 flex-col items-center justify-center gap-6 text-center">
        <h2 className="font-heading text-4xl text-ink lg:text-5xl">One Week, Endless Memories</h2>
        <div className="grid w-full max-w-2xl grid-cols-3 short:max-w-lg gap-3 sm:gap-6">
          {shots.map((s) => (
            <figure key={s.file} className={`bg-white p-2 pb-3 shadow-lg sm:p-3 sm:pb-5 ${s.tilt}`}>
              <div className="relative aspect-square">
                <Image src={photo("yoga-retreat", s.file)} alt={s.place} fill sizes="(min-width: 1024px) 280px, 33vw" className="object-cover" />
              </div>
              <figcaption className="mt-2 font-heading text-sm text-ink sm:text-xl">{s.place}</figcaption>
            </figure>
          ))}
        </div>
        <ContactButtons whatsapp={whatsappBook(r.title)} label={`Book 6 days for ${r.price}`} tone="sage" className="justify-center" />
      </div>
    </section>
  );
}

/** 8 day: volcano photo with glass highlight cards. */
function Ending8() {
  const r = getRetreat("8-day")!;
  const highlights = ["Kintamani Active Volcano", "Spice & Coffee Plantation", "Elephant Cave Temple", "Tegalalang Rice Terrace"];
  return (
    <section className="end-fill relative flex items-center overflow-hidden py-14 text-white">
      <Image src="/images/g4.jpg" alt="" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
      <div className="container-x relative grid items-center gap-8 lg:grid-cols-2">
        <div>
          <h2 className="font-heading text-5xl leading-tight lg:text-6xl">Volcanoes, Temples &amp; You</h2>
          <p className="mt-2 text-lg text-white/90">{r.days} days · {r.price} per person</p>
          <ContactButtons whatsapp={whatsappBook(r.title)} label="Book via WhatsApp" className="mt-7" />
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {highlights.map((h) => (
            <li key={h} className="flex items-center gap-3 rounded-xl border border-white/25 bg-white/15 p-4 font-bold backdrop-blur-md">
              <MapPin className="size-5 shrink-0 text-peach" /> {h}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** 12 day: bento of photos with an orange booking tile. */
function Ending12() {
  const r = getRetreat("12-day")!;
  return (
    <section className="end-fill grid auto-rows-[12rem] grid-cols-2 gap-1 bg-white lg:auto-rows-auto lg:grid-cols-4 lg:grid-rows-2">
      <div className="relative col-span-2 row-span-2">
        <Image src={photo("pool-with-sea-view", "20210102_112033.jpg")} alt="Infinity pool facing the sea" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
      </div>
      <div className="col-span-2 flex flex-col justify-center bg-orange p-6 text-white sm:col-span-1">
        <h2 className="font-heading text-3xl leading-tight xl:text-4xl">The Complete Bali Journey</h2>
        <p className="mt-1 text-white/90">{r.days} days · {r.price}</p>
        <ContactButtons whatsapp={whatsappBook(r.title)} label="Book" email={false} className="mt-4" />
      </div>
      <div className="relative hidden sm:block">
        <Image src={photo("yoga-retreat", "IMG_20190322_103428.jpg")} alt="Bali excursion" fill sizes="25vw" className="object-cover" />
      </div>
      <div className="relative">
        <Image src={photo("yoga-retreat", "WhatsApp-Image-2019-11-08-at-16.33.29.jpg")} alt="Temple visit" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
      </div>
      <div className="flex flex-col justify-center bg-peach-light p-6 lg:p-8">
        <p className="font-bold text-ink">Plus Ubud, Tanah Lot &amp; Penglipuran</p>
        <a href={`/yoga-retreats/${r.slug}#book`} className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-sage-dark hover:text-orange">
          See what&apos;s included <ArrowRight className="size-4" />
        </a>
      </div>
    </section>
  );
}

/** Retreat pages: each length closes with its own design. */
export function RetreatEnding({ slug }: { slug: string }) {
  if (slug === "3-day") return <Ending3 />;
  if (slug === "6-day") return <Ending6 />;
  if (slug === "8-day") return <Ending8 />;
  return <Ending12 />;
}
