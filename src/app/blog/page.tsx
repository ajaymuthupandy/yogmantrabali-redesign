import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import PostCard from "@/components/PostCard";
import { BlogIndexEnding } from "@/components/endings/PageEndings";
import { allPosts, formatDate, readingTime } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog | Yogmantra Bali",
  description: "Yoga teacher training guides, retreat ideas, Ayurveda and wellness tips from Yogmantra Bali.",
};

// Feature 1–3 posts so the remaining grid of three columns always ends on a full row.
const featuredCount = [1, 2, 3].find((k) => (allPosts.length - k) % 3 === 0) ?? 1;

export default function BlogPage() {
  const featured = allPosts.slice(0, featuredCount);
  const rest = allPosts.slice(featuredCount);
  return (
    <>
      <PageHero title="Our Blog" subtitle="Guides, stories and wellness tips from Bali." image="/images/blog-ytt.jpg" />

      <section className="section-y bg-mist">
        <div className="container-x">
          <div className={`mb-3 grid gap-3 lg:mb-4 lg:gap-4 ${featuredCount === 2 ? "lg:grid-cols-2" : featuredCount === 3 ? "md:grid-cols-3" : ""}`}>
            {featured.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className={`group grid overflow-hidden rounded-lg bg-white shadow-sm transition hover:shadow-lg ${featuredCount === 1 ? "lg:grid-cols-2" : ""}`}
              >
                <div className={`relative overflow-hidden ${featuredCount === 1 ? "aspect-[3/2] lg:aspect-auto lg:min-h-80" : "aspect-[16/9]"}`}>
                  {p.image && <Image src={p.image} alt={p.title} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />}
                </div>
                <div className="flex flex-col justify-center p-6 lg:p-8">
                  <p className="text-sm text-orange">{formatDate(p.date)} · {readingTime(p.html)} min read</p>
                  <h2 className="mt-2 font-heading text-3xl leading-tight text-ink">{p.title}</h2>
                  <p className="mt-2 text-muted">{p.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 font-bold text-sage-dark group-hover:text-orange">
                    Read article <ArrowRight className="size-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="grid gap-3 md:grid-cols-3 lg:gap-4">
            {rest.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>
      <BlogIndexEnding />
    </>
  );
}
