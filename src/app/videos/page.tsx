import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import { VideosEnding } from "@/components/endings/PageEndings";
import { testimonials, videos } from "@/data/site";

export const metadata: Metadata = {
  title: "Videos | Yogmantra Bali",
  description: "Watch Yogmantra Bali's grand opening ceremony, campus tour and student testimonials.",
};

function Video({ src, title, className }: { src: string; title: string; className: string }) {
  return (
    <figure className={`overflow-hidden rounded-lg bg-sage-deep ${className}`}>
      <div className="relative flex-1">
        <iframe src={src} title={title} loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen className="absolute inset-0 size-full" />
      </div>
      <figcaption className="px-4 py-3 font-bold text-white">{title}</figcaption>
    </figure>
  );
}

export default function VideosPage() {
  return (
    <>
      <PageHero title="Videos" subtitle="See the school, the ceremonies and our students." image="/images/gallery/kirtan-on-saturday-nights/20210102_121515.jpg" />

      <section className="section-y bg-mist">
        <div className="container-x grid gap-3 lg:gap-4">
          <div className="grid gap-3 lg:grid-cols-2 lg:gap-4">
            <Video src={videos.opening} title="Grand Opening Ceremony" className="flex aspect-[16/10] flex-col" />
            <Video src={videos.tour.replace("&background=1", "")} title="Campus Tour" className="flex aspect-[16/10] flex-col" />
          </div>
          {/* Portrait video beside the written reviews; capped in width on phones so it never fills a whole screen. */}
          <div className="grid gap-3 md:grid-cols-[minmax(0,16rem)_1fr] lg:gap-4">
            <Video src={videos.testimonial} title="Student Testimonials" className="mx-auto flex aspect-[9/16] w-full max-w-64 flex-col md:max-w-none" />
            <div className="grid gap-3 lg:gap-4">
              {testimonials.map((t, i) => (
                <blockquote key={t.name} className={`flex flex-col justify-between rounded-lg p-5 ${i === 0 ? "bg-orange text-white" : "bg-white text-ink shadow-sm"}`}>
                  <p className={i === 0 ? "text-lg" : ""}>“{t.quote}”</p>
                  <footer className={`mt-3 font-bold ${i === 0 ? "text-white/90" : "text-sage-dark"}`}>{t.name}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>
      <VideosEnding />
    </>
  );
}
