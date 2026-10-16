import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Highlights from "@/components/Highlights";
import Oasis from "@/components/Oasis";
import Reasons from "@/components/course/Reasons";
import JourneyCta from "@/components/JourneyCta";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Why Yogmantra Bali? | Yoga School in Bali",
  description: "An authentic, traditional yoga school in Bali teaching Hatha, Vinyasa and Ashtanga with teachers from Rishikesh.",
};

export default function WhyPage() {
  return (
    <>
      <PageHero title="Why Yogmantra Bali?" subtitle="Learning, peace and wellness in a spiritual atmosphere." image="/images/hero.jpg" />
      <Highlights title="What Makes Us Different" />
      <Oasis />
      <Reasons overview="We strengthen the roots of yoga and correct every gap in practice and theory, building the confidence to teach." />
      <Testimonials />
      <JourneyCta />
    </>
  );
}
