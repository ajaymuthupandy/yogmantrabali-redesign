export type Room = { name: string; image: string; was: string; price: string; deposit: string };
export type SyllabusGroup = { title: string; items: string[] };
export type ScheduleRow = [time: string, activity: string];

export type Course = {
  slug: string;
  hours: string;
  title: string;
  tagline: string;
  days: number;
  level: string;
  certificate: string;
  badge?: string;
  heroImage: string;
  rooms: Room[];
  dates: [range: string, slots: number][];
  overview: string;
  modules: { title: string; text: string }[];
  syllabus: SyllabusGroup[];
  extras?: { title: string; text: string; items: string[] }[];
  notice?: { title: string; text: string }[];
};

export const perks = [
  "FREE full body massage",
  "3 healthy veg / vegan / gluten-free meals daily",
  "2 excursions on Sundays",
  "Kirtan / campfire on Saturdays",
  "Course materials for self-study",
  "Sightseeing trips",
  "Airport transfer (one way)",
];

export const discipline = [
  "No alcohol consumption",
  "Follow all school guidelines",
  "Attend every session",
];

const months = ["September 2026", "October 2026", "November 2026", "December 2026", "January 2027", "February 2027", "March 2027", "April 2027", "May 2027", "June 2027"];
const slots = [1, 1, 2, 2, 4, 2, 3, 5, 4, 2];
const dates = (endDay: number) => months.map((m, i) => [`1 – ${endDay} ${m}`, slots[i]] as [string, number]);

const ashtanga: SyllabusGroup[] = [
  {
    title: "Ashtanga · Standing",
    items: ["Hasta Padangusthasana & Pada Hastasana", "Utthita & Parivrtta Trikonasana", "Utthita & Parivrtta Parsvakonasana", "Prasarita Padottanasana A–D", "Utthita Parsvottanasana", "Utthita Hasta Padangusthasana", "Ardha Baddha Padmottanasana", "Virabhadrasana A, B & C"],
  },
  {
    title: "Ashtanga · Primary",
    items: ["Paschimottanasana A, B & C", "Purvottanasana", "Ardha Baddha Padma Paschimottanasana", "Janu Sirsasana A, B & C", "Marichyasana A, B & D", "Navasana & Lolasana", "Bhujapidasana & Kurmasana", "Garbha Pindasana & Kukkutasana", "Baddha Konasana A & B"],
  },
  {
    title: "Ashtanga · Intermediate",
    items: ["Salabhasana A & B", "Dhanurasana & Ustrasana", "Kapotasana A & B", "Supta Vajrasana", "Bakasana A & B", "Ardha Matsyendrasana", "Yoga Nidrasana & Tittibhasana", "Pincha Mayurasana", "Gomukhasana A & B"],
  },
  {
    title: "Ashtanga · Advanced A",
    items: ["Kasyapasana & Bhairavasana", "Urdhva Kukkutasana A", "Galavasana", "Eka Pada Viparita Dandasana", "Viparita Salabhasana", "Gandha Bherundasana", "Hanumanasana", "Natarajasana & Raja Kapotasana"],
  },
];

const anatomy: SyllabusGroup = {
  title: "Anatomy",
  items: ["Introduction to anatomy & yogic diet", "Lifestyle, anatomy & physiology", "Skeletal & muscular systems", "Lower limbs: foot, knee, hip", "Spine anatomy & physiology", "Upper limbs: shoulder, elbow, wrist"],
};

const methodology: SyllabusGroup = {
  title: "Teaching Methodology & Alignment",
  items: ["Alignment for different groups", "Simple cues & instructions", "Benefits & contraindications", "Common mistakes & how to avoid them", "Modifications for every body", "Verbal & physical adjustments", "How to instruct a class"],
};

