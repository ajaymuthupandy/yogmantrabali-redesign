import Image from "next/image";
import { Button } from "@/components/ui/Buttons";

// A single full-screen section, so the page ends flush with the footer like every other inner page.
export default function NotFound() {
  return (
    <section className="end-fill relative flex max-lg:min-h-[70svh] items-center justify-center overflow-hidden px-4 py-16 text-center text-white">
      <Image src="/images/gallery/pool-with-sea-view/20210102_112132.jpg" alt="" fill preload sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/65" />
      <div className="relative">
        <p className="font-heading text-[8rem] leading-none text-peach drop-shadow-lg sm:text-[11rem] short:text-[7rem]">404</p>
        <h1 className="font-heading text-4xl drop-shadow-lg sm:text-6xl">Page Not Found</h1>
        <p className="mx-auto mt-3 max-w-xl font-serif text-lg text-white/90 sm:text-xl">This page has moved or no longer exists.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button href="/" variant="sage">Back to Home</Button>
          <Button href="/yoga-teacher-training" variant="outline">View Courses</Button>
        </div>
      </div>
    </section>
  );
}
