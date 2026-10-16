import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formatDate, type Post } from "@/lib/posts";

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group flex flex-col overflow-hidden rounded-lg bg-white shadow-sm transition hover:shadow-lg">
      <div className="relative aspect-[3/2] overflow-hidden bg-mist">
        {post.image && <Image src={post.image} alt={post.title} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <time dateTime={post.date} className="text-xs uppercase tracking-wide text-orange">{formatDate(post.date)}</time>
        <h3 className="mt-1 flex-1 font-bold leading-snug text-ink group-hover:text-sage-dark">{post.title}</h3>
        <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-sage-dark">
          Read more <ArrowRight className="size-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
