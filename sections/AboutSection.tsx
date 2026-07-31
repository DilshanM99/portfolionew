"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAPReveal, useCountUp } from "@/lib/useGSAPReveal";

const statsData = [
  { value: 3,  suffix: "+", label: "Years Experience" },
  { value: 30, suffix: "+", label: "Projects Delivered" },
  { value: 20, suffix: "+", label: "Frameworks & Tools" },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useGSAPReveal(sectionRef, { selector: ".reveal-item", stagger: 0.13 });
  useCountUp(sectionRef, { duration: 2.2 });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
      aria-label="About section"
    >
      <div className="absolute inset-0 bg-grid-sm pointer-events-none opacity-50" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section label */}
        <p className="reveal-item text-xs font-semibold tracking-[0.2em] uppercase text-foreground/45 mb-4">
          01 — About
        </p>

        {/* 12-column layout: Left (7 cols) stretched with Right (5 cols) */}
        <div className="grid lg:grid-cols-12 gap-12 xl:gap-16 items-stretch">
          
          {/* LEFT: Bio, Tags, and Stats Grid (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-8 justify-between">
            <div className="flex flex-col gap-6">
              <h2 className="reveal-item text-4xl sm:text-5xl font-bold leading-tight text-gradient">
                Engineering solutions,{" "}
                <span className="text-foreground/90">leading teams.</span>
              </h2>

              <div className="reveal-item space-y-4 text-foreground/70 text-base leading-relaxed">
                <p>
                  I&apos;m a Software Engineer and Web Development Team Lead with over 2 years of
                  experience designing and developing enterprise and customer-facing web applications.
                </p>
                <p>
                  I specialize in Angular, TypeScript, and full stack web development, with hands-on
                  expertise in microservices integration, reactive systems (including Angular Signals),
                  responsive UI design, and scalable architectures.
                </p>
                <p>
                  I enjoy translating complex business requirements into high-performance web products,
                  mentoring developers, and establishing robust testing and CI/CD pipelines.
                </p>
              </div>

              {/* Tags */}
              <div className="reveal-item flex flex-wrap gap-2 pt-2">
                {[
                  "Angular",
                  "React / Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Node.js",
                  "PostgreSQL",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="btn-glossy px-3.5 py-1.5 rounded-full text-xs font-bold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats Grid moved to bottom of Left Column */}
            <div className="reveal-item grid grid-cols-3 gap-4 pt-4 border-t border-black/5">
              {statsData.map((stat) => (
                <div
                  key={stat.label}
                  className="glass glass-hover rounded-3xl p-5 flex flex-col justify-center items-center text-center cursor-default transition-all duration-300"
                >
                  <p
                    className="text-3xl font-bold text-foreground mb-1.5 tabular-nums"
                    data-count={stat.value}
                    data-suffix={stat.suffix}
                    aria-label={`${stat.value}${stat.suffix} ${stat.label}`}
                  >
                    0{stat.suffix}
                  </p>
                  <p className="text-xs text-foreground/55 font-bold leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Portrait Image Only (5 cols) stretched to Left Column's height */}
          <div className="lg:col-span-5 h-full flex flex-col">
            <div className="reveal-item relative w-full h-80 sm:h-96 lg:h-full min-h-[450px] flex-grow">
              <div
                className="w-full h-full rounded-3xl gradient-border overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.72)",
                  backdropFilter: "blur(24px)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
                }}
              >
                <Image
                  src="/assets/portrait.png"
                  alt="Dilshan Madhuranga — Portrait"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top hover:scale-102 transition-transform duration-700"
                  quality={95}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
