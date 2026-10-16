import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/BrandIcons";
import { contact, retreats, ttc } from "@/data/site";

const quick = [
  { label: "Why Yogmantra Bali", href: "/why-yogmantra-bali" },
  { label: "Daily Schedule", href: "/schedule" },
  { label: "Teachers", href: "/teachers" },
  { label: "Gallery", href: "/gallery" },
  { label: "Videos", href: "/videos" },
  { label: "Food Menu", href: "/food-menu" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
];

export default function Footer() {
  return (
    <footer className="bg-sage-deep text-white/80">
      <div className="container-x grid gap-6 py-7 sm:grid-cols-2 lg:grid-cols-[repeat(4,auto)] lg:justify-between lg:gap-x-5">
        <div>
          <span className="inline-block rounded-md bg-white px-3 py-1.5">
            <Image src="/images/logo.png" alt="Yogmantra Bali" width={280} height={60} className="h-8 w-auto" />
          </span>
          <p className="mt-2 max-w-xs text-sm">Yoga Teacher Training Course and Retreats in Bali.</p>
          <div className="mt-1.5 text-sm">
            <a href={contact.phoneHref} className="flex w-fit items-center gap-2 py-[3px] hover:text-peach"><Phone className="size-4" />{contact.phone}</a>
            <a href={`mailto:${contact.email}`} className="flex w-fit items-center gap-2 py-[3px] hover:text-peach"><Mail className="size-4" />{contact.email}</a>
          </div>
        </div>
        <div>
          <h3 className="mb-1.5 font-bold text-white">Yoga Teacher Training</h3>
          <ul className="text-sm lg:whitespace-nowrap">
            {ttc.map((c) => (
              <li key={c.href}><Link href={c.href} className="inline-block py-[3px] hover:text-peach">{c.label} in Bali 2026/2027</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-1.5 font-bold text-white">Yoga Retreats in Bali</h3>
          <ul className="text-sm lg:whitespace-nowrap">
            {retreats.map((r) => (
              <li key={r.href}><Link href={r.href} className="inline-block py-[3px] hover:text-peach">{r.label} in Bali 2026/2027</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-1.5 font-bold text-white">Explore</h3>
          <ul className="grid grid-cols-2 gap-x-6 text-sm lg:grid-cols-[auto_auto] lg:gap-x-5 lg:whitespace-nowrap">
            {quick.map((q) => (
              <li key={q.href}><Link href={q.href} className="inline-block py-[3px] hover:text-peach">{q.label}</Link></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-3 text-center text-sm">
        <div className="container-x flex flex-col items-center justify-between gap-2 sm:flex-row sm:pr-24">
          <span>© Copyright 2026 Yogmantra Bali. All Rights Reserved.</span>
          <div className="flex gap-2">
            {[
              { href: contact.instagram, label: "Instagram", Icon: InstagramIcon },
              { href: contact.facebook, label: "Facebook", Icon: FacebookIcon },
            ].map(({ href, label, Icon }) => (
              <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer" className="grid size-9 place-items-center rounded-full bg-white/10 transition hover:bg-orange hover:text-white">
                <Icon className="size-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
