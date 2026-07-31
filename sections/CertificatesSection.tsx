"use client";

import { useRef } from "react";
import { GraduationCap } from "lucide-react";
import { useGSAPReveal } from "@/lib/useGSAPReveal";
import { useGSAPCardHover } from "@/lib/useGSAPReveal";
import { certificates } from "@/lib/data";

export default function CertificatesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useGSAPReveal(sectionRef, { selector: ".reveal-item", stagger: 0.1 });
  const cardHover = useGSAPCardHover();

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
      aria-label="Education section"
    >
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-30" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-14">
          <p className="reveal-item text-xs font-semibold tracking-[0.2em] uppercase text-foreground/45 mb-4">
            05 — Education
          </p>
          <h2 className="reveal-item text-4xl sm:text-5xl font-bold text-gradient">
            Credentials &amp; learning.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              {...cardHover}
              className="reveal-item glass glass-hover gradient-border rounded-3xl p-6 flex flex-col gap-4 justify-between group cursor-default transition-all duration-300"
            >
              {/* Header: title & icon */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-base font-bold text-foreground/90 leading-snug mb-1 group-hover:text-foreground transition-colors duration-200">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-foreground/60 font-bold">{cert.issuer}</p>
                </div>
                <div className="btn-glossy w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={16} className="text-foreground/70" />
                </div>
              </div>

              {/* Date bottom */}
              <div className="border-t border-black/5 pt-3">
                <p className="text-xs text-foreground/45 font-bold">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
