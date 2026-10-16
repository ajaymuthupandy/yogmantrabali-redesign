import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Oasis from "@/components/Oasis";
import Courses from "@/components/Courses";
import Testimonials from "@/components/Testimonials";
import GalleryStrip from "@/components/GalleryStrip";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <Oasis />
      <Courses />
      <Testimonials />
      <GalleryStrip />
      <Blog />
      <Contact />
    </>
  );
}
