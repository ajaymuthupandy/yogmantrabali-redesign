import Lightbox from "@/components/ui/Lightbox";
import { Button } from "@/components/ui/Buttons";

export const menus = [1, 2, 3, 4].map((w) => ({ src: `/images/menu/week-${w}.png`, alt: `Week ${w} food menu` }));

/** Weekly menu thumbnails with a short intro; used on course pages. */
export default function FoodMenus() {
  return (
    <section className="section-y bg-peach-light">
      <div className="container-x grid items-center gap-6 lg:grid-cols-[1fr_2fr]">
        <div className="text-center lg:text-left">
          <h2 className="font-heading text-4xl text-ink lg:text-5xl">Sattvic Food Menu</h2>
          <p className="mt-3 text-muted">Fresh vegan (V) and gluten-free (GF) meals inspired by Bali and Ayurveda. Menus rotate with the seasons.</p>
          <Button href="/food-menu" variant="orange" className="mt-5">Full Food Menu</Button>
        </div>
        <Lightbox images={menus} className="grid grid-cols-4 gap-2 sm:gap-3" tileClassName="aspect-[724/1024] bg-white shadow-sm" sizes="(min-width: 1024px) 16vw, 25vw" />
      </div>
    </section>
  );
}
