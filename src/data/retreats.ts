import type { ScheduleRow } from "@/data/courses";

export type Retreat = {
  slug: string;
  days: number;
  price: string;
  title: string;
  tagline: string;
  heroImage: string;
  itinerary: string[][];
};

const DAY = {
  holyWater: ["Holy Water Temple", "Water purification with guide"],
  ulunDanu: ["Ulun Danu Temple", "Banyumala Twin Waterfall"],
  blueLagoon: ["Virgin Beach / Blue Lagoon", "White sand beach"],
  sangeh: ["Sangeh Monkey Forest", "Taman Mumbul Temple"],
  rice: ["Tegalalang Rice Terrace", "Blangsinga Waterfall"],
  kawi: ["Gunung Kawi Temple", "Tibumana Waterfall"],
  elephant: ["Elephant Cave Temple", "Tibumana Waterfall"],
  kintamani: ["Kintamani Active Volcano", "Spice & Coffee Plantation", "Gunung Kawi Temple"],
  kehen: ["Kehen Temple", "Penglipuran Traditional Village"],
  dance: ["Barong & Keris Dance", "Batuan Temple", "Sukawati Market"],
  ubud: ["Campuhan Ridge Walk", "Saraswati Temple", "Ubud Monkey Forest", "Ubud Palace & Market"],
  tanahLot: ["Tanah Lot Temple", "Taman Ayun Temple"],
};

export const retreatList: Retreat[] = [
  {
    slug: "3-day",
    days: 3,
    price: "$350",
    title: "3 Day Yoga Retreat in Bali",
    tagline: "A short reset with yoga, temples, waterfalls and daily massage.",
    heroImage: "/images/gallery/yoga-retreat/IMG_20190311_095641.jpg",
    itinerary: [DAY.holyWater, DAY.ulunDanu, DAY.blueLagoon],
  },
  {
    slug: "6-day",
    days: 6,
    price: "$650",
    title: "6 Day Yoga Retreat in Bali",
    tagline: "A week of yoga, rice terraces, forests and waterfalls.",
    heroImage: "/images/gallery/yoga-retreat/2.jpg",
    itinerary: [DAY.holyWater, DAY.ulunDanu, DAY.sangeh, DAY.rice, DAY.kawi, DAY.blueLagoon],
  },
  {
    slug: "8-day",
    days: 8,
    price: "$850",
    title: "8 Day Yoga Retreat in Bali",
    tagline: "Yoga, an active volcano, coffee plantations and sacred temples.",
    heroImage: "/images/gallery/yoga-retreat/13.jpg",
    itinerary: [DAY.holyWater, DAY.ulunDanu, DAY.elephant, DAY.rice, DAY.kawi, DAY.sangeh, DAY.kintamani, DAY.blueLagoon],
  },
  {
    slug: "12-day",
    days: 12,
    price: "$1,250",
    title: "12 Day Yoga Retreat in Bali",
    tagline: "The complete Bali journey: detox, yoga, culture and Ubud.",
    heroImage: "/images/gallery/pool-with-sea-view/20210102_112033.jpg",
    itinerary: [DAY.holyWater, DAY.ulunDanu, DAY.elephant, DAY.rice, DAY.kawi, DAY.sangeh, DAY.kintamani, DAY.kehen, DAY.dance, DAY.ubud, DAY.tanahLot, DAY.blueLagoon],
  },
];

export const getRetreat = (slug: string) => retreatList.find((r) => r.slug === slug);

export const inclusions = [
  "Daily yoga",
  "Daily excursions",
  "Airport transfer (one way)",
  "Deluxe private accommodation",
  "Free 1 hour body massage every day",
  "Vegetarian breakfast & dinner",
];

export const exclusions = ["Private expenses", "Activity admission tickets", "Entry tickets during excursions"];

export const retreatHighlights = [
  "Arrive any date in your chosen month",
  "Reschedule your days as you like",
  "Daily meditation & asana",
  "Flexible yoga schedule",
  "Plan tours your own way",
  "Find inner peace & slow down",
];

export const retreatSchedule: ScheduleRow[] = [
  ["07:00", "Detoxification / Pranayama"],
  ["08:00", "Breakfast"],
  ["10:00", "Excursions until 5 PM"],
  ["18:00", "Meditation"],
  ["19:00", "Dinner"],
  ["20:00", "Body Massage"],
  ["22:00", "Lights off"],
];
