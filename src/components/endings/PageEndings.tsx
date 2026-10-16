import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, Moon, Play, Quote, Sprout, Sun, Sunrise, Sunset, WheatOff } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/BrandIcons";
import { teachers } from "@/data/teachers";
import { contact, testimonials, ttc, whatsappBook } from "@/data/site";
import { ContactButtons, photo } from "./shared";

/** /schedule: the day as four colour-shifting columns, from dawn to night, plus a booking column. */
export function ScheduleEnding() {
  const day = [
    { icon: Sunrise, time: "06:30", label: "Pranayama", tone: "bg-peach-light text-ink" },
    { icon: Sun, time: "09:30", label: "Philosophy", tone: "bg-peach text-ink" },
    { icon: Sunset, time: "15:00", label: "Ashtanga", tone: "bg-orange text-white" },
    { icon: Moon, time: "18:30", label: "Meditation", tone: "bg-sage-deep text-white" },
  ];
  return (
    <section className="end-fill grid grid-cols-2 lg:grid-cols-5">
      {day.map(({ icon: Icon, time, label, tone }) => (
        <div key={time} className={`flex min-h-44 flex-col justify-between p-6 lg:p-8 ${tone}`}>
          <Icon className="size-9" />
          <div>
            <p className="font-heading text-5xl leading-none lg:text-6xl">{time}</p>
            <p className="mt-1 text-lg font-bold">{label}</p>
          </div>
        </div>
      ))}
      <div className="col-span-2 flex flex-col justify-center bg-white p-6 lg:col-span-1 lg:p-8">
        <h2 className="font-heading text-4xl leading-tight text-ink">Join the Rhythm</h2>
        <p className="mt-2 text-muted">Ten hours of practice a day, with time to rest.</p>
        <ContactButtons tone="sage" email={false} label="Ask on WhatsApp" className="mt-5" />
      </div>
    </section>
  );
}

/** /teachers: overlapping teacher portraits on a faded group photo. */
export function TeachersEnding() {
  return (
    <section className="end-fill relative flex items-center justify-center overflow-hidden bg-sage-deep px-4 py-14 text-center text-white">
      <Image src="/images/teachers.jpg" alt="" fill sizes="100vw" className="object-cover opacity-15" />
      <div className="relative">
        <div className="flex justify-center">
          {teachers.map((t, i) => (
            <div key={t.name} className={`relative size-20 overflow-hidden rounded-full bg-sage ring-4 ring-sage-deep sm:size-28 ${i ? "-ml-5 sm:-ml-7" : ""}`}>
              <Image src={t.image} alt={t.name} fill sizes="112px" className="object-cover object-top" />
            </div>
          ))}
        </div>
        <h2 className="mt-6 font-heading text-5xl leading-tight lg:text-6xl">Practice With Our Teachers</h2>
        <p className="mt-2 text-white/85">{teachers.map((t) => t.name.split(" ")[0]).join(", ").replace(/, ([^,]*)$/, " & $1")} are waiting for you.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/yoga-teacher-training" className="inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 font-bold transition hover:bg-coral">
            View Courses <ArrowRight className="size-4" />
          </Link>
          <ContactButtons email={false} />
        </div>
      </div>
    </section>
  );
}

