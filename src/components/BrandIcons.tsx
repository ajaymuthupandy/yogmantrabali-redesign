type Props = { className?: string };

export function InstagramIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8v3h2.6V21h2.9z" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.6-.3z" />
    </svg>
  );
}

const line = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" } as const;

export function LotusIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 32 32" {...line} className={className} aria-hidden>
      <path d="M16 7c2.6 2.4 3.8 5.4 3.8 8.6S18.4 21.8 16 24c-2.4-2.2-3.8-5.2-3.8-8.4S13.4 9.4 16 7z" />
      <path d="M12.4 12.2C9.6 11 6.8 11 5 11.6c.2 4.6 2.6 9.8 11 12.4" />
      <path d="M19.6 12.2c2.8-1.2 5.6-1.2 7.4-.6-.2 4.6-2.6 9.8-11 12.4" />
      <path d="M5 17c-1.4.4-2.4 1-3 1.6 2.4 3.4 7.4 5.4 14 5.4s11.6-2 14-5.4c-.6-.6-1.6-1.2-3-1.6" />
    </svg>
  );
}

export function MeditationIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 32 32" {...line} className={className} aria-hidden>
      <circle cx="16" cy="6" r="2.6" />
      <path d="M12.6 21.5c-.4-3.4-.3-7.6 1-9.6.6-.9 1.4-1.3 2.4-1.3s1.8.4 2.4 1.3c1.3 2 1.4 6.2 1 9.6" />
      <path d="M13.6 13.2 10 17.6l-2.4-.6M18.4 13.2l3.6 4.4 2.4-.6" />
      <path d="M5 25.4c2.6-2.6 6.4-4 11-4s8.4 1.4 11 4c-1.6 1.2-4 1.6-6.4 1.2L16 25.4l-4.6 1.2C9 27 6.6 26.6 5 25.4z" />
    </svg>
  );
}

export function SeaSunIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 32 32" {...line} className={className} aria-hidden>
      <path d="M9.5 18a6.5 6.5 0 0 1 13 0" />
      <path d="M16 6.5v2.5M7.6 9.6l1.8 1.8M24.4 9.6l-1.8 1.8M4 18h2.5M25.5 18H28" />
      <path d="M3 21.5c2.2 0 2.2-1.2 4.4-1.2s2.2 1.2 4.4 1.2 2.2-1.2 4.4-1.2 2.2 1.2 4.4 1.2 2.2-1.2 4.4-1.2 2.2 1.2 4 1.2" />
      <path d="M5 25.5c2 0 2-1.1 4-1.1s2 1.1 4 1.1 2-1.1 4-1.1 2 1.1 4 1.1 2-1.1 4-1.1 2 1.1 2 1.1" />
    </svg>
  );
}
