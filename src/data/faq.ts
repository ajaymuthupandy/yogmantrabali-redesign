export type Faq = { q: string; a: string; list?: string[] };
export type FaqGroup = { title: string; items: Faq[] };

export const faqGroups: FaqGroup[] = [
  {
    title: "Booking & Payment",
    items: [
      { q: "When do I pay the remaining course fee?", a: "You pay the remaining fee when you arrive at our school in Bali." },
      {
        q: "Can I get a refund on my deposit if I cancel?",
        a: "For bookings made on or after 18 May 2022 the deposit is non-refundable, but you can change your course or start date (subject to availability and any price difference). Older bookings are refunded minus fees if cancelled 7+ days before the start date.",
      },
      { q: "How can I pay the remaining fee?", a: "At our centre, by:", list: ["Cash", "Credit or debit card (3% extra)", "Bank transfer"] },
    ],
  },
  {
    title: "After the Course",
    items: [
      { q: "Can I register with Yoga Alliance?", a: "Yes. You receive an RYT 200/300 certificate (as applicable) and can register as a teacher. Registration fees are not included." },
      { q: "Can I teach after the 100 hour TTC?", a: "It's a great introduction for yourself, but not enough to teach yet. We recommend a second 100 hour course or a 200 hour TTC." },
      { q: "Can I teach after the 200 hour TTC?", a: "Yes. With motivation, confidence and a steady self-practice, our graduates can start teaching straight after the course, and should keep learning." },
    ],
  },
  {
    title: "During the Training",
    items: [
      { q: "Is there an exam?", a: "Yes, 2 theory exams and 1 practical exam." },
      {
        q: "What is included in the TTC?",
        a: "",
        list: ["Three vegetarian meals a day plus smoothies, juice & fruit", "Herbal tea, coffee & filtered water", "Private room accommodation", "Course book, materials, pen & notebook", "Yoga mats & props", "All syllabus classes", "Weekend trips (private expenses excluded)"],
      },
      { q: "Do you provide yoga mats?", a: "Yes, mats, pillows, belts, blankets and blocks are provided. You're welcome to bring your own mat." },
      {
        q: "What should I bring?",
        a: "",
        list: ["Passport with a valid visa", "Cash for the balance & weekend trips", "ATM card (tell your bank you're travelling)", "Clean slippers for indoors", "Personal medication", "Sunscreen, sunglasses & mosquito repellent", "Reusable water bottle", "Plug adapters", "A journal (optional)"],
      },
      { q: "What should I wear?", a: "Whatever is comfortable. White clothes are required for the opening and closing ceremonies." },
      {
        q: "What does Yogmantra Bali expect from me?",
        a: "Give 100%, come with an open mind, attend all classes, respect teachers and staff, and stay away from intoxicants on the premises.",
      },
    ],
  },
  {
    title: "Food",
    items: [
      { q: "What food do you serve?", a: "Three fresh, gluten-free, vegetarian and vegan meals a day, made with organic and local Balinese ingredients." },
      { q: "I'm vegan or have allergies. Do you have alternatives?", a: "Yes. Please tell us about allergies before you arrive so we can prepare." },
      { q: "Can I get only raw meals?", a: "We can't prepare special raw dishes, but we serve vegetable and fruit salads." },
      { q: "Which beverages do you serve?", a: "Purified water (cold or warm), herbal tea and coffee." },
    ],
  },
];
