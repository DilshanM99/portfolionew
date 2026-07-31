"use client";

import { useRef, useState } from "react";
import { GitFork, Link2, X, Palette, Mail, MapPin, Send, Loader2 } from "lucide-react";
import { useGSAPReveal } from "@/lib/useGSAPReveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const socials = [
  { label: "GitHub", href: "https://github.com", Icon: GitFork },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: Link2 },
  { label: "Twitter / X", href: "https://twitter.com", Icon: X },
  { label: "Dribbble", href: "https://dribbble.com", Icon: Palette },
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useGSAPReveal(sectionRef, { selector: ".reveal-item", stagger: 0.1 });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate async send (UI-only)
    await new Promise((r) => setTimeout(r, 1800));
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
      aria-label="Contact section"
    >
      <div className="absolute inset-0 bg-grid-sm pointer-events-none opacity-40" aria-hidden="true" />
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="reveal-item text-xs font-semibold tracking-[0.2em] uppercase text-white/45 mb-4">
            07 — Contact
          </p>
          <h2 className="reveal-item text-4xl sm:text-5xl font-bold text-gradient mb-4">
            Let&apos;s build something sharp.
          </h2>
          <p className="reveal-item text-white/55 text-base max-w-md mx-auto">
            Got a project in mind, a role to fill, or just want to say hi?
            I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Contact form — 3 cols */}
          <div className="reveal-item lg:col-span-3 glass gradient-border rounded-3xl p-7">
            <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-medium text-white/60 mb-2">
                    Full Name
                  </label>
                  <Input
                    id="contact-name"
                    type="text"
                    placeholder="John Doe"
                    required
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className="bg-white/4 border-white/8 text-white placeholder:text-white/25 focus:border-white/20 focus:ring-white/10 rounded-xl"
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-medium text-white/60 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="john@company.com"
                    required
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className="bg-white/4 border-white/8 text-white placeholder:text-white/25 focus:border-white/20 focus:ring-white/10 rounded-xl"
                    aria-required="true"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="contact-message" className="block text-xs font-medium text-white/60 mb-2">
                  Message
                </label>
                <Textarea
                  id="contact-message"
                  placeholder="Tell me about your project, timeline, and what you're looking to achieve..."
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="bg-white/4 border-white/8 text-white placeholder:text-white/25 focus:border-white/20 focus:ring-white/10 rounded-xl resize-none"
                  aria-required="true"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="btn-glossy glass w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-semibold text-white border border-white/12 hover:border-white/22 hover:bg-white/8 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                aria-live="polite"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={17} className="animate-spin" aria-hidden="true" />
                    Sending…
                  </>
                ) : status === "success" ? (
                  <>
                    <span aria-hidden="true">✓</span>
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={17} aria-hidden="true" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact info — 2 cols */}
          <div className="reveal-item lg:col-span-2 flex flex-col gap-5">
            {/* Info card */}
            <div className="glass gradient-border rounded-3xl p-6 flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <div className="glass w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail size={16} className="text-white/50" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-white/50 font-medium mb-0.5">Email</p>
                  <a
                    href="mailto:alex@alexmercer.dev"
                    className="text-sm text-white/75 hover:text-white transition-colors duration-200 font-medium"
                  >
                    alex@alexmercer.dev
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="glass w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-white/50" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-white/50 font-medium mb-0.5">Location</p>
                  <p className="text-sm text-white/75 font-medium">
                    San Francisco, CA (Remote OK)
                  </p>
                </div>
              </div>

              <div className="border-t border-white/6 pt-4">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot flex-shrink-0"
                    aria-hidden="true"
                  />
                  <p className="text-xs text-white/55 font-medium">
                    Available for freelance & full-time
                  </p>
                </div>
                <p className="text-xs text-white/45 leading-relaxed">
                  Typical response time: within 24 hours
                </p>
              </div>
            </div>

            {/* Social links */}
            <div className="glass gradient-border rounded-3xl p-5">
              <p className="text-xs font-semibold tracking-widest uppercase text-white/45 mb-4">
                Find me on
              </p>
              <div className="grid grid-cols-2 gap-3">
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Alex Mercer on ${label}`}
                    className="flex items-center gap-2.5 px-3.5 py-3 glass rounded-xl text-sm font-medium text-white/50 hover:text-white border border-white/6 hover:border-white/14 hover:bg-white/6 transition-all duration-300 group"
                  >
                    <Icon size={16} className="group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