export const courses: Course[] = [
  {
    slug: "100-hour",
    hours: "100",
    title: "100 Hour Yoga TTC in Bali",
    tagline: "12 days of Hatha, Vinyasa & Ashtanga foundations.",
    days: 12,
    level: "Beginner",
    certificate: "100 hr certificate",
    heroImage: "/images/gallery/meditation-class/20210102_122000.jpg",
    rooms: [
      { name: "Comfy Sea View Room (Private)", image: "/images/rooms/sea-view-room-2.jpg", was: "$1,400", price: "$1,200", deposit: "$180" },
    ],
    dates: dates(12),
    overview:
      "A 12-day intensive for beginners, or for anyone short on time who wants to complete a 200 hour certification in two parts.",
    modules: [
      { title: "Asana Practice", text: "Hatha, Vinyasa flow & Ashtanga primary series with correction." },
      { title: "Pranayama", text: "Kapalbhati, Anulom Vilom and breath control." },
      { title: "Philosophy & Anatomy", text: "The roots of yoga and how the body moves." },
      { title: "Mantra & Kriyas", text: "Chanting, yogic cleansing and Surya Namaskar." },
      { title: "Mudras & Bandhas", text: "Energy locks and hand gestures." },
      { title: "Yoga Nidra", text: "Foundations of deep yogic relaxation." },
    ],
    syllabus: [...ashtanga, anatomy, methodology],
  },
  {
    slug: "200-hour",
    hours: "200",
    title: "200 Hour Yoga TTC in Bali",
    tagline: "23 days to build a strong foundation for teaching.",
    days: 23,
    level: "Beginner – Intermediate",
    certificate: "RYT 200",
    badge: "/images/badges/rys-200.png",
    heroImage: "/images/gallery/air-conditioned-yogashala/IMG_1754.jpg",
    rooms: [
      { name: "Comfy Sea View Room", image: "/images/rooms/sea-view-room.jpg", was: "$1,600", price: "$1,500", deposit: "$225" },
      { name: "Sea View Room with Private Balcony", image: "/images/rooms/balcony-room.jpg", was: "$1,700", price: "$1,600", deposit: "$240" },
    ],
    dates: dates(23),
    overview:
      "Our four-week residential course and the first step towards a teaching career, focused on asana correction and a disciplined yogic life.",
    modules: [
      { title: "Pranayama, Chanting & Meditation", text: "Breath control that fills the body with positive energy." },
      { title: "Asana", text: "Practice and methodology to perfect every posture." },
      { title: "Yoga Anatomy", text: "Understand the body with experienced teachers." },
      { title: "Shatkarma", text: "Yogic cleansing practices for body purification." },
      { title: "Yoga Philosophy", text: "History, concepts and philosophy of yoga." },
      { title: "Ceremonies", text: "Mantra chanting, Homa and Yajna rituals." },
    ],
    syllabus: [...ashtanga, anatomy, methodology],
  },
  {
    slug: "300-hour",
    hours: "300",
    title: "300 Hour Yoga TTC in Bali",
    tagline: "28 days of advanced training for certified teachers.",
    days: 28,
    level: "Advanced (200 hr required)",
    certificate: "RYT 300",
    badge: "/images/badges/rys-300.png",
    heroImage: "/images/gallery/air-conditioned-yogashala/IMG_1751.jpg",
    rooms: [
      { name: "Comfy Sea View Room", image: "/images/rooms/sea-view-room-2.jpg", was: "$2,500", price: "$2,400", deposit: "$336" },
      { name: "Sea View Room with Private Balcony", image: "/images/rooms/balcony-room.jpg", was: "$2,600", price: "$2,500", deposit: "$350" },
    ],
    dates: dates(28),
    overview:
      "An advanced course to sharpen your skills and deepen your knowledge. Completion of a 200 hour certification is required.",
    modules: [
      { title: "Ashtanga, Vinyasa & Hatha", text: "Detailed teaching and practice of all three styles." },
      { title: "Classical Texts", text: "Upanishads, Bhagavad Gita and Patanjali's Yoga Sutras." },
      { title: "Advanced Alignment", text: "Higher-level adjustment techniques for correction." },
      { title: "Yamas & Niyamas", text: "Applied ethics and advanced body science." },
      { title: "Mudras, Bandhas & Mantra", text: "Subtle practices for energy and focus." },
      { title: "Teaching Methodology", text: "Sequencing, private sessions and train the trainer." },
    ],
    syllabus: [
      {
        title: "Module 1 · Advanced Sequencing",
        items: ["Advanced sequencing, themes & teachings", "Teaching effective Vinyasa", "Educational theory", "Yoga specialty areas", "Private & group class design", "Trust & connection", "Pose analysis & observation", "Train the trainer"],
      },
      {
        title: "Module 2 · Body & Mind",
        items: ["Individual alignment & skeletal variation", "Props & adjustments", "Mindfulness, meditation & self-inquiry", "Pranayama", "Tension vs compression", "Five-element theory", "Biomechanics & kinesiology", "The business of yoga"],
      },
      {
        title: "Vinyasa to Jump Back",
        items: ["Primary series & advanced postures", "Yoga Mudra, the sealed posture", "Utpluthi, uprooting"],
      },
    ],
    extras: [
      {
        title: "Free Ayurvedic Cooking & Healing Course",
        text: "Worth $1,800 USD, included with your training.",
        items: ["Khichdi healing meal", "Dosha-balancing meals", "Ayurvedic drinks & teas", "Home remedies", "Chakra, Reiki & crystal healing", "Sound, water & colour healing"],
      },
    ],
    notice: [
      { title: "28 days, 27 nights", text: "In-depth training with an efficient schedule." },
      { title: "Plan your flight", text: "Book your return after 4 PM on the 28th to join the closing ceremony." },
    ],
  },
];

export const getCourse = (slug: string) => courses.find((c) => c.slug === slug);

export const ttcSchedule: ScheduleRow[] = [
  ["06:00", "Wake up"],
  ["06:30", "Pranayama"],
  ["07:00", "Vinyasa / Hatha"],
  ["08:30", "Breakfast"],
  ["09:30", "Yoga Philosophy"],
  ["10:30", "Yin Yoga"],
  ["12:00", "Anatomy"],
  ["13:00", "Lunch"],
  ["14:00", "Ayurveda"],
  ["15:00", "Ashtanga Primary Series"],
  ["16:30", "Break"],
  ["17:00", "Body Alignment"],
  ["18:30", "Meditation / Yoga Nidra"],
  ["19:00", "Dinner"],
  ["22:00", "Lights off"],
];

export const ttc300Schedule: ScheduleRow[] = [
  ["05:30", "Wake up"],
  ["06:30", "Pranayama"],
  ["07:00", "Ashtanga"],
  ["08:30", "Breakfast"],
  ["09:30", "Alignment / Anatomy"],
  ["10:30", "Philosophy"],
  ["11:30", "Self Study"],
  ["12:00", "Hatha / Vinyasa"],
  ["13:00", "Lunch"],
  ["14:00", "Ayurveda"],
  ["15:00", "Yin Yoga"],
  ["16:30", "Self Study"],
  ["18:30", "Meditation"],
  ["19:00", "Dinner"],
];
