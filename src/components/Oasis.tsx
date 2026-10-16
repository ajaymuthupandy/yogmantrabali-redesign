import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { videos, whyHref } from "@/data/site";

const styles = ["Hatha", "Vinyasa", "Ashtanga"];

export default function Oasis() {
  return (
    <section className="grid bg-sage-deep text-white lg:grid-cols-5">
      <div className="relative aspect-video bg-[url(/images/yogashala.jpg)] bg-cover bg-center lg:col-span-3">
        <iframe
          src={videos.tour}
          title="Yogmantra Bali campus tour"
          loading="lazy"
          allow="autoplay; fullscreen; picture-in-picture"
          className="absolute inset-0 size-full"
        />
      </div>

      <div className="flex flex-col justify-center gap-5 p-8 sm:p-10 lg:col-span-2 lg:p-12">
        <h2 className="font-heading text-4xl leading-tight lg:text-5xl">Authentic Yoga, Rooted in Tradition</h2>
        <p className="text-white/85">
          Traditional yogic philosophy meets modern teaching, so you build strong roots and the confidence to lead your own classes.
        </p>
        <ul className="flex flex-wrap gap-2">
          {styles.map((s) => (
            <li key={s} className="rounded-full border border-white/30 px-4 py-1.5 text-sm">
              {s}
            </li>
          ))}
        </ul>
        <Link href={whyHref} className="inline-flex w-fit items-center gap-2 rounded-full bg-orange px-6 py-3 font-bold transition hover:bg-coral">
          Read More <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
