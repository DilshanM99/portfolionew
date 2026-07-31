"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#tech-stack", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  // Track scroll to apply glass effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile menu GSAP open/close
  useEffect(() => {
    const menu = mobileMenuRef.current;
    if (!menu) return;

    if (mobileOpen) {
      gsap.set(menu, { display: "flex" });
      gsap.fromTo(
        menu,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.35, ease: "power3.out" }
      );
    } else {
      gsap.to(menu, {
        opacity: 0,
        y: -10,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => gsap.set(menu, { display: "none" }),
      });
    }
  }, [mobileOpen]);

  useEffect(() => {
    if (mobileOpen) setMobileOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrolled]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const top =
        target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        ref={headerRef}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "header-blurred py-3"
            : "bg-transparent py-5"
        )}
        role="banner"
      >
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            aria-label="Dilshan Madhuranga — Home"
            className="flex items-center gap-3 group"
          >
            <div className="btn-glossy w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold tracking-tight transition-all duration-300 group-hover:scale-105">
              DM
            </div>
            <span className="hidden sm:block text-sm font-bold text-foreground/80 group-hover:text-foreground transition-colors duration-200">
              Dilshan Madhuranga
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Main navigation"
            className="hidden lg:flex items-center gap-1"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative px-4 py-2 text-sm font-semibold text-foreground/65 hover:text-foreground transition-colors duration-200 rounded-lg hover:bg-black/5 group"
              >
                {link.label}
                <span className="absolute bottom-1 left-4 right-4 h-px bg-foreground/0 group-hover:bg-foreground/20 transition-all duration-300 scale-x-0 group-hover:scale-x-100 origin-left" />
              </a>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="hidden sm:inline-flex btn-glossy items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Hire Me
            </a>
            <button
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center text-foreground/75 hover:text-foreground hover:bg-black/5 transition-all duration-200 border border-black/10"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay dropdown */}
      <div
        ref={mobileMenuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        style={{ display: "none" }}
        className="fixed top-[74px] left-6 right-6 z-40 flex flex-col rounded-3xl border border-black/10 bg-white shadow-2xl lg:hidden"
      >
        <nav className="flex flex-col gap-1 p-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="mobile-nav-item flex items-center gap-3 px-4 py-3.5 rounded-2xl text-base font-bold text-foreground/70 hover:text-foreground hover:bg-black/5 transition-all duration-200 border border-black/0 hover:border-black/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="mobile-nav-item mt-3 btn-glossy flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl text-sm font-bold transition-all duration-300"
          >
            Let&apos;s Work Together
          </a>
        </nav>
      </div>
    </>
  );
}
