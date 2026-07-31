"use client";

import { useEffect, useRef, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface UseGSAPRevealOptions {
  /** CSS selector for children to animate. Defaults to ".reveal-item" */
  selector?: string;
  /** Stagger delay between each child (seconds). Defaults to 0.12 */
  stagger?: number;
  /** Y offset to animate from. Defaults to 40 */
  yOffset?: number;
  /** Delay before animation starts (seconds). Defaults to 0 */
  delay?: number;
  /** ScrollTrigger start position. Defaults to "top 85%" */
  start?: string;
  /** Duration of each tween. Defaults to 0.8 */
  duration?: number;
}

/**
 * Reusable GSAP scroll-reveal hook.
 * Animates children matching `selector` from opacity:0, y:yOffset → opacity:1, y:0
 * with a stagger, triggered by ScrollTrigger on the container.
 */
export function useGSAPReveal<T extends HTMLElement>(
  containerRef: RefObject<T | null>,
  options: UseGSAPRevealOptions = {}
) {
  const {
    selector = ".reveal-item",
    stagger = 0.12,
    yOffset = 40,
    delay = 0,
    start = "top 85%",
    duration = 0.8,
  } = options;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const elements = container.querySelectorAll(selector);
      if (!elements.length) return;

      gsap.fromTo(
        elements,
        { opacity: 0, y: yOffset },
        {
          opacity: 1,
          y: 0,
          duration,
          stagger,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start,
            once: true,
          },
        }
      );
    }, container);

    return () => ctx.revert();
  }, [containerRef, selector, stagger, yOffset, delay, start, duration]);
}

/**
 * Reusable GSAP card hover handlers — call in onMouseEnter / onMouseLeave
 * Returns { onMouseEnter, onMouseLeave } for spreading onto a card element.
 */
export function useGSAPCardHover() {
  return {
    onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
      gsap.to(e.currentTarget, {
        y: -6,
        scale: 1.01,
        duration: 0.35,
        ease: "power2.out",
      });
    },
    onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
      gsap.to(e.currentTarget, {
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: "power2.inOut",
      });
    },
  };
}

/**
 * Number count-up animation hook.
 * Reads [data-count] and [data-suffix] attributes from elements inside containerRef.
 * Animates from 0 to the target value when the element scrolls into view.
 *
 * Usage:
 *   <span data-count="80" data-suffix="+">0+</span>
 */
export function useCountUp<T extends HTMLElement>(
  containerRef: RefObject<T | null>,
  options: { duration?: number; start?: string } = {}
) {
  const { duration = 2.0, start = "top 85%" } = options;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const counters = container.querySelectorAll("[data-count]");
      if (!counters.length) return;

      counters.forEach((el) => {
        const target = parseFloat(el.getAttribute("data-count") || "0");
        const suffix = el.getAttribute("data-suffix") || "";
        const isInt = Number.isInteger(target);
        const obj = { val: 0 };

        gsap.to(obj, {
          val: target,
          duration,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start,
            once: true,
          },
          onUpdate() {
            el.textContent = (isInt ? Math.round(obj.val) : obj.val.toFixed(1)) + suffix;
          },
          onComplete() {
            el.textContent = target + suffix;
          },
        });
      });
    }, container);

    return () => ctx.revert();
  }, [containerRef, duration, start]);
}
