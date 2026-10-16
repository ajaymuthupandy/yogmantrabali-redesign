import type { Metadata } from "next";
import { CreditCard, GraduationCap, Salad, Sparkles } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import FaqList from "@/components/ui/FaqList";
import { FaqEnding } from "@/components/endings/PageEndings";
import { faqGroups } from "@/data/faq";

export const metadata: Metadata = {
  title: "FAQ | Yogmantra Bali",
  description: "Answers about booking, payments, certification, what to bring and food at Yogmantra Bali's yoga teacher training.",
};

const icons = [CreditCard, GraduationCap, Sparkles, Salad];
const id = (s: string) => s.toLowerCase().replace(/[^a-z]+/g, "-");

export default function FaqPage() {
  return (
    <>
      <PageHero title="Frequently Asked Questions" subtitle="Everything you need to know before you arrive." image="/images/gallery/air-conditioned-yogashala/20210102_120749.jpg" />

      <section className="section-y bg-mist">
        <div className="container-x grid items-start gap-6 lg:grid-cols-[16rem_1fr]">
          <nav className="grid grid-cols-2 gap-2 lg:sticky lg:top-6 lg:grid-cols-1">
            {faqGroups.map((g, i) => {
              const Icon = icons[i];
              return (
                <a key={g.title} href={`#${id(g.title)}`} className="flex items-center gap-2 rounded-lg bg-white p-3 text-sm font-bold text-ink shadow-sm transition hover:bg-orange hover:text-white">
                  <Icon className="size-4 shrink-0" /> {g.title}
                </a>
              );
            })}
          </nav>
          <div className="grid gap-6">
            {faqGroups.map((g) => (
              <div key={g.title} id={id(g.title)} className="scroll-mt-24">
                <h2 className="mb-3 font-heading text-3xl text-ink">{g.title}</h2>
                <FaqList items={g.items} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <FaqEnding />
    </>
  );
}
