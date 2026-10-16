import Image from "next/image";
import { Clock, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/BrandIcons";
import { Button } from "@/components/ui/Buttons";
import SectionTitle from "@/components/ui/SectionTitle";
import { contact } from "@/data/site";

const directions = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent("Yogmantra Bali, Medahan, Blahbatuh, Gianyar, Bali")}`;

const socials = [
  { href: contact.whatsapp, label: "WhatsApp", Icon: WhatsAppIcon },
  { href: contact.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: contact.facebook, label: "Facebook", Icon: FacebookIcon },
];

function Card({ icon: Icon, title, children, className = "" }: { icon: typeof Phone; title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm ${className}`}>
      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-orange text-white">
        <Icon className="size-5" />
      </span>
      <div className="min-w-0">
        <p className="text-sm font-bold text-muted">{title}</p>
        <div className="break-words text-ink">{children}</div>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="section-y bg-peach-light">
      <div className="container-x">
        <SectionTitle>Contact Us</SectionTitle>
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="flex flex-col gap-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <Card icon={Phone} title="Call / WhatsApp">
                <a href={contact.phoneHref} className="hover:text-orange">{contact.phone}</a>
              </Card>
              <Card icon={Mail} title="Email">
                {/* If the card is too narrow, break after the @ rather than mid-word. */}
                <a href={`mailto:${contact.email}`} className="hover:text-orange">{contact.email.replace(/@.*/, "@")}<wbr />{contact.email.replace(/.*@/, "")}</a>
              </Card>
              <Card icon={Clock} title="Opening hours">
                {contact.hours}
              </Card>
              <div className="flex items-center justify-between gap-3 rounded-2xl bg-white p-4 shadow-sm">
                <p className="text-sm font-bold text-muted">Follow us</p>
                <div className="flex gap-2">
                  {socials.map(({ href, label, Icon }) => (
                    <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer" className="grid size-10 place-items-center rounded-full bg-peach-light text-ink transition hover:bg-orange hover:text-white">
                      <Icon className="size-5" />
                    </a>
                  ))}
                </div>
              </div>
              <Card icon={MapPin} title="Visit us" className="sm:col-span-2">
                <p>{contact.address}</p>
                <a href={directions} target="_blank" rel="noopener noreferrer" className="mt-1 inline-flex items-center gap-1.5 text-sm font-bold text-sage-dark hover:text-orange">
                  <Navigation className="size-4" /> Get directions
                </a>
              </Card>
            </div>
            <div className="flex flex-1 flex-wrap items-center justify-between gap-4 rounded-2xl bg-white p-4 shadow-sm">
              <Button href={contact.whatsapp} variant="orange">
                <WhatsAppIcon className="size-5" /> Chat on WhatsApp
              </Button>
              <a href={contact.yogaAlliance} target="_blank" rel="noopener noreferrer" aria-label="Yoga Alliance certified school">
                <Image src="/images/ya-logo.png" alt="Yoga Alliance Certified School" width={300} height={135} className="h-12 w-auto brightness-0 opacity-60" />
              </a>
            </div>
          </div>
          <iframe
            src={contact.mapEmbed}
            title="Yogmantra Bali location map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-80 w-full rounded-2xl border-0 shadow-sm lg:h-full lg:min-h-96"
          />
        </div>
      </div>
    </section>
  );
}