/** /gallery: photo collage (one tall tile + three photos + an Instagram tile fill the 3×2 grid) beside a follow panel. */
export function GalleryEnding() {
  const tiles = [
    { src: photo("kirtan-on-saturday-nights", "20210102_121216.jpg"), span: "row-span-2" },
    { src: photo("sea-view-room-with-private-balcony", "20201126_142705.jpg"), span: "" },
    { src: photo("food", "20210102_120350.jpg"), span: "" },
    { src: photo("pool-with-sea-view", "20201223_101756.jpg"), span: "" },
  ];
  return (
    <section className="end-fill grid lg:grid-cols-[3fr_2fr]">
      <div className="grid min-h-80 grid-cols-3 grid-rows-2 gap-1">
        {tiles.map((t) => (
          <div key={t.src} className={`relative ${t.span}`}>
            <Image src={t.src} alt="Life at Yogmantra Bali" fill sizes="(min-width: 1024px) 20vw, 33vw" className="object-cover" />
          </div>
        ))}
        <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="grid place-items-center bg-orange p-3 text-center font-bold text-white transition hover:bg-coral">
          <span>
            <InstagramIcon className="mx-auto size-8" />
            <span className="mt-1 block text-sm">More on Instagram</span>
          </span>
        </a>
      </div>
      <div className="flex flex-col justify-center bg-peach-light p-8 sm:p-12 lg:p-14">
        <h2 className="font-heading text-5xl leading-tight text-ink">Follow Our Days in Bali</h2>
        <p className="mt-2 text-muted">Classes, kirtan nights, food and trips, shared every week.</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 font-bold text-white transition hover:bg-coral">
            <InstagramIcon className="size-5" /> @Yogmantrabali_ubud
          </a>
          <a href={contact.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border-2 border-ink px-6 py-3 font-bold text-ink transition hover:bg-ink hover:text-white">
            <FacebookIcon className="size-5" /> Facebook
          </a>
        </div>
      </div>
    </section>
  );
}

/** /videos: cinematic dark frame with a row of "scene" thumbnails. */
export function VideosEnding() {
  const scenes = [
    { src: photo("meditation-class", "20210102_121746.jpg"), label: "Classes" },
    { src: photo("sea-view-room", "20201215_113839.jpg"), label: "Rooms" },
    { src: photo("pool-with-sea-view", "20210102_114638.jpg"), label: "Pool" },
    { src: "/images/yogashala.jpg", label: "Yogashala" },
  ];
  return (
    <section className="end-fill flex flex-col bg-black text-white">
      <div className="relative flex flex-1 items-center justify-center overflow-hidden px-4 py-10 text-center short:py-6">
        <Image src={photo("kirtan-on-saturday-nights", "20210102_121515.jpg")} alt="" fill sizes="100vw" className="object-cover opacity-35" />
        <div className="relative">
          <span className="mx-auto grid size-20 place-items-center rounded-full border-2 border-white/60 short:size-14">
            <Play className="ml-1 size-8 fill-white" />
          </span>
          <h2 className="mt-5 font-heading text-5xl lg:text-6xl">Come See It in Person</h2>
          <p className="mt-2 text-white/80">Meet the teachers, feel the sea breeze, join a class.</p>
          <ContactButtons whatsapp={whatsappBook("visit to the school")} label="Plan a Visit" className="mt-7 justify-center" />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-1 p-1">
        {scenes.map((s) => (
          <div key={s.label} className="relative h-24 overflow-hidden sm:h-28 lg:h-32 short:h-24">
            <Image src={s.src} alt={s.label} fill sizes="25vw" className="object-cover" />
            <span className="absolute bottom-2 left-2 rounded bg-black/60 px-2 py-0.5 text-xs font-bold">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/** /food-menu: nine-photo food grid beside a sage panel. */
export function FoodEnding() {
  const dishes = ["20210102_120519.jpg", "20210102_115928.jpg", "20210102_115756.jpg", "20210102_115700.jpg", "20210102_115524.jpg", "20210102_115420.jpg", "20210102_120221.jpg", "20210102_120041.jpg", "20210102_115951.jpg"];
  const tags = [
    { icon: Leaf, label: "Vegan options at every meal" },
    { icon: WheatOff, label: "Gluten-free kitchen" },
    { icon: Sprout, label: "Local Balinese produce" },
  ];
  return (
    <section className="end-fill grid lg:grid-cols-2">
      <div className="flex flex-col justify-center bg-sage p-8 text-white sm:p-12 lg:order-2 lg:p-14 short:py-8">
        <h2 className="font-heading text-5xl leading-tight short:text-4xl">Taste Bali the Ayurvedic Way</h2>
        <ul className="mt-5 grid gap-3 short:mt-3 short:gap-2">
          {tags.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-3 text-lg">
              <span className="grid size-10 place-items-center rounded-full bg-white/20"><Icon className="size-5" /></span>
              {label}
            </li>
          ))}
        </ul>
        <p className="mt-5 text-white/90">Three meals a day come with every course and retreat.</p>
        <ContactButtons label="Ask About Allergies" email={false} className="mt-6" />
      </div>
      <div className="grid min-h-80 grid-cols-3 grid-rows-3 gap-1 lg:order-1">
        {dishes.map((f) => (
          <div key={f} className="relative">
            <Image src={photo("food", f)} alt="Sattvic meal" fill sizes="(min-width: 1024px) 17vw, 33vw" className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}

/** /faq: chat-style mock conversation beside the call to action. */
export function FaqEnding() {
  const chat = [
    { me: true, text: "Is the 200 hour course okay for beginners?" },
    { me: false, text: "Yes! It suits beginner to intermediate students." },
    { me: true, text: "Can I pay the rest when I arrive?" },
    { me: false, text: "Of course, by cash, card or bank transfer. 🙏" },
  ];
  return (
    <section className="end-fill flex items-center bg-peach-light py-12">
      <div className="container-x grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="font-heading text-5xl leading-tight text-ink lg:text-6xl">Still Have Questions?</h2>
          <p className="mt-2 text-lg text-muted">Message us. We reply fast, 24/7.</p>
          <ContactButtons tone="orange" className="mt-7" />
        </div>
        <div className="mx-auto w-full max-w-md overflow-hidden rounded-[2rem] bg-white shadow-2xl ring-8 ring-white">
          <div className="flex items-center gap-3 bg-sage-deep px-5 py-3 text-white">
            <Image src="/images/icon.png" alt="" width={40} height={40} className="size-10 rounded-full bg-white p-1" />
            <span className="leading-tight">
              <span className="block font-bold">Yogmantra Bali</span>
              <span className="text-xs text-white/70">online</span>
            </span>
          </div>
          <ul className="grid gap-2 bg-mist p-4">
            {chat.map((m) => (
              <li key={m.text} className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm shadow-sm ${m.me ? "justify-self-end rounded-br-sm bg-[#dcf8c6] text-ink" : "rounded-bl-sm bg-white text-ink"}`}>
                {m.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/** /blog: magazine-style photo with a numbered "next steps" index. */
export function BlogIndexEnding() {
  const steps = [...ttc.map((c) => ({ label: c.label, sub: `from ${c.from}`, href: c.href })), { label: "Yoga Retreats", sub: "from $350", href: "/yoga-retreats" }];
  return (
    <section className="end-fill grid lg:grid-cols-[1.2fr_1fr]">
      <div className="relative flex min-h-72 items-end overflow-hidden p-8 text-white sm:p-12 lg:p-14">
        <Image src="/images/blog/IMG_2951-min.jpg" alt="Yoga class at Yogmantra Bali" fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
        <h2 className="relative font-heading text-5xl leading-tight lg:text-6xl">From Reading to Practice</h2>
      </div>
      <ol className="flex flex-col justify-center bg-white p-6 sm:p-12 lg:p-14">
        {steps.map((s, i) => (
          <li key={s.href} className="border-b border-black/10 last:border-0">
            <Link href={s.href} className="group flex items-center gap-5 py-4">
              <span className="font-heading text-4xl text-peach">{String(i + 1).padStart(2, "0")}</span>
              <span className="flex-1">
                <span className="block text-lg font-bold text-ink group-hover:text-orange">{s.label}</span>
                <span className="text-sm text-muted">{s.sub}</span>
              </span>
              <ArrowRight className="size-5 text-sage-dark transition group-hover:translate-x-1 group-hover:text-orange" />
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}

/** Blog posts: photo strip, a student quote and an orange booking column. */
export function BlogPostEnding() {
  const t = testimonials[0];
  return (
    <section className="end-fill grid lg:grid-cols-[1fr_2fr_1fr]">
      <div className="relative hidden lg:block">
        <Image src="/images/g7.jpg" alt="Students enjoying the pool" fill sizes="25vw" className="object-cover" />
      </div>
      <figure className="flex flex-col justify-center bg-mist p-8 sm:p-12 lg:p-16">
        <Quote className="size-12 text-orange" />
        <blockquote className="mt-3 font-serif text-2xl leading-snug text-ink lg:text-3xl">{t.quote}</blockquote>
        <figcaption className="mt-5 font-bold text-sage-dark">{t.name}, student</figcaption>
      </figure>
      <div className="flex flex-col justify-center bg-orange p-8 text-white sm:p-12 lg:p-10">
        <h2 className="font-heading text-4xl leading-tight">Write Your Own Story</h2>
        <p className="mt-2 text-white/90">Train or retreat with us in Bali.</p>
        <Link href="/yoga-teacher-training" className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-ink transition hover:bg-peach-light">
          View Courses <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
