import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BedDouble, CalendarDays, Check, HandHeart, MapPin, Sparkles, X } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Buttons";
import Schedule from "@/components/ui/Schedule";
import Testimonials from "@/components/Testimonials";
import FaqPreview from "@/components/FaqPreview";
import { WhatsAppIcon } from "@/components/BrandIcons";
import { exclusions, getRetreat, inclusions, retreatHighlights, retreatList, retreatSchedule } from "@/data/retreats";
import { whatsappBook } from "@/data/site";
import { RetreatEnding } from "@/components/endings/RetreatEndings";
import gallery from "@/content/gallery.json";

export const dynamicParams = false;

export function generateStaticParams() {
  return retreatList.map((r) => ({ retreat: r.slug }));
}

export async function generateMetadata(props: PageProps<"/yoga-retreats/[retreat]">): Promise<Metadata> {
  const r = getRetreat((await props.params).retreat);
  if (!r) return {};
  return { title: `${r.title} 2026/2027 | Yogmantra Bali`, description: `${r.tagline} ${r.price} USD per person.` };
}

const dayImages = [...gallery["Yoga Retreat"], ...gallery["Pool with Sea View"]];

// Column counts that divide each itinerary evenly, so no grid cell is left empty.
const itineraryCols: Record<number, string> = {
  3: "sm:grid-cols-3",
  6: "grid-cols-2 md:grid-cols-3",
  8: "grid-cols-2 md:grid-cols-4",
  12: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
};

export default async function RetreatPage(props: PageProps<"/yoga-retreats/[retreat]">) {
  const r = getRetreat((await props.params).retreat);
  if (!r) notFound();
  const book = whatsappBook(r.title);

  return (
    <>
      <PageHero
        title={r.title}
        subtitle={r.tagline}
        image={r.heroImage}
        facts={[
          { icon: CalendarDays, title: `${r.days} Days`, text: "Arrive any date" },
          { icon: Sparkles, title: `${r.price} USD`, text: "Per person" },
          { icon: HandHeart, title: "Daily massage", text: "1 hour, free" },
          { icon: BedDouble, title: "Deluxe room", text: "Private stay" },
        ]}
      >
        <Button href={book} variant="sage">Book via WhatsApp</Button>
      </PageHero>

      <section id="book" className="scroll-mt-24 bg-mist pb-10 pt-10 lg:pb-14 lg:pt-12">
        <div className="container-x grid gap-3 lg:grid-cols-3 lg:gap-4">
          <article className="flex flex-col justify-between rounded-lg bg-orange p-6 text-white lg:p-8">
            <div>
              <p className="text-sm uppercase tracking-widest text-white/80">Per person</p>
              <p className="font-heading text-6xl leading-none">{r.price}</p>
              <p className="mt-3 text-white/90">Reserve with a 15% deposit. Pay the rest on arrival by cash, card or bank transfer.</p>
            </div>
            <a href={book} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-ink transition hover:bg-peach-light">
              <WhatsAppIcon className="size-5 text-[#25d366]" /> Book Now
            </a>
          </article>

          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-lg font-bold text-ink">Included</h2>
            <ul className="space-y-2">
              {inclusions.map((x) => (
                <li key={x} className="flex items-start gap-2 text-ink"><Check className="mt-0.5 size-5 shrink-0 text-sage-dark" />{x}</li>
              ))}
            </ul>
          </div>

          <div className="grid gap-3 lg:gap-4">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h2 className="mb-3 text-lg font-bold text-ink">Not included</h2>
              <ul className="space-y-2">
                {exclusions.map((x) => (
                  <li key={x} className="flex items-start gap-2 text-muted"><X className="mt-0.5 size-5 shrink-0 text-coral" />{x}</li>
                ))}
              </ul>
            </div>
            <p className="rounded-lg bg-sage p-5 text-white">Arrive on any date in your chosen month. Just tell us a week ahead.</p>
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-x">
          <h2 className="mb-6 text-center font-heading text-4xl text-ink lg:text-5xl">Your {r.days} Day Itinerary</h2>
          <div className={`grid gap-3 lg:gap-4 ${itineraryCols[r.days] ?? "grid-cols-2 md:grid-cols-3"}`}>
            {r.itinerary.map((places, i) => (
              <article key={i} className="group relative flex min-h-48 flex-col justify-end overflow-hidden rounded-lg text-white sm:min-h-56">
                <Image src={dayImages[(i * 3) % dayImages.length]} alt="" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                <div className="relative p-4">
                  <span className="font-heading text-3xl text-peach">Day {i + 1}</span>
                  <ul className="mt-1 space-y-0.5 text-sm">
                    {places.map((p) => (
                      <li key={p} className="flex items-start gap-1.5"><MapPin className="mt-0.5 size-3.5 shrink-0" />{p}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <ul className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-3 lg:mt-4 lg:grid-cols-6 lg:gap-4">
            {retreatHighlights.map((h) => (
              <li key={h} className="flex items-center gap-2 rounded-lg bg-peach-light p-3 text-sm text-ink">
                <Sparkles className="size-4 shrink-0 text-orange" /> {h}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Schedule rows={retreatSchedule} image="/images/gallery/pool-with-sea-view/20210102_114551.jpg" />
      <Testimonials />
      <FaqPreview groups={["Booking & Payment", "Food"]} />
      <RetreatEnding slug={r.slug} />
    </>
  );
}
