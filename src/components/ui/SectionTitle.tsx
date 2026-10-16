import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = { children: React.ReactNode; link?: { href: string; label: string }; light?: boolean; className?: string };

/** Kaushan section heading. With a link it becomes a left-aligned title row. */
export default function SectionTitle({ children, link, light, className = "" }: Props) {
  const h2 = <h2 className={`font-heading text-4xl lg:text-5xl ${light ? "text-white" : "text-ink"}`}>{children}</h2>;
  if (!link) return <div className={`mb-6 text-center ${className}`}>{h2}</div>;
  return (
    // Wraps the link under the title on narrow screens instead of squeezing the title onto two lines.
    <div className={`mb-6 flex flex-wrap items-end justify-between gap-x-4 gap-y-1 ${className}`}>
      {h2}
      <Link href={link.href} className="inline-flex shrink-0 items-center gap-1.5 font-bold text-sage-dark hover:text-orange">
        {link.label} <ArrowRight className="size-4" />
      </Link>
    </div>
  );
}
