import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { WhatsAppIcon } from "@/components/BrandIcons";
import { contact, ttc } from "@/data/site";

const steps = [
  { title: "Choose your path", text: "A 100, 200 or 300 hour TTC, or a 3 to 12 day retreat." },
  { title: "Reserve your spot", text: "Hold your dates with a 15% deposit." },
  { title: "Arrive in Bali", text: "Pay the balance on arrival. Airport pickup included." },
];

const picks = [...ttc.map((c) => ({ label: `${c.hours} hr TTC`, href: c.href })), { label: "Retreats", href: "/yoga-retreats" }];

/** Closing section for inner pages (desktop edges line up with the footer's container): photo call to action beside a three-step booking guide. Used on the Why page. */
export default function JourneyCta() {
  return (
    <section className="end-fill grid lg:grid-cols-2">
      <div className="relative flex min-h-80 items-end overflow-hidden">
        <Image src="/images/gallery/pool-with-sea-view/20210102_112319.jpg" alt="Infinity pool facing the sea at Yogmantra Bali" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/5" />
        <div className="relative w-full p-6 text-white sm:p-10 lg:py-14 lg:pl-[max(3.5rem,calc((100vw-80rem)/2+1.5rem))] lg:pr-14">
          <h2 className="font-heading text-5xl leading-tight drop-shadow-lg lg:text-6xl">Begin Your Yoga Journey</h2>
          <p className="mt-2 font-serif text-lg text-white/90 lg:text-xl">Questions or ready to book? We reply fast, 24/7.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-ink transition hover:bg-peach-light">
              <WhatsAppIcon className="size-5 text-[#25d366]" /> WhatsApp Us
            </a>
            <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 font-bold transition hover:bg-white hover:text-ink">
              <Mail className="size-5" /> Email Us
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-5 bg-peach-light p-6 sm:p-10 lg:pl-14 lg:pr-[max(3.5rem,calc((100vw-80rem)/2+1.5rem))]">
        <ol className="grid gap-3">
          {steps.map((s, i) => (
            <li key={s.title} className="flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm">
              <span className="w-12 shrink-0 text-center font-heading text-5xl leading-none text-orange">{i + 1}</span>
              <span>
                <span className="block text-lg font-bold text-ink">{s.title}</span>
                <span className="text-muted">{s.text}</span>
              </span>
            </li>
          ))}
        </ol>

        <div className="flex flex-wrap gap-2">
          {picks.map((p) => (
            <Link key={p.label} href={p.href} className="rounded-full bg-sage px-4 py-2 text-sm font-bold text-white transition hover:bg-sage-dark">
              {p.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
