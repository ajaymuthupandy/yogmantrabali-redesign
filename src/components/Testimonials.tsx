import { Quote, Star } from "lucide-react";
import { testimonials, videos } from "@/data/site";

export default function Testimonials() {
  return (
    <section className="section-y bg-peach-light">
      <div className="container-x">
        <h2 className="mb-6 text-center font-heading text-4xl text-ink lg:text-5xl">Here&apos;s What Our Students Think</h2>

        <div className="grid gap-3 md:grid-cols-[minmax(0,17rem)_1fr] lg:gap-4">
          <div className="relative mx-auto aspect-[9/16] w-full max-w-60 overflow-hidden rounded-lg bg-[url(/images/g7.jpg)] bg-cover bg-center md:max-w-none">
            <iframe
              src={videos.testimonial}
              title="Student testimonials for Yogmantra Bali"
              loading="lazy"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 size-full"
            />
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:gap-4">
            {testimonials.map((t, i) => (
              <figure key={t.name} className={`flex flex-col justify-between rounded-lg bg-white p-6 shadow-sm ${i === 0 ? "sm:col-span-2" : ""}`}>
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-0.5 text-orange" role="img" aria-label="5 out of 5 stars">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} className="size-4 fill-current" />
                      ))}
                    </div>
                    <Quote className="size-8 text-peach" />
                  </div>
                  <blockquote className={`mt-3 text-ink ${i === 0 ? "text-lg lg:text-xl" : ""}`}>{t.quote}</blockquote>
                </div>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-full bg-sage font-bold text-white">{t.name[0]}</span>
                  <span className="font-bold">{t.name}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
