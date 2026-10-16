import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Leaf } from "lucide-react";
import { courses, getCourse } from "@/data/courses";
import { whatsappBook } from "@/data/site";
import { ContactButtons, photo } from "./shared";

/** /yoga-teacher-training: full-height triptych, one photo column per course. */
export function TtcIndexEnding() {
  return (
    <section className="end-fill grid sm:grid-cols-3">
      {courses.map((c, i) => (
        <Link key={c.slug} href={`/yoga-teacher-training/${c.slug}`} className="group relative flex min-h-72 flex-col justify-end overflow-hidden p-6 text-white lg:p-10">
          <Image src={c.heroImage} alt={c.title} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
          <div className={`absolute inset-0 ${i === 1 ? "bg-gradient-to-t from-orange via-orange/40 to-black/10" : "bg-gradient-to-t from-black/85 via-black/30 to-black/10"}`} />
          {i === 1 && <span className="absolute left-6 top-6 rounded-full bg-white px-3 py-1 text-xs font-bold uppercase text-orange lg:left-10 lg:top-10">Most popular</span>}
          <div className="relative">
            <span className="font-heading text-7xl leading-none lg:text-8xl">{c.hours}</span>
            <p className="mt-2 text-xl font-bold">Hour Yoga TTC</p>
            <p className="text-white/85">{c.days} days · {c.level}</p>
            <p className="mt-4 flex items-center justify-between border-t border-white/30 pt-4">
              <span>from <span className="font-heading text-3xl">{c.rooms[0].price}</span></span>
              <span className="grid size-11 place-items-center rounded-full bg-white/20 transition group-hover:bg-white group-hover:text-ink">
                <ArrowUpRight className="size-5" />
              </span>
            </p>
          </div>
        </Link>
      ))}
    </section>
  );
}

/** 100 hour: orange price panel beside a meditation-class mosaic. */
function Ending100() {
  const c = getCourse("100-hour")!;
  const [next, slots] = c.dates[0];
  const mosaic = ["20210102_122000.jpg", "20210102_121851.jpg", "20210102_122150.jpg", "20210102_121807.jpg"];
  return (
    <section className="end-fill grid lg:grid-cols-[2fr_3fr]">
      <div className="flex flex-col justify-center bg-orange p-8 text-white sm:p-12 lg:px-14 lg:py-10">
        <h2 className="font-heading text-5xl leading-tight">Start Your Practice</h2>
        <p className="mt-2 text-white/90">{c.days} days · {c.level} friendly</p>
        <p className="mt-5 font-heading text-6xl leading-none">{c.rooms[0].price}</p>
        <p className="mt-1 text-white/90">Reserve with {c.rooms[0].deposit}. Next start {next}, {slots} {slots === 1 ? "slot" : "slots"} left.</p>
        <ContactButtons whatsapp={whatsappBook(c.title)} label="Book via WhatsApp" className="mt-6" />
      </div>
      <div className="grid min-h-80 grid-cols-2 grid-rows-2">
        {mosaic.map((f) => (
          <div key={f} className="relative">
            <Image src={photo("meditation-class", f)} alt="Meditation class at Yogmantra Bali" fill sizes="(min-width: 1024px) 30vw, 50vw" className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}

/** 200 hour: frosted certificate card floating over the yogashala. */
function Ending200() {
  const c = getCourse("200-hour")!;
  const stats = [
    [`${c.days}`, "days"],
    ["RYT 200", "certificate"],
    ["14", "max per class"],
  ];
  return (
    <section className="end-fill relative flex items-center justify-center overflow-hidden px-4 py-14 short:py-8">
      <Image src={photo("air-conditioned-yogashala", "IMG_1754.jpg")} alt="" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-sage-deep/60" />
      <div className="relative w-full max-w-2xl rounded-2xl bg-white/90 p-8 text-center shadow-2xl backdrop-blur sm:p-10 short:p-7">
        {c.badge && <Image src={c.badge} alt="Yoga Alliance RYS 200" width={80} height={80} className="mx-auto size-20 short:size-14" />}
        <h2 className="mt-3 font-heading text-4xl text-ink sm:text-5xl">Become a Certified Teacher</h2>
        <dl className="mx-auto mt-6 grid max-w-md grid-cols-3 divide-x divide-black/10">
          {stats.map(([v, l]) => (
            <div key={l}>
              <dt className="whitespace-nowrap font-heading text-2xl text-orange sm:text-3xl">{v}</dt>
              <dd className="text-sm text-muted">{l}</dd>
            </div>
          ))}
        </dl>
        <ContactButtons whatsapp={whatsappBook(c.title)} label="Book via WhatsApp" tone="sage" className="mt-8 justify-center" />
      </div>
    </section>
  );
}

/** 300 hour: food photo with an Ayurveda bonus sticker beside a dark checklist. */
function Ending300() {
  const c = getCourse("300-hour")!;
  const points = ["Advanced alignment & adjustments", "Upanishads, Gita & Yoga Sutras", "Ayurvedic cooking & healing", "Sequencing & train the trainer"];
  return (
    <section className="end-fill grid bg-sage-deep text-white lg:grid-cols-2">
      <div className="relative min-h-80">
        <Image src={photo("food", "20210102_115815.jpg")} alt="Ayurvedic meal" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        <div className="absolute right-6 top-6 grid size-36 rotate-6 place-items-center rounded-full bg-peach text-center text-ink shadow-xl lg:right-10 lg:top-10 lg:size-44">
          <span className="px-4 leading-tight">
            <Leaf className="mx-auto size-6 text-sage-deep" />
            <span className="block font-bold">FREE Ayurveda course</span>
            <span className="text-sm">worth $1,800</span>
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-center p-8 sm:p-12 lg:px-14 lg:py-10">
        {c.badge && <Image src={c.badge} alt="Yoga Alliance RYS 300" width={64} height={64} className="size-14 rounded-full bg-white p-1" />}
        <h2 className="mt-3 font-heading text-5xl leading-tight">Go Deeper, Teach Better</h2>
        <ul className="mt-5 grid gap-2.5">
          {points.map((p) => (
            <li key={p} className="flex items-center gap-3">
              <Check className="size-5 shrink-0 text-peach" /> {p}
            </li>
          ))}
        </ul>
        <ContactButtons whatsapp={whatsappBook(c.title)} label="Book via WhatsApp" tone="orange" className="mt-6 [&>a:last-child]:border-white [&>a:last-child]:text-white" />
      </div>
    </section>
  );
}

/** Course pages: each course closes with its own design. */
export function CourseEnding({ slug }: { slug: string }) {
  if (slug === "100-hour") return <Ending100 />;
  if (slug === "200-hour") return <Ending200 />;
  return <Ending300 />;
}
