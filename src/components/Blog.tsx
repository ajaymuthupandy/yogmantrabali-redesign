import PostCard from "@/components/PostCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { blogHref } from "@/data/site";
import { allPosts } from "@/lib/posts";

export default function Blog() {
  return (
    <section className="section-y bg-mist">
      <div className="container-x">
        <SectionTitle link={{ href: blogHref, label: "View More" }}>From Our Blog</SectionTitle>
        <div className="grid gap-3 sm:grid-cols-3 lg:gap-4">
          {allPosts.slice(0, 3).map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
