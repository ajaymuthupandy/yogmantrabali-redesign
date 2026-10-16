"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Clock, Mail, Menu, Phone, X } from "lucide-react";
import { bookHref, contact, nav, type NavItem } from "@/data/site";

const isActive = (item: NavItem, path: string) =>
  path === item.href || path.startsWith(item.href + "/") || !!item.children?.some((c) => path === c.href);

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    // The drawer is mobile-only; close it if the viewport grows to desktop so scrolling isn't left locked.
    const desktop = window.matchMedia("(min-width: 64rem)");
    const onResize = () => desktop.matches && setOpen(false);
    document.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_1px_0_rgba(0,0,0,0.06)] lg:static lg:shadow-none">
      <div className="container-x flex items-center justify-between gap-6 py-3 lg:py-4">
        <Link href="/" aria-label="Yogmantra Bali home" className="shrink-0">
          <Image src="/images/logo.png" alt="Yogmantra Bali" width={280} height={60} preload className="h-10 w-auto lg:h-12" />
        </Link>

        <div className="hidden items-center divide-x divide-black/10 text-sm lg:flex">
          <a href={contact.phoneHref} className="flex items-center gap-3 pr-6 hover:text-orange">
            <Phone className="size-5 text-sage" />
            <span className="leading-tight">
              <span className="block text-xs text-muted">Phone / WhatsApp</span>
              {contact.phone}
            </span>
          </a>
          <a href={`mailto:${contact.email}`} className="flex items-center gap-3 px-6 hover:text-orange">
            <Mail className="size-5 text-sage" />
            <span className="leading-tight">
              <span className="block text-xs text-muted">Email</span>
              {contact.email}
            </span>
          </a>
          <span className="flex items-center gap-3 pl-6">
            <Clock className="size-5 text-sage" />
            <span className="leading-tight">
              <span className="block text-xs text-muted">Open</span>
              24/7
            </span>
          </span>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="grid size-11 place-items-center rounded-full bg-orange text-white lg:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <Menu className="size-5" />
        </button>
      </div>

      {/* Desktop nav bar, kept from the original orange theme bar */}
      <div className="relative z-20 hidden lg:block">
        <div className="container-x">
          <nav className="-mb-6 flex items-center justify-between rounded-md bg-orange pl-2 text-white shadow-lg shadow-orange/25">
            <ul className="flex items-center">
              {nav.map((item) => (
                <li key={item.label} className="group relative">
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 whitespace-nowrap px-3 py-4 text-[13px] uppercase tracking-wide hover:bg-white/15 xl:px-3.5 ${isActive(item, path) ? "bg-white/15" : ""}`}
                  >
                    {item.label}
                    {item.children && <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180" />}
                  </Link>
                  {item.children && (
                    <ul className="invisible absolute left-0 top-full min-w-64 translate-y-1 rounded-md bg-white py-2 text-ink opacity-0 shadow-xl transition group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      {item.children.map((c) => (
                        <li key={c.label}>
                          <Link href={c.href} className={`block px-5 py-2 text-sm hover:bg-mist hover:text-sage-dark ${path === c.href ? "text-orange" : ""}`}>
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <Link href={bookHref} className="m-1.5 shrink-0 whitespace-nowrap rounded bg-sage px-5 py-2.5 text-sm font-bold uppercase tracking-wide hover:bg-sage-dark">
              Book Now
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile drawer */}
      {/* inert keeps the hidden drawer's links out of the tab order and screen readers. */}
      <div className={`fixed inset-0 z-50 lg:hidden ${open ? "" : "pointer-events-none"}`} inert={!open}>
        <div onClick={close} className={`absolute inset-0 bg-black/40 transition-opacity ${open ? "opacity-100" : "opacity-0"}`} />
        <aside
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className={`absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-white transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between bg-orange px-4 py-3 text-white">
            <span className="font-heading text-2xl">Menu</span>
            <button type="button" onClick={close} aria-label="Close menu" className="grid size-10 place-items-center">
              <X className="size-6" />
            </button>
          </div>
          <ul className="flex-1 overflow-y-auto py-2">
            {nav.map((item) => (
              <li key={item.label} className="border-b border-black/5">
                <div className="flex items-center">
                  <Link href={item.href} onClick={close} className={`flex-1 px-5 py-3.5 uppercase tracking-wide ${isActive(item, path) ? "text-orange" : ""}`}>
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      type="button"
                      aria-label={`Toggle ${item.label}`}
                      aria-expanded={expanded === item.label}
                      onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                      className="grid size-12 place-items-center text-sage-dark"
                    >
                      <ChevronDown className={`size-5 transition-transform ${expanded === item.label ? "rotate-180" : ""}`} />
                    </button>
                  )}
                </div>
                {item.children && expanded === item.label && (
                  <ul className="bg-mist pb-2">
                    {item.children.map((c) => (
                      <li key={c.label}>
                        <Link href={c.href} onClick={close} className={`block px-8 py-2.5 text-sm ${path === c.href ? "text-orange" : "text-muted"}`}>
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="space-y-2 border-t border-black/5 p-4 text-sm">
            <a href={contact.phoneHref} className="flex items-center gap-2"><Phone className="size-4 text-sage" />{contact.phone}</a>
            <a href={`mailto:${contact.email}`} className="flex items-center gap-2"><Mail className="size-4 text-sage" />{contact.email}</a>
            <Link href={bookHref} onClick={close} className="mt-2 block rounded bg-sage py-3 text-center font-bold uppercase text-white">Book Now</Link>
          </div>
        </aside>
      </div>
    </header>
  );
}
