import Image from "next/image";
import type { LucideIcon } from "lucide-react";

type Fact = { icon: LucideIcon; title: string; text: string };

type Props = {
  title: string;
  subtitle?: string;
  image: string;
  facts?: Fact[];
  children?: React.ReactNode;
};

/** Compact image banner used at the top of inner pages, with an optional overlapping facts strip. */
export default function PageHero({ title, subtitle, image, facts, children }: Props) {
  return (
    <section className={`relative ${facts ? "bg-mist" : ""}`}>
      <div className="relative flex min-h-[42svh] items-center justify-center overflow-hidden lg:min-h-[52vh]">
        <Image src={image} alt="" fill preload sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/65" />
        <div className={`container-x relative pt-12 text-center text-white lg:pt-16 ${facts ? "pb-20 lg:pb-24" : "pb-12 lg:pb-14"}`}>
          <h1 className="mx-auto max-w-4xl font-heading text-[2.6rem] leading-[1.15] drop-shadow-lg sm:text-6xl">{title}</h1>
          {subtitle && <p className="mx-auto mt-3 max-w-2xl font-serif text-lg text-white/90 sm:text-xl">{subtitle}</p>}
          {children && <div className="mt-6 flex flex-wrap justify-center gap-3">{children}</div>}
        </div>
      </div>

      {facts && (
        <div className="container-x relative z-10 -mt-12">
          <ul className={`grid grid-cols-2 overflow-hidden rounded-lg bg-white shadow-xl shadow-black/10 ${facts.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
            {facts.map(({ icon: Icon, title, text }, i) => (
              <li
                key={title}
                className={`flex items-center gap-2.5 border-black/5 p-3 sm:gap-3 sm:p-5 ${i % 2 ? "" : "border-r"} ${i < facts.length - 2 ? "border-b lg:border-b-0" : ""} lg:border-r lg:last:border-r-0`}
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-peach-light text-orange sm:size-11">
                  <Icon className="size-4 sm:size-5" />
                </span>
                <span className="min-w-0 leading-tight [overflow-wrap:anywhere]">
                  <span className="block font-bold text-ink">{title}</span>
                  <span className="text-sm text-muted">{text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
