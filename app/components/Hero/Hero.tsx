"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        imageRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.4)" }
      )
        .fromTo(
          titleRef.current,
          { y: 80, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          "-=0.5"
        )
        .fromTo(
          taglineRef.current,
          { y: 40, opacity: 0, scaleX: 0.6 },
          { y: 0, opacity: 1, scaleX: 1, duration: 0.7 },
          "-=0.3"
        );

      // Floating icons
      iconsRef.current.forEach((icon, i) => {
        if (icon) {
          gsap.fromTo(
            icon,
            { scale: 0, opacity: 0, rotation: -30 },
            {
              scale: 1,
              opacity: 1,
              rotation: 0,
              duration: 0.6,
              delay: 0.8 + i * 0.15,
              ease: "back.out(1.7)",
            }
          );

          // Continuous float
          gsap.to(icon, {
            y: -12 + Math.random() * 8,
            duration: 2.5 + Math.random() * 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: i * 0.3,
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.hero} id="home">
      <div className={styles.heroContainer}>
        {/* Left Content */}
        <div className={styles.heroContent}>
          <div className={styles.decorArrows}>{">>>"}</div>
          <div className={styles.dotGrid}>
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className={styles.dot} />
            ))}
          </div>

          <h1 ref={titleRef} className={styles.heroTitle}>
            Building
            <br />
            category-
            <br />
            leading
            <br />
            brands.
          </h1>

          <div ref={taglineRef} className={styles.heroTagline}>
            Content, Ads &amp; Optimisation
          </div>

          <div className={styles.dotGridBottom}>
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className={styles.dot} />
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className={styles.heroImageWrapper}>
          <div ref={imageRef} className={styles.heroCircle}>
            <Image
              src="/images/hero-woman.png"
              alt="RetailDigi - Building category-leading brands"
              fill
              className={styles.heroImage}
              priority
              sizes="(max-width: 768px) 280px, (max-width: 1024px) 340px, 520px"
            />
          </div>

          {/* Floating Platform Icons */}
          <div
            ref={(el) => { if (el) iconsRef.current[0] = el; }}
            className={`${styles.floatingIcon} ${styles.iconAmazon}`}
          >
            <span style={{ fontFamily: "serif", fontStyle: "italic" }}>a</span>
          </div>

          <div
            ref={(el) => { if (el) iconsRef.current[1] = el; }}
            className={`${styles.floatingIcon} ${styles.iconMeta}`}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </div>

          <div
            ref={(el) => { if (el) iconsRef.current[2] = el; }}
            className={`${styles.floatingIcon} ${styles.iconTiktok}`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.73a8.19 8.19 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.16z" />
            </svg>
          </div>

          <div
            ref={(el) => { if (el) iconsRef.current[3] = el; }}
            className={`${styles.floatingIcon} ${styles.iconCube}`}
          >
            <div className={styles.cubeShape}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
