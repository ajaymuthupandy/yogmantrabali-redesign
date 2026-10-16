import FaqList from "@/components/ui/FaqList";
import SectionTitle from "@/components/ui/SectionTitle";
import { faqGroups } from "@/data/faq";

/** Two FAQ groups side by side with a link to the full FAQ page. */
export default function FaqPreview({ groups = ["Booking & Payment", "After the Course"] }: { groups?: string[] }) {
  const shown = faqGroups.filter((g) => groups.includes(g.title));
  return (
    <section className="section-y bg-mist">
      <div className="container-x">
        <SectionTitle link={{ href: "/faq", label: "All FAQs" }}>Good to Know</SectionTitle>
        <div className="grid gap-2 lg:grid-cols-2 lg:gap-4">
          {shown.map((g) => (
            <FaqList key={g.title} items={g.items} />
          ))}
        </div>
      </div>
    </section>
  );
}
