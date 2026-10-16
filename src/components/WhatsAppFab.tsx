import { WhatsAppIcon } from "@/components/BrandIcons";
import { contact } from "@/data/site";

export default function WhatsAppFab() {
  return (
    <a
      href={contact.whatsapp}
      aria-label="Chat on WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-[#25d366] text-white shadow-lg shadow-black/20 transition hover:scale-105"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
