import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Award, CalendarDays, GraduationCap, Users } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Buttons";
import Booking from "@/components/course/Booking";
import Reasons from "@/components/course/Reasons";
import Curriculum from "@/components/course/Curriculum";
import Schedule from "@/components/ui/Schedule";
import FoodMenus from "@/components/FoodMenus";
import Testimonials from "@/components/Testimonials";
import FaqPreview from "@/components/FaqPreview";
import { courses, getCourse, ttc300Schedule, ttcSchedule } from "@/data/courses";
import { CourseEnding } from "@/components/endings/CourseEndings";
import { whatsappBook } from "@/data/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return courses.map((c) => ({ course: c.slug }));
}

export async function generateMetadata(props: PageProps<"/yoga-teacher-training/[course]">): Promise<Metadata> {
  const course = getCourse((await props.params).course);
  if (!course) return {};
  return {
    title: `${course.title} 2026/2027 | Yogmantra Bali`,
    description: `${course.tagline} Yoga Alliance certified, from ${course.rooms[0].price} USD including sea-view stay and sattvic meals.`,
  };
}

export default async function CoursePage(props: PageProps<"/yoga-teacher-training/[course]">) {
  const course = getCourse((await props.params).course);
  if (!course) notFound();

  return (
    <>
      <PageHero
        title={course.title}
        subtitle={course.tagline}
        image={course.heroImage}
        facts={[
          { icon: CalendarDays, title: `${course.days} Days`, text: "Residential, in English" },
          { icon: GraduationCap, title: course.level, text: "Course level" },
          { icon: Award, title: course.certificate, text: "Yoga Alliance USA" },
          { icon: Users, title: "Max 14 students", text: "Per asana class" },
        ]}
      >
        <Button href="#book" variant="sage">Reserve Your Spot</Button>
        <Button href={whatsappBook(course.title)} variant="outline">Ask a Question</Button>
      </PageHero>

      <Booking course={course} />

      {course.notice && (
        <div className="grid sm:grid-cols-2">
          {course.notice.map((n, i) => (
            <p key={n.title} className={`px-6 py-4 text-center text-white ${i ? "bg-coral" : "bg-sage-dark"}`}>
              <strong>{n.title}:</strong> {n.text}
            </p>
          ))}
        </div>
      )}

      <Reasons overview={course.overview} badge={course.badge} />
      <Curriculum course={course} />
      <Schedule rows={course.slug === "300-hour" ? ttc300Schedule : ttcSchedule} image="/images/gallery/meditation-class/20210102_122150.jpg" />
      <FoodMenus />
      <Testimonials />
      <FaqPreview />
      <CourseEnding slug={course.slug} />
    </>
  );
}
