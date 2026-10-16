import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = { href: string; children: React.ReactNode; variant?: "sage" | "orange" | "outline" | "light"; className?: string };

const styles = {
  sage: "bg-sage text-white hover:bg-sage-dark",
  orange: "bg-orange text-white hover:bg-coral",
  outline: "border-2 border-white text-white hover:bg-white hover:text-ink",
  light: "bg-white text-ink hover:bg-peach-light",
};

/** Rounded pill button; external links open normally, internal ones use next/link. */
export function Button({ href, children, variant = "sage", className = "" }: Props) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-bold transition ${styles[variant]} ${className}`;
  const inner = (
    <>
      {children} <ArrowRight className="size-4" />
    </>
  );
  if (href.startsWith("/")) return <Link href={href} className={cls}>{inner}</Link>;
  const external = /^https?:/.test(href);
  return (
    <a href={href} className={cls} {...(external && { target: "_blank", rel: "noopener noreferrer" })}>
      {inner}
    </a>
  );
}
