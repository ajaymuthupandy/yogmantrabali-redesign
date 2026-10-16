import posts from "@/content/posts.json";

export type Post = (typeof posts)[number];

export const allPosts: Post[] = posts;
export const getPost = (slug: string) => allPosts.find((p) => p.slug === slug);

export const formatDate = (iso: string) =>
  new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });

/** Rough reading time from the HTML body. */
export const readingTime = (html: string) => Math.max(1, Math.round(html.replace(/<[^>]+>/g, " ").split(/\s+/).length / 220));
