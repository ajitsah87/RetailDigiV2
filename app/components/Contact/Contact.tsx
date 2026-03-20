"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Contact.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Pulse animation on CTA button
      if (btnRef.current) {
        gsap.to(btnRef.current, {
          scale: 1.04,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.contact} id="contact">
      <div ref={contentRef} className={styles.contactContainer}>
        <div className={styles.contactLabel}>Let&apos;s Connect</div>
        <h2 className={styles.contactTitle}>
          Ready to Scale Your Brand?
        </h2>
        <p className={styles.contactDescription}>
          Let&apos;s discuss how RetailDigi can help your brand dominate its
          category. Reach out to us today.
        </p>

        <a
          ref={btnRef}
          href="mailto:hello@retaildigi.com"
          className={styles.contactEmail}
        >
          ✉️ hello@retaildigi.com
        </a>

        <div className={styles.contactSecondary}>
          <div className={styles.contactInfoItem}>
            <div className={styles.contactInfoIcon}>📱</div>
            <div className={styles.contactInfoLabel}>Phone</div>
            <div className={styles.contactInfoValue}>+91-XXXXX-XXXXX</div>
          </div>
          <div className={styles.contactInfoItem}>
            <div className={styles.contactInfoIcon}>📍</div>
            <div className={styles.contactInfoLabel}>Location</div>
            <div className={styles.contactInfoValue}>India</div>
          </div>
          <div className={styles.contactInfoItem}>
            <div className={styles.contactInfoIcon}>🌐</div>
            <div className={styles.contactInfoLabel}>Website</div>
            <div className={styles.contactInfoValue}>retaildigi.com</div>
          </div>
        </div>
      </div>
    </section>
  );
}
