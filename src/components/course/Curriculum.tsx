import Image from "next/image";
import { Plus, Sparkles } from "lucide-react";
import type { Course } from "@/data/courses";

export default function Curriculum({ course }: { course: Course }) {
  return (
    <section className="section-y bg-mist">
      <div className="container-x">
        <h2 className="mb-6 text-center font-heading text-4xl text-ink lg:text-5xl">{course.days} Day Curriculum</h2>

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-4">
          {course.modules.map((m, i) => (
            <article key={m.title} className="rounded-lg bg-white p-4 shadow-sm sm:p-5">
              <span className="font-heading text-3xl text-peach">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-1 font-bold leading-tight text-ink sm:text-lg">{m.title}</h3>
              <p className="mt-1 text-sm text-muted">{m.text}</p>
            </article>
          ))}
        </div>

        {course.extras?.map((x) => (
          <article key={x.title} className="mt-3 grid overflow-hidden rounded-lg bg-sage-deep text-white lg:mt-4 lg:grid-cols-3">
            <div className="relative min-h-56">
              <Image src="/images/food.jpg" alt="Ayurvedic food" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
            </div>
            <div className="p-6 lg:col-span-2 lg:p-8">
              <h3 className="flex items-center gap-2 text-xl font-bold"><Sparkles className="size-5 text-peach" /> {x.title}</h3>
              <p className="mt-1 text-white/80">{x.text}</p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {x.items.map((it) => (
                  <li key={it} className="rounded-md bg-white/10 px-3 py-2 text-sm">{it}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}

        <h3 className="mb-3 mt-8 text-center text-xl font-bold text-ink">Detailed Syllabus</h3>
        <div className="grid items-start gap-2 md:grid-cols-2 lg:grid-cols-3">
          {course.syllabus.map((g) => (
            <details key={g.title} className="group rounded-lg bg-white shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 font-bold text-ink [&::-webkit-details-marker]:hidden">
                {g.title}
                <Plus className="size-5 shrink-0 text-orange transition-transform group-open:rotate-45" />
              </summary>
              <ul className="space-y-1 px-5 pb-4 text-sm text-muted">
                {g.items.map((it) => (
                  <li key={it} className="flex gap-2 before:mt-1.5 before:size-1.5 before:shrink-0 before:rounded-full before:bg-sage">{it}</li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
