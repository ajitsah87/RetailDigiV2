"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./D2CBanner.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function D2CBanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 100, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.8,
          delay: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.banner}>
      <div className={styles.bannerContent}>
        <div className={styles.bannerLabel}>RetailDigi • Direct Growth Engine</div>
        <h2 ref={titleRef} className={styles.bannerTitle}>
          D2C Brand
          <span className={styles.orange}>Marketing</span>
        </h2>
        <div ref={lineRef} className={styles.bannerLine}></div>
      </div>
    </section>
  );
}
