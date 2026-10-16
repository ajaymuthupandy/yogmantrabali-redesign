import Image from "next/image";
import { HandCoins, ShieldCheck } from "lucide-react";

type Tile = { title: string; text: string; image: string; className: string; sizes: string };

const photoTiles: Tile[] = [
  {
    title: "Experienced Teachers",
    text: "Yoga Alliance, USA certified teachers with years of experience.",
    image: "/images/teachers.jpg",
    className: "col-span-2 lg:row-span-2",
    sizes: "(min-width: 1024px) 50vw, 100vw",
  },
  {
    title: "Comfy 5 Star Rooms",
    text: "Clean, modern rooms with sea-view balconies.",
    image: "/images/rooms.jpg",
    className: "",
    sizes: "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw",
  },
  {
    title: "Air Conditioned Yogashala",
    text: "The only sea-view AC yogashala for TTC in Bali.",
    image: "/images/yogashala.jpg",
    className: "",
    sizes: "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw",
  },
  {
    title: "Sattvic Food",
    text: "Healthy, organic and vegan meals every day.",
    image: "/images/food.jpg",
    className: "",
    sizes: "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw",
  },
];

export default function Highlights({ title = "Why Yogmantra Bali?" }: { title?: string }) {
  return (
    <section className="bg-mist pb-10 pt-10 lg:pb-14 lg:pt-12">
      <div className="container-x">
        <h2 className="mb-6 text-center font-heading text-4xl text-ink lg:text-5xl">{title}</h2>

        {/* Rows have a minimum height but grow when a text tile needs more room, so copy never spills out. */}
        <div className="grid auto-rows-[minmax(11rem,auto)] grid-cols-2 gap-3 sm:auto-rows-[minmax(15rem,auto)] lg:grid-cols-4 lg:gap-4">
          {photoTiles.map((t) => (
            <article key={t.title} className={`group relative overflow-hidden rounded-lg ${t.className}`}>
              <Image src={t.image} alt={t.title} fill sizes={t.sizes} className="object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-3 text-white sm:p-5">
                <h3 className="font-bold leading-tight sm:text-xl">{t.title}</h3>
                <p className="mt-1 hidden text-sm text-white/85 sm:block">{t.text}</p>
              </div>
            </article>
          ))}

          <article className="flex flex-col justify-between rounded-lg bg-sage p-4 text-white sm:p-6">
            <ShieldCheck className="size-8 sm:size-9" />
            <div>
              <h3 className="font-bold leading-tight sm:text-xl">Safety &amp; Security</h3>
              <p className="mt-1 text-sm text-white/90">School and residence under 24-hour CCTV.</p>
            </div>
          </article>

          <article className="col-span-2 flex flex-col justify-between gap-4 rounded-lg bg-orange p-5 text-white sm:col-span-1 sm:p-6 lg:col-span-2">
            <div className="flex items-center justify-between">
              <h3 className="font-heading text-3xl">Yogic Team from Rishikesh, India</h3>
            </div>
            <p className="max-w-lg text-white/90">
              Teachers and management from the world&apos;s yoga capital, teaching Hatha, Vinyasa and Ashtanga the traditional way.
            </p>
          </article>

          <article className="col-span-2 flex flex-col justify-between gap-4 rounded-lg bg-peach-light p-5 text-ink sm:col-span-1 sm:p-6 lg:col-span-2">
            <HandCoins className="size-9 text-orange" />
            <div>
              <h3 className="text-xl font-bold">Pocket-Friendly Courses</h3>
              <p className="mt-1 text-sm text-muted">
                World-class training at fair prices. Our own Bali tour company keeps stays and trips affordable.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
