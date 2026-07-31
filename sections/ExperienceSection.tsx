"use client";

import { useRef } from "react";
import { Calendar } from "lucide-react";
import { useGSAPReveal } from "@/lib/useGSAPReveal";
import { experiences } from "@/lib/data";

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useGSAPReveal(sectionRef, { selector: ".reveal-item", stagger: 0.15 });

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
      aria-label="Experience section"
    >
      <div className="absolute inset-0 bg-grid-sm pointer-events-none opacity-40" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="reveal-item text-xs font-semibold tracking-[0.2em] uppercase text-foreground/45 mb-4">
            03 — Experience
          </p>
          <h2 className="reveal-item text-4xl sm:text-5xl font-bold text-gradient">
            Where I&apos;ve built things.
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative timeline-line">
          <div className="flex flex-col gap-0">
            {experiences.map((exp, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={exp.company}
                  className={`reveal-item relative flex gap-8 pb-14 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col`}
                >
                  {/* Half-width spacer on desktop */}
                  <div className="hidden md:block flex-1" aria-hidden="true" />

                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full border-2 border-black/25 bg-white z-10 shadow-sm" aria-hidden="true" />

                  {/* Mobile dot */}
                  <div className="md:hidden absolute left-[12px] top-6 w-3 h-3 rounded-full border-2 border-black/25 bg-white z-10 shadow-sm" aria-hidden="true" />

                  {/* Card */}
                  <div className="flex-1 ml-10 md:ml-0">
                    <div className="glass glass-hover gradient-border rounded-3xl p-6 transition-all duration-300 cursor-default">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                        <div>
                          <h3 className="text-base font-bold text-foreground/95">
                            {exp.role}
                          </h3>
                          <p className="text-sm font-bold text-foreground/60 mt-0.5">
                            {exp.company}
                          </p>
                        </div>
                        <span className="btn-glossy px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap flex-shrink-0">
                          {exp.period}
                        </span>
                      </div>



                      {/* Bullets */}
                      <ul className="space-y-2" role="list">
                        {exp.description.map((point, j) => (
                          <li
                            key={j}
                            className="flex gap-3 text-sm text-foreground/75 leading-relaxed font-medium"
                          >
                            <span className="text-foreground/45 mt-1 flex-shrink-0">▸</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
