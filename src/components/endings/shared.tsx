import { Mail } from "lucide-react";
import { WhatsAppIcon } from "@/components/BrandIcons";
import { contact } from "@/data/site";

/** Path to a photo in /images/gallery/<folder>/. */
export const photo = (folder: string, file: string) => `/images/gallery/${folder}/${file}`;

type Tone = "light" | "dark" | "orange" | "sage";

const whatsappTone: Record<Tone, string> = {
  light: "bg-white text-ink hover:bg-peach-light",
  dark: "bg-ink text-white hover:bg-black",
  orange: "bg-orange text-white hover:bg-coral",
  sage: "bg-sage text-white hover:bg-sage-dark",
};

const emailTone: Record<Tone, string> = {
  light: "border-white text-white hover:bg-white hover:text-ink",
  dark: "border-ink text-ink hover:bg-ink hover:text-white",
  orange: "border-orange text-orange hover:bg-orange hover:text-white",
  sage: "border-sage-dark text-sage-dark hover:bg-sage-dark hover:text-white",
};

/** WhatsApp + email pill pair used by the closing sections; `tone` picks colours for the background they sit on. */
export function ContactButtons({ whatsapp = contact.whatsapp, label = "WhatsApp Us", tone = "light", email = true, className = "" }: { whatsapp?: string; label?: string; tone?: Tone; email?: boolean; className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <a href={whatsapp} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 rounded-full px-6 py-3 font-bold transition ${whatsappTone[tone]}`}>
        <WhatsAppIcon className={`size-5 ${tone === "light" ? "text-[#25d366]" : ""}`} /> {label}
      </a>
      {email && (
        <a href={`mailto:${contact.email}`} className={`inline-flex items-center gap-2 rounded-full border-2 px-6 py-3 font-bold transition ${emailTone[tone]}`}>
          <Mail className="size-5" /> Email Us
        </a>
      )}
    </div>
  );
}
