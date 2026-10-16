export const contact = {
  phone: "+62-813-3844-5456",
  phoneHref: "tel:+6281338445456",
  whatsapp: "https://wa.me/6281338445456",
  email: "support@yogmantrabali.com",
  hours: "Open 24/7",
  address:
    "Jl. Prof. Dr. Ida Bagus Mantra, Medahan, Blahbatuh, Gianyar, Bali, Indonesia 80551",
  mapEmbed:
    "https://maps.google.com/maps?q=Yogmantra%20Bali%2C%20Medahan%2C%20Blahbatuh%2C%20Gianyar%2C%20Bali&z=14&output=embed",
  instagram: "https://instagram.com/Yogmantrabali_ubud",
  facebook: "https://facebook.com/yogmantrabaliubud",
  yogaAlliance:
    "https://www.yogaalliance.org/SchoolPublicProfile?sid=15814&lid=19295",
};

/** WhatsApp link with a prefilled booking message. */
export const whatsappBook = (item: string) =>
  `${contact.whatsapp}?text=${encodeURIComponent(`Hi Yogmantra Bali, I'd like to book the ${item}.`)}`;

export const ttc = [
  { hours: "100", label: "100 Hour Yoga TTC", note: "Foundation course", from: "$1,200", href: "/yoga-teacher-training/100-hour" },
  { hours: "200", label: "200 Hour Yoga TTC", note: "Most popular", from: "$1,500", href: "/yoga-teacher-training/200-hour" },
  { hours: "300", label: "300 Hour Yoga TTC", note: "Advanced training", from: "$2,400", href: "/yoga-teacher-training/300-hour" },
];

export const retreats = [
  { days: 3, price: "$350" },
  { days: 6, price: "$650" },
  { days: 8, price: "$850" },
  { days: 12, price: "$1,250" },
].map((r) => ({ ...r, label: `${r.days} Day Yoga Retreat`, href: `/yoga-retreats/${r.days}-day` }));

export const bookHref = "/yoga-teacher-training/200-hour#book";

export type NavItem = { label: string; href: string; children?: NavItem[] };

export const nav: NavItem[] = [
  {
    label: "Yoga Teacher Training",
    href: "/yoga-teacher-training",
    children: ttc.map((c) => ({ label: `${c.label} in Bali`, href: c.href })),
  },
  {
    label: "Yoga Retreats",
    href: "/yoga-retreats",
    children: retreats.map((r) => ({ label: `${r.label} in Bali`, href: r.href })),
  },
  { label: "Schedule", href: "/schedule" },
  { label: "Teachers", href: "/teachers" },
  {
    label: "Media",
    href: "/gallery",
    children: [
      { label: "Gallery", href: "/gallery" },
      { label: "Videos", href: "/videos" },
    ],
  },
  { label: "Food Menu", href: "/food-menu" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
];

export const whyHref = "/why-yogmantra-bali";
export const galleryHref = "/gallery";
export const blogHref = "/blog";

export const testimonials = [
  {
    name: "Alexia Theofanidou",
    quote:
      "Such a beautiful and peaceful place. The Balinese architecture, the natural water pool and the green paradise made it a home I loved coming back to after my yoga lessons.",
  },
  {
    name: "Lu Nguyen",
    quote:
      "Great hospitality. Anthony really goes out of his way to make you feel welcome and comfortable.",
  },
  {
    name: "Colette Murphy",
    quote:
      "Lovely guy, great to deal with. Mr Anthony guides you with taxis, scooter hire and excursions. Great property too, rooms cleaned every day.",
  },
];

export const videos = {
  tour: "https://player.vimeo.com/video/496612822?muted=1&autoplay=1&loop=1&background=1",
  testimonial: "https://player.vimeo.com/video/593703908?h=c88c9a6747",
  opening: "https://player.vimeo.com/video/448447572",
};

export const reasons = [
  "Yoga Alliance certified teachers",
  "Max 14 students per asana class",
  "10 hours of classes daily, 20% more than most TTCs",
  "Air conditioned yogashala with a scenic sea view",
  "Teachers & management from Rishikesh, India",
  "Partnered with the Indonesian Government & Indian Consulate",
  "Serene, spiritual learning environment",
  "Authentic, traditional yoga school",
];
