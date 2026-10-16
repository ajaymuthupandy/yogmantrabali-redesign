import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Globe2, Users, Wind } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reasons from "@/components/course/Reasons";
import Schedule from "@/components/ui/Schedule";
import Testimonials from "@/components/Testimonials";
import { TtcIndexEnding } from "@/components/endings/CourseEndings";
import { courses, ttcSchedule } from "@/data/courses";

export const metadata: Metadata = {
  title: "Yoga Teacher Training Course in Bali 2026/2027 | Yogmantra Bali",
  description: "Yoga Alliance certified 100, 200 and 300 hour yoga teacher training in Bali with teachers from Rishikesh and a sea-view AC yogashala.",
};

export default function TtcIndex() {
  return (
    <>
      <PageHero
        title="Yoga Teacher Training in Bali"
        subtitle="Yoga Alliance certified courses for every stage of your journey."
        image="/images/teachers.jpg"
        facts={[
          { icon: Award, title: "Yoga Alliance USA", text: "RYS 200 & RYS 300" },
          { icon: Users, title: "Max 14 students", text: "Per asana class" },
          { icon: Wind, title: "AC Yogashala", text: "With a sea view" },
          { icon: Globe2, title: "Taught in English", text: "By Rishikesh teachers" },
        ]}
      />

      <section className="bg-mist pb-10 pt-10 lg:pb-14 lg:pt-12">
        <div className="container-x">
          <h2 className="mb-6 text-center font-heading text-4xl text-ink lg:text-5xl">Choose Your Course</h2>
          <div className="grid gap-3 md:grid-cols-3 lg:gap-4">
            {courses.map((c, i) => (
              <Link key={c.slug} href={`/yoga-teacher-training/${c.slug}`} className="group flex flex-col overflow-hidden rounded-lg bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={c.heroImage} alt={c.title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <span className="absolute bottom-3 left-5 font-heading text-6xl leading-none text-white">{c.hours}</span>
                  {i === 1 && <span className="absolute right-3 top-3 rounded-full bg-orange px-3 py-1 text-xs font-bold uppercase text-white">Most popular</span>}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-xl font-bold text-ink">{c.hours} Hour Yoga TTC</h3>
                  <p className="text-sm text-muted">{c.days} days · {c.level}</p>
                  <p className="mt-2 flex-1 text-ink">{c.tagline}</p>
                  <div className="mt-4 flex items-center justify-between border-t border-black/5 pt-4">
                    <span>
                      <span className="text-sm text-muted">from </span>
                      <span className="font-heading text-3xl text-orange">{c.rooms[0].price}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-bold text-sage-dark group-hover:text-orange">
                      Learn more <ArrowRight className="size-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Reasons overview="Traditional yogic philosophy and modern teaching, in the calm of Bali." />
      <Schedule rows={ttcSchedule} image="/images/gallery/meditation-class/20210102_122150.jpg" />
      <Testimonials />
      <TtcIndexEnding />
    </>
  );
}
