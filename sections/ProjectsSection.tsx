"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { GitFork, ExternalLink } from "lucide-react";
import gsap from "gsap";
import { useGSAPReveal } from "@/lib/useGSAPReveal";
import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useGSAPReveal(sectionRef, { selector: ".reveal-item", stagger: 0.1 });

  const handleCardEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const img = card.querySelector(".project-img");
    const overlay = card.querySelector(".project-overlay");

    gsap.to(card, { y: -8, duration: 0.4, ease: "power2.out" });
    gsap.to(img, { scale: 1.06, duration: 0.6, ease: "power2.out" });
    gsap.to(overlay, { opacity: 1, duration: 0.35, ease: "power2.out" });
  };

  const handleCardLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const img = card.querySelector(".project-img");
    const overlay = card.querySelector(".project-overlay");

    gsap.to(card, { y: 0, duration: 0.45, ease: "power2.inOut" });
    gsap.to(img, { scale: 1, duration: 0.5, ease: "power2.inOut" });
    gsap.to(overlay, { opacity: 0, duration: 0.3, ease: "power2.in" });
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
      aria-label="Projects section"
    >
      <div className="absolute inset-0 bg-grid-sm pointer-events-none opacity-40" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-14">
          <p className="reveal-item text-xs font-semibold tracking-[0.2em] uppercase text-foreground/45 mb-4">
            04 — Projects
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="reveal-item text-4xl sm:text-5xl font-bold text-gradient">
              Selected work.
            </h2>
            <p className="reveal-item text-foreground/60 text-sm max-w-sm">
              A curated set of projects spanning SaaS, e-commerce, mobile, and
              creative digital experiences.
            </p>
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={handleCardEnter}
              onMouseLeave={handleCardLeave}
              className="reveal-item glass gradient-border rounded-3xl overflow-hidden flex flex-col cursor-pointer group"
            >
              {/* Image Container */}
              <div className="relative h-52 overflow-hidden bg-black/5">
                <Image
                  src={project.image || `https://picsum.photos/seed/${project.id}/640/416`}
                  alt={`${project.title} screenshot`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="project-img object-cover"
                  quality={85}
                />
                {/* Darker translucent overlay for high contrast in light mode */}
                <div
                  className="project-overlay absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition-opacity duration-300"
                  style={{
                    background: "rgba(10, 10, 15, 0.72)",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  <Link
                    href={project.github}
                    aria-label={`${project.title} GitHub`}
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-white hover:bg-white/10 transition-colors duration-200 border border-white/20 bg-white/5"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <GitFork size={19} />
                  </Link>
                  <Link
                    href={project.live}
                    aria-label={`${project.title} live demo`}
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-white hover:bg-white/10 transition-colors duration-200 border border-white/20 bg-white/5"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={19} />
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5 gap-3">
                <h3 className="text-base font-bold text-foreground/90 group-hover:text-foreground transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-xs text-foreground/75 border-black/10 bg-black/5 hover:bg-black/8 transition-colors duration-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Footer links */}
                <div className="flex gap-3 pt-2 border-t border-black/5">
                  <Link
                    href={project.github}
                    aria-label={`${project.title} source code on GitHub`}
                    className="flex items-center gap-1.5 text-xs text-foreground/50 hover:text-foreground/80 transition-colors duration-200"
                  >
                    <GitFork size={13} />
                    Source
                  </Link>
                  <Link
                    href={project.live}
                    aria-label={`${project.title} live demo`}
                    className="flex items-center gap-1.5 text-xs text-foreground/50 hover:text-foreground/80 transition-colors duration-200"
                  >
                    <ExternalLink size={13} />
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
