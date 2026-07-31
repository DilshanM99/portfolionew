"use client";

import { useRef } from "react";
import { useGSAPReveal } from "@/lib/useGSAPReveal";
import { techStack } from "@/lib/data";
import gsap from "gsap";
import Image from "next/image";

export default function TechStackSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useGSAPReveal(sectionRef, { selector: ".reveal-item", stagger: 0.06 });

  const handleEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      y: -6,
      scale: 1.08,
      duration: 0.3,
      ease: "power2.out",
    });
  };
  const handleLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      y: 0,
      scale: 1,
      duration: 0.35,
      ease: "power2.inOut",
    });
  };

  return (
    <section
      id="tech-stack"
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
      aria-label="Tech stack section"
    >
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-30" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <p className="reveal-item text-xs font-semibold tracking-[0.2em] uppercase text-foreground/45 mb-4">
            02 — Skills
          </p>
          <h2 className="reveal-item text-4xl sm:text-5xl font-bold text-gradient mb-4">
            Tools I reach for.
          </h2>
          <p className="reveal-item text-foreground/60 text-base max-w-md mx-auto">
            A curated set of technologies I trust to build fast, beautiful, and reliable software.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
              title={`${tech.name} — ${tech.category}`}
              className="reveal-item glass gradient-border rounded-2xl p-4 flex flex-col items-center gap-2.5 cursor-default group"
            >
              <div className="w-12 h-12 btn-glossy rounded-xl flex items-center justify-center group-hover:bg-white transition-all duration-300">
                <div className="relative w-6 h-6">
                  <Image
                    src={tech.icon}
                    alt={`${tech.name} logo`}
                    fill
                    className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
              <div className="text-center">
                <p className="text-xs font-bold text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                  {tech.name}
                </p>
                <p className="text-[10px] text-foreground/45 mt-0.5 font-bold">{tech.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
