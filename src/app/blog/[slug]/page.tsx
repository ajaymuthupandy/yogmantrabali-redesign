import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import PostCard from "@/components/PostCard";
import { allPosts, formatDate, getPost, readingTime } from "@/lib/posts";
import { BlogPostEnding } from "@/components/endings/PageEndings";
import { ttc } from "@/data/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return allPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const post = getPost((await props.params).slug);
  if (!post) return {};
  return {
    title: `${post.title} | Yogmantra Bali`,
    description: post.excerpt,
    openGraph: { images: post.image ? [post.image] : undefined },
  };
}

export default async function PostPage(props: PageProps<"/blog/[slug]">) {
  const post = getPost((await props.params).slug);
  if (!post) notFound();
  const more = allPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <section className="relative flex min-h-[42svh] items-end overflow-hidden lg:min-h-[52vh]">
        {post.image && <Image src={post.image} alt="" fill preload sizes="100vw" className="object-cover" />}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
        <div className="container-x relative pb-10 pt-16 text-white">
          <p className="text-sm text-white/80">{formatDate(post.date)} · {readingTime(post.html)} min read</p>
          <h1 className="mt-2 max-w-4xl font-heading text-4xl leading-tight drop-shadow-lg sm:text-5xl">{post.title}</h1>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-x grid items-start gap-8 lg:grid-cols-[1fr_20rem]">
          <article className="prose-yb min-w-0" dangerouslySetInnerHTML={{ __html: post.html }} />

          <aside className="grid gap-3 lg:sticky lg:top-6">
            <div className="rounded-lg bg-orange p-5 text-white">
              <p className="font-heading text-2xl">Train With Us in Bali</p>
              <ul className="mt-3 grid gap-2">
                {ttc.map((c) => (
                  <li key={c.href}>
                    <Link href={c.href} className="flex items-center justify-between rounded-md bg-white/15 px-3 py-2 transition hover:bg-white hover:text-ink">
                      <span className="font-bold">{c.label}</span>
                      <span className="text-sm">from {c.from}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <Link href="/yoga-retreats" className="flex items-center justify-between rounded-lg bg-sage p-5 font-bold text-white transition hover:bg-sage-dark">
              Yoga Retreats from $350 <ArrowRight className="size-4" />
            </Link>
          </aside>
        </div>
      </section>

      <section className="section-y bg-mist">
        <div className="container-x">
          <h2 className="mb-6 font-heading text-4xl text-ink">Keep Reading</h2>
          <div className="grid gap-3 sm:grid-cols-3 lg:gap-4">
            {more.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>
      <BlogPostEnding />
    </>
  );
}
