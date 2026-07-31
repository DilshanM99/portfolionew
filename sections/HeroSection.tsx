"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowDown, Download, ExternalLink, Activity, ArrowRight, UserCheck } from "lucide-react";
import gsap from "gsap";

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

const socialLinks = [
  { label: "GitHub", href: "https://github.com/DilshanM99", Icon: GithubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/dilshan-madhuranga-423642245/", Icon: LinkedinIcon },
];

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const mockupContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ---- GSAP Timeline entrance animations ----
    const ctx = gsap.context(() => {
      // Floating ambient background orbs
      gsap.to(".hero-orb-1", {
        y: -36, x: 18,
        duration: 8, repeat: -1, yoyo: true, ease: "sine.inOut",
      });
      gsap.to(".hero-orb-2", {
        y: 24, x: -12,
        duration: 10, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1.2,
      });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(".hero-badge", { opacity: 0, y: 20, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 0.7 })
        .fromTo(".hero-headline", { opacity: 0, y: 44 }, { opacity: 1, y: 0, duration: 0.95 }, "-=0.3")
        .fromTo(".hero-sub", { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.85 }, "-=0.45")
        .fromTo(".hero-cta", { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.65, stagger: 0.1 }, "-=0.4")
        .fromTo(".hero-social", { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.07 }, "-=0.35")
        .fromTo(".hero-mockup-col", { opacity: 0, scale: 0.92 }, { opacity: 1, scale: 1, duration: 1.1 }, "-=1.1")
        .fromTo(".hero-scroll", { opacity: 0 }, { opacity: 1, duration: 0.6 }, "-=0.3");

      // ---- 3D Interactive Mockup Mouse Move Tilt ----
      const container = mockupContainerRef.current;
      if (container) {
        const layers = container.querySelectorAll(".mockup-layer");

        const handleMouseMove = (e: MouseEvent) => {
          const rect = container.getBoundingClientRect();
          const cx = rect.left + rect.width / 2;
          const cy = rect.top + rect.height / 2;
          const dx = (e.clientX - cx) / (rect.width / 2);
          const dy = (e.clientY - cy) / (rect.height / 2);

          // Tilt the main container slightly
          gsap.to(container, {
            rotateY: dx * 16,
            rotateX: -dy * 16,
            duration: 0.8,
            ease: "power2.out",
          });

          // Explode/pull-apart layers on Z axis based on mouse hover distance
          layers.forEach((layer, idx) => {
            const zDepth = (idx + 1) * 35; // Splay layers outward
            gsap.to(layer, {
              z: zDepth + (idx * 15), // Increase separation on move
              duration: 0.8,
              ease: "power2.out",
            });
          });
        };

        const handleMouseLeave = () => {
          // Reset main container rotation
          gsap.to(container, {
            rotateY: 28, // Pinned default 3D isometric look
            rotateX: 18,
            duration: 1.2,
            ease: "power3.out",
          });

          // Reset layers to standard stacked distances
          layers.forEach((layer, idx) => {
            const zDepth = (idx + 1) * 25;
            gsap.to(layer, {
              z: zDepth,
              duration: 1.2,
              ease: "power3.out",
            });
          });
        };

        // Initialize default isometric perspective positions
        gsap.set(container, { rotateY: 28, rotateX: 18 });
        layers.forEach((layer, idx) => {
          gsap.set(layer, { z: (idx + 1) * 25 });
        });

        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          container.removeEventListener("mousemove", handleMouseMove);
          container.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-grid"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" aria-hidden="true" />

      {/* Atmospheric backgrounds */}
      <div
        className="hero-orb-1 absolute top-[10%] right-[5%] w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,100,250,0.035) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
        aria-hidden="true"
      />
      <div
        className="hero-orb-2 absolute bottom-[15%] left-[3%] w-[320px] h-[320px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,120,255,0.025) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* LEFT — Title & Description */}
          <div>
            <div className="hero-badge inline-flex items-center gap-2.5 btn-glossy px-4 py-2 rounded-full mb-8">
              <span
                className="w-2.5 h-2.5 rounded-full bg-emerald-500 pulse-dot flex-shrink-0"
                aria-hidden="true"
              />
              <span className="text-sm text-foreground/80 font-bold">
                Available for new opportunities
              </span>
            </div>

            <h1 className="hero-headline text-5xl sm:text-6xl xl:text-7xl font-bold leading-[1.06] tracking-tight mb-6">
              <span className="text-gradient block">Crafting Digital</span>
              <span className="text-gradient block">Experiences</span>
              <span className="text-foreground/90 block">That Inspire.</span>
            </h1>

            <p className="hero-sub text-lg sm:text-xl text-foreground/60 max-w-xl leading-relaxed mb-10">
              I&apos;m{" "}
              <span className="text-foreground/85 font-bold">Dilshan Madhuranga</span>, a
              Software Engineer &amp; Web Development Team Lead with over 2 years building
              enterprise, high-performance web applications and scalable system architectures.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={() => scrollToSection("#projects")}
                className="hero-cta btn-glossy inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold transition-all duration-300 hover:scale-[1.04] active:scale-[0.97] group"
              >
                <ExternalLink size={17} className="group-hover:rotate-6 transition-transform duration-300 text-foreground/75" />
                View Work
              </button>
              <a
                href="/resume.pdf"
                download
                className="hero-cta btn-glossy inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold transition-all duration-300 hover:scale-[1.04] active:scale-[0.97] group"
              >
                <Download size={17} className="group-hover:translate-y-0.5 transition-transform duration-300 text-foreground/75" />
                Download CV
              </a>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-xs text-foreground/45 uppercase tracking-widest font-bold mr-1">
                Find me on
              </span>
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="hero-social btn-glossy w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"
                >
                  <Icon size={17} className="text-foreground/70" />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT — Premium 3D Interactive UX Mockup Layers */}
          <div className="hero-mockup-col flex justify-center lg:justify-end w-full" style={{ perspective: "1200px" }}>
            <div
              ref={mockupContainerRef}
              className="relative w-full h-[320px] sm:h-[400px] lg:h-[460px] max-w-[420px] transition-all duration-150 ease-out cursor-grab active:cursor-grabbing"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* LAYER 1: Information Flow Wireframe (Bottom layer - z-depth 25) */}
              <div
                className="mockup-layer absolute inset-0 rounded-[2.5rem] p-6 flex flex-col justify-between border border-black/5"
                style={{
                  background: "rgba(255, 255, 255, 0.22)",
                  backdropFilter: "blur(8px)",
                  transform: "translateZ(25px)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.02)",
                }}
              >
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-foreground/35 font-bold mb-2">01. Wireframe Flow</p>
                  <div className="flex gap-2 mb-4">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
                  </div>
                </div>

                {/* Simulated blueprint graph */}
                <div className="flex-1 flex items-center justify-center relative">
                  <div className="absolute w-2/3 h-px bg-dashed bg-foreground/15 flex justify-between items-center">
                    <div className="w-7 h-7 rounded-lg border border-black/10 bg-white flex items-center justify-center text-[10px] font-bold text-foreground/60 shadow-sm">U</div>
                    <div className="w-7 h-7 rounded-lg border border-black/10 bg-white flex items-center justify-center text-[10px] font-bold text-foreground/60 shadow-sm">F</div>
                    <div className="w-7 h-7 rounded-lg border border-black/10 bg-white flex items-center justify-center text-[10px] font-bold text-foreground/60 shadow-sm">D</div>
                  </div>
                  <div className="absolute top-[20%] left-[15%] w-8 h-[2px] bg-foreground/15 rotate-45" />
                  <div className="absolute bottom-[20%] right-[15%] w-8 h-[2px] bg-foreground/15 rotate-45" />
                </div>

                <div className="flex justify-between items-center text-[9px] text-foreground/30 font-bold border-t border-black/5 pt-3">
                  <span>UX FLOW CHART</span>
                  <span>VERSION 2.1</span>
                </div>
              </div>

              {/* LAYER 2: Component Layout Grid (Middle layer - z-depth 50) */}
              <div
                className="mockup-layer absolute inset-0 rounded-[2.5rem] p-6 flex flex-col justify-between border border-black/8"
                style={{
                  background: "rgba(255, 255, 255, 0.42)",
                  backdropFilter: "blur(14px)",
                  transform: "translateZ(50px)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.03)",
                }}
              >
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-foreground/45 font-bold mb-3">02. Responsive Grid</p>
                </div>

                {/* Wireframe grids */}
                <div className="flex-1 flex flex-col gap-3 justify-center">
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-7 rounded-lg border border-black/10 bg-black/5 flex items-center justify-center" />
                    <div className="h-7 rounded-lg border border-black/10 bg-black/5 flex items-center justify-center" />
                    <div className="h-7 rounded-lg border border-black/10 bg-black/5 flex items-center justify-center" />
                  </div>
                  <div className="h-10 rounded-lg border border-black/10 bg-black/5 flex items-center justify-center" />
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-8 rounded-lg border border-black/10 bg-black/5 flex items-center justify-center" />
                    <div className="h-8 rounded-lg border border-black/10 bg-black/5 flex items-center justify-center" />
                  </div>
                </div>

                <div className="flex justify-between items-center text-[9px] text-foreground/40 font-bold border-t border-black/5 pt-3">
                  <span>FLEX GRID SYSTEM</span>
                  <span>ALIGN-ITEMS: STRETCH</span>
                </div>
              </div>

              {/* LAYER 3: Finished Frosted High-Fidelity UI Card (Top layer - z-depth 75) */}
              <div
                className="mockup-layer absolute inset-0 rounded-[2.5rem] overflow-hidden border border-black/12"
                style={{
                  background: "rgba(255, 255, 255, 0.65)",
                  backdropFilter: "blur(24px) saturate(180%)",
                  transform: "translateZ(75px)",
                  boxShadow: "0 16px 40px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)",
                }}
              >
                <div className="absolute inset-5 rounded-[1.5rem] overflow-hidden border border-black/5 bg-black/5">
                  <Image
                    src="/assets/ux_3d_mockup.png"
                    alt="Dilshan Madhuranga — UX Engineering 3D Mockup Visual"
                    fill
                    className="object-cover filter grayscale contrast-[1.12] brightness-[1.03]"
                    quality={95}
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <button
        onClick={() => scrollToSection("#about")}
        aria-label="Scroll to About section"
        className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/45 hover:text-foreground/75 transition-colors duration-300 group"
      >
        <span className="text-[10px] font-bold tracking-widest uppercase">Scroll</span>
        <ArrowDown size={15} className="animate-bounce group-hover:text-foreground/75" />
      </button>
    </section>
  );
}
