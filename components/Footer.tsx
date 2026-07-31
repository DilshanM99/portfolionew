"use client";

import { useRef, useState } from "react";
import { X, Palette, Mail, MapPin, Send, Loader2, ArrowUp, Phone } from "lucide-react";
import { useGSAPReveal } from "@/lib/useGSAPReveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface CustomIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const GithubIcon = ({ size = 24, ...props }: CustomIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const LinkedinIcon = ({ size = 24, ...props }: CustomIconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const socials = [
  { label: "GitHub", href: "https://github.com/DilshanM99", Icon: GithubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/dilshan-madhuranga-423642245/", Icon: LinkedinIcon },
];

const contactInfo = [
  {
    Icon: Mail,
    label: "Email",
    value: "dilshan1999madura@gmail.com",
    href: "mailto:dilshan1999madura@gmail.com",
  },
  {
    Icon: Phone,
    label: "Phone",
    value: "+94 77 999 2759",
    href: "tel:+94779992759",
  },
  {
    Icon: MapPin,
    label: "Location",
    value: "Nugegoda, Sri Lanka",
    href: null,
  },
];

// Glass card style for light mode
const cardStyle = {
  background: "rgba(255, 255, 255, 0.72)",
  backdropFilter: "blur(28px) saturate(150%)",
  border: "1px solid rgba(0, 0, 0, 0.08)",
  boxShadow:
    "inset 0 1px 0 rgba(255, 255, 255, 0.8), 0 8px 32px rgba(0, 0, 0, 0.05)",
};

export default function Footer() {
  const sectionRef = useRef<HTMLElement>(null);
  useGSAPReveal(sectionRef, { selector: ".reveal-item", stagger: 0.09 });

  const [form, setForm] = useState({ name: "", email: "", message: "", honeypot: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to dispatch message.");
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "", honeypot: "" });
    } catch (err: any) {
      setStatus("error");
      setStatusMessage(err.message || "Failed to send message.");
      console.error(err);
    }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer ref={sectionRef} className="relative overflow-hidden" role="contentinfo">

      {/* ══════════════════════════════════════
          CONTACT SECTION
      ══════════════════════════════════════ */}
      <section id="contact" aria-label="Contact section" className="relative py-24">
        <div className="absolute inset-0 bg-grid-sm pointer-events-none opacity-40" aria-hidden="true" />
        <div className="absolute inset-0 bg-radial-glow pointer-events-none" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl px-6">
          {/* Heading */}
          <div className="text-center mb-14">
            <p className="reveal-item text-xs font-semibold tracking-[0.2em] uppercase text-foreground/45 mb-4">
              06 — Contact
            </p>
            <h2 className="reveal-item text-4xl sm:text-5xl font-bold text-gradient mb-4">
              Let&apos;s build something sharp.
            </h2>
            <p className="reveal-item text-foreground/60 text-base max-w-md mx-auto">
              Got a project in mind, a role to fill, or just want to say hi?
              I&apos;d love to hear from you.
            </p>
          </div>

          {/* Two-column layout */}
          <div className="grid lg:grid-cols-5 gap-6 items-stretch">

            {/* ── LEFT: Contact form (3 cols) ── */}
            <div
              className="reveal-item lg:col-span-3 rounded-3xl p-7 flex flex-col"
              style={cardStyle}
            >
              <form onSubmit={handleSubmit} noValidate aria-label="Contact form" className="flex flex-col flex-1">
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold text-foreground/70 mb-2">
                      Full Name
                    </label>
                    <Input
                      id="contact-name"
                      type="text"
                      placeholder="John Doe"
                      required
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      className="bg-black/5 border-black/10 text-foreground placeholder:text-foreground/40 focus:border-black/25 rounded-xl font-medium"
                      aria-required="true"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold text-foreground/70 mb-2">
                      Email Address
                    </label>
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="john@company.com"
                      required
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      className="bg-black/5 border-black/10 text-foreground placeholder:text-foreground/40 focus:border-black/25 rounded-xl font-medium"
                      aria-required="true"
                    />
                  </div>
                </div>

                <div className="mb-6 flex-1 flex flex-col">
                  <label htmlFor="contact-message" className="block text-xs font-bold text-foreground/70 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="contact-message"
                    placeholder="Tell me about your project, timeline, and what you're looking to achieve..."
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="bg-black/5 border-black/10 text-foreground placeholder:text-foreground/40 focus:border-black/25 rounded-xl resize-none flex-1 font-medium"
                    aria-required="true"
                  />
                </div>

                {/* Honeypot field (hidden for anti-spam bots check) */}
                <div className="absolute opacity-0 pointer-events-none w-0 h-0 overflow-hidden" aria-hidden="true">
                  <label htmlFor="contact-honeypot">Leave this field empty</label>
                  <input
                    id="contact-honeypot"
                    type="text"
                    tabIndex={-1}
                    value={form.honeypot}
                    onChange={(e) => setForm((f) => ({ ...f, honeypot: e.target.value }))}
                    autoComplete="off"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="btn-glossy w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-bold transition-all duration-300 hover:scale-[1.015] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer"
                  aria-live="polite"
                >
                  {status === "loading" ? (
                    <><Loader2 size={17} className="animate-spin" aria-hidden="true" />Sending…</>
                  ) : status === "success" ? (
                    <><span aria-hidden="true">✓</span>Message Sent!</>
                  ) : status === "error" ? (
                    <><span className="text-red-500 mr-1" aria-hidden="true">✗</span>{statusMessage || "Error Sending"}</>
                  ) : (
                    <><Send size={17} aria-hidden="true" />Send Message</>
                  )}
                </button>
              </form>
            </div>

            {/* ── RIGHT: Contact info (2 cols) ── */}
            <div
              className="reveal-item lg:col-span-2 rounded-3xl p-6 flex flex-col gap-0"
              style={cardStyle}
            >
              {/* Availability badge */}
              <div className="flex items-center gap-2.5 mb-6 pb-5 border-b border-black/5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 pulse-dot flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-sm font-bold text-foreground/85">Available for work</p>
                  <p className="text-xs text-foreground/50 font-semibold">Freelance &amp; full-time · Response within 24h</p>
                </div>
              </div>

              {/* Contact info rows */}
              <div className="flex flex-col gap-4 mb-6">
                {contactInfo.map(({ Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3.5">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: "rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.08)" }}
                    >
                      <Icon size={15} className="text-foreground/75" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs text-foreground/45 font-bold mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-sm text-foreground/85 hover:text-foreground transition-colors duration-200 font-bold">
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm text-foreground/85 font-bold">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-black/5 mb-5" />

              {/* Social links */}
              <p className="text-xs font-bold tracking-[0.18em] uppercase text-foreground/40 mb-3">
                Find me on
              </p>
              <div className="grid grid-cols-2 gap-2.5 flex-1">
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Dilshan Madhuranga on ${label}`}
                    className="btn-glossy flex items-center gap-2.5 px-3.5 py-3 rounded-xl text-sm font-bold transition-all duration-300 group"
                  >
                    <Icon size={15} className="group-hover:scale-110 transition-transform duration-300 flex-shrink-0 text-foreground/75" aria-hidden="true" />
                    <span className="truncate">{label}</span>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Bottom bar ── */}
      <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }} className="py-5">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="btn-glossy w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold flex-shrink-0">
              DM
            </div>
            <p className="text-xs text-foreground/45 font-bold">
              © {new Date().getFullYear()} Dilshan Madhuranga · Software Engineer &amp; Web Development Team Lead
            </p>
          </div>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="btn-glossy w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 flex-shrink-0"
          >
            <ArrowUp size={15} className="text-foreground/75" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
