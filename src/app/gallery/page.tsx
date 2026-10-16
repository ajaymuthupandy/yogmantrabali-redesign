import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import GalleryTabs from "@/components/GalleryTabs";
import { GalleryEnding } from "@/components/endings/PageEndings";
import gallery from "@/content/gallery.json";

export const metadata: Metadata = {
  title: "Gallery | Yogmantra Bali",
  description: "Photos of Yogmantra Bali: the sea-view yogashala, rooms, pool, sattvic food, kirtan nights and yoga retreats.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero title="Gallery" subtitle="Life at Yogmantra Bali." image="/images/gallery/pool-with-sea-view/20210102_112207.jpg" />
      <section className="section-y bg-mist">
        <div className="container-x">
          <GalleryTabs groups={gallery} />
        </div>
      </section>
      <GalleryEnding />
    </>
  );
}
