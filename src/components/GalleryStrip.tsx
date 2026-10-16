import Image from "next/image";
import Link from "next/link";
import { InstagramIcon } from "@/components/BrandIcons";
import { contact, galleryHref } from "@/data/site";

const photos = [
  { src: "/images/g5.jpg", alt: "Infinity pool by the sea in Bali" },
  { src: "/images/g8.jpg", alt: "Jungle swing over rice terraces" },
  { src: "/images/g1.jpg", alt: "Students at Mount Batur" },
  { src: "/images/g7.jpg", alt: "Students enjoying the pool" },
  { src: "/images/g4.jpg", alt: "Volcano landscape trip" },
  { src: "/images/yogashala.jpg", alt: "Sea-view yogashala" },
];

export default function GalleryStrip() {
  return (
    <section className="relative grid grid-cols-3 lg:grid-cols-6">
      {photos.map((p) => (
        <Link key={p.src} href={galleryHref} className="group relative aspect-square overflow-hidden">
          <Image src={p.src} alt={p.alt} fill sizes="(min-width: 1024px) 17vw, 34vw" className="object-cover transition duration-700 group-hover:scale-110" />
          <span className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />
        </Link>
      ))}
      <a
        href={contact.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-white px-5 py-2.5 font-bold text-ink shadow-xl transition hover:bg-orange hover:text-white"
      >
        <InstagramIcon className="size-5" /> @Yogmantrabali_ubud
      </a>
    </section>
  );
}
