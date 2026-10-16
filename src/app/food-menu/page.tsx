import type { Metadata } from "next";
import { Leaf, Sprout, WheatOff } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Lightbox from "@/components/ui/Lightbox";
import { menus } from "@/components/FoodMenus";
import { FoodEnding } from "@/components/endings/PageEndings";
import gallery from "@/content/gallery.json";

export const metadata: Metadata = {
  title: "Wholesome Plant-Based Food Menu | Yogmantra Bali",
  description: "Yogmantra Bali's rotating weekly menu of fresh vegan and gluten-free meals inspired by Balinese flavours and Ayurveda.",
};

const tags = [
  { icon: Leaf, label: "V = Vegan" },
  { icon: WheatOff, label: "GF = Gluten-free" },
  { icon: Sprout, label: "Fresh & local" },
];

const photos = gallery.Food.slice(0, 8).map((src) => ({ src, alt: "Sattvic meal at Yogmantra Bali" }));

export default function FoodMenuPage() {
  return (
    <>
      <PageHero title="Wholesome Plant-Based Menu" subtitle="Nourish your body as you nurture your mind." image="/images/food.jpg" />

      <section className="section-y bg-mist">
        <div className="container-x">
          <div className="mb-6 flex flex-col items-center justify-between gap-4 text-center lg:flex-row lg:text-left">
            <p className="max-w-2xl text-lg text-ink">
              A rotating seasonal menu of Balinese flavours, global vegetarian dishes and Ayurvedic principles, made fresh every day.
            </p>
            <ul className="flex flex-wrap justify-center gap-2">
              {tags.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm text-ink shadow-sm">
                  <Icon className="size-4 text-sage-dark" /> {label}
                </li>
              ))}
            </ul>
          </div>
          <Lightbox images={menus} className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4" tileClassName="aspect-[724/1024] bg-white shadow-sm" sizes="(min-width: 1024px) 25vw, 50vw" />
          <p className="mt-3 text-center text-sm text-muted">Select a menu to enlarge it. Menus may change with the seasons.</p>
          <Lightbox images={photos} className="mt-6 grid grid-cols-4 gap-3 lg:mt-8 lg:grid-cols-8 lg:gap-4" tileClassName="aspect-square shadow-sm" sizes="(min-width: 1280px) 150px, (min-width: 1024px) 12vw, 25vw" />
        </div>
      </section>
      <FoodEnding />
    </>
  );
}
