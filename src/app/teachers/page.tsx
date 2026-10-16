import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Buttons";
import { TeachersEnding } from "@/components/endings/PageEndings";
import { teachers } from "@/data/teachers";

export const metadata: Metadata = {
  title: "Our Teachers | Yogmantra Bali",
  description: "Meet Yogmantra Bali's yoga teachers from Rishikesh and Bali: experts in Ashtanga, Hatha, Yin, Tantra, Ayurveda and Balinese healing.",
};

export default function TeachersPage() {
  return (
    <>
      <PageHero title="Our Team" subtitle="Transforming lives with deep knowledge and caring guidance." image="/images/teachers.jpg" />

      <section className="section-y bg-mist">
        <div className="container-x grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {teachers.map((t) => (
            <article key={t.name} className="group overflow-hidden rounded-lg bg-white shadow-sm">
              <div className="relative aspect-[5/4] overflow-hidden bg-sage/20">
                <Image src={t.image} alt={t.name} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover object-top transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h2 className="font-heading text-3xl text-ink">{t.name}</h2>
                <p className="text-sm font-bold uppercase tracking-wide text-orange">{t.role}</p>
                <p className="mt-2 text-muted">{t.bio}</p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {t.skills.map((s) => (
                    <li key={s} className="rounded-full bg-mist px-3 py-1 text-xs text-sage-dark">{s}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}

          <article className="flex flex-col justify-end gap-4 rounded-lg bg-orange p-6 text-white lg:p-8">
            <h2 className="font-heading text-4xl leading-tight">Learn From the Yoga Capital</h2>
            <p className="text-white/90">Our team and management come from Rishikesh, India, joined by Balinese healers.</p>
            <Button href="/yoga-teacher-training" variant="light" className="w-fit">View Courses</Button>
          </article>
        </div>
      </section>
      <TeachersEnding />
    </>
  );
}
