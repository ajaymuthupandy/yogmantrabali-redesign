import type { NextConfig } from "next";
import posts from "./src/content/posts.json";

// Old WordPress URLs mapped to the new routes, so existing links and search rankings keep working.
const legacy: [string, string][] = [
  ["/yoga-teacher-training-course", "/yoga-teacher-training"],
  ["/yoga-teacher-training-course/100-hours-yoga-teacher-training-course-in-bali", "/yoga-teacher-training/100-hour"],
  ["/yoga-teacher-training-course/200-hours-yoga-teacher-training-course-in-bali", "/yoga-teacher-training/200-hour"],
  ["/yoga-teacher-training-course/300-hours-yoga-teacher-training-course-in-bali", "/yoga-teacher-training/300-hour"],
  ["/yoga-retreats/3-day-yoga-retreat-in-bali", "/yoga-retreats/3-day"],
  ["/yoga-retreats/6-day-yoga-retreat-in-bali", "/yoga-retreats/6-day"],
  ["/yoga-retreats/8-day-yoga-retreat-in-bali", "/yoga-retreats/8-day"],
  ["/yoga-retreats/12-day-yoga-retreat-in-bali", "/yoga-retreats/12-day"],
  ["/daily-yoga-ttc-schedule", "/schedule"],
  ["/%F0%9F%8D%83-yogmantra-bali-wholesome-plant-based-menu", "/food-menu"],
  ["/🍃-yogmantra-bali-wholesome-plant-based-menu", "/food-menu"],
  // Posts lived at the site root; skip any slug that is now a page of its own.
  ...posts
    .filter((p) => !["yoga-teacher-training", "yoga-retreats", "blog", "gallery", "videos", "faq", "teachers", "schedule"].includes(p.slug))
    .map((p): [string, string] => [`/${p.slug}`, `/blog/${p.slug}`]),
];

const nextConfig: NextConfig = {
  async redirects() {
    return legacy.map(([source, destination]) => ({ source, destination, permanent: true }));
  },
  // Keep Vercel image transformations low: one format, a short list of widths, long cache.
  images: {
    formats: ["image/webp"],
    deviceSizes: [640, 828, 1200, 1920],
    imageSizes: [96, 256, 384],
    qualities: [75],
    minimumCacheTTL: 2678400,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
