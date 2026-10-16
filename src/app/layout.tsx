import type { Metadata } from "next";
import { Kaushan_Script, Shanti } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import FooterHeight from "@/components/FooterHeight";

const kaushan = Kaushan_Script({
  variable: "--font-kaushan",
  weight: "400",
  subsets: ["latin"],
});

const shanti = Shanti({
  variable: "--font-shanti",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yogmantrabali.com"),
  title: "Yogmantra Bali | Yoga Teacher Training Course and Retreats in Bali",
  description:
    "Yoga Alliance certified 100, 200 and 300 hour Yoga Teacher Training and yoga retreats in Bali, with a sea-view air-conditioned yogashala and teachers from Rishikesh.",
  icons: { icon: "/images/icon.png" },
  openGraph: {
    title: "Yogmantra Bali",
    description: "Yoga Teacher Training Course and Retreats in Bali",
    images: ["/images/hero.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // data-scroll-behavior lets Next jump (not smooth-scroll) to the top on route changes.
    <html lang="en" data-scroll-behavior="smooth" className={`${kaushan.variable} ${shanti.variable} antialiased`}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FooterHeight />
        <WhatsAppFab />
      </body>
    </html>
  );
}
